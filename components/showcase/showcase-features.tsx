'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatedSection } from '@/components/animated-section';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Brain, Lightbulb, Target, Users, Rocket, Shield } from 'lucide-react';

const features = [
  {
    id: 'estrategia',
    icon: Brain,
    color: '#3851C6',
    title: 'Estrategia Digital',
    description: 'Desarrollamos estrategias personalizadas basadas en datos y análisis de mercado.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80',
    benefits: [
      'Análisis de mercado detallado',
      'Planificación estratégica',
      'KPIs personalizados',
      'Optimización continua'
    ]
  },
  {
    id: 'creatividad',
    icon: Lightbulb,
    color: '#EA5321',
    title: 'Creatividad e Innovación',
    description: 'Creamos conceptos únicos que destacan tu marca en el mercado digital.',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=2000&q=80',
    benefits: [
      'Diseño visual impactante',
      'Contenido original',
      'Experiencias memorables',
      'Innovación constante'
    ]
  },
  {
    id: 'resultados',
    icon: Target,
    color: '#005240',
    title: 'Resultados Medibles',
    description: 'Implementamos soluciones que generan resultados tangibles y medibles.',
    image: 'https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?auto=format&fit=crop&w=2000&q=80',
    benefits: [
      'Métricas en tiempo real',
      'Reportes detallados',
      'ROI optimizado',
      'Análisis predictivo'
    ]
  },
  {
    id: 'equipo',
    icon: Users,
    color: '#F8B30A',
    title: 'Equipo Experto',
    description: 'Contamos con profesionales especializados en cada área digital.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80',
    benefits: [
      'Especialistas certificados',
      'Formación continua',
      'Experiencia comprobada',
      'Trabajo colaborativo'
    ]
  }
];

export function ShowcaseFeatures() {
  const [activeTab, setActiveTab] = useState(features[0].id);

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Características Destacadas
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Descubre lo que nos hace diferentes
          </p>
        </AnimatedSection>

        <Tabs defaultValue={features[0].id} className="space-y-8">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-transparent h-auto">
            {features.map((feature) => (
              <TabsTrigger
                key={feature.id}
                value={feature.id}
                className="data-[state=active]:shadow-lg data-[state=active]:border-none p-4 h-auto flex flex-col items-center gap-2 transition-all duration-300 hover:bg-gray-50"
                style={{ 
                  '--feature-color': feature.color,
                  borderColor: activeTab === feature.id ? feature.color : 'transparent'
                } as any}
                onClick={() => setActiveTab(feature.id)}
              >
                <feature.icon 
                  className="w-6 h-6 mb-2"
                  style={{ color: feature.color }}
                />
                <span className="text-sm font-medium">{feature.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {features.map((feature) => (
            <TabsContent key={feature.id} value={feature.id}>
              <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold" style={{ color: feature.color }}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                  <ul className="space-y-4">
                    {feature.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: feature.color }}
                        />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </AnimatedSection>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}