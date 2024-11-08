interface ProjectHeaderProps {
    title: string;
    excerpt: string;
}

export function ProjectHeader({title, excerpt}: ProjectHeaderProps) {
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

            {/* YouTube Video Section */}
            <section className="relative w-full pt-2 mb-6">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <div className="relative w-full" style={{paddingBottom: '56.25%'}}>
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/your-video-id?autoplay=0&controls=1&rel=0"
                            title="YouTube video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </section>
        </header>
    );
}