'use client';

import { useState, useEffect } from 'react';
import { PageHeader } from '@/components/page-header';
import { AnimatedSection } from '@/components/animated-section';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Heart, Users, Award } from 'lucide-react';
import { fetchMembers } from '@/lib/api';
import type { Member } from '@/lib/members';

const values = [
  {
    icon: Target,
    title: 'Excelencia',
    description: 'Buscamos la perfección en cada proyecto, superando las expectativas de nuestros clientes.',
    bgColor: '#3851C6',
  },
  {
    icon: Heart,
    title: 'Pasión',
    description: 'Amamos lo que hacemos y eso se refleja en la calidad de nuestro trabajo.',
    bgColor: '#EA5321',
  },
  {
    icon: Users,
    title: 'Colaboración',
    description: 'Trabajamos en estrecha colaboración con nuestros clientes para alcanzar objetivos comunes.',
    bgColor: '#005240',
  },
  {
    icon: Award,
    title: 'Innovación',
    description: 'Constantemente exploramos nuevas ideas y tecnologías para mantenernos a la vanguardia.',
    bgColor: '#F7DD01',
  },
];

export default function NosotrosPage() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMembers = async () => {
      try {
        const data = await fetchMembers();
        setMembers(data);
      } catch (err) {
        setError('Error al cargar el equipo');
        console.error('Error loading members:', err);
      } finally {
        setLoading(false);
      }
    };

    loadMembers();
  }, []);

  return (
    <>
      <PageHeader
        title="Sobre Nosotros"
        description="Somos una agencia de publicidad comprometida con el éxito de nuestros clientes, impulsando su crecimiento a través de estrategias innovadoras y creativas."
        videoUrl="https://static.puer.to/videos/2.mp4"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection animation="slide-in-left" className="relative h-[400px] lg:h-[600px]">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Nuestro equipo trabajando"
                fill
                className="object-cover rounded-lg"
              />
            </AnimatedSection>
            <AnimatedSection animation="slide-in-right" className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Nuestra Historia
              </h2>
              <p className="text-lg text-gray-600">
                Fundada en 2014, Puerto nació con la visión de transformar el panorama publicitario en Chile. Desde entonces, hemos ayudado a más de 150 empresas a alcanzar sus objetivos de marketing y comunicación.
              </p>
              <p className="text-lg text-gray-600">
                Nuestro enfoque único combina creatividad, estrategia y tecnología para crear campañas que no solo captan la atención, sino que también generan resultados medibles.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Nuestros Valores
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Los principios que guían nuestro trabajo diario
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection
                key={index}
                animation={index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}
                delay={(index + 1) * 200}
                className="p-6 rounded-lg shadow-lg"
                style={{ background: value.bgColor }}
              >
                <value.icon className="h-12 w-12 text-white mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-white/90">{value.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Nuestro Equipo
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Los profesionales detrás de nuestro éxito
            </p>
          </AnimatedSection>

          {loading && (
            <div className="text-center py-12">
              <p className="text-gray-600">Cargando equipo...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-red-600">{error}</p>
            </div>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {members.map((member, index) => (
                <AnimatedSection
                  key={member.id}
                  animation="fade-up"
                  delay={index * 200}
                  className="group relative"
                >
                  <div className="relative h-96 w-full overflow-hidden rounded-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                        <p className="text-sm text-gray-300 mb-4">{member.role}</p>
                        {member.bio && (
                          <p className="text-sm text-white/90 mb-4">{member.bio}</p>
                        )}
                        {member.socialLinks && (
                          <div className="flex gap-4">
                            {member.socialLinks.linkedin && (
                              <a 
                                href={member.socialLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/80 hover:text-white transition-colors"
                              >
                                LinkedIn
                              </a>
                            )}
                            {member.socialLinks.twitter && (
                              <a 
                                href={member.socialLinks.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/80 hover:text-white transition-colors"
                              >
                                Twitter
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            ¿Quieres ser parte de nuestra historia?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Únete a nosotros y hagamos crecer tu negocio juntos.
          </p>
          <Button size="lg" asChild className="animated-button">
            <Link href="/contacto">
              <span className="inline-flex items-center">Conversemos hoy <ArrowRight className="ml-2 h-5 w-5" /></span>
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}