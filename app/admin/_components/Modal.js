import { X } from 'lucide-react'

export default function Modal({ isOpen, onClose, title, children, size = 'md', fullPage = false }) {
  if (!isOpen) return null

  const sizeClasses = {
    sm: 'max-w-xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'w-full max-w-[96vw] h-[94vh] rounded-2xl m-auto'
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-2 sm:p-4">
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity" onClick={onClose} />
        
        <div className={`relative bg-white shadow-2xl transform transition-all border border-[#DDE3EA] ${
          fullPage ? sizeClasses.full : `w-full rounded-2xl ${sizeClasses[size] || 'max-w-4xl'}`
        }`}>
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#DDE3EA] bg-white rounded-t-2xl">
            <h2 className="text-xl font-bold text-[#0C2E60]">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <span className="sr-only">Close</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className={`${fullPage ? 'h-[calc(100vh-4rem)] overflow-y-auto' : 'p-4'}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
} 
