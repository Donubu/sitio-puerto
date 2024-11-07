'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ZoomIn, ZoomOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NodePosition {
  x: number;
  y: number;
}

interface MainNode {
  id: string;
  label: string;
  color: string;
}

interface SubNode {
  id: string;
  label: string;
  parent: string;
}

const mainNodes: MainNode[] = [
  { id: 'cuentas', label: 'Cuentas', color: '#3851C6' },
  { id: 'creacion', label: 'Creación', color: '#EA5321' },
  { id: 'planning', label: 'Planning', color: '#005240' },
  { id: 'rrss', label: 'RRSS', color: '#F8B30A' },
  { id: 'desarrollo', label: 'Desarrollo', color: '#3851C6' },
  { id: 'produccion', label: 'Producción', color: '#EA5321' }
];

const subNodes: SubNode[] = [
  { id: 'ejecutivos', label: 'Ejecutivos de cuentas', parent: 'cuentas' },
  { id: 'directores-cuentas', label: 'Directores de cuentas', parent: 'cuentas' },
  { id: 'analistas', label: 'Analistas', parent: 'planning' },
  { id: 'director-planificacion', label: 'Director de planificación estratégica', parent: 'planning' },
  { id: 'planner-digital', label: 'Planner Digital', parent: 'planning' },
  { id: 'jefe-rrss', label: 'Jefe de RRSS y SAC', parent: 'rrss' },
  { id: 'planner-integrada', label: 'Planner integrada', parent: 'planning' },
  { id: 'directora-creativa', label: 'Directora General Creativa', parent: 'creacion' },
  { id: 'redactores', label: 'Redactores', parent: 'creacion' },
  { id: 'head-art', label: 'Head of Art', parent: 'creacion' },
  { id: 'directores-creativos', label: 'Directores Creativos', parent: 'creacion' },
  { id: 'directores-arte', label: 'Directores de Arte', parent: 'creacion' },
  { id: 'cm', label: 'CM', parent: 'rrss' },
  { id: 'smm', label: 'SMM', parent: 'rrss' },
  { id: 'director-experiencia', label: 'Director de Experiencia Digital', parent: 'desarrollo' },
  { id: 'ingenieros', label: 'Ingenieros', parent: 'desarrollo' },
  { id: 'programadores', label: 'Programadores', parent: 'desarrollo' },
  { id: 'productores-digitales', label: 'Productores Digitales', parent: 'produccion' },
  { id: 'productor-audiovisual', label: 'Productor Audiovisual', parent: 'produccion' },
  { id: 'productores-graficos', label: 'Productores Gráficos', parent: 'produccion' }
];

export function OrganizationalChart() {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });
  const [nodePositions, setNodePositions] = useState<Record<string, NodePosition>>({});
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startDrag, setStartDrag] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const orbitTime = useRef(Date.now());

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const calculatePositions = () => {
      const centerX = dimensions.width / 2;
      const centerY = dimensions.height / 2;
      const radius = Math.min(dimensions.width, dimensions.height) * 0.35;
      const positions: Record<string, NodePosition> = {};

      mainNodes.forEach((node, index) => {
        const angle = (index * 2 * Math.PI) / mainNodes.length - Math.PI / 2;
        positions[node.id] = {
          x: centerX + radius * Math.cos(angle),
          y: centerY + radius * Math.sin(angle)
        };
      });

      setNodePositions(positions);
    };

    calculatePositions();

    const interval = setInterval(() => {
      orbitTime.current = Date.now();
      calculatePositions();
    }, 50);

    return () => clearInterval(interval);
  }, [dimensions]);

  const handleZoomIn = () => {
    if (scale < 2) {
      setScale(previous => Math.min(previous + 0.2, 2));
    }
  };

  const handleZoomOut = () => {
    if (scale > 0.5) {
      setScale(previous => Math.max(previous - 0.2, 0.5));
    }
  };

  const handleMouseDown = (event: React.MouseEvent) => {
    setIsDragging(true);
    setStartDrag({
      x: event.clientX - position.x,
      y: event.clientY - position.y
    });
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: event.clientX - startDrag.x,
        y: event.clientY - startDrag.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const getSubNodePosition = (parentId: string, index: number, total: number, time: React.MutableRefObject<number>) => {
    const parent = nodePositions[parentId];
    if (!parent) return { x: 0, y: 0 };

    const orbitRadius = dimensions.width * 0.15;
    const baseAngle = (index * 2 * Math.PI) / total;
    const timeOffset = (time.current % 20000) / 20000 * 2 * Math.PI;
    const angle = baseAngle + timeOffset;

    return {
      x: parent.x + orbitRadius * Math.cos(angle),
      y: parent.y + orbitRadius * Math.sin(angle)
    };
  };

  return (
    <div className="relative">
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={handleZoomIn}
          disabled={scale >= 2}
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleZoomOut}
          disabled={scale <= 0.5}
        >
          <ZoomOut className="h-4 w-4" />
        </Button>
      </div>

      <div 
        ref={containerRef}
        className={`w-full h-[800px] overflow-hidden bg-white rounded-xl shadow-lg select-none ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <svg
          ref={svgRef}
          width="100%"
          height="100%"
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
          preserveAspectRatio="xMidYMid meet"
          style={{
            transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
            transformOrigin: 'center',
            transition: isDragging ? 'none' : 'transform 0.3s ease-out'
          }}
        >
          {Object.keys(nodePositions).length > 0 && mainNodes.map((node, index) => {
            const nextNode = mainNodes[(index + 1) % mainNodes.length];
            const currentPos = nodePositions[node.id];
            const nextPos = nodePositions[nextNode.id];

            if (!currentPos || !nextPos) return null;

            return (
              <path
                key={`${node.id}-${nextNode.id}`}
                d={`M ${currentPos.x} ${currentPos.y} Q ${(currentPos.x + nextPos.x) / 2} ${
                  (currentPos.y + nextPos.y) / 2 - 100
                } ${nextPos.x} ${nextPos.y}`}
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="3"
              />
            );
          })}

          {Object.keys(nodePositions).length > 0 && mainNodes.map((node) => {
            const position = nodePositions[node.id];
            if (!position) return null;

            return (
              <g key={node.id}>
                <circle
                  cx={position.x}
                  cy={position.y}
                  r={dimensions.width * 0.1}
                  fill={node.color}
                  className="drop-shadow-lg"
                />
                <text
                  x={position.x}
                  y={position.y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="white"
                  fontSize={dimensions.width * 0.032}
                  fontWeight="bold"
                  className="select-none pointer-events-none"
                >
                  {node.label}
                </text>

                {subNodes
                  .filter(subNode => subNode.parent === node.id)
                  .map((subNode, index, array) => {
                    const subPosition = getSubNodePosition(node.id, index, array.length, orbitTime);
                    
                    return (
                      <g key={subNode.id}>
                        <circle
                          cx={subPosition.x}
                          cy={subPosition.y}
                          r={dimensions.width * 0.06}
                          fill="#2C3E50"
                          className="drop-shadow-md"
                        />
                        <text
                          x={subPosition.x}
                          y={subPosition.y}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fill="white"
                          fontSize={dimensions.width * 0.018}
                          className="select-none pointer-events-none"
                        >
                          {subNode.label.split(' ').map((word, wordIndex) => (
                            <tspan
                              key={wordIndex}
                              x={subPosition.x}
                              dy={wordIndex === 0 ? 0 : dimensions.width * 0.02}
                            >
                              {word}
                            </tspan>
                          ))}
                        </text>
                      </g>
                    );
                  })}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}