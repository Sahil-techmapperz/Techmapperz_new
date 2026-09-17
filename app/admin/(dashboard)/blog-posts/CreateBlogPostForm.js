'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import dynamic from 'next/dynamic'

const BlockEditor = dynamic(
  () => import('@/app/admin/_components/BlockEditor/BlockEditor'),
  { 
    ssr: false,
    loading: () => (
      <div className="min-h-[460px] bg-slate-50 border border-slate-200 rounded-xl p-8 flex flex-col justify-center items-center text-slate-400 gap-3">
        <div className="w-8 h-8 border-3 border-[#0F766E] border-t-transparent rounded-full animate-spin" />
        <span className="text-sm font-medium text-slate-500">Initializing Block Editor...</span>
      </div>
    )
  }
)
import { 
  FiUploadCloud, 
  FiImage, 
  FiCheck, 
  FiX, 
  FiEye, 
  FiLock, 
  FiUser, 
  FiTag, 
  FiCalendar, 
  FiSave, 
  FiClock, 
  FiFileText, 
  FiShare2, 
  FiSearch, 
  FiAlertCircle, 
  FiRefreshCw, 
  FiExternalLink, 
  FiTrash2,
  FiCheckCircle,
  FiLink,
  FiChevronDown,
  FiChevronUp,
  FiZap,
  FiGlobe
} from 'react-icons/fi'

// Popular categories for quick selection
const POPULAR_CATEGORIES = [
  'GIS & Mapping',
  'Drone Surveying',
  'LiDAR Processing',
  'Web Development',
  'Software Solutions',
  'Remote Sensing',
  'AI & Automation'
]

// Image upload handler for the block editor
const handleImageUpload = async (file) => {
  const formData = new FormData()
  formData.append('image', file)

  try {
    const response = await fetch('/api/admin-upload/upload', {
      method: 'POST',
      body: formData
    })

    if (response.ok) {
      const data = await response.json()
      return data.url || data.location
    }
  } catch (error) {
    console.error('Image upload failed:', error)
  }
  return null
}

// Helper to ensure maincontent is always treated as string safely
const getMainContentString = (val) => {
  if (typeof val === 'string') return val
  if (val && typeof val === 'object') {
    if (val.target && typeof val.target.value === 'string') return val.target.value
    if (typeof val.value === 'string') return val.value
    if (typeof val.content === 'string') return val.content
    if (typeof val.html === 'string') return val.html
  }
  return ''
}

const LOCAL_STORAGE_KEY = 'techmapperz_blog_draft_v3'

export default function CreateBlogPostForm({ onSubmit, initialData = null, isEdit = false }) {
  // Form Data State
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    slug: '',
    category: initialData?.category || '',
    selectedAuthor: initialData?.author?._id || initialData?.selectedAuthor || '',
    featuredImage: initialData?.featuredImage || initialData?.images?.[0] || '',
    featuredImageAlt: '',
    excerpt: initialData?.description || (typeof initialData?.content === 'string' ? initialData.content.slice(0, 160) : ''),
    maincontent: getMainContentString(initialData?.maincontent || initialData?.content || ''),
    tags: Array.isArray(initialData?.tags) ? initialData.tags : [],
    publishMode: 'admin', // 'admin' | 'author_verify'
    publishDate: new Date().toISOString().split('T')[0]
  })

  // Tag input temporary state
  const [tagInput, setTagInput] = useState('')

  // Authors State
  const [authors, setAuthors] = useState([])
  const [isLoadingAuthors, setIsLoadingAuthors] = useState(true)

  // Upload States
  const [imageInputMode, setImageInputMode] = useState(() => {
    const existingImg = initialData?.featuredImage || initialData?.images?.[0] || ''
    if (existingImg && !existingImg.includes('ik.imagekit.io') && (existingImg.startsWith('http://') || existingImg.startsWith('https://'))) {
      return 'url'
    }
    return 'upload'
  })
  const [isUploadingImage, setIsUploadingImage] = useState(false)
  const [imageUploadError, setImageUploadError] = useState('')

  // UI / Modals
  const [isCredentialModalOpen, setIsCredentialModalOpen] = useState(false)
  const [credentialForm, setCredentialForm] = useState({ email: '', password: '' })
  const [isVerifying, setIsVerifying] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [previewDevice, setPreviewDevice] = useState('desktop') // 'desktop' | 'mobile'

  const [seoAccordionOpen, setSeoAccordionOpen] = useState(true)

  // Notification State
  const [notification, setNotification] = useState(null) // { type: 'success' | 'error' | 'info', message: '' }

  // Draft Autosave state
  const [hasRestoredDraft, setHasRestoredDraft] = useState(false)
  const [draftSavedAt, setDraftSavedAt] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Track slug auto-generation
  const [isSlugManual, setIsSlugManual] = useState(false)

  // Generate slug from title
  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '')
  }

  // Update slug when title changes unless manually edited
  useEffect(() => {
    if (!isSlugManual && formData.title) {
      setFormData(prev => ({ ...prev, slug: generateSlug(prev.title) }))
    }
  }, [formData.title, isSlugManual])

  // Fetch Authors on Mount
  useEffect(() => {
    fetchAuthors()
  }, [])

  const fetchAuthors = async () => {
    try {
      setIsLoadingAuthors(true)
      const response = await fetch('/api/author')
      if (!response.ok) throw new Error('Failed to fetch authors')
      const data = await response.json()
      setAuthors(Array.isArray(data) ? data : [])
      
      // Auto-select first author if none selected and not editing
      if (!isEdit && data.length > 0 && !formData.selectedAuthor) {
        setFormData(prev => ({ ...prev, selectedAuthor: data[0]._id }))
      }
    } catch (err) {
      console.error('Error fetching authors:', err)
      showNotification('error', 'Could not load authors list')
    } finally {
      setIsLoadingAuthors(false)
    }
  }

  // Check for local storage draft on initial mount (only in create mode)
  useEffect(() => {
    if (isEdit) return
    try {
      const savedDraft = localStorage.getItem(LOCAL_STORAGE_KEY)
      if (savedDraft) {
        const parsed = JSON.parse(savedDraft)
        if (parsed && (parsed.title || parsed.maincontent || parsed.featuredImage)) {
          setHasRestoredDraft(true)
        }
      }
    } catch (e) {
      console.error('Failed to read draft from localStorage', e)
    }
  }, [isEdit])

  // Autosave draft to local storage every 4 seconds if changed
  useEffect(() => {
    if (isEdit) return
    const timer = setTimeout(() => {
      const contentStr = getMainContentString(formData.maincontent)
      if (formData.title || contentStr || formData.featuredImage) {
        try {
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({
            ...formData,
            maincontent: contentStr,
            savedAt: new Date().toISOString()
          }))
          setDraftSavedAt(new Date())
        } catch (e) {
          console.error('Autosave failed:', e)
        }
      }
    }, 1500)

    return () => clearTimeout(timer)
  }, [formData, isEdit])

  const restoreDraft = () => {
    try {
      const savedDraft = localStorage.getItem(LOCAL_STORAGE_KEY)
      if (savedDraft) {
        const parsed = JSON.parse(savedDraft)
        setFormData(prev => ({
          ...prev,
          title: parsed.title || prev.title,
          slug: parsed.slug || prev.slug,
          category: parsed.category || prev.category,
          selectedAuthor: parsed.selectedAuthor || prev.selectedAuthor,
          featuredImage: parsed.featuredImage || prev.featuredImage,
          featuredImageAlt: parsed.featuredImageAlt || prev.featuredImageAlt,
          excerpt: parsed.excerpt || prev.excerpt,
          maincontent: getMainContentString(parsed.maincontent) || prev.maincontent,
          tags: Array.isArray(parsed.tags) ? parsed.tags : prev.tags
        }))
        showNotification('success', 'Draft restored successfully!')
        setHasRestoredDraft(false)
      }
    } catch (e) {
      showNotification('error', 'Failed to restore draft')
    }
  }

  const discardDraft = () => {
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEY)
      setHasRestoredDraft(false)
      showNotification('info', 'Saved draft discarded')
    } catch (e) {
      console.error(e)
    }
  }

  const showNotification = (type, message) => {
    setNotification({ type, message })
    setTimeout(() => {
      setNotification(null)
    }, 4000)
  }

  // Calculate Reading Time and Word Count
  const stats = useMemo(() => {
    const contentStr = getMainContentString(formData?.maincontent)
    const textOnly = (typeof contentStr === 'string' ? contentStr : '').replace(/<[^>]*>?/gm, ' ')
    const words = textOnly.trim().split(/\s+/).filter(Boolean)
    const wordCount = words.length
    const readingTime = Math.max(1, Math.ceil(wordCount / 200))
    const charCount = textOnly.length
    return { wordCount, readingTime, charCount }
  }, [formData?.maincontent])

  // Selected Author Object
  const selectedAuthorObj = useMemo(() => {
    return authors.find(a => a._id === formData.selectedAuthor) || null
  }, [authors, formData.selectedAuthor])

  // Handle Featured Image File Upload
  const handleImageFileChange = async (file) => {
    if (!file) return

    // Validate size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      setImageUploadError('Image size exceeds 5MB limit. Please upload a smaller image.')
      return
    }

    // Validate type
    if (!file.type.startsWith('image/')) {
      setImageUploadError('Please select a valid image file (PNG, JPG, WebP, GIF)')
      return
    }

    setImageUploadError('')
    setIsUploadingImage(true)

    try {
      const formDataUpload = new FormData()
      formDataUpload.append('image', file)

      const res = await fetch('/api/admin-upload/upload', {
        method: 'POST',
        body: formDataUpload
      })

      if (!res.ok) {
        throw new Error('Upload failed with status: ' + res.status)
      }

      const data = await res.json()
      const url = data.url || data.location
      if (url) {
        setFormData(prev => ({ ...prev, featuredImage: url }))
        showNotification('success', 'Featured image uploaded successfully!')
      } else {
        throw new Error(data.error || 'No image URL returned from server')
      }
    } catch (err) {
      console.error('Featured image upload error:', err)
      setImageUploadError(err.message || 'Image upload failed. You can paste a direct URL below.')
      showNotification('error', 'Failed to upload image')
    } finally {
      setIsUploadingImage(false)
    }
  }

  // Tag Handlers
  const handleAddTag = (tagToAdd) => {
    const cleaned = tagToAdd.trim().replace(/^#/, '')
    if (cleaned && !formData.tags.includes(cleaned)) {
      setFormData(prev => ({ ...prev, tags: [...prev.tags, cleaned] }))
    }
    setTagInput('')
  }

  const handleRemoveTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(t => t !== tagToRemove)
    }))
  }

  // Content change handler ensuring maincontent is always stored as string
  const handleContentChange = (eOrContent) => {
    const contentStr = getMainContentString(eOrContent)
    setFormData(prev => ({ ...prev, maincontent: contentStr }))
  }

  // Auto-generate excerpt from maincontent
  const handleAutoExcerpt = () => {
    const contentStr = getMainContentString(formData.maincontent)
    const plain = contentStr.replace(/<[^>]*>?/gm, ' ').trim()
    if (!plain) {
      showNotification('info', 'Please write some main content first to generate an excerpt.')
      return
    }
    const snippet = plain.slice(0, 160).trim() + (plain.length > 160 ? '...' : '')
    setFormData(prev => ({ ...prev, excerpt: snippet }))
    showNotification('success', 'Excerpt auto-generated from content!')
  }

  // Pre-Flight Checklist calculations
  const checklist = useMemo(() => {
    return [
      {
        id: 'image',
        label: 'Featured image uploaded',
        done: Boolean(formData.featuredImage),
        required: true
      },
      {
        id: 'title',
        label: 'Post title (min 10 characters)',
        done: (formData.title || '').trim().length >= 10,
        required: true
      },
      {
        id: 'category',
        label: 'Category chosen',
        done: Boolean((formData.category || '').trim()),
        required: true
      },
      {
        id: 'author',
        label: 'Author selected',
        done: Boolean(formData.selectedAuthor),
        required: true
      },
      {
        id: 'content',
        label: 'Substantial content (min 50 words)',
        done: stats.wordCount >= 50,
        required: true
      },
      {
        id: 'excerpt',
        label: 'Short summary / excerpt',
        done: Boolean((formData.excerpt || '').trim()),
        required: false
      }
    ]
  }, [formData, stats.wordCount])

  const isFormValid = checklist.filter(c => c.required).every(c => c.done)

  // Primary Submission Trigger
  const handleFormSubmit = async (e) => {
    e?.preventDefault()

    // Validate required fields
    const missing = []
    const contentStr = getMainContentString(formData.maincontent)
    if (!formData.featuredImage) missing.push('Featured Image')
    if (!formData.title?.trim()) missing.push('Post Title')
    if (!formData.category?.trim()) missing.push('Category')
    if (!formData.selectedAuthor) missing.push('Author')
    if (!contentStr.trim() || stats.wordCount < 10) missing.push('Main Content (at least 10 words)')

    if (missing.length > 0) {
      showNotification('error', `Please complete required items: ${missing.join(', ')}`)
      return
    }

    // Check author verification preference
    if (formData.publishMode === 'author_verify') {
      setIsCredentialModalOpen(true)
      return
    }

    // Direct publish / update
    await executePublish(formData.selectedAuthor)
  }

  // Author Verification flow
  const handleCredentialVerification = async (e) => {
    e.preventDefault()
    setIsVerifying(true)

    try {
      const response = await fetch('/api/author/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentialForm)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Invalid credentials')
      }

      if (data.author._id !== formData.selectedAuthor) {
        throw new Error('These credentials belong to a different author than selected')
      }

      setIsCredentialModalOpen(false)
      setCredentialForm({ email: '', password: '' })
      await executePublish(data.author._id)
    } catch (error) {
      showNotification('error', error.message || 'Author verification failed')
    } finally {
      setIsVerifying(false)
    }
  }

  // Final Publish / Save execution
  const executePublish = async (authorId) => {
    setIsSubmitting(true)
    const contentStr = getMainContentString(formData.maincontent)
    const postPayload = {
      title: formData.title.trim(),
      slug: formData.slug.trim(),
      category: formData.category.trim(),
      author: authorId,
      images: [formData.featuredImage?.trim()].filter(Boolean),
      maincontent: contentStr,
      content: formData.excerpt?.trim() || contentStr.replace(/<[^>]*>?/gm, '').slice(0, 200),
      description: formData.excerpt?.trim() || contentStr.replace(/<[^>]*>?/gm, '').slice(0, 160),
      tags: formData.tags
    }

    try {
      if (isEdit && initialData?._id) {
        // Edit flow
        const response = await fetch(`/api/newblogpost/${initialData._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(postPayload)
        })

        if (!response.ok) {
          const errData = await response.json()
          throw new Error(errData.error || 'Failed to update post')
        }

        const data = await response.json()
        showNotification('success', 'Blog post updated successfully!')
        if (onSubmit) onSubmit(data)
      } else {
        // Create flow
        const response = await fetch('/api/newblogpost', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(postPayload)
        })

        if (!response.ok) {
          const errData = await response.json()
          throw new Error(errData.error || 'Failed to create blog post')
        }

        const data = await response.json()
        // Clear local storage draft upon success
        localStorage.removeItem(LOCAL_STORAGE_KEY)
        showNotification('success', 'Blog post published successfully!')
        if (onSubmit) onSubmit(data)
      }
    } catch (error) {
      console.error('Publish error:', error)
      showNotification('error', error.message || 'Failed to publish blog post')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative font-sans text-[#17202A] pb-12">
      {/* Toast Notification Banner */}
      {notification && (
        <div className={`fixed top-5 right-5 z-[1000] max-w-md p-4 rounded-xl shadow-xl flex items-center gap-3 border transition-all duration-300 animate-in slide-in-from-top-4 ${
          notification.type === 'success' 
            ? 'bg-[#E8F5F3] text-[#0C2E60] border-[#0F766E]/40' 
            : notification.type === 'error'
            ? 'bg-red-50 text-[#D2292B] border-red-200'
            : 'bg-[#F6F8FB] text-[#0C2E60] border-[#DDE3EA]'
        }`}>
          {notification.type === 'success' ? (
            <FiCheckCircle className="w-5 h-5 text-[#0F766E] flex-shrink-0" />
          ) : notification.type === 'error' ? (
            <FiAlertCircle className="w-5 h-5 text-[#D2292B] flex-shrink-0" />
          ) : (
            <FiAlertCircle className="w-5 h-5 text-[#1656B8] flex-shrink-0" />
          )}
          <span className="text-[14px] font-medium leading-snug">{notification.message}</span>
          <button 
            onClick={() => setNotification(null)}
            className="ml-auto text-gray-400 hover:text-gray-700 p-1 rounded-md"
          >
            <FiX className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Restored Draft Prompt Banner */}
      {hasRestoredDraft && !isEdit && (
        <div className="mb-6 p-4 bg-[#E8F5F3] border border-[#0F766E]/30 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white border border-[#0F766E]/20 flex items-center justify-center text-[#0F766E]">
              <FiZap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[14px] font-bold text-[#0C2E60]">Unsaved Draft Found</p>
              <p className="text-[12px] text-[#4B5563]">You have an auto-saved draft from a previous session. Would you like to restore it?</p>
            </div>
          </div>
          <div className="flex items-center gap-2 self-end sm:self-center">
            <button
              type="button"
              onClick={restoreDraft}
              className="px-4 py-2 bg-[#1656B8] hover:bg-[#0C2E60] text-white text-[13px] font-bold rounded-lg transition-colors shadow-sm"
            >
              Restore Draft
            </button>
            <button
              type="button"
              onClick={discardDraft}
              className="px-3 py-2 bg-white hover:bg-gray-100 text-[#4B5563] text-[13px] font-medium rounded-lg border border-[#DDE3EA] transition-colors"
            >
              Discard
            </button>
          </div>
        </div>
      )}

      {/* Top Studio Control Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-[#DDE3EA] -mx-6 -mt-6 px-6 py-4 mb-8 flex flex-wrap items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-[#0F766E] text-[11px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 bg-[#E8F5F3] rounded-md border border-[#0F766E]/20">
            {isEdit ? 'Editorial Mode' : 'Content Studio'}
          </span>
          <h2 className="text-[18px] md:text-[20px] font-bold text-[#0C2E60]">
            {isEdit ? 'Edit Blog Post' : 'Add New Blog Post'}
          </h2>

          <div className="hidden sm:flex items-center gap-2 border-l border-[#DDE3EA] pl-3 text-[12px] text-[#4B5563]">
            <span className="flex items-center gap-1">
              <FiClock className="w-3.5 h-3.5 text-[#0F766E]" />
              {stats.readingTime} min read
            </span>
            <span>&bull;</span>
            <span>{stats.wordCount} words</span>
            {draftSavedAt && !isEdit && (
              <>
                <span>&bull;</span>
                <span className="text-emerald-700 flex items-center gap-1 font-medium">
                  <FiCheck className="w-3 h-3" /> Auto-saved
                </span>
              </>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          {/* Live Preview Button */}
          <button
            type="button"
            onClick={() => setIsPreviewOpen(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-[#F6F8FB] text-[#0C2E60] text-[13px] font-bold rounded-xl border border-[#DDE3EA] hover:border-[#0C2E60]/30 transition-all shadow-sm"
          >
            <FiEye className="w-4 h-4 text-[#1656B8]" />
            <span>Preview</span>
          </button>

          {/* Quick Draft Save Button */}
          {!isEdit && (
            <button
              type="button"
              onClick={() => {
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData))
                setDraftSavedAt(new Date())
                showNotification('success', 'Draft saved locally!')
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-[#F6F8FB] text-[#4B5563] text-[13px] font-semibold rounded-xl border border-[#DDE3EA] transition-all"
            >
              <FiSave className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Save Draft</span>
            </button>
          )}

          {/* Primary Action: Publish / Update Button */}
          <button
            type="button"
            onClick={handleFormSubmit}
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1656B8] hover:bg-[#0C2E60] disabled:opacity-60 disabled:cursor-not-allowed text-white text-[14px] font-bold rounded-xl shadow-md hover:shadow-lg transition-all min-h-[42px]"
          >
            {isSubmitting ? (
              <>
                <FiRefreshCw className="w-4 h-4 animate-spin" />
                <span>{isEdit ? 'Updating...' : 'Publishing...'}</span>
              </>
            ) : (
              <>
                <FiCheckCircle className="w-4 h-4" />
                <span>{isEdit ? 'Update Article' : 'Publish Article'}</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* Main 2-Column Studio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* â”€â”€ LEFT COLUMN: Content Creation (8 cols) â”€â”€ */}
        <div className="lg:col-span-8 space-y-6">

          {/* 1. Featured Image Section */}
          <div className="bg-white rounded-2xl border border-[#DDE3EA] p-6 shadow-sm hover:border-[#1656B8]/30 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <label className="text-[15px] font-bold text-[#0C2E60] flex items-center gap-2">
                <FiImage className="w-4 h-4 text-[#0F766E]" />
                Featured Header Image <span className="text-[#D2292B]">*</span>
              </label>

              {/* Toggle upload vs URL input */}
              <div className="flex items-center bg-[#F6F8FB] p-1 rounded-lg border border-[#DDE3EA] text-[12px]">
                <button
                  type="button"
                  onClick={() => setImageInputMode('upload')}
                  className={`px-3 py-1 rounded-md font-medium transition-all ${
                    imageInputMode === 'upload' 
                      ? 'bg-white text-[#1656B8] shadow-xs font-bold' 
                      : 'text-[#4B5563] hover:text-[#0C2E60]'
                  }`}
                >
                  Upload File
                </button>
                <button
                  type="button"
                  onClick={() => setImageInputMode('url')}
                  className={`px-3 py-1 rounded-md font-medium transition-all ${
                    imageInputMode === 'url' 
                      ? 'bg-white text-[#1656B8] shadow-xs font-bold' 
                      : 'text-[#4B5563] hover:text-[#0C2E60]'
                  }`}
                >
                  Image URL
                </button>
              </div>
            </div>

            {/* Toggle Content based on Mode */}
            {imageInputMode === 'url' ? (
              <div className="space-y-4">
                <div className="p-4 bg-[#F6F8FB] border border-[#DDE3EA] rounded-xl space-y-3">
                  <p className="text-[13px] text-[#4B5563]">
                    Paste a direct HTTPS URL to an existing image hosted on your server or CDN:
                  </p>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <FiLink className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="url"
                        placeholder="https://example.com/images/blog-banner.jpg"
                        value={formData.featuredImage}
                        onChange={(e) => setFormData(prev => ({ ...prev, featuredImage: e.target.value.trim() }))}
                        className="w-full pl-9 pr-3.5 py-2.5 text-[14px] rounded-lg border border-[#DDE3EA] focus:border-[#1656B8] focus:ring-1 focus:ring-[#1656B8] outline-none bg-white text-[#17202A]"
                      />
                    </div>
                    {formData.featuredImage && (
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, featuredImage: '' }))}
                        className="px-3.5 py-2 text-xs font-semibold text-[#D2292B] bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg transition-colors shrink-0"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                </div>

                {formData.featuredImage && (
                  <div className="space-y-3">
                    <div className="relative w-full h-[260px] sm:h-[340px] rounded-xl overflow-hidden border border-[#DDE3EA] group bg-slate-900">
                      <img
                        src={formData.featuredImage}
                        alt={formData.featuredImageAlt || 'Featured preview'}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                        onError={(e) => {
                          e.target.src = '/placeholder-image.png'
                        }}
                      />
                      
                      {/* Floating Action Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-[2px]">
                        <a
                          href={formData.featuredImage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-2 bg-white/90 hover:bg-white text-[#0C2E60] font-bold text-[12px] rounded-lg shadow-sm flex items-center gap-1.5 transition-all"
                        >
                          <FiExternalLink className="w-3.5 h-3.5" /> View Full
                        </a>
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, featuredImage: '' }))}
                          className="px-3.5 py-2 bg-[#D2292B] hover:bg-red-700 text-white font-bold text-[12px] rounded-lg shadow-sm flex items-center gap-1.5 transition-all"
                        >
                          <FiTrash2 className="w-3.5 h-3.5" /> Remove Image
                        </button>
                      </div>

                      <span className="absolute bottom-3 left-3 bg-black/60 backdrop-blur text-white text-[11px] px-2.5 py-1 rounded-md font-mono">
                        1200 x 630 (Hero Aspect)
                      </span>
                    </div>

                    {/* Alt Text Input */}
                    <div>
                      <label className="block text-[12px] font-semibold text-[#4B5563] mb-1">
                        Image Alt Description (SEO & Accessibility)
                      </label>
                      <input
                        type="text"
                        value={formData.featuredImageAlt}
                        onChange={(e) => setFormData(prev => ({ ...prev, featuredImageAlt: e.target.value }))}
                        placeholder="Descriptive explanation of the featured image for screen readers and search engines..."
                        className="w-full px-3.5 py-2 text-[13px] rounded-lg border border-[#DDE3EA] focus:border-[#1656B8] focus:ring-1 focus:ring-[#1656B8] outline-none"
                      />
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Upload Mode */
              formData.featuredImage ? (
                <div className="space-y-3">
                  <div className="relative w-full h-[260px] sm:h-[340px] rounded-xl overflow-hidden border border-[#DDE3EA] group bg-slate-900">
                    <img
                      src={formData.featuredImage}
                      alt={formData.featuredImageAlt || 'Featured preview'}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                      onError={(e) => {
                        e.target.src = '/placeholder-image.png'
                      }}
                    />
                    
                    {/* Floating Action Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-[2px]">
                      <a
                        href={formData.featuredImage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-2 bg-white/90 hover:bg-white text-[#0C2E60] font-bold text-[12px] rounded-lg shadow-sm flex items-center gap-1.5 transition-all"
                      >
                        <FiExternalLink className="w-3.5 h-3.5" /> View Full
                      </a>
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, featuredImage: '' }))}
                        className="px-3.5 py-2 bg-[#D2292B] hover:bg-red-700 text-white font-bold text-[12px] rounded-lg shadow-sm flex items-center gap-1.5 transition-all"
                      >
                        <FiTrash2 className="w-3.5 h-3.5" /> Remove Image
                      </button>
                    </div>

                    <span className="absolute bottom-3 left-3 bg-black/60 backdrop-blur text-white text-[11px] px-2.5 py-1 rounded-md font-mono">
                      1200 x 630 (Hero Aspect)
                    </span>
                  </div>

                  {/* Alt Text Input */}
                  <div>
                    <label className="block text-[12px] font-semibold text-[#4B5563] mb-1">
                      Image Alt Description (SEO & Accessibility)
                    </label>
                    <input
                      type="text"
                      value={formData.featuredImageAlt}
                      onChange={(e) => setFormData(prev => ({ ...prev, featuredImageAlt: e.target.value }))}
                      placeholder="Descriptive explanation of the featured image for screen readers and search engines..."
                      className="w-full px-3.5 py-2 text-[13px] rounded-lg border border-[#DDE3EA] focus:border-[#1656B8] focus:ring-1 focus:ring-[#1656B8] outline-none"
                    />
                  </div>
                </div>
              ) : (
                <label className={`flex flex-col items-center justify-center w-full h-[220px] border-2 border-dashed rounded-xl cursor-pointer transition-all ${
                  isUploadingImage 
                    ? 'border-[#1656B8] bg-[#E8F5F3]/30' 
                    : 'border-[#DDE3EA] hover:border-[#1656B8] hover:bg-[#F6F8FB]'
                }`}>
                  <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">
                    {isUploadingImage ? (
                      <div className="flex flex-col items-center">
                        <FiRefreshCw className="w-8 h-8 text-[#1656B8] animate-spin mb-3" />
                        <p className="text-[14px] font-bold text-[#0C2E60]">Uploading image to cloud storage...</p>
                        <p className="text-[12px] text-[#4B5563]">Optimizing for high-resolution web delivery</p>
                      </div>
                    ) : (
                      <>
                        <div className="w-12 h-12 mb-3 rounded-full bg-[#E8F5F3] flex items-center justify-center text-[#0F766E]">
                          <FiUploadCloud className="w-6 h-6" />
                        </div>
                        <p className="mb-1 text-[14px] text-[#17202A]">
                          <span className="font-bold text-[#1656B8]">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-[12px] text-[#4B5563] max-w-sm">
                          High resolution JPG, PNG, WebP or GIF (Recommended 1200 &times; 630px, max 5MB)
                        </p>
                      </>
                    )}
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    disabled={isUploadingImage}
                    onChange={(e) => handleImageFileChange(e.target.files?.[0])}
                  />
                </label>
              )
            )}

            {imageUploadError && (
              <p className="mt-2 text-[12px] text-[#D2292B] flex items-center gap-1.5">
                <FiAlertCircle className="w-4 h-4 flex-shrink-0" />
                {imageUploadError}
              </p>
            )}
          </div>

          {/* 2. Article Title & Slug Section */}
          <div className="bg-white rounded-2xl border border-[#DDE3EA] p-6 shadow-sm space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-[15px] font-bold text-[#0C2E60] flex items-center gap-1.5">
                  <FiFileText className="w-4 h-4 text-[#0F766E]" />
                  Post Title <span className="text-[#D2292B]">*</span>
                </label>
                <span className={`text-[12px] font-mono ${
                  formData.title.length >= 40 && formData.title.length <= 70 
                    ? 'text-[#0F766E] font-bold' 
                    : formData.title.length > 70 
                    ? 'text-amber-600' 
                    : 'text-gray-400'
                }`}>
                  {formData.title.length} / 70 chars {formData.title.length >= 40 && formData.title.length <= 70 ? '(Optimal)' : ''}
                </span>
              </div>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                placeholder="e.g., How Modern LiDAR Mapping Transforms Precision Agriculture in 2026"
                className="w-full px-4 py-3 text-[17px] font-semibold rounded-xl border border-[#DDE3EA] focus:border-[#1656B8] focus:ring-2 focus:ring-[#1656B8]/20 outline-none text-[#0C2E60] placeholder:text-gray-400 transition-all"
              />
            </div>

            {/* Permanent Link / Slug Preview */}
            <div className="p-3 bg-[#F6F8FB] rounded-xl border border-[#DDE3EA] flex flex-wrap items-center justify-between gap-2 text-[12px]">
              <div className="flex items-center gap-1.5 text-[#4B5563] flex-1 min-w-[240px]">
                <FiGlobe className="w-3.5 h-3.5 text-[#0F766E]" />
                <span className="font-mono text-gray-500">techmapperz.com/blog/</span>
                {isSlugManual ? (
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => setFormData(prev => ({ ...prev, slug: generateSlug(e.target.value) }))}
                    className="font-mono font-bold text-[#1656B8] px-2 py-0.5 rounded border border-[#1656B8]/40 bg-white outline-none w-48"
                  />
                ) : (
                  <span className="font-mono font-bold text-[#1656B8] truncate">
                    {formData.slug || 'your-slug-preview'}
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={() => setIsSlugManual(!isSlugManual)}
                className="text-[11px] font-bold text-[#0F766E] hover:underline"
              >
                {isSlugManual ? 'Lock & Sync with Title' : 'Edit Slug'}
              </button>
            </div>
          </div>

          {/* 3. Excerpt / Short Teaser */}
          <div className="bg-white rounded-2xl border border-[#DDE3EA] p-6 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-[14px] font-bold text-[#0C2E60] flex items-center gap-1.5">
                Article Excerpt / Summary
                <span className="text-[11px] font-normal text-gray-400">(Used in social cards & Google previews)</span>
              </label>

              <button
                type="button"
                onClick={handleAutoExcerpt}
                className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1656B8] hover:text-[#0C2E60] transition-colors"
              >
                <FiZap className="w-3 h-3 text-[#0F766E]" /> Auto-generate
              </button>
            </div>

            <textarea
              rows={3}
              value={formData.excerpt}
              onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
              placeholder="Brief 1-2 sentence executive summary of key takeaways..."
              className="w-full px-3.5 py-2.5 text-[14px] rounded-xl border border-[#DDE3EA] focus:border-[#1656B8] focus:ring-1 focus:ring-[#1656B8] outline-none text-[#17202A] leading-relaxed"
            />
            <div className="flex justify-end text-[11px] font-mono text-gray-400">
              {formData.excerpt.length} / 160 characters
            </div>
          </div>

          {/* 4. Rich Content Studio (BlockEditor) */}
          <div className="bg-white rounded-2xl border border-[#DDE3EA] p-6 shadow-sm space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-[#DDE3EA]">
              <div>
                <label className="text-[15px] font-bold text-[#0C2E60] flex items-center gap-1.5">
                  <FiFileText className="w-4 h-4 text-[#0F766E]" />
                  Main Article Content <span className="text-[#D2292B]">*</span>
                </label>
                <p className="text-[12px] text-[#4B5563]">
                  Format headings, insert technical diagrams, code blocks, quote callouts and survey images.
                </p>
              </div>

              <div className="text-right">
                <span className="text-[11px] font-mono font-bold text-[#0F766E] bg-[#E8F5F3] px-2.5 py-1 rounded-md border border-[#0F766E]/20">
                  {stats.wordCount} Words
                </span>
              </div>
            </div>

            {/* BlockEditor Container */}
            <div className="min-h-[460px] rounded-xl overflow-hidden border border-[#DDE3EA] focus-within:border-[#1656B8] transition-colors bg-white">
              <BlockEditor
                value={getMainContentString(formData.maincontent)}
                onChange={handleContentChange}
                name="maincontent"
                onImageUpload={handleImageUpload}
              />
            </div>
          </div>

        </div>

        {/* â”€â”€ RIGHT COLUMN: Inspector / Settings Panel (4 cols) â”€â”€ */}
        <div className="lg:col-span-4 space-y-6">

          {/* Settings Card 1: Publishing & Author */}
          <div className="bg-white rounded-2xl border border-[#DDE3EA] p-6 shadow-sm space-y-5">
            <h3 className="text-[16px] font-bold text-[#0C2E60] border-b border-[#DDE3EA] pb-3 flex items-center gap-2">
              <FiUser className="w-4 h-4 text-[#0F766E]" />
              Publishing Settings
            </h3>

            {/* Author Selector */}
            <div>
              <label className="block text-[13px] font-bold text-[#0C2E60] mb-1.5">
                Select Author <span className="text-[#D2292B]">*</span>
              </label>
              <select
                value={formData.selectedAuthor}
                onChange={(e) => setFormData(prev => ({ ...prev, selectedAuthor: e.target.value }))}
                disabled={isLoadingAuthors}
                className="w-full px-3.5 py-2.5 text-[14px] font-medium rounded-xl border border-[#DDE3EA] focus:border-[#1656B8] focus:ring-1 focus:ring-[#1656B8] outline-none bg-white text-[#0C2E60]"
              >
                <option value="">-- Choose Author --</option>
                {authors.map((author) => (
                  <option key={author._id} value={author._id}>
                    {author.name} ({author.email})
                  </option>
                ))}
              </select>

              {/* Author Preview Badge */}
              {selectedAuthorObj && (
                <div className="mt-3 p-3 bg-[#F6F8FB] rounded-xl border border-[#DDE3EA] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0C2E60] text-white flex items-center justify-center font-bold text-[14px] overflow-hidden flex-shrink-0">
                    {selectedAuthorObj.picture ? (
                      <img src={selectedAuthorObj.picture} alt={selectedAuthorObj.name} className="w-full h-full object-cover" />
                    ) : (
                      selectedAuthorObj.name?.slice(0, 2).toUpperCase() || 'TM'
                    )}
                  </div>
                  <div className="truncate">
                    <p className="text-[13px] font-bold text-[#0C2E60] truncate">{selectedAuthorObj.name}</p>
                    <p className="text-[11px] text-[#4B5563] truncate">{selectedAuthorObj.email}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Publishing Security Mode */}
            <div>
              <label className="block text-[13px] font-bold text-[#0C2E60] mb-2">
                Publishing Mode
              </label>
              <div className="space-y-2 text-[13px]">
                <label className={`flex items-start gap-2.5 p-3 rounded-xl border cursor-pointer transition-all ${
                  formData.publishMode === 'admin' 
                    ? 'border-[#1656B8] bg-[#E8F5F3]/30' 
                    : 'border-[#DDE3EA] hover:bg-[#F6F8FB]'
                }`}>
                  <input
                    type="radio"
                    name="publishMode"
                    value="admin"
                    checked={formData.publishMode === 'admin'}
                    onChange={() => setFormData(prev => ({ ...prev, publishMode: 'admin' }))}
                    className="mt-0.5 text-[#1656B8] focus:ring-[#1656B8]"
                  />
                  <div>
                    <span className="font-bold text-[#0C2E60] block">Instant Admin Publish</span>
                    <span className="text-[11px] text-[#4B5563] leading-snug">
                      Authorized by your active admin session (recommended for faster publishing).
                    </span>
                  </div>
                </label>

                <label className={`flex items-start gap-2.5 p-3 rounded-xl border cursor-pointer transition-all ${
                  formData.publishMode === 'author_verify' 
                    ? 'border-[#1656B8] bg-[#E8F5F3]/30' 
                    : 'border-[#DDE3EA] hover:bg-[#F6F8FB]'
                }`}>
                  <input
                    type="radio"
                    name="publishMode"
                    value="author_verify"
                    checked={formData.publishMode === 'author_verify'}
                    onChange={() => setFormData(prev => ({ ...prev, publishMode: 'author_verify' }))}
                    className="mt-0.5 text-[#1656B8] focus:ring-[#1656B8]"
                  />
                  <div>
                    <span className="font-bold text-[#0C2E60] block flex items-center gap-1">
                      <FiLock className="w-3 h-3 text-[#0F766E]" /> Author Verification
                    </span>
                    <span className="text-[11px] text-[#4B5563] leading-snug">
                      Prompts for author password confirmation before post is committed.
                    </span>
                  </div>
                </label>
              </div>
            </div>

            {/* Publication Date */}
            <div>
              <label className="block text-[13px] font-bold text-[#0C2E60] mb-1.5 flex items-center gap-1.5">
                <FiCalendar className="w-3.5 h-3.5 text-[#0F766E]" />
                Publication Date
              </label>
              <input
                type="date"
                value={formData.publishDate}
                onChange={(e) => setFormData(prev => ({ ...prev, publishDate: e.target.value }))}
                className="w-full px-3.5 py-2 text-[13px] rounded-xl border border-[#DDE3EA] focus:border-[#1656B8] focus:ring-1 focus:ring-[#1656B8] outline-none"
              />
            </div>
          </div>

          {/* Settings Card 2: Category & Tags */}
          <div className="bg-white rounded-2xl border border-[#DDE3EA] p-6 shadow-sm space-y-5">
            <h3 className="text-[16px] font-bold text-[#0C2E60] border-b border-[#DDE3EA] pb-3 flex items-center gap-2">
              <FiTag className="w-4 h-4 text-[#0F766E]" />
              Taxonomy & Categorization
            </h3>

            {/* Category Input */}
            <div>
              <label className="block text-[13px] font-bold text-[#0C2E60] mb-1.5">
                Category <span className="text-[#D2292B]">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.category}
                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                placeholder="e.g. Drone Surveying"
                className="w-full px-3.5 py-2.5 text-[14px] rounded-xl border border-[#DDE3EA] focus:border-[#1656B8] focus:ring-1 focus:ring-[#1656B8] outline-none font-medium text-[#0C2E60]"
              />

              {/* Quick Suggestion Chips */}
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {POPULAR_CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, category: cat }))}
                    className={`text-[11px] px-2.5 py-1 rounded-md border transition-all ${
                      formData.category === cat
                        ? 'bg-[#1656B8] text-white border-[#1656B8] font-bold'
                        : 'bg-[#F6F8FB] text-[#4B5563] border-[#DDE3EA] hover:border-[#1656B8]/40 hover:text-[#0C2E60]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Tags Input */}
            <div>
              <label className="block text-[13px] font-bold text-[#0C2E60] mb-1.5">
                Tags & Topics
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ',') {
                      e.preventDefault()
                      handleAddTag(tagInput)
                    }
                  }}
                  placeholder="Type tag and hit Enter..."
                  className="flex-1 px-3.5 py-2 text-[13px] rounded-xl border border-[#DDE3EA] focus:border-[#1656B8] focus:ring-1 focus:ring-[#1656B8] outline-none"
                />
                <button
                  type="button"
                  onClick={() => handleAddTag(tagInput)}
                  className="px-3.5 py-2 bg-[#F6F8FB] hover:bg-[#E8F5F3] text-[#0C2E60] text-[13px] font-bold rounded-xl border border-[#DDE3EA] transition-colors"
                >
                  Add
                </button>
              </div>

              {/* Rendered Tag Badges */}
              {formData.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {formData.tags.map(t => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#E8F5F3] text-[#0F766E] border border-[#0F766E]/20 rounded-full text-[12px] font-semibold"
                    >
                      #{t}
                      <button
                        type="button"
                        onClick={() => handleRemoveTag(t)}
                        className="hover:text-[#D2292B] p-0.5"
                      >
                        <FiX className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Settings Card 3: SEO & Social Card Preview */}
          <div className="bg-white rounded-2xl border border-[#DDE3EA] p-6 shadow-sm space-y-4">
            <button
              type="button"
              onClick={() => setSeoAccordionOpen(!seoAccordionOpen)}
              className="w-full flex items-center justify-between text-[16px] font-bold text-[#0C2E60] text-left"
            >
              <span className="flex items-center gap-2">
                <FiSearch className="w-4 h-4 text-[#0F766E]" />
                Search & Social Snippet
              </span>
              {seoAccordionOpen ? <FiChevronUp className="w-4 h-4 text-gray-400" /> : <FiChevronDown className="w-4 h-4 text-gray-400" />}
            </button>

            {seoAccordionOpen && (
              <div className="space-y-4 pt-2 border-t border-[#DDE3EA]">
                {/* Google Search Snippet Simulation */}
                <div>
                  <span className="text-[11px] font-bold text-[#0F766E] uppercase tracking-wider block mb-2">
                    Google Search Result
                  </span>
                  <div className="p-3.5 bg-white rounded-xl border border-[#DDE3EA] space-y-1 shadow-xs">
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-600">
                      <div className="w-4 h-4 rounded-full bg-[#0C2E60] flex items-center justify-center text-white text-[8px] font-bold">TM</div>
                      <span className="font-semibold text-[#17202A]">Techmapperz</span>
                      <span className="text-gray-400">&rsaquo;</span>
                      <span className="truncate text-gray-500">blog &rsaquo; {formData.slug || 'article'}</span>
                    </div>
                    <p className="text-[15px] font-semibold text-[#1a0dab] hover:underline cursor-pointer truncate leading-tight">
                      {formData.title || 'Techmapperz Blog: Insights & Engineering'}
                    </p>
                    <p className="text-[12px] text-[#4d5156] line-clamp-2 leading-relaxed">
                      {formData.excerpt || getMainContentString(formData.maincontent).replace(/<[^>]*>?/gm, '').slice(0, 140) || 'Discover high-precision geospatial surveys, GIS mapping solutions, and technical software engineering at Techmapperz.'}
                    </p>
                  </div>
                </div>

                {/* Social Share Snippet Simulation */}
                <div>
                  <span className="text-[11px] font-bold text-[#0F766E] uppercase tracking-wider block mb-2 flex items-center gap-1">
                    <FiShare2 className="w-3 h-3" /> Social Share Card
                  </span>
                  <div className="rounded-xl border border-[#DDE3EA] overflow-hidden bg-white shadow-xs">
                    <div className="h-32 bg-slate-100 overflow-hidden relative">
                      {formData.featuredImage ? (
                        <img src={formData.featuredImage} alt="Social Card" className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-[12px]">
                          Upload featured image for social card
                        </div>
                      )}
                    </div>
                    <div className="p-3 bg-[#F6F8FB]">
                      <span className="text-[10px] text-gray-400 uppercase font-mono tracking-wider">techmapperz.com</span>
                      <p className="text-[13px] font-bold text-[#0C2E60] truncate">{formData.title || 'Technical Article'}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Settings Card 4: Pre-Flight Checklist */}
          <div className="bg-[#F6F8FB] rounded-2xl border border-[#DDE3EA] p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-[15px] font-bold text-[#0C2E60] flex items-center gap-1.5">
                <FiCheckCircle className="w-4 h-4 text-[#0F766E]" />
                Publish Readiness
              </h3>
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                isFormValid 
                  ? 'bg-[#E8F5F3] text-[#0F766E] border border-[#0F766E]/30' 
                  : 'bg-amber-100 text-amber-800'
              }`}>
                {checklist.filter(c => c.done).length} / {checklist.length} Ready
              </span>
            </div>

            <div className="space-y-2">
              {checklist.map(item => (
                <div key={item.id} className="flex items-center gap-2.5 text-[13px]">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                    item.done 
                      ? 'bg-[#E8F5F3] text-[#0F766E] border border-[#0F766E]/40' 
                      : 'bg-[#DDE3EA] text-gray-400'
                  }`}>
                    {item.done ? (
                      <FiCheck className="w-3.5 h-3.5" />
                    ) : (
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                    )}
                  </span>
                  <span className={item.done ? 'text-[#0C2E60] font-medium' : 'text-[#4B5563]'}>
                    {item.label} {item.required && <span className="text-[#D2292B]">*</span>}
                  </span>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={handleFormSubmit}
              disabled={isSubmitting}
              className="w-full mt-4 py-3 bg-[#1656B8] hover:bg-[#0C2E60] disabled:opacity-60 text-white font-bold text-[14px] rounded-xl shadow-md hover:shadow-lg transition-all min-h-[46px] flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <FiRefreshCw className="w-4 h-4 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <FiCheckCircle className="w-4 h-4" />
                  <span>{isEdit ? 'Save Changes' : 'Publish Article'}</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>

      {/* â”€â”€ Full Fidelity Public Article Preview Modal â”€â”€ */}
      {isPreviewOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
          <div className="bg-white w-full max-w-5xl max-h-[92vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-[#DDE3EA]">
            {/* Modal Header */}
            <div className="p-4 bg-[#0C2E60] text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#5EEAD4]">
                  Live Article Preview
                </span>
                <span className="text-white/40">|</span>
                <span className="text-xs text-slate-300">Mirrors public /blog/[id] view</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setPreviewDevice(previewDevice === 'desktop' ? 'mobile' : 'desktop')}
                  className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-semibold text-white transition-colors"
                >
                  View: {previewDevice === 'desktop' ? 'Desktop' : 'Mobile'}
                </button>
                <button
                  type="button"
                  onClick={() => setIsPreviewOpen(false)}
                  className="p-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body Preview Content */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-white">
              <div className={`mx-auto transition-all ${
                previewDevice === 'mobile' ? 'max-w-[420px] bg-white p-4 rounded-2xl shadow-lg border border-slate-300' : 'max-w-4xl'
              }`}>
                {/* Article Header Banner */}
                <div className="bg-gradient-to-br from-[#0C2E60] via-[#092247] to-[#0A1F40] text-white p-6 sm:p-10 rounded-2xl mb-8 text-center">
                  <span className="text-[#5EEAD4] text-[12px] font-bold tracking-[0.15em] uppercase mb-2 block">
                    TECHMAPPERZ TECHNICAL INSIGHTS
                  </span>
                  <h1 className="text-[24px] sm:text-[34px] font-bold leading-tight mb-4 text-white">
                    {formData.title || 'Untitled Article'}
                  </h1>
                  <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-[#E8F5F3]">
                    <span className="px-3 py-0.5 bg-white/10 rounded-full font-semibold">{formData.category || 'General'}</span>
                    <span>&bull;</span>
                    <span>{selectedAuthorObj?.name || 'Techmapperz Specialist'}</span>
                    <span>&bull;</span>
                    <span>{stats.readingTime} min read</span>
                  </div>
                </div>

                {/* Main Article Container */}
                <article className="bg-white rounded-2xl border border-[#DDE3EA] p-6 sm:p-10 shadow-sm">
                  {/* Hero Featured Image */}
                  {formData.featuredImage && (
                    <div className="relative w-full h-[260px] sm:h-[400px] mb-8 rounded-xl overflow-hidden bg-slate-100">
                      <img
                        src={formData.featuredImage}
                        alt={formData.featuredImageAlt || formData.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* Rendered HTML Content */}
                  <div 
                    className="blog-content prose max-w-none text-[16px] text-[#334155] leading-relaxed space-y-4"
                    dangerouslySetInnerHTML={{ __html: getMainContentString(formData.maincontent) || '<p className="text-gray-400 italic">No content written yet...</p>' }}
                  />

                  {/* Tags footer */}
                  {formData.tags.length > 0 && (
                    <div className="mt-10 pt-6 border-t border-[#DDE3EA] flex flex-wrap gap-2">
                      {formData.tags.map(t => (
                        <span key={t} className="px-3 py-1 bg-[#E8F5F3] text-[#0F766E] rounded-full text-xs font-semibold">
                          #{t}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-white border-t border-[#DDE3EA] flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsPreviewOpen(false)}
                className="px-5 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#17202A] text-[13px] font-bold transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* â”€â”€ Credential Verification Modal (Optional Security Mode) â”€â”€ */}
      {isCredentialModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-2xl border border-[#DDE3EA] space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#0C2E60] font-bold text-[17px]">
                <FiLock className="w-5 h-5 text-[#0F766E]" />
                Verify Author Credentials
              </div>
              <button 
                type="button" 
                onClick={() => setIsCredentialModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            <p className="text-[13px] text-[#4B5563]">
              Author verification is enabled. Please authenticate as <strong>{selectedAuthorObj?.name || 'the selected author'}</strong> to confirm publication:
            </p>

            <form onSubmit={handleCredentialVerification} className="space-y-4">
              <div>
                <label className="block text-[12px] font-bold text-[#4B5563] mb-1">Author Email</label>
                <input
                  type="email"
                  required
                  value={credentialForm.email}
                  onChange={(e) => setCredentialForm({ ...credentialForm, email: e.target.value })}
                  placeholder={selectedAuthorObj?.email || 'author@techmapperz.com'}
                  className="w-full px-3.5 py-2 text-[14px] rounded-xl border border-[#DDE3EA] focus:border-[#1656B8] outline-none"
                />
              </div>

              <div>
                <label className="block text-[12px] font-bold text-[#4B5563] mb-1">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={credentialForm.password}
                    onChange={(e) => setCredentialForm({ ...credentialForm, password: e.target.value })}
                    className="w-full px-3.5 py-2 text-[14px] rounded-xl border border-[#DDE3EA] focus:border-[#1656B8] outline-none pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs font-semibold"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsCredentialModalOpen(false)}
                  className="px-4 py-2 text-[13px] font-medium text-gray-600 hover:bg-gray-100 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isVerifying}
                  className="px-5 py-2 bg-[#1656B8] hover:bg-[#0C2E60] text-white text-[13px] font-bold rounded-xl shadow-sm transition-all"
                >
                  {isVerifying ? 'Verifying...' : 'Authenticate & Publish'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
