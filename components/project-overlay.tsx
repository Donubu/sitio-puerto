'use client';


export function ProjectOverlay({ }) {
  return (
    <div 
      className="fixed inset-0 will-change-transform"
      style={{ 
        opacity: 1,
        pointerEvents: 'none'
      }}
    />
  );
}