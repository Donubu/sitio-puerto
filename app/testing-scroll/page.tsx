'use client';

import { ProjectSection } from '@/components/project-section';
import { projects } from './data';

export default function TestingScrollPage() {
  return (
    <main className="bg-black">
      <div className="relative pt-20">
        {projects.map((project, index) => (
          <ProjectSection
            key={index}
            project={project}
            index={index}
          />
        ))}
      </div>
    </main>
  );
}