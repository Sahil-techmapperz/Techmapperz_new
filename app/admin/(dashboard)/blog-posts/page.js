'use client'

import { useState, useEffect, useRef } from 'react'
import DataTable from '@/app/admin/_components/DataTable'
import Form from '@/app/admin/_components/Form'
import Modal from '@/app/admin/_components/Modal'
import { Plus } from 'lucide-react'
import { blogPostsApi } from '@/app/admin/_utils/api'
import CreateBlogPostForm from './CreateBlogPostForm'

export default function BlogPostsPage() {
  const [posts, setPosts] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingPost, setEditingPost] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalBlogPosts, setTotalBlogPosts] = useState(0)
  const [selectedImage, setSelectedImage] = useState(null)
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [authors, setAuthors] = useState([])
  const perPage = 10 // Number of posts per page

  const handleImageClick = (imageUrl) => {

    if (!imageUrl) {
      console.error('No image URL provided');
      return;
    }
    setSelectedImage(imageUrl);
    setIsImageModalOpen(true);
  }

  const columns = [
    { key: 'title', label: 'Title' },
    {
      key: 'author',
      label: 'Author',
      render: (author) => {
        return author?.name || 'Unknown Author';
      }
    },
    { key: 'category', label: 'Category' },
    { key: 'created_at', label: 'Created At' },
    { key: 'comments.length', label: 'Comments' },
    {
      key: 'images',
      label: 'Images',
      render: (images) => {

        return (
          <div className="flex gap-2">
            {Array.isArray(images) && images.map((image, index) => {

              return (
                <div key={index} className="relative group cursor-pointer" onClick={() => handleImageClick(image)}>
                  <img
                    src={image}
                    alt={`Blog image ${index + 1}`}
                    className="w-12 h-12 object-cover rounded"
                    onError={(e) => {
                      console.error('Image load error:', image);
                      e.target.src = '/placeholder-image.png';
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity rounded flex items-center justify-center">
                    <span className="text-white text-xs opacity-0 group-hover:opacity-100">Click to view</span>
                  </div>
                </div>
              );
            })}
          </div>
        );
      }
    },
  ]

  useEffect(() => {
    fetchPosts()
  }, [currentPage])

  const fetchPosts = async () => {
    try {
      setIsLoading(true)
      const response = await blogPostsApi.getAll(currentPage, perPage)
      //   console.log('API Response:', response.data); // Debug log
      //   console.log('Blog Posts:', response.data.blogPosts); // Debug log

      // Ensure images are properly formatted
      const formattedPosts = response.data.blogPosts.map(post => ({
        ...post,
        images: Array.isArray(post.images) ? post.images : []
      }));

      setPosts(formattedPosts)
      setTotalPages(response.data.totalPages)
      setTotalBlogPosts(response.data.totalBlogPosts)
      setError(null)
    } catch (err) {
      setError('Failed to fetch blog posts')
      console.error('Error fetching blog posts:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const handleEdit = (post) => {
    console.log('Editing post:', post)

    const formattedPost = {
      _id: post._id,
      featuredImage: post.images?.[0] || null,
      title: post.title || '',
      maincontent: post.maincontent || post.content || '',
      excerpt: post.description || post.content?.slice(0, 160) || '',
      category: post.category || '',
      images: post.images || [],
      selectedAuthor: post.author?._id || '',
      author: post.author || null,
      tags: post.tags || []
    }

    setEditingPost(formattedPost)
    setIsModalOpen(true)
  }

  const handleDelete = async (post) => {
    if (!window.confirm('Are you sure you want to delete this blog post?')) {
      return
    }

    try {
      await blogPostsApi.delete(post._id)
      setPosts(posts.filter(p => p._id !== post._id))
    } catch (err) {
      console.error('Error deleting blog post:', err)
      alert('Failed to delete blog post')
    }
  }

  const fetchAuthors = async () => {
    try {
      const response = await fetch('/api/author')
      const data = await response.json()
      setAuthors(data)
    } catch (err) {
      console.error('Error fetching authors:', err)
    }
  }

  useEffect(() => {
    fetchAuthors()
  }, [])

  const createBlogPost = async () => {
    try {
      setIsModalOpen(false);
      setEditingPost(null);
      await fetchPosts(); // Refresh the blog posts list
    } catch (err) {
      console.error('Error refreshing blog posts:', err);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-red-600">{error}</div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-black">Blog Posts</h1>
          <p className="text-gray-600 mt-1">
            Showing {((currentPage - 1) * perPage) + 1} to {Math.min(currentPage * perPage, totalBlogPosts)} of {totalBlogPosts} posts
          </p>
        </div>
        <button
          onClick={() => {
            setEditingPost(null)
            setIsModalOpen(true)
          }}
          className="inline-flex items-center gap-2 bg-[#1656B8] hover:bg-[#0C2E60] text-white px-5 py-2.5 rounded-xl font-bold text-[14px] shadow-sm hover:shadow-md transition-all min-h-[44px]"
        >
          <Plus className="h-5 w-5" />
          Add New Post
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <DataTable
          columns={columns}
          data={posts}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        {/* Pagination */}
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg ${currentPage === 1
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded-lg ${currentPage === page
                ? 'bg-indigo-700 text-white'
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg ${currentPage === totalPages
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
          >
            Next
          </button>
        </div>
      </div>

      {/* Image Preview Modal */}
      <Modal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        title="Image Preview"
        size="xl"
      >
        <div className="relative w-full">
          <img
            src={selectedImage}
            alt="Preview"
            className="w-full h-auto rounded-lg"
            onError={(e) => {
              console.error('Preview image load error:', e);
              e.target.src = '/placeholder.png';
            }}
          />
        </div>
      </Modal>

      {/* Blog Post Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setEditingPost(null)
        }}
        title={editingPost ? 'Edit Blog Post' : 'Add New Blog Post'}
        fullPage={true}
      >
        <div className="max-w-full mx-auto p-2 sm:p-4">
          <CreateBlogPostForm 
            key={editingPost?._id || 'create-new'}
            onSubmit={(savedPost) => {
              setIsModalOpen(false)
              setEditingPost(null)
              fetchPosts()
            }}
            initialData={editingPost}
            isEdit={Boolean(editingPost)}
          />
        </div>
      </Modal>
    </div>
  )
}






