'use client';

import { useRef, useEffect } from 'react';

interface ProjectVideoProps {
  url: string;
  isInView: boolean;
  progress: number;
}

export function ProjectVideo({ url, isInView, progress }: ProjectVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (isInView) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isInView]);

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover opacity-80 will-change-transform"
      style={{
        transform: `translate3d(0, ${progress * 25}px, 0)`
      }}
    >
      <source src={url} type="video/mp4" />
    </video>
  );
}