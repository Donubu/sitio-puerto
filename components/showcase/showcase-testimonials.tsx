'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatedSection } from '@/components/animated-section';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    content: "La colaboración con el equipo ha sido excepcional. Su enfoque estratégico y creatividad nos ayudaron a alcanzar nuevos mercados.",
    author: "María González",
    role: "CEO",
    company: "TechCorp Chile",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    rating: 5
  },
  {
    id: 2,
    content: "Impresionante atención al detalle y resultados que superaron nuestras expectativas. Un verdadero socio estratégico.",
    author: "Carlos Rodríguez",
    role: "Director de Marketing",
    company: "Innovatech",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
    rating: 5
  },
  {
    id: 3,
    content: "Su equipo demostró un profundo entendimiento de nuestras necesidades y entregó soluciones efectivas y creativas.",
    author: "Ana Silva",
    role: "Gerente General",
    company: "EcoSustentable",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80",
    rating: 5
  }
];

export function ShowcaseTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Testimonios de quienes han confiado en nosotros
          </p>
        </AnimatedSection>

        <div className="relative">
          <div className="flex items-center">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="absolute left-0 z-10 transform -translate-x-1/2"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="overflow-hidden w-full">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-12"
                  >
                    <AnimatedSection className="bg-white rounded-2xl p-8 shadow-lg">
                      <div className="flex items-start gap-8">
                        <div className="relative w-24 h-24 flex-shrink-0">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.author}
                            fill
                            className="object-cover rounded-xl"
                          />
                        </div>
                        <div className="flex-1">
                          <Quote className="h-8 w-8 text-gray-200 mb-4" />
                          <p className="text-gray-700 text-lg mb-6">
                            {testimonial.content}
                          </p>
                          <div className="flex items-center gap-2 mb-2">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">
                              {testimonial.author}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {testimonial.role}, {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="absolute right-0 z-10 transform translate-x-1/2"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-gray-900 w-8' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}