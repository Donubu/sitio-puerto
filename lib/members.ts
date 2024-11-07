interface Member {
  id: string;
  name: string;
  role: string;
  image: string;
  department: string;
  bio?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
    github?: string;
    instagram?: string;
  };
}

export const members: Member[] = [
  {
    id: '1',
    name: 'Ana Martínez',
    role: 'Directora Creativa',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
    department: 'Creativo',
    bio: 'Con más de 15 años de experiencia en publicidad y diseño, Ana lidera el equipo creativo con una visión innovadora y disruptiva.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/anamartinez',
      twitter: 'https://twitter.com/anamartinez',
      email: 'ana.martinez@agenciapuerto.cl'
    }
  },
  {
    id: '2',
    name: 'Carlos Ruiz',
    role: 'Director de Estrategia',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
    department: 'Estrategia',
    bio: 'Especialista en planificación estratégica y análisis de datos, Carlos ha liderado campañas premiadas internacionalmente.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/carlosruiz',
      email: 'carlos.ruiz@agenciapuerto.cl'
    }
  },
  {
    id: '3',
    name: 'María González',
    role: 'Directora de Marketing Digital',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80',
    department: 'Marketing Digital',
    bio: 'Experta en marketing digital y estrategias de growth hacking, María ha impulsado el crecimiento de numerosas startups.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/mariagonzalez',
      twitter: 'https://twitter.com/mariagonzalez'
    }
  },
  {
    id: '4',
    name: 'Juan Silva',
    role: 'Director de Tecnología',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    department: 'Tecnología',
    bio: 'Ingeniero de software con experiencia en desarrollo web y móvil, Juan lidera la transformación digital de nuestros clientes.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/juansilva',
      github: 'https://github.com/juansilva'
    }
  },
  {
    id: '5',
    name: 'Laura Torres',
    role: 'Directora de Cuentas',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    department: 'Cuentas',
    bio: 'Con una sólida experiencia en gestión de cuentas y relaciones públicas, Laura asegura la satisfacción de nuestros clientes.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/lauratorres',
      email: 'laura.torres@agenciapuerto.cl'
    }
  },
  {
    id: '6',
    name: 'Pedro Morales',
    role: 'Director de Arte',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    department: 'Creativo',
    bio: 'Diseñador premiado internacionalmente, Pedro aporta una visión única y creativa a cada proyecto.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/pedromorales',
      instagram: 'https://instagram.com/pedromorales'
    }
  },
  {
    id: '7',
    name: 'Isabel Reyes',
    role: 'Directora de Contenido',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    department: 'Contenido',
    bio: 'Especialista en storytelling y estrategia de contenidos, Isabel ha revolucionado la manera en que las marcas comunican.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/isabelreyes',
      twitter: 'https://twitter.com/isabelreyes'
    }
  },
  {
    id: '8',
    name: 'Roberto Díaz',
    role: 'Director de Operaciones',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=800&q=80',
    department: 'Operaciones',
    bio: 'Con amplia experiencia en gestión de proyectos y operaciones, Roberto asegura la eficiencia en todos nuestros procesos.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/robertodiaz',
      email: 'roberto.diaz@agenciapuerto.cl'
    }
  },
  {
    id: '9',
    name: 'Carmen Vega',
    role: 'Directora de Innovación',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
    department: 'Innovación',
    bio: 'Especialista en innovación y nuevas tecnologías, Carmen lidera la implementación de soluciones disruptivas.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/carmenvega',
      twitter: 'https://twitter.com/carmenvega'
    }
  }
];

export function getAllMembers() {
  return members;
}

export function getMembersByDepartment(department: string) {
  return members.filter(member => member.department === department);
}

export type { Member };