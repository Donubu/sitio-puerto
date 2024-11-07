'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/page-header';
import { AnimatedSection } from '@/components/animated-section';
import { fetchClients, fetchTestimonials } from '@/lib/api';
import type { Client, Testimonial } from '@/lib/clients';

export default function ClientesPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [clientsData, testimonialsData] = await Promise.all([
          fetchClients(),
          fetchTestimonials()
        ]);
        
        setClients(clientsData);
        setTestimonials(testimonialsData);
      } catch (err) {
        setError('Error al cargar los datos');
        console.error('Error loading data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Cargando...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <>
      <PageHeader
        title="Nuestros Clientes"
        description="Empresas que confían en nosotros para alcanzar sus objetivos de marketing y comunicación."
        videoUrl="https://static.puer.to/videos/4.mp4"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Empresas que confían en nosotros
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Trabajamos con empresas líderes en diferentes industrias
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {clients.map((client, index) => (
              <AnimatedSection
                key={client.id}
                animation={index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}
                delay={(index % 4) * 200}
                className="group relative aspect-[3/2] rounded-lg overflow-hidden"
                style={{ background: client.bgColor }}
              >
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="relative w-full h-full">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {client.name}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Lo que dicen nuestros clientes
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Testimonios de empresas que han confiado en nosotros
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection
                key={testimonial.id}
                animation="fade-up"
                delay={index * 200}
                className="p-8 rounded-lg shadow-lg"
                style={{ background: testimonial.bgColor }}
              >
                <blockquote className="relative">
                  <p className="text-lg text-white italic mb-4">
                    "{testimonial.quote}"
                  </p>
                  <footer className="mt-4">
                    <p className="text-base font-semibold text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-white/90">
                      {testimonial.role}
                    </p>
                  </footer>
                </blockquote>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}