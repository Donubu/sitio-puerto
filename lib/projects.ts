interface Project {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  client: string;
  tags: string[];
  category: string;
  publishDate: string;
  awards: string[];
  backgroundColor: string;
  thumbnail: string;
  heroMedia: Array<{
    type: 'image' | 'video';
    url: string;
  }>;
  content: Array<{
    type: 'text' | 'image' | 'video' | 'quote' | 'highlight' | 'heading';
    content: string;
    caption?: string;
    level?: 1 | 2 | 3;
  }>;
}

const projects: Project[] = [
  {
    id: '1',
    slug: 'techcorp-digital-campaign',
    title: 'Campaña Digital TechCorp',
    excerpt: 'Una campaña innovadora que revolucionó la presencia digital de TechCorp',
    client: 'TechCorp Chile',
    tags: ['Marketing Digital', 'Social Media', 'Publicidad'],
    category: 'Campaña Digital',
    publishDate: '2024-01-15',
    awards: [
      'Premio Mejor Campaña Digital 2023',
      'Effie Awards - Oro en Innovación Digital'
    ],
    backgroundColor: '#3851C6',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80',
    heroMedia: [
      {
        type: 'video',
        url: 'https://static.puer.to/videos/1.mp4'
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80'
      }
    ],
    content: [
      {
        type: 'heading',
        content: 'El Desafío',
        level: 1
      },
      {
        type: 'text',
        content: '<p>TechCorp necesitaba establecer una presencia digital sólida y diferenciada en un mercado altamente competitivo.</p>'
      },
      {
        type: 'quote',
        content: 'La transformación digital no se trata solo de tecnología, sino de cómo conectamos con las personas de manera significativa.',
        caption: 'María González, CEO TechCorp'
      },
      {
        type: 'heading',
        content: 'Nuestra Solución',
        level: 2
      },
      {
        type: 'text',
        content: '<p>Desarrollamos una estrategia integral que abarcó múltiples canales digitales.</p>'
      },
      {
        type: 'highlight',
        content: 'Incrementamos el engagement en redes sociales en un 300% durante los primeros 3 meses de la campaña.'
      },
      {
        type: 'image',
        content: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80',
        caption: 'Imagen principal de la campaña'
      },
      {
        type: 'heading',
        content: 'Resultados Destacados',
        level: 2
      },
      {
        type: 'text',
        content: '<p>La campaña superó todas las expectativas y estableció nuevos estándares en la industria.</p>'
      },
      {
        type: 'video',
        content: 'https://static.puer.to/videos/1.mp4',
        caption: 'Video promocional de la campaña'
      }
    ]
  },
  {
    id: '2',
    slug: 'eco-friendly-branding',
    title: 'Branding Sustentable EcoVida',
    excerpt: 'Rediseño completo de marca para empresa líder en productos sustentables',
    client: 'EcoVida',
    tags: ['Branding', 'Diseño Sustentable', 'Identidad Visual'],
    category: 'Branding',
    publishDate: '2024-02-20',
    awards: [
      'Premio Diseño Sustentable 2023',
      'Green Design Award'
    ],
    backgroundColor: '#005240',
    thumbnail: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=2000&q=80',
    heroMedia: [
      {
        type: 'video',
        url: 'https://static.puer.to/videos/2.mp4'
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=2000&q=80'
      }
    ],
    content: [
      {
        type: 'heading',
        content: 'Reinventando la Sustentabilidad',
        level: 1
      },
      {
        type: 'text',
        content: '<p>EcoVida necesitaba una identidad de marca que reflejara su compromiso con la sustentabilidad y la innovación.</p>'
      },
      {
        type: 'quote',
        content: 'Queríamos que nuestra marca transmitiera no solo sustentabilidad, sino también modernidad y compromiso con el futuro.',
        caption: 'Ana Torres, Directora de Marketing EcoVida'
      },
      {
        type: 'heading',
        content: 'Proceso Creativo',
        level: 2
      },
      {
        type: 'text',
        content: '<p>Desarrollamos una identidad visual que combina elementos naturales con diseño contemporáneo.</p>'
      },
      {
        type: 'highlight',
        content: 'El nuevo diseño resultó en un aumento del 45% en el reconocimiento de marca.'
      }
    ]
  },
  {
    id: '3',
    slug: 'fintech-app-launch',
    title: 'Lanzamiento App FinanceFlow',
    excerpt: 'Estrategia integral para el lanzamiento de una innovadora aplicación fintech',
    client: 'FinanceFlow',
    tags: ['Marketing Digital', 'Fintech', 'Lanzamiento de Producto'],
    category: 'Marketing Digital',
    publishDate: '2024-03-10',
    awards: [
      'Mejor Lanzamiento Digital 2024',
      'Innovation Award - Fintech'
    ],
    backgroundColor: '#EA5321',
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=2000&q=80',
    heroMedia: [
      {
        type: 'video',
        url: 'https://static.puer.to/videos/3.mp4'
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=2000&q=80'
      }
    ],
    content: [
      {
        type: 'heading',
        content: 'Revolucionando las Finanzas Personales',
        level: 1
      },
      {
        type: 'text',
        content: '<p>FinanceFlow buscaba disrumpir el mercado fintech con una aplicación innovadora y accesible.</p>'
      },
      {
        type: 'quote',
        content: 'Nuestra visión era democratizar las finanzas personales a través de la tecnología.',
        caption: 'Carlos Méndez, CEO FinanceFlow'
      },
      {
        type: 'highlight',
        content: '100,000 descargas en la primera semana de lanzamiento.'
      }
    ]
  },
  {
    id: '4',
    slug: 'smart-city-campaign',
    title: 'Campaña Smart City Santiago',
    excerpt: 'Proyecto de comunicación para iniciativa de ciudad inteligente',
    client: 'Municipalidad de Santiago',
    tags: ['Comunicación Pública', 'Smart City', 'Desarrollo Urbano'],
    category: 'Comunicación',
    publishDate: '2024-03-15',
    awards: [
      'Premio Ciudad Inteligente 2024',
      'Smart Communication Award'
    ],
    backgroundColor: '#F8B30A',
    thumbnail: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=2000&q=80',
    heroMedia: [
      {
        type: 'video',
        url: 'https://static.puer.to/videos/1.mp4'
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=2000&q=80'
      }
    ],
    content: [
      {
        type: 'heading',
        content: 'Transformando Santiago',
        level: 1
      },
      {
        type: 'text',
        content: '<p>La iniciativa Smart City Santiago requería una estrategia de comunicación que conectara con los ciudadanos.</p>'
      },
      {
        type: 'quote',
        content: 'La tecnología debe estar al servicio de los ciudadanos, mejorando su calidad de vida día a día.',
        caption: 'Roberto Soto, Director de Innovación'
      },
      {
        type: 'highlight',
        content: '85% de aprobación ciudadana para las iniciativas de ciudad inteligente.'
      }
    ]
  },
  {
    id: '5',
    slug: 'health-tech-platform',
    title: 'Plataforma HealthConnect',
    excerpt: 'Desarrollo y lanzamiento de plataforma de telemedicina',
    client: 'HealthConnect',
    tags: ['Salud Digital', 'Telemedicina', 'Marketing Digital'],
    category: 'Tecnología',
    publishDate: '2024-03-20',
    awards: [
      'Premio Innovación en Salud 2024',
      'E-Health Excellence Award'
    ],
    backgroundColor: '#3851C6',
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80',
    heroMedia: [
      {
        type: 'video',
        url: 'https://static.puer.to/videos/2.mp4'
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80'
      }
    ],
    content: [
      {
        type: 'heading',
        content: 'Revolucionando la Atención Médica',
        level: 1
      },
      {
        type: 'text',
        content: '<p>HealthConnect buscaba transformar la manera en que las personas acceden a servicios de salud.</p>'
      },
      {
        type: 'quote',
        content: 'La telemedicina no es el futuro, es el presente de la atención médica.',
        caption: 'Dra. Carmen Vega, Directora Médica'
      },
      {
        type: 'highlight',
        content: 'Más de 50,000 consultas médicas realizadas en el primer trimestre.'
      }
    ]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getRelatedProjects(currentId: string, limit: number): Project[] {
  return projects
    .filter(project => project.id !== currentId)
    .slice(0, limit);
}