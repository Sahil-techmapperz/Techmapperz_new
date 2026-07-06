'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import DataTable from '@/app/admin/_components/DataTable'
import { Download, Search } from 'lucide-react'
import { careerApi } from '@/app/admin/_utils/api'

const columns = [
  { key: 'name', label: 'Applicant Name' },
  { key: 'designetion', label: 'Position Applied For' },
  { key: 'mobile', label: 'Contact Number' },
  { key: 'Date', label: 'Application Date' },
  { 
    key: 'message', 
    label: 'Message',
    render: (value) => (
      <div className="max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap hover:whitespace-normal hover:bg-gray-50 p-2 rounded cursor-pointer">
        {value}
      </div>
    )
  },
]

export default function CareerPage() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [applications, setApplications] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '')

  useEffect(() => {
    fetchApplications()
  }, [searchParams])

  const fetchApplications = async () => {
    try {
      setIsLoading(true)
      const params = {}
      const search = searchParams.get('search')
      if (search) {
        params.search = search
      }
      
      const response = await careerApi.getAll(params)
      const applicationsData = Array.isArray(response.data) ? response.data : []
      setApplications(applicationsData)
      setError(null)
    } catch (err) {
      setError('Failed to fetch applications')
      console.error('Error fetching applications:', err)
      setApplications([]) // Set empty array on error
    } finally {
      setIsLoading(false)
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams)
    if (searchQuery) {
      params.set('search', searchQuery)
    } else {
      params.delete('search')
    }
    router.push(`${pathname}?${params.toString()}`)
  }

  const handleDelete = async (application) => {
    if (!window.confirm('Are you sure you want to delete this application?')) {
      return
    }

    try {
      await careerApi.delete(application._id)
      setApplications(applications.filter(app => app._id !== application._id))
      fetchApplications(); // Refresh the list
    } catch (err) {
      console.error('Error deleting application:', err)
      alert('Failed to delete application')
    }
  }

  const handleBulkDelete = async (ids) => {
    try {
      await careerApi.delete(ids)
      fetchApplications(); // Refresh the list
    } catch (err) {
      console.error('Error bulk deleting applications:', err)
      alert('Failed to delete selected applications')
    }
  }

  const handleDownloadResume = (resumeUrl) => {
    if (resumeUrl) {
      window.open(resumeUrl, '_blank')
    } else {
      alert('No resume available')
    }
  }

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
        <h1 className="text-2xl font-semibold text-black">Job Applications</h1>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
        {/* Filter Section */}
        <div className="flex justify-between items-center">
          <form onSubmit={handleSearch} className="flex gap-2 w-full max-w-md">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search applications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Filter
            </button>
            {searchParams.get('search') && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  router.push(pathname);
                }}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Clear
              </button>
            )}
          </form>
        </div>

        <DataTable
          columns={columns}
          data={applications}
          onDelete={handleDelete}
          onBulkDelete={handleBulkDelete}
          defaultSort={{ key: 'Date', direction: 'desc' }} // Sort by Application Date, latest first
          actions={[
            {
              label: 'Download Resume',
              icon: Download,
              onClick: (application) => handleDownloadResume(application.resume),
              show: (application) => !!application.resume,
            },
          ]}
        />
      </div>
    </div>
  )
} 
