import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

interface ContactFormData {
  nombre: string;
  email: string;
  telefono?: string;
  empresa?: string;
  mensaje: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.nombre || !data.email || !data.mensaje) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Log the form submission (you can replace this with your actual implementation)
    console.log('Contact Form Submission:', {
      timestamp: new Date().toISOString(),
      ...data
    });

    return NextResponse.json({
      message: 'Form submitted successfully',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}