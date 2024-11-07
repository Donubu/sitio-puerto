import { Button } from '@/components/ui/button';
import { ArrowRight, Megaphone, Palette, BarChart, Users, Share2, Code, Film, Mail } from 'lucide-react';
import Link from 'next/link';
import { PageHeader } from '@/components/page-header';
import { AnimatedSection } from '@/components/animated-section';
import { AnimatedCounter } from '@/components/animated-counter';

const services = [
  {
    icon: Megaphone,
    title: 'Publicidad',
    description: 'Desarrollamos campañas publicitarias efectivas que conectan con tu audiencia objetivo. Utilizamos una combinación de medios tradicionales y digitales para maximizar el alcance y el impacto.',
    features: [
      'Publicidad digital',
      'Campañas SEM',
      'Publicidad tradicional',
      'Marketing de contenidos',
    ],
    bgColor: '#3851C6',
  },
  {
    icon: Palette,
    title: 'Creatividad',
    description: 'Transformamos ideas en experiencias visuales memorables. Nuestro equipo creativo desarrolla conceptos únicos que destacan tu marca en el mercado.',
    features: [
      'Diseño gráfico',
      'Dirección de arte',
      'Identidad visual',
      'Branding',
    ],
    bgColor: '#EA5321',
  },
  {
    icon: BarChart,
    title: 'Planning',
    description: 'Desarrollamos estrategias integrales basadas en datos para alcanzar tus objetivos de negocio y maximizar el retorno de inversión.',
    features: [
      'Estrategia digital',
      'Análisis de mercado',
      'KPIs y métricas',
      'Optimización continua',
    ],
    bgColor: '#005240',
  },
  {
    icon: Users,
    title: 'Relacionamiento',
    description: 'Construimos y mantenemos relaciones significativas con tu público objetivo a través de estrategias de comunicación efectivas.',
    features: [
      'Relaciones públicas',
      'Gestión de eventos',
      'Influencer marketing',
      'Comunicación corporativa',
    ],
    bgColor: '#F8B30A',
  },
  {
    icon: Share2,
    title: 'Social Media',
    description: 'Gestionamos tus redes sociales de manera profesional, creando contenido relevante que genera engagement y construye comunidad.',
    features: [
      'Gestión de redes',
      'Contenido estratégico',
      'Community management',
      'Análisis y reportes',
    ],
    bgColor: '#3851C6',
  },
  {
    icon: Code,
    title: 'Desarrollo Web',
    description: 'Creamos experiencias digitales excepcionales, desde sitios web corporativos hasta plataformas e-commerce avanzadas.',
    features: [
      'Diseño web',
      'Desarrollo frontend',
      'E-commerce',
      'Optimización SEO',
    ],
    bgColor: '#EA5321',
  },
  {
    icon: Film,
    title: 'Producción',
    description: 'Producimos contenido audiovisual de alta calidad que cuenta tu historia de manera impactante y memorable.',
    features: [
      'Video marketing',
      'Fotografía',
      'Motion graphics',
      'Producción ejecutiva',
    ],
    bgColor: '#005240',
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Diseñamos y ejecutamos estrategias de email marketing efectivas para nutrir y convertir leads en clientes.',
    features: [
      'Automatización',
      'Segmentación',
      'A/B testing',
      'Análisis de resultados',
    ],
    bgColor: '#F8B30A',
  },
];

export default function ServiciosPage() {
  return (
    <>
      <PageHeader
        title="Nuestros Servicios"
        description="Soluciones integrales de marketing diseñadas para impulsar tu negocio al siguiente nivel."
        videoUrl="https://static.puer.to/videos/3.mp4"
      />

      {/* Stats Section */}
      <section className="relative py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: 150, suffix: '+', label: 'Clientes Satisfechos' },
              { number: 200, suffix: '+', label: 'Campañas Exitosas' },
              { number: 10, suffix: '+', label: 'Años de Experiencia' },
              { number: 95, suffix: '%', label: 'Tasa de Retención' },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <AnimatedSection
                key={index}
                animation={index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}
                delay={(index + 1) * 200}
                className="rounded-lg shadow-lg overflow-hidden"
                style={{ background: service.bgColor }}
              >
                <div className="p-8">
                  <service.icon className="h-12 w-12 text-white mb-6" />
                  <h2 className="text-2xl font-bold text-white mb-4">{service.title}</h2>
                  <p className="text-white/90 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-white/80">
                        <ArrowRight className="h-5 w-5 text-white/60 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            ¿Listo para transformar tu negocio?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Agenda una consulta gratuita y descubre cómo nuestros servicios pueden ayudarte a alcanzar tus objetivos.
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