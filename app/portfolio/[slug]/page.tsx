import * as React from 'react';
import { notFound } from 'next/navigation';
import { ProjectHeader } from '@/components/project/project-header';
import { ProjectMeta } from '@/components/project/project-meta';
import { ProjectContent } from '@/components/project/project-content';
import { ProjectRelated } from '@/components/project/project-related';
import { ProjectHero } from '@/components/project/project-hero';
import { getProjectBySlug, getRelatedProjects } from '@/lib/projects';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  try {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
      return notFound();
    }

    const relatedProjects = getRelatedProjects(project.id, 2);

    return (
      <main style={{ backgroundColor: project.backgroundColor }}>
        <ProjectHeader
          title={project.title}
          excerpt={project.excerpt}
        />

        <section className="">
          <ProjectHero media={project.heroMedia} />

          <div className="bg-white rounded  max-w-7xl mx-auto p-6 lg:px-8 mt-32">
            <div className="grid grid-cols-1 lg:grid-cols-[350px,1fr] gap-12">
              <div className="">
                <ProjectMeta
                  publishDate={project.publishDate}
                  awards={project.awards}
                  client={project.client}
                  tags={project.tags}
                  category={project.category}
                />
              </div>

              <ProjectContent content={project.content} />
            </div>
          </div>
        </section>

        {relatedProjects.length > 0 && (
          <ProjectRelated projects={relatedProjects} />
        )}
      </main>
    );
  } catch (error) {
    console.error('Error loading project:', error);
    return notFound();
  }
}