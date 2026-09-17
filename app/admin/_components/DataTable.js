import { useState, useEffect } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ArrowUpDown,
  Loader2
} from 'lucide-react'

export default function DataTable({ 
  columns, 
  data = [],
  onEdit,
  onDelete,
  onBulkDelete,
  actions = [],
  loading = false,
  emptyMessage = "No data available",
  defaultSort = null, // { key: 'columnKey', direction: 'asc' | 'desc' }
  currentPage: externalCurrentPage,
  onPageChange
}) {
  const [selectedIds, setSelectedIds] = useState([])
  const [isBulkDeleting, setIsBulkDeleting] = useState(false)
  const [deletingRowId, setDeletingRowId] = useState(null)
  const [sortConfig, setSortConfig] = useState(
    defaultSort || { key: null, direction: 'asc' }
  )
  const [internalCurrentPage, setInternalCurrentPage] = useState(1)
  const itemsPerPage = 10

  const currentPage = externalCurrentPage !== undefined ? externalCurrentPage : internalCurrentPage

  const handlePageChange = (newPage) => {
    if (onPageChange) {
      onPageChange(newPage)
    } else {
      setInternalCurrentPage(newPage)
    }
  }

  // Ensure data is always an array and filter out any undefined/null items
  const safeData = Array.isArray(data) ? data.filter(item => item != null) : []

  // Helper function to parse date strings in DD-MM-YYYY format
  const parseDate = (dateString) => {
    if (!dateString) return null
    // Handle format: "1-8-2025" or "01-08-2025" (DD-MM-YYYY)
    const parts = dateString.split('-')
    if (parts.length === 3) {
      const day = parseInt(parts[0], 10)
      const month = parseInt(parts[1], 10) - 1 // Month is 0-indexed
      const year = parseInt(parts[2], 10)
      return new Date(year, month, day)
    }
    // Try standard date parsing as fallback
    return new Date(dateString)
  }

  // Sorting logic
  const sortedData = [...safeData].sort((a, b) => {
    if (!sortConfig.key) return 0
    
    let aValue = a[sortConfig.key]
    let bValue = b[sortConfig.key]
    
    // Handle date sorting
    if (sortConfig.key === 'Date' || sortConfig.key.toLowerCase().includes('date')) {
      const aDate = parseDate(aValue)
      const bDate = parseDate(bValue)
      
      if (!aDate && !bDate) return 0
      if (!aDate) return 1
      if (!bDate) return -1
      
      if (aDate < bDate) return sortConfig.direction === 'asc' ? -1 : 1
      if (aDate > bDate) return sortConfig.direction === 'asc' ? 1 : -1
      return 0
    }
    
    // Handle regular string/number sorting
    if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1
    if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1
    return 0
  })

  // Pagination logic
  const totalPages = Math.ceil(sortedData.length / itemsPerPage)
  const validCurrentPage = totalPages > 0 ? Math.min(currentPage, totalPages) : 1
  const startIndex = (validCurrentPage - 1) * itemsPerPage
  const paginatedData = sortedData.slice(startIndex, startIndex + itemsPerPage)

  useEffect(() => {
    if (totalPages > 0 && internalCurrentPage > totalPages) {
      setInternalCurrentPage(totalPages)
    }
  }, [totalPages, internalCurrentPage])

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }))
  }

  const handleDeleteRow = async (row) => {
    const rowId = row._id || row.id;
    try {
      setDeletingRowId(rowId);
      await onDelete(row);
    } catch (err) {
      console.error('Row delete error:', err);
    } finally {
      setDeletingRowId(null);
    }
  }

  if (loading) {
    return (
      <div className="w-full">
        <div className="rounded-lg border bg-white p-8">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
          </div>
        </div>
      </div>
    )
  }

  if (safeData.length === 0) {
    return (
      <div className="w-full">
        <div className="rounded-lg border bg-white p-8 text-center">
          <p className="text-black">{emptyMessage}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      <div className="rounded-lg border bg-white">
        {onBulkDelete && selectedIds.length > 0 && (
          <div className="px-6 py-3 border-b bg-red-50 flex justify-between items-center">
            <span className="text-sm font-medium text-red-800">
              {selectedIds.length} item{selectedIds.length > 1 ? 's' : ''} selected
            </span>
            <button 
              disabled={isBulkDeleting}
              onClick={async () => {
                if (window.confirm(`Are you sure you want to delete ${selectedIds.length} selected item${selectedIds.length > 1 ? 's' : ''}?`)) {
                  try {
                    setIsBulkDeleting(true);
                    await onBulkDelete(selectedIds);
                    setSelectedIds([]);
                  } catch (err) {
                    console.error('Bulk delete error:', err);
                  } finally {
                    setIsBulkDeleting(false);
                  }
                }
              }} 
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
            >
              {isBulkDeleting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin text-white" />
                  <span>Deleting...</span>
                </>
              ) : (
                <span>Delete Selected</span>
              )}
            </button>
          </div>
        )}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-gray-50">
                {onBulkDelete && (
                  <th className="px-6 py-3 text-left w-12">
                    <input 
                      type="checkbox" 
                      checked={paginatedData.length > 0 && paginatedData.every(row => selectedIds.includes(row._id || row.id))}
                      onChange={(e) => {
                        if (e.target.checked) {
                          const newIds = new Set([...selectedIds, ...paginatedData.map(r => r._id || r.id)]);
                          setSelectedIds(Array.from(newIds));
                        } else {
                          const pageIds = paginatedData.map(r => r._id || r.id);
                          setSelectedIds(selectedIds.filter(id => !pageIds.includes(id)));
                        }
                      }}
                      className="rounded border-gray-300 cursor-pointer"
                    />
                  </th>
                )}
                {columns.map((column) => (
                  <th
                    key={column.key}
                    style={column.width ? { width: column.width } : undefined}
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-black"
                  >
                    <button
                      className="flex items-center gap-1 text-black hover:text-gray-700"
                      onClick={() => handleSort(column.key)}
                    >
                      {column.label}
                      <ArrowUpDown className="h-4 w-4" />
                    </button>
                  </th>
                ))}
                {(onEdit || onDelete || actions.length > 0) && (
                  <th className="px-6 py-3 text-right text-black">Actions</th>
                )}
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((row, index) => {
                if (!row) return null; // Skip undefined/null rows
                const rowId = row._id || row.id;
                const isRowDeleting = deletingRowId === rowId;
                const isRowInBulk = isBulkDeleting && selectedIds.includes(rowId);
                
                return (
                  <tr
                    key={rowId || index}
                    className={`border-b bg-white hover:bg-gray-50 transition-opacity ${
                      isRowDeleting || isRowInBulk ? 'opacity-40 pointer-events-none bg-red-50/40' : ''
                    }`}
                  >
                    {onBulkDelete && (
                      <td className="px-6 py-4 w-12">
                        <input 
                          type="checkbox"
                          disabled={isBulkDeleting || isRowDeleting}
                          checked={selectedIds.includes(rowId)}
                          onChange={(e) => {
                            const id = rowId;
                            if (e.target.checked) {
                              setSelectedIds([...selectedIds, id]);
                            } else {
                              setSelectedIds(selectedIds.filter(item => item !== id));
                            }
                          }}
                          className="rounded border-gray-300 cursor-pointer disabled:opacity-50"
                        />
                      </td>
                    )}
                    {columns.map((column) => (
                      <td
                        key={column.key}
                        className="px-6 py-4 text-sm text-black"
                      >
                        {column.render ? column.render(row[column.key], row) : (row[column.key] || '')}
                      </td>
                    ))}
                    {(onEdit || onDelete || actions.length > 0) && (
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        {actions.map((action, idx) => (
                          action.show ? action.show(row) && (
                            <button
                              key={idx}
                              onClick={() => action.onClick(row)}
                              className="text-black hover:text-gray-700 mr-4"
                            >
                              {action.icon && <action.icon className="h-4 w-4 inline-block mr-1" />}
                              {action.label}
                            </button>
                          ) : (
                            <button
                              key={idx}
                              onClick={() => action.onClick(row)}
                              className="text-black hover:text-gray-700 mr-4"
                            >
                              {action.icon && <action.icon className="h-4 w-4 inline-block mr-1" />}
                              {action.label}
                            </button>
                          )
                        ))}
                        {onEdit && (
                          <button
                            onClick={() => onEdit(row)}
                            className="text-black hover:text-gray-700 mr-4"
                          >
                            Edit
                          </button>
                        )}
                        {onDelete && (
                          <button
                            onClick={() => handleDeleteRow(row)}
                            disabled={isRowDeleting || isBulkDeleting}
                            className="text-red-600 hover:text-red-800 disabled:opacity-50 inline-flex items-center gap-1 transition-colors"
                          >
                            {isRowDeleting ? (
                              <>
                                <Loader2 className="h-3.5 w-3.5 animate-spin text-red-600" />
                                <span>Deleting...</span>
                              </>
                            ) : (
                              'Delete'
                            )}
                          </button>
                        )}
                      </td>
                    )}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-4 py-3 bg-white border-t">
        <div className="flex items-center gap-2">
          <button
            onClick={() => handlePageChange(1)}
            disabled={validCurrentPage === 1}
            className="p-1 rounded-md hover:bg-gray-100 disabled:opacity-50 text-black"
          >
            <ChevronsLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => handlePageChange(Math.max(1, validCurrentPage - 1))}
            disabled={validCurrentPage === 1}
            className="p-1 rounded-md hover:bg-gray-100 disabled:opacity-50 text-black"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="text-sm text-black">
            Page {validCurrentPage} of {Math.max(1, totalPages)}
          </span>
          <button
            onClick={() => handlePageChange(Math.min(totalPages, validCurrentPage + 1))}
            disabled={validCurrentPage >= totalPages}
            className="p-1 rounded-md hover:bg-gray-100 disabled:opacity-50 text-black"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <button
            onClick={() => handlePageChange(totalPages)}
            disabled={validCurrentPage >= totalPages}
            className="p-1 rounded-md hover:bg-gray-100 disabled:opacity-50 text-black"
          >
            <ChevronsRight className="h-5 w-5" />
          </button>
        </div>
        <div className="text-sm text-black">
          Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, safeData.length)} of {safeData.length} results
        </div>
      </div>
    </div>
  )
} 
