'use client';
import { useRef, useEffect, useState } from 'react';

export default function ScrollReveal({ children, className = '', y = 40, duration = 0.8, delay = 0 }) {
    const elRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!elRef.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.15 }
        );
        observer.observe(elRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={elRef}
            className={`w-full ${className}`}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : `translateY(${y}px)`,
                transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
                willChange: isVisible ? 'auto' : 'opacity, transform'
            }}
        >
            {children}
        </div>
    );
}
