import { OrganizationalChart } from '@/components/organizational-chart';
import { PageHeader } from '@/components/page-header';

export default function StrategyPage() {
  return (
    <>
      <PageHeader
        title="Estrategia Organizacional"
        description="Conoce cómo nuestros equipos trabajan en conjunto para crear soluciones excepcionales"
        videoUrl="https://static.puer.to/videos/2.mp4"
      />
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <OrganizationalChart />
        </div>
      </section>
    </>
  );
}