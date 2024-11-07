import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getRelatedProjects } from '@/lib/projects';

// GET /api/projects/related?id=1&limit=2
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const limit = parseInt(searchParams.get('limit') || '2', 10);

    if (!id) {
      return NextResponse.json(
        { error: 'Project ID is required' },
        { status: 400 }
      );
    }

    const relatedProjects = getRelatedProjects(id, limit);

    return NextResponse.json(relatedProjects);
  } catch (error) {
    console.error('Error fetching related projects:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}