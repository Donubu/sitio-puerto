'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';

interface ContentBlock {
  type: 'text' | 'image' | 'video' | 'quote' | 'highlight' | 'heading';
  content: string;
  caption?: string;
  level?: 1 | 2 | 3;
}

interface ProjectContentProps {
  content: ContentBlock[];
}

export function ProjectContent({ content }: ProjectContentProps) {
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(videoRefs.current).forEach((video) => {
      if (video) {
        observer.observe(video);
      }
    });

    return () => observer.disconnect();
  }, []);

  const renderContent = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case 'heading':
        return (
          <div className="my-8" key={index}>
            {block.level === 1 && (
              <h2 className="text-3xl font-bold text-gray-900">
                {block.content}
              </h2>
            )}
            {block.level === 2 && (
              <h3 className="text-2xl font-bold text-gray-800">
                {block.content}
              </h3>
            )}
            {block.level === 3 && (
              <h4 className="text-xl font-semibold text-gray-800">
                {block.content}
              </h4>
            )}
          </div>
        );

      case 'text':
        return (
          <div 
            key={index}
            className="mb-6 text-base text-gray-700"
            dangerouslySetInnerHTML={{ __html: block.content }}
          />
        );

      case 'quote':
        return (
          <blockquote 
            key={index} 
            className="my-8 relative bg-gray-50 rounded-xl p-8 border-l-4 border-gray-900"
          >
            <Quote className="absolute -top-4 -left-4 h-8 w-8 text-gray-300 bg-white rounded-full p-1" />
            <p className="text-lg italic text-gray-800 mb-4">
              {block.content}
            </p>
            {block.caption && (
              <footer className="text-sm text-gray-600">
                — {block.caption}
              </footer>
            )}
          </blockquote>
        );

      case 'highlight':
        return (
          <div 
            key={index}
            className="my-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg"
          >
            <p className="text-base text-gray-800">
              {block.content}
            </p>
          </div>
        );

      case 'image':
        return (
          <figure key={index} className="my-8">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={block.content}
                alt={block.caption || ''}
                fill
                className="object-cover"
              />
            </div>
            {block.caption && (
              <figcaption className="mt-2 text-center text-sm text-gray-600">
                {block.caption}
              </figcaption>
            )}
          </figure>
        );

      case 'video':
        return (
          <figure key={index} className="my-8">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <video
                ref={el => {
                  if (el) videoRefs.current[index] = el;
                }}
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
              >
                <source src={block.content} type="video/mp4" />
              </video>
            </div>
            {block.caption && (
              <figcaption className="mt-2 text-center text-sm text-gray-600">
                {block.caption}
              </figcaption>
            )}
          </figure>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-none">
      {content.map((block, index) => renderContent(block, index))}
    </div>
  );
}