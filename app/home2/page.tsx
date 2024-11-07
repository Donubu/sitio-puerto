import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Megaphone, Palette, BarChart, Users, Share2, Code, Film, Mail } from 'lucide-react';
import { HeroSlider } from '@/components/hero-slider';
import { AnimatedSection } from '@/components/animated-section';
import { PortfolioMasonry } from '@/components/portfolio-masonry';
import { PortfolioGrid } from '@/components/portfolio-grid';

const services = [
  {
    title: 'Publicidad',
    description: 'Campañas efectivas que conectan con tu audiencia',
    icon: Megaphone,
    bgColor: '#3851C6',
  },
  {
    title: 'Creatividad',
    description: 'Ideas innovadoras que destacan tu marca',
    icon: Palette,
    bgColor: '#EA5321',
  },
  {
    title: 'Planning',
    description: 'Estrategias basadas en datos y resultados',
    icon: BarChart,
    bgColor: '#005240',
  },
  {
    title: 'Relacionamiento',
    description: 'Conexiones significativas con tu público',
    icon: Users,
    bgColor: '#F8B30A',
  },
  {
    title: 'Social Media',
    description: 'Gestión profesional de redes sociales',
    icon: Share2,
    bgColor: '#3851C6',
  },
  {
    title: 'Desarrollo Web',
    description: 'Experiencias digitales excepcionales',
    icon: Code,
    bgColor: '#EA5321',
  },
  {
    title: 'Producción',
    description: 'Contenido audiovisual de alto impacto',
    icon: Film,
    bgColor: '#005240',
  },
  {
    title: 'Email Marketing',
    description: 'Estrategias efectivas de conversión',
    icon: Mail,
    bgColor: '#F8B30A',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section with Video Slider */}
      <HeroSlider />

      {/* Portfolio Masonry */}
      <PortfolioMasonry />

      {/* Portfolio Grid */}
      <PortfolioGrid />

      {/* Services Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Nuestros Servicios
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Soluciones integrales para hacer crecer tu negocio
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <AnimatedSection
                key={index}
                animation={index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}
                delay={(index + 1) * 200}
                className="group p-8 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1"
                style={{ backgroundColor: service.bgColor }}
              >
                <service.icon className="h-12 w-12 text-white mb-4 transform group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-white/90">{service.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            ¿Listo para impulsar tu negocio?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos.
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