interface ProjectHeaderProps {
  title: string;
  excerpt: string;
}

export function ProjectHeader({ title, excerpt }: ProjectHeaderProps) {
  return (
    <header className="relative pt-32 pb-16">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {title}
        </h1>
        <p className="text-xl text-white/90">
          {excerpt}
        </p>
      </div>
    </header>
  );
}