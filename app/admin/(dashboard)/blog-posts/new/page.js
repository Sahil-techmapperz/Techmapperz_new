'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import CreateBlogPostForm from '../CreateBlogPostForm'
import { FiArrowLeft, FiFileText } from 'react-icons/fi'

export default function NewBlogPostPage() {
  const router = useRouter()

  const handleCreated = (post) => {
    // Navigate back to the blog posts list after creation
    setTimeout(() => {
      router.push('/admin/blog-posts')
    }, 1500)
  }

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      {/* Breadcrumbs & Back Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/blog-posts"
            className="p-2 bg-white hover:bg-gray-50 text-[#0C2E60] rounded-xl border border-[#DDE3EA] shadow-xs transition-colors flex items-center justify-center"
            title="Back to Blog Posts"
          >
            <FiArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <nav className="text-[12px] text-[#4B5563] flex items-center gap-1.5">
              <Link href="/admin/dashboard" className="hover:text-[#1656B8]">Dashboard</Link>
              <span>/</span>
              <Link href="/admin/blog-posts" className="hover:text-[#1656B8]">Blog Posts</Link>
              <span>/</span>
              <span className="text-[#0F766E] font-semibold">New Article</span>
            </nav>
            <h1 className="text-2xl font-bold text-[#0C2E60] leading-tight">
              Create New Blog Post
            </h1>
          </div>
        </div>
      </div>

      {/* Main Studio Container */}
      <div className="bg-white rounded-2xl border border-[#DDE3EA] p-6 sm:p-8 shadow-sm">
        <CreateBlogPostForm onSubmit={handleCreated} />
      </div>
    </div>
  )
}
