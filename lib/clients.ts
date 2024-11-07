interface Client {
  id: string;
  name: string;
  logo: string;
  href: string;
  bgColor: string;
}

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  bgColor: string;
}

export const clients: Client[] = [
  {
    id: '1',
    name: 'TechCorp',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60',
    href: '#',
    bgColor: '#3851C6'
  },
  {
    id: '2',
    name: 'Innovatech',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60',
    href: '#',
    bgColor: '#EA5321'
  },
  {
    id: '3',
    name: 'EcoSustentable',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60',
    href: '#',
    bgColor: '#005240'
  },
  {
    id: '4',
    name: 'Digital Solutions',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60',
    href: '#',
    bgColor: '#F7DD01'
  },
  {
    id: '5',
    name: 'Future Labs',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60',
    href: '#',
    bgColor: '#FFD2D4'
  },
  {
    id: '6',
    name: 'Smart Systems',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60',
    href: '#',
    bgColor: '#3851C6'
  },
  {
    id: '7',
    name: 'Green Energy',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60',
    href: '#',
    bgColor: '#EA5321'
  },
  {
    id: '8',
    name: 'Cloud Tech',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60',
    href: '#',
    bgColor: '#005240'
  },
  {
    id: '9',
    name: 'Data Corp',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60',
    href: '#',
    bgColor: '#F7DD01'
  },
  {
    id: '10',
    name: 'AI Solutions',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60',
    href: '#',
    bgColor: '#FFD2D4'
  },
  {
    id: '11',
    name: 'Web Masters',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60',
    href: '#',
    bgColor: '#3851C6'
  },
  {
    id: '12',
    name: 'Digital Marketing',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60',
    href: '#',
    bgColor: '#EA5321'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "La mejor decisión que tomamos fue trabajar con Puerto. Han transformado completamente nuestra presencia digital.",
    author: "María Silva",
    role: "CEO, TechCorp Chile",
    bgColor: '#3851C6'
  },
  {
    id: '2',
    quote: "Su enfoque estratégico y creatividad nos ayudaron a alcanzar nuevos mercados y aumentar nuestras ventas.",
    author: "Carlos Mendoza",
    role: "Director Marketing, Innovatech",
    bgColor: '#EA5321'
  },
  {
    id: '3',
    quote: "Un equipo excepcional que entiende perfectamente las necesidades de cada cliente.",
    author: "Ana Torres",
    role: "Gerente General, EcoSustentable",
    bgColor: '#005240'
  }
];

export function getAllClients() {
  return clients;
}

export function getAllTestimonials() {
  return testimonials;
}

export type { Client, Testimonial };