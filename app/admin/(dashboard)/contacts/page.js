'use client'

import { useState, useEffect } from 'react'
import DataTable from '@/app/admin/_components/DataTable'
import Form from '@/app/admin/_components/Form'
import Modal from '@/app/admin/_components/Modal'
import { Search, Loader2 } from 'lucide-react'
import { contactsApi } from '@/app/admin/_utils/api'

const formFields = [
  { name: 'name', label: 'Name', type: 'text', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'mobile', label: 'Mobile Number', type: 'tel', required: true },
  { name: 'projectType', label: 'Project Type', type: 'text', required: true },
  { 
    name: 'projectdetails', 
    label: 'Project Details', 
    type: 'textarea', 
    required: true 
  },
  { name: 'Date', label: 'Date', type: 'date', required: true },
  { name: 'userId', label: 'User ID', type: 'number', required: true }
]

export default function ContactsPage() {
  const [contacts, setContacts] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)
  const [selectedDetails, setSelectedDetails] = useState('')
  const [editingContact, setEditingContact] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [deleteStatusText, setDeleteStatusText] = useState('')

  const handleViewDetails = (details) => {
    setSelectedDetails(details)
    setIsDetailsModalOpen(true)
  }

  const columns = [
    { 
      key: 'name', 
      label: 'Name',
      width: '15%',
      render: (value) => (
        <div className="font-medium truncate">{value || '-'}</div>
      )
    },
    { 
      key: 'email', 
      label: 'Email',
      width: '20%',
      render: (value) => (
        <div className="text-indigo-600 truncate">{value || '-'}</div>
      )
    },
    { 
      key: 'mobile', 
      label: 'Mobile',
      width: '12%',
      render: (value) => (
        <div className="text-gray-700 truncate">{value || '-'}</div>
      )
    },
    { 
      key: 'projectType', 
      label: 'Project Type',
      width: '15%',
      render: (value) => (
        <div className="font-medium text-gray-900 truncate">{value || '-'}</div>
      )
    },
    { 
      key: 'projectdetails', 
      label: 'Project Details',
      width: '25%',
      render: (value) => (
        <div 
          className="truncate cursor-pointer text-blue-600 hover:text-blue-800"
          onClick={() => handleViewDetails(value)}
        >
          {value && typeof value === 'string' ? `${value.substring(0, 50)}...` : '-'}
        </div>
      )
    },
    { 
      key: 'Date', 
      label: 'Date',
      width: '8%',
      render: (value) => (
        <div className="text-gray-500 whitespace-nowrap">
          {value || '-'}
        </div>
      )
    },
    { 
      key: 'userId', 
      label: 'User ID',
      width: '5%',
      render: (value) => (
        <div className="text-gray-600">
          {value || '-'}
        </div>
      )
    }
  ]

  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    try {
      setIsLoading(true)
      const response = await contactsApi.getAll()
      if (response && response.data) {
        // Ensure we have an array of contacts
        const contactsArray = Array.isArray(response.data) ? response.data : [response.data]
        
        // Map the data to ensure all fields are present
        const processedContacts = contactsArray.map(contact => ({
          _id: contact._id || '',
          userId: contact.userId || '',
          name: contact.name || '',
          email: contact.email || '',
          mobile: contact.mobile || '',
          projectType: contact.projectType || '',
          projectdetails: contact.projectdetails || '',
          Date: contact.Date || '',
        }))
        
        setContacts(processedContacts)
        setError(null)
      } else {
        setError('No data received from the API')
      }
    } catch (err) {
      setError('Failed to fetch contacts')
      console.error('Error fetching contacts:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleEdit = (contact) => {
    setEditingContact(contact)
    setIsModalOpen(true)
  }

  const handleDelete = async (contact) => {
    if (!window.confirm('Are you sure you want to delete this contact?')) {
      return
    }

    try {
      setIsDeleting(true)
      setDeleteStatusText(`Deleting contact "${contact.name || contact.email || ''}"...`)
      await contactsApi.delete(contact._id)
      setContacts(prev => prev.filter(c => c._id !== contact._id))
    } catch (err) {
      console.error('Error deleting contact:', err)
      alert('Failed to delete contact: ' + (err.response?.data?.message || err.message))
    } finally {
      setIsDeleting(false)
      setDeleteStatusText('')
    }
  }

  const handleBulkDelete = async (ids) => {
    try {
      setIsDeleting(true)
      setDeleteStatusText(`Deleting ${ids.length} selected contact${ids.length > 1 ? 's' : ''}...`)
      await contactsApi.delete(ids)
      setContacts(prev => prev.filter(c => !ids.includes(c._id)))
    } catch (err) {
      console.error('Error bulk deleting contacts:', err)
      alert('Failed to delete selected contacts: ' + (err.response?.data?.message || err.message))
      fetchContacts()
    } finally {
      setIsDeleting(false)
      setDeleteStatusText('')
    }
  }

  const handleSubmit = async (formData) => {
    try {
      if (editingContact) {
        const response = await contactsApi.update(editingContact._id, formData)
        const updated = response.data?.data || response.data
        setContacts(prev => prev.map(contact => 
          contact._id === editingContact._id 
            ? { ...contact, ...updated }
            : contact
        ))
      } else {
        const response = await contactsApi.create(formData)
        const created = response.data?.data || response.data
        setContacts(prev => [...prev, created])
      }
      setIsModalOpen(false)
      setEditingContact(null)
    } catch (err) {
      console.error('Error saving contact:', err)
      alert('Failed to save contact')
    }
  }

  const filteredContacts = contacts.filter(contact => {
    if (!searchTerm) return true
    const term = searchTerm.toLowerCase()
    return (
      contact.name?.toLowerCase().includes(term) ||
      contact.email?.toLowerCase().includes(term) ||
      contact.mobile?.toLowerCase().includes(term) ||
      contact.projectType?.toLowerCase().includes(term) ||
      contact.projectdetails?.toLowerCase().includes(term) ||
      String(contact.userId || '').includes(term)
    )
  })

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
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-black">Contact Messages</h1>
          <p className="text-sm text-gray-500 mt-0.5">Manage, review, and delete contact inquiries</p>
        </div>
        <div className="relative w-full sm:w-72">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search contacts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-8 py-2 border border-gray-300 rounded-lg text-sm text-black bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <DataTable
          columns={columns}
          data={filteredContacts}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onBulkDelete={handleBulkDelete}
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setEditingContact(null)
        }}
        title={editingContact ? 'Edit Contact' : 'View Contact'}
      >
        <Form
          fields={formFields}
          initialData={editingContact}
          onSubmit={handleSubmit}
          submitLabel={editingContact ? 'Update Contact' : 'Save Contact'}
        />
      </Modal>

      <Modal
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        title="Project Details"
        size="lg"
      >
        <div className="p-4">
          <div className="whitespace-pre-wrap text-gray-700">
            {selectedDetails || '-'}
          </div>
        </div>
      </Modal>

      {/* Delete in-progress floating toast indicator */}
      {isDeleting && (
        <div className="fixed bottom-6 right-6 bg-gray-900/95 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 z-50 border border-gray-700 backdrop-blur-sm transition-all duration-200">
          <Loader2 className="h-5 w-5 animate-spin text-indigo-400" />
          <span className="text-sm font-medium">{deleteStatusText || 'Deleting contact(s)...'}</span>
        </div>
      )}
    </div>
  )
}
