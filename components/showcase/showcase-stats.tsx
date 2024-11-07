'use client';

import { useInView } from 'react-intersection-observer';
import { AnimatedSection } from '@/components/animated-section';
import { AnimatedCounter } from '@/components/animated-counter';
import { Users, Target, Award, TrendingUp } from 'lucide-react';

const stats = [
  {
    name: 'Clientes Activos',
    value: 150,
    suffix: '+',
    description: 'empresas confían en nosotros',
    icon: Users,
    color: '#3851C6'
  },
  {
    name: 'Proyectos Completados',
    value: 500,
    suffix: '+',
    description: 'casos de éxito',
    icon: Target,
    color: '#EA5321'
  },
  {
    name: 'Premios Recibidos',
    value: 25,
    suffix: '',
    description: 'reconocimientos internacionales',
    icon: Award,
    color: '#005240'
  },
  {
    name: 'Crecimiento Anual',
    value: 40,
    suffix: '%',
    description: 'en los últimos 3 años',
    icon: TrendingUp,
    color: '#F8B30A'
  }
];

export function ShowcaseStats() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Números que Hablan por Sí Solos
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Resultados que respaldan nuestra experiencia y compromiso
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={index * 200}
              className="relative p-8 rounded-2xl bg-white shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-10 transition-opacity duration-300 group-hover:opacity-20"
                style={{ backgroundColor: stat.color }} />
              
              <stat.icon 
                className="h-10 w-10 mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ color: stat.color }}
              />
              
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  {stat.name}
                </h3>
                <div className="text-4xl font-bold" style={{ color: stat.color }}>
                  {inView && <AnimatedCounter end={stat.value} suffix={stat.suffix} />}
                </div>
                <p className="text-sm text-gray-600">
                  {stat.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}