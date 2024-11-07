'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/animated-section';
import { fetchProjects } from '@/lib/api';

interface Project {
  id: string;
  title: string;
  excerpt: string;
  heroMedia: Array<{
    type: 'image' | 'video';
    url: string;
  }>;
  thumbnail: string;
  slug: string;
}

export function PortfolioMasonry() {
  const [projects, setProjects] = useState<Project[]>([]);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement }>({});

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (error) {
        console.error('Error loading projects:', error);
      }
    };

    loadProjects();
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nuestro Portafolio
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Descubre algunos de nuestros trabajos más destacados
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-4 auto-rows-[300px] gap-0">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animation={index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}
              delay={(index % 4) * 200}
              className={`group relative overflow-hidden ${index === 0 || index === 3 ? 'col-span-2 row-span-2' : 'col-span-2'}`}
            >
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {project.heroMedia[0].type === 'video' && (
                <video
                  ref={el => {
                    if (el) videoRefs.current[index] = el;
                  }}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  muted
                  loop
                  playsInline
                  onCanPlay={() => {
                    if (videoRefs.current[index]) {
                      videoRefs.current[index].play();
                    }
                  }}
                >
                  <source src={project.heroMedia[0].url} type="video/mp4" />
                </video>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {project.excerpt}
                  </p>
                </div>
                <Link 
                  href={`/portfolio/${project.slug}`}
                  className="self-end text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2 group/link"
                >
                  Ver más
                  <ArrowRight className="h-4 w-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="animated-button">
            <Link href="/portfolio">
              <span className="inline-flex items-center">
                Ver todo el portafolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}