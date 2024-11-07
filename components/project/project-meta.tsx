'use client';

import { ElementType } from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Award, Calendar, Building2, Tag, Facebook, Twitter, Linkedin, Share2 } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ProjectMetaProps {
  publishDate: string;
  awards: string[];
  client: string;
  tags: string[];
  category: string;
}

interface MetaSectionProps {
  icon: ElementType;
  title: string;
  children: React.ReactNode;
}

function MetaSection({ icon: Icon, title, children }: MetaSectionProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-white/90 font-semibold">
        <Icon className="h-5 w-5" />
        <h3>{title}</h3>
      </div>
      <div className="text-white/80">{children}</div>
    </div>
  );
}

export function ProjectMeta({ 
  publishDate, 
  awards, 
  client, 
  tags,
  category 
}: ProjectMetaProps) {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `Mira este increíble proyecto`;

  const shareLinks = [
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      icon: Facebook,
      color: '#1877F2'
    },
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`,
      icon: Twitter,
      color: '#1DA1F2'
    },
    {
      name: 'LinkedIn',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
      icon: Linkedin,
      color: '#0A66C2'
    }
  ];

  return (
    <aside className="space-y-8">
      <div className="space-y-6">
        <MetaSection icon={Calendar} title="Fecha de publicación">
          {format(new Date(publishDate), "d 'de' MMMM, yyyy", { locale: es })}
        </MetaSection>

        {awards.length > 0 && (
          <MetaSection icon={Award} title="Premios">
            <ul className="space-y-2">
              {awards.map((award, index) => (
                <li key={index}>
                  {award}
                </li>
              ))}
            </ul>
          </MetaSection>
        )}

        <MetaSection icon={Building2} title="Cliente">
          {client}
        </MetaSection>

        <MetaSection icon={Tag} title="Etiquetas">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-white/10 text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </MetaSection>

        <div className="pt-4 border-t border-white/10">
          <div className="flex items-center gap-2">
            <Share2 className="h-4 w-4 text-white/80" />
            <span className="text-sm font-medium text-white/80">Compartir</span>
          </div>
          <div className="flex gap-2 mt-3">
            <TooltipProvider>
              {shareLinks.map((link) => (
                <Tooltip key={link.name}>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => window.open(link.url, '_blank')}
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
                    >
                      <link.icon className="h-4 w-4 text-white" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Compartir en {link.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
        </div>
      </div>
    </aside>
  );
}