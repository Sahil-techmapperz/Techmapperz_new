'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const DEFAULT_PLACEHOLDER = '/placeholder-image.png';

export default function BlogImage({
  src,
  alt = 'Blog article image',
  fill = false,
  width,
  height,
  className = '',
  sizes,
  priority = false,
  loading,
  style
}) {
  const normalizedSrc = typeof src === 'string' && src.trim() ? src.trim() : DEFAULT_PLACEHOLDER;
  const [currentSrc, setCurrentSrc] = useState(normalizedSrc);
  const [hasError, setHasError] = useState(false);

  // Sync state if src prop changes
  useEffect(() => {
    const nextSrc = typeof src === 'string' && src.trim() ? src.trim() : DEFAULT_PLACEHOLDER;
    setCurrentSrc(nextSrc);
    setHasError(false);
  }, [src]);

  const isExternal = typeof currentSrc === 'string' && (currentSrc.startsWith('http://') || currentSrc.startsWith('https://'));

  const handleError = () => {
    if (!hasError && currentSrc !== DEFAULT_PLACEHOLDER) {
      setHasError(true);
      setCurrentSrc(DEFAULT_PLACEHOLDER);
    }
  };

  const imageProps = {
    src: currentSrc,
    alt: alt || 'Blog article image',
    className,
    priority,
    sizes,
    style,
    unoptimized: isExternal || hasError,
    onError: handleError
  };

  if (loading) {
    imageProps.loading = loading;
  }

  if (fill) {
    imageProps.fill = true;
  } else {
    if (width) imageProps.width = width;
    if (height) imageProps.height = height;
  }

  return <Image {...imageProps} />;
}
