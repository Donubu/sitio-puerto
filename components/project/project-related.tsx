import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';

interface Project {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  thumbnail: string;
}

interface ProjectRelatedProps {
  projects: Project[];
}

export function ProjectRelated({ projects }: ProjectRelatedProps) {
  if (!projects || projects.length === 0) return null;
  
  return (
    <section className="py-24 bg-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Proyectos Relacionados
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animation={index === 0 ? 'slide-in-left' : 'slide-in-right'}
              className="group relative aspect-video rounded-lg overflow-hidden"
            >
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white/80 mb-4">
                  {project.excerpt}
                </p>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="self-start text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2 group/link"
                >
                  Ver proyecto
                  <ArrowRight className="h-4 w-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}