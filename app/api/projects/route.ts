import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getProjectBySlug } from '@/lib/projects';

// GET /api/projects
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (slug) {
      const project = getProjectBySlug(slug);
      
      if (!project) {
        return NextResponse.json(
          { error: 'Project not found' },
          { status: 404 }
        );
      }

      return NextResponse.json(project);
    }

    // If no slug is provided, return all projects
    const projects = [
      getProjectBySlug('techcorp-digital-campaign'),
      getProjectBySlug('eco-friendly-branding'),
      getProjectBySlug('fintech-app-launch'),
      getProjectBySlug('smart-city-campaign'),
      getProjectBySlug('health-tech-platform'),
    ].filter((project): project is NonNullable<typeof project> => project !== undefined);

    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}