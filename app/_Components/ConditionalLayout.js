'use client'

import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'

// Import Navbar and Footer
import Navbar from './Navbar'
import SmoothScroll from './SmoothScroll'
const Footer = dynamic(() => import('./Footer'))

export default function ConditionalLayout({ children }) {
  const pathname = usePathname()
  const isAdminRoute = pathname?.startsWith('/admin')

  // For admin routes, don't show Navbar and Footer
  if (isAdminRoute) {
    return <main>{children}</main>
  }

  // For regular routes, show Navbar, Footer and SmoothScroll
  return (
    <SmoothScroll>
      <Navbar />
      <main id="main-content" role="main">{children}</main>
      <Footer />
    </SmoothScroll>
  )
}

