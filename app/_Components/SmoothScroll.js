'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'

export default function SmoothScroll({ children }) {
    const pathname = usePathname()

    useEffect(() => {
        // Disable Lenis for admin dashboard where native scrolling is needed
        if (pathname && pathname.startsWith('/admin')) {
            return
        }

        // Disable on touch devices or small screens to preserve battery and use native momentum scrolling
        const isTouch = typeof window !== 'undefined' && (
            window.matchMedia('(pointer: coarse)').matches ||
            window.innerWidth < 1024 ||
            window.matchMedia('(prefers-reduced-motion: reduce)').matches
        )

        if (isTouch) {
            return
        }

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        })

        let animationFrameId

        function raf(time) {
            lenis.raf(time)
            animationFrameId = requestAnimationFrame(raf)
        }

        animationFrameId = requestAnimationFrame(raf)

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId)
            }
            lenis.destroy()
        }
    }, [pathname])

    return children
}
