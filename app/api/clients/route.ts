import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getAllClients, getAllTestimonials } from '@/lib/clients';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');

    if (type === 'testimonials') {
      const testimonials = getAllTestimonials();
      return NextResponse.json(testimonials);
    }

    const clients = getAllClients();
    return NextResponse.json(clients);
  } catch (error) {
    console.error('Error fetching clients:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}