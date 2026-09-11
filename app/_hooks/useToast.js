'use client';

import { useCallback } from 'react';

/**
 * Lightweight, zero-dependency useToast hook
 * Replaces @chakra-ui/react useToast with 100% Tailwind CSS compatibility
 * 
 * Usage:
 * const toast = useToast();
 * toast({
 *   title: 'Success',
 *   description: 'Your message has been sent',
 *   status: 'success', // 'success' | 'error' | 'warning' | 'info'
 *   duration: 5000,
 *   isClosable: true,
 *   position: 'top-right' // 'top-right' | 'bottom-right' | 'top-center' | 'bottom-center'
 * });
 */
export function useToast() {
  const toast = useCallback((options) => {
    if (typeof window === 'undefined') return;

    const event = new CustomEvent('techmapperz-toast', {
      detail: {
        id: `toast-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        title: options?.title || '',
        description: options?.description || '',
        status: options?.status || 'info',
        duration: options?.duration !== undefined ? options.duration : 5000,
        isClosable: options?.isClosable !== false,
        position: options?.position || 'top-right',
      }
    });

    window.dispatchEvent(event);
  }, []);

  return toast;
}

export default useToast;
