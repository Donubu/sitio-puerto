import { ShowcaseStats } from '@/components/showcase/showcase-stats';
import { ShowcaseTimeline } from '@/components/showcase/showcase-timeline';
import { ShowcaseFeatures } from '@/components/showcase/showcase-features';
import { ShowcaseTestimonials } from '@/components/showcase/showcase-testimonials';
import { PageHeader } from '@/components/page-header';

export default function ShowcasePage() {
  return (
    <>
      <PageHeader
        title="Nuestras Soluciones"
        description="Descubre cómo nuestras soluciones integrales pueden transformar tu negocio"
        videoUrl="https://static.puer.to/videos/1.mp4"
      />

      <div className="bg-white">
        <ShowcaseStats />
        <ShowcaseTimeline />
        <ShowcaseFeatures />
        <ShowcaseTestimonials />
      </div>
    </>
  );
}