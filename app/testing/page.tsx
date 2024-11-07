'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function TestingPage() {
  const [video1Scale, setVideo1Scale] = useState(0);
  const [video2Scale, setVideo2Scale] = useState(0);
  const [video3Scale, setVideo3Scale] = useState(0);
  const [video4Scale, setVideo4Scale] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollPercentage = scrollY / windowHeight;
      const scrollingDown = scrollY > lastScrollY.current;
      
      // First video (0 to 25% scroll) - Slower animation
      if (scrollPercentage <= 0.25) {
        const scale = Math.min(scrollPercentage / 0.25, 1);
        setVideo1Scale(scrollingDown ? scale : Math.max(0, scale));
      }

      // Second video (30% to 55% scroll) - 5% gap after first video
      if (scrollPercentage > 0.30 && scrollPercentage <= 0.55) {
        const scale = (scrollPercentage - 0.30) / 0.25;
        setVideo2Scale(scrollingDown ? scale : Math.max(0, scale));
      } else if (scrollPercentage <= 0.30) {
        setVideo2Scale(0);
      }

      // Third video (60% to 85% scroll) - 5% gap after second video
      if (scrollPercentage > 0.60 && scrollPercentage <= 0.85) {
        const scale = (scrollPercentage - 0.60) / 0.25;
        setVideo3Scale(scrollingDown ? scale : Math.max(0, scale));
      } else if (scrollPercentage <= 0.60) {
        setVideo3Scale(0);
      }

      // Fourth video (90% to 115% scroll) - 5% gap after third video
      if (scrollPercentage > 0.90 && scrollPercentage <= 1.15) {
        const scale = (scrollPercentage - 0.90) / 0.25;
        setVideo4Scale(scrollingDown ? scale : Math.max(0, scale));
      } else if (scrollPercentage <= 0.90) {
        setVideo4Scale(0);
      }

      lastScrollY.current = scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update showContent based on video4Scale
  useEffect(() => {
    if (video4Scale >= 0.1) {
      setShowContent(true);
    }
  }, [video4Scale]);

  return (
    <main className="relative">
      {/* Background Images */}
      <div className="fixed inset-0 w-full h-screen z-10">
        {/* Desktop Background */}
        <div className="hidden md:block w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=2000&q=80"
            alt="Desktop Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Mobile Background */}
        <div className="block md:hidden w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
            alt="Mobile Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <section className="min-h-[300vh] relative">
        {/* First Video */}
        <div 
          className="fixed left-1/2 top-1/2 w-[100vw] h-screen overflow-hidden"
          style={{
            transform: `translate(-50%, -50%) scale(${video1Scale})`,
            transition: 'transform 0.3s ease-out',
            transformOrigin: 'center center',
            zIndex: 20,
            opacity: video1Scale === 0 ? 0 : 1
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

        {/* Second Video */}
        <div 
          className="fixed left-1/2 top-1/2 w-[100vw] h-screen overflow-hidden"
          style={{
            transform: `translate(-50%, -50%) scale(${video2Scale})`,
            transition: 'transform 0.3s ease-out',
            transformOrigin: 'center center',
            zIndex: 30,
            opacity: video2Scale === 0 ? 0 : 1
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://static.puer.to/videos/2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Third Video */}
        <div 
          className="fixed left-1/2 top-1/2 w-[100vw] h-screen overflow-hidden"
          style={{
            transform: `translate(-50%, -50%) scale(${video3Scale})`,
            transition: 'transform 0.3s ease-out',
            transformOrigin: 'center center',
            zIndex: 40,
            opacity: video3Scale === 0 ? 0 : 1
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://static.puer.to/videos/3.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Fourth Video */}
        <div 
          className="fixed left-1/2 top-1/2 w-[100vw] h-screen overflow-hidden"
          style={{
            transform: `translate(-50%, -50%) scale(${video4Scale})`,
            transition: 'transform 0.3s ease-out',
            transformOrigin: 'center center',
            zIndex: 50,
            opacity: video4Scale === 0 ? 0 : 1
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
          className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[160] text-white transition-opacity duration-700 animate-bounce ${
            showContent ? 'opacity-1' : 'opacity-100'
          }`}
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </section>

      {/* Content Sections */}
      <section className={`relative z-[160] transition-opacity duration-500`}>
        {/* Content Section */}
        <section className="relative bg-white min-h-screen flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 text-center">
            <h2 className="text-4xl font-bold mb-8">Our Creative Vision</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              We blend technology and creativity to create immersive digital experiences that push the boundaries of conventional design.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Creative Process {item}</h3>
                  <p className="text-gray-600">
                    Transforming ideas into visual masterpieces through innovative design thinking and cutting-edge technology.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Content Section */}
        <section className="relative bg-black text-white min-h-screen flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 text-center">
            <h2 className="text-4xl font-bold mb-8">Pushing Boundaries</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Where art meets technology, we create experiences that leave lasting impressions and inspire new possibilities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-8 bg-white/5 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
                <p className="text-gray-300">
                  Exploring new frontiers in digital art and interactive experiences.
                </p>
              </div>
              <div className="p-8 bg-white/5 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Creativity</h3>
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