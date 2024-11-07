'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function ArtPage() {
  const [videoScale, setVideoScale] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollPercentage = scrollY / windowHeight;
      
      // Video scales from 0 to 100% during first 30% of scroll
      if (scrollPercentage <= 0.3) {
        const scale = Math.min(scrollPercentage / 0.3, 1);
        setVideoScale(scale);
      }
      
      // Show content after video reaches full scale
      if (scrollPercentage > 0.12) {
        setShowContent(true);
      } else {
        setShowContent(false);
      }

      lastScrollY.current = scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative">
      {/* Background Image */}
      <div className="fixed inset-0 w-full h-screen z-10">
        <Image
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=2000&q=80"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Video Container */}
      <section className="min-h-[200vh] relative">
        {/* Video */}
        <div 
          className="fixed left-1/2 top-1/2 w-[80vw] h-[80vh] overflow-hidden rounded-2xl"
          style={{
            transform: `translate(-50%, -50%) scale(${videoScale})`,
            transition: 'transform 0.1s ease-out',
            transformOrigin: 'center center',
            zIndex: 20,
            opacity: videoScale === 0 ? 0 : 1
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://static.puer.to/videos/1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Scroll Indicator */}
        <Button
          variant="ghost"
          className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-60 text-white transition-opacity duration-300 animate-bounce ${
            showContent ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </section>

      {/* Content Sections */}
      <section 
        className={`relative z-30 transition-opacity duration-500 ${
          showContent ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Content Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 text-center">
            <h2 className="text-4xl font-bold mb-8 text-white">Our Creative Vision</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              We blend technology and creativity to create immersive digital experiences that push the boundaries of conventional design.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-white">Creative Process {item}</h3>
                  <p className="text-gray-300">
                    Transforming ideas into visual masterpieces through innovative design thinking and cutting-edge technology.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Content Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 text-center">
            <h2 className="text-4xl font-bold mb-8 text-white">Pushing Boundaries</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Where art meets technology, we create experiences that leave lasting impressions and inspire new possibilities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-8 bg-white/5 backdrop-blur-sm rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-white">Innovation</h3>
                <p className="text-gray-300">
                  Exploring new frontiers in digital art and interactive experiences.
                </p>
              </div>
              <div className="p-8 bg-white/5 backdrop-blur-sm rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-white">Creativity</h3>
                <p className="text-gray-300">
                  Bringing imagination to life through cutting-edge technology.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}