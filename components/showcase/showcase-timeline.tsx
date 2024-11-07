'use client';

import { AnimatedSection } from '@/components/animated-section';
import { Calendar, Target, Users, Award, Rocket, Flag } from 'lucide-react';

const timelineEvents = [
  {
    year: '2018',
    title: 'Fundación',
    description: 'Iniciamos operaciones con un equipo de 5 personas',
    icon: Flag,
    color: '#3851C6'
  },
  {
    year: '2019',
    title: 'Primer Gran Cliente',
    description: 'Expandimos nuestro equipo y cartera de servicios',
    icon: Users,
    color: '#EA5321'
  },
  {
    year: '2020',
    title: 'Expansión Digital',
    description: 'Incorporamos nuevas tecnologías y metodologías',
    icon: Rocket,
    color: '#005240'
  },
  {
    year: '2021',
    title: 'Reconocimiento Internacional',
    description: 'Obtuvimos premios por nuestro trabajo creativo',
    icon: Award,
    color: '#F8B30A'
  },
  {
    year: '2022',
    title: 'Certificación ISO',
    description: 'Alcanzamos estándares internacionales de calidad',
    icon: Target,
    color: '#3851C6'
  },
  {
    year: '2023',
    title: 'Presente y Futuro',
    description: 'Continuamos innovando y creciendo junto a nuestros clientes',
    icon: Calendar,
    color: '#EA5321'
  }
];

export function ShowcaseTimeline() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nuestra Trayectoria
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Un viaje de crecimiento y evolución constante
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <AnimatedSection
                key={index}
                animation={index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}
                delay={index * 200}
                className="relative flex items-center justify-between group"
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'order-last text-left pl-8'}`}>
                  <div className="space-y-2">
                    <div 
                      className="text-2xl font-bold transition-colors duration-300 group-hover:text-gray-600"
                      style={{ color: event.color }}
                    >
                      {event.year}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {event.title}
                    </h3>
                    <p className="text-gray-600">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg border-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ borderColor: event.color }}>
                  <event.icon 
                    className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: event.color }}
                  />
                </div>

                <div className="w-5/12" />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}