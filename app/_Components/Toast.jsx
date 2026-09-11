'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { CheckCircle2, AlertCircle, AlertTriangle, Info, X } from 'lucide-react';

export default function ToastContainer() {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  useEffect(() => {
    const handleToastEvent = (e) => {
      const newToast = e.detail;
      if (!newToast) return;

      setToasts((prev) => [...prev, newToast]);

      if (newToast.duration && newToast.duration > 0) {
        setTimeout(() => {
          removeToast(newToast.id);
        }, newToast.duration);
      }
    };

    window.addEventListener('techmapperz-toast', handleToastEvent);
    return () => {
      window.removeEventListener('techmapperz-toast', handleToastEvent);
    };
  }, [removeToast]);

  if (toasts.length === 0) return null;

  // Group toasts by position
  const topToasts = toasts.filter((t) => t.position?.startsWith('top'));
  const bottomToasts = toasts.filter((t) => t.position?.startsWith('bottom') || !t.position?.startsWith('top'));

  const statusConfig = {
    success: {
      bg: 'bg-emerald-600',
      border: 'border-emerald-500',
      icon: <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
    },
    error: {
      bg: 'bg-rose-600',
      border: 'border-rose-500',
      icon: <AlertCircle className="w-5 h-5 text-white flex-shrink-0" />
    },
    warning: {
      bg: 'bg-amber-600',
      border: 'border-amber-500',
      icon: <AlertTriangle className="w-5 h-5 text-white flex-shrink-0" />
    },
    info: {
      bg: 'bg-blue-600',
      border: 'border-blue-500',
      icon: <Info className="w-5 h-5 text-white flex-shrink-0" />
    }
  };

  const renderToastItem = (toast) => {
    const config = statusConfig[toast.status] || statusConfig.info;

    return (
      <div
        key={toast.id}
        role="alert"
        className={`flex items-start gap-3 w-full max-w-sm p-4 rounded-xl text-white shadow-2xl border ${config.bg} ${config.border} transform transition-all duration-300 animate-in fade-in slide-in-from-top-2`}
      >
        <div className="mt-0.5">{config.icon}</div>
        <div className="flex-1 min-w-0">
          {toast.title && (
            <h4 className="font-bold text-sm leading-tight text-white mb-0.5">
              {toast.title}
            </h4>
          )}
          {toast.description && (
            <p className="text-xs text-white/90 leading-relaxed break-words">
              {toast.description}
            </p>
          )}
        </div>
        {toast.isClosable && (
          <button
            onClick={() => removeToast(toast.id)}
            aria-label="Close notification"
            className="text-white/70 hover:text-white transition-colors p-1 -mr-1 -mt-1 rounded-lg hover:bg-white/10"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    );
  };

  return (
    <>
      {topToasts.length > 0 && (
        <div className="fixed top-5 right-5 z-[999999] flex flex-col gap-2 pointer-events-auto max-w-[calc(100vw-2.5rem)]">
          {topToasts.map(renderToastItem)}
        </div>
      )}
      {bottomToasts.length > 0 && (
        <div className="fixed bottom-5 right-5 z-[999999] flex flex-col gap-2 pointer-events-auto max-w-[calc(100vw-2.5rem)]">
          {bottomToasts.map(renderToastItem)}
        </div>
      )}
    </>
  );
}
