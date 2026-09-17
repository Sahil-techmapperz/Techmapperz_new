'use client'

import { useState, useEffect } from 'react'
import { 
  Users, 
  Briefcase, 
  MessageSquare,
  Star,
  BookOpen,
  Mail
} from 'lucide-react'
import { contactsApi, jobsApi, blogPostsApi, testimonialsApi, commentsApi, authApi, newsletterApi } from '@/app/admin/_utils/api'

const stats = [
  { name: 'Total Contacts', value: '0', icon: Users, color: 'bg-blue-500', api: contactsApi },
  { name: 'Active Jobs', value: '0', icon: Briefcase, color: 'bg-green-500', api: jobsApi },
  { name: 'Blog Posts', value: '0', icon: BookOpen, color: 'bg-yellow-500', api: blogPostsApi },
  { name: 'Testimonials', value: '0', icon: Star, color: 'bg-pink-500', api: testimonialsApi },
  { name: 'Comments', value: '0', icon: MessageSquare, color: 'bg-indigo-500', api: commentsApi },
  { name: 'Newsletter Subscribers', value: '0', icon: Mail, color: 'bg-purple-500', api: newsletterApi },
]

export default function DashboardPage() {
  const [statsData, setStatsData] = useState(stats)
  const [loginActivities, setLoginActivities] = useState([])
  const [recentSubscribers, setRecentSubscribers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchStats()
    fetchLoginActivities()
    fetchRecentSubscribers()
  }, [])

  const fetchLoginActivities = async () => {
    try {
      const response = await authApi.getRecentLogins()
      const data = Array.isArray(response.data) ? response.data : (response.data?.data || [])
      
      const sorted = [...data].sort((a, b) => {
        const parseTime = (str) => {
          if (!str) return 0
          const parts = str.split(' ')
          if (parts.length >= 3) {
            const [d, m, y] = parts[0].split('-').map(Number)
            let [hh, mm, ss] = parts[1].split(':').map(Number)
            if (parts[2] === 'PM' && hh < 12) hh += 12
            if (parts[2] === 'AM' && hh === 12) hh = 0
            const t = new Date(y, m - 1, d, hh, mm, ss || 0).getTime()
            if (!isNaN(t)) return t
          }
          return 0
        }
        const parsedA = parseTime(a.loginTime)
        const parsedB = parseTime(b.loginTime)
        if (parsedA && parsedB && parsedA !== parsedB) return parsedB - parsedA

        if (a.createdAt && b.createdAt) {
          const timeA = new Date(a.createdAt).getTime()
          const timeB = new Date(b.createdAt).getTime()
          if (!isNaN(timeA) && !isNaN(timeB) && timeA !== timeB) return timeB - timeA
        }

        if (a._id && b._id) return String(b._id).localeCompare(String(a._id))
        return 0
      })

      setLoginActivities(sorted.slice(0, 10))
    } catch (error) {
      console.error('Error fetching login activities:', error)
      setLoginActivities([])
    }
  }

  const fetchRecentSubscribers = async () => {
    try {
      const response = await newsletterApi.getAll()
      // Handle different response structures
      const subscribers = Array.isArray(response.data) 
        ? response.data 
        : (response.data?.data || [])
      setRecentSubscribers(subscribers.slice(0, 10)) // Get only first 10
    } catch (error) {
      console.error('Error fetching recent subscribers:', error)
      setRecentSubscribers([]) // Set empty array on error
    }
  }

  const fetchStats = async () => {
    try {
      setIsLoading(true)
      const updatedStats = await Promise.all(
        stats.map(async (stat) => {
          try {
            let response
            // Handle blog posts API which requires parameters
            if (stat.name === 'Blog Posts') {
              response = await stat.api.getAll(1, 1) // Get first page with 1 item just to get total count
            } else {
              response = await stat.api.getAll()
            }
            
            // Handle different response structures
            let value = '0'
            if (stat.name === 'Blog Posts') {
              // Blog posts API returns { blogPosts, totalBlogPosts, ... }
              value = (response.data?.totalBlogPosts || response.data?.data?.totalBlogPosts || 0).toString()
            } else if (stat.name === 'Newsletter Subscribers') {
              // Newsletter API might return array directly or wrapped
              const data = Array.isArray(response.data) ? response.data : (response.data?.data || [])
              value = data.length.toString()
            } else {
              // Other APIs return { data: [...] }
              const data = Array.isArray(response.data) ? response.data : (response.data?.data || [])
              value = data.length.toString()
            }
            
            return {
              ...stat,
              value
            }
          } catch (error) {
            console.error(`Error fetching ${stat.name}:`, error)
            // Return stat with default value on error
            return stat
          }
        })
      )
      setStatsData(updatedStats)
      setError(null)
    } catch (error) {
      setError('Failed to fetch dashboard statistics')
      console.error('Error fetching stats:', error)
    } finally {
      setIsLoading(false)
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
    <div>
      <h1 className="text-2xl font-semibold mb-8 text-black">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statsData.map((stat) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.name}
              className="p-6 bg-white rounded-lg shadow-sm"
            >
              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-black">{stat.name}</p>
                  <p className="text-2xl font-semibold text-black">{stat.value}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium mb-4 text-black">Recent Login Activities (Last 10)</h2>
          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
            {loginActivities.length > 0 ? (
              loginActivities.map((activity) => (
                <div key={activity._id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div>
                    <p className="text-sm font-medium text-black">{activity.email}</p>
                    <p className="text-xs text-gray-500 font-mono">ID: {activity._id}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-black">{activity.loginTime}</p>
                    <span className="inline-block text-xs text-emerald-600 font-medium">Successful</span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm py-2">No recent login activities</p>
            )}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium mb-4 text-black">Recent Newsletter Subscribers</h2>
          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
            {recentSubscribers.length > 0 ? (
              recentSubscribers.map((subscriber) => (
                <div key={subscriber._id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div>
                    <p className="text-sm font-medium text-black">{subscriber.email}</p>
                    <p className="text-xs text-black">
                      Subscribed: {new Date(subscriber.subscribedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-black">Active</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-black">No recent subscribers</p>
            )}
          </div>
        </div>
      </div>

      
    </div>
  )
} 
