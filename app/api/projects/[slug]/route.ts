import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getProjectBySlug } from '@/lib/projects';

export const dynamic = 'force-dynamic';

type Args = { params: Promise<{ slug: string }> };

export async function GET( request: Request, { params } : Args ) {
  try {
    const {slug} = await params;

    const project = getProjectBySlug(slug);

    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error('Error fetching project:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}