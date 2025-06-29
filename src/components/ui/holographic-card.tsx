"use client";

import React, {
  FC,
  useRef,
  useEffect,
  useCallback,
  useMemo,
  ReactNode,
  useState,
} from 'react';
import { Badge } from "@/components/ui/badge";
import { Sparkles, Zap, Star } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';

const ANIMATION_CONFIG = {
  SMOOTH_DURATION: 600,
  INITIAL_DURATION: 1500,
};

const clamp = (val: number, min = 0, max = 100) => Math.min(Math.max(val, min), max);
const round = (val: number, p = 3) => parseFloat(val.toFixed(p));
const adjust = (val: number, fromMin: number, fromMax: number, toMin: number, toMax: number) =>
  round(toMin + ((toMax - toMin) * (val - fromMin)) / (fromMax - fromMin));
const easeInOutCubic = (x: number) =>
  x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

interface HolographicCardProps {
  children: ReactNode;
  enableTilt?: boolean;
  className?: string;
}

const HolographicCard: FC<HolographicCardProps> = ({
  children,
  enableTilt = true,
  className = '',
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const animationHandlers = useMemo(() => {
    if (!enableTilt) return null;

    let rafId: number | null = null;

    const updateTransform = (offsetX: number, offsetY: number, card: HTMLElement, wrap: HTMLElement) => {
      const { clientWidth: width, clientHeight: height } = card;
      const percentX = clamp((100 / width) * offsetX);
      const percentY = clamp((100 / height) * offsetY);
      const centerX = percentX - 50;
      const centerY = percentY - 50;

      const props: Record<string, string> = {
        '--pointer-x': `${percentX}%`,
        '--pointer-y': `${percentY}%`,
        '--background-x': `${adjust(percentX, 0, 100, 35, 65)}%`,
        '--background-y': `${adjust(percentY, 0, 100, 35, 65)}%`,
        '--pointer-from-center': `${clamp(Math.hypot(centerY, centerX) / 50, 0, 1)}`,
        '--rotate-x': `${round(-(centerY / 5))}deg`,
        '--rotate-y': `${round(centerX / 4)}deg`,
      };
      Object.entries(props).forEach(([p, v]) => wrap.style.setProperty(p, v));
    };

    const smoothAnimation = (duration: number, startX: number, startY: number, card: HTMLElement, wrap: HTMLElement) => {
      const startTime = performance.now();
      const targetX = wrap.clientWidth / 2;
      const targetY = wrap.clientHeight / 2;

      const loop = (currentTime: number) => {
        const progress = clamp((currentTime - startTime) / duration);
        const eased = easeInOutCubic(progress);
        const currentX = adjust(eased, 0, 1, startX, targetX);
        const currentY = adjust(eased, 0, 1, startY, targetY);
        updateTransform(currentX, currentY, card, wrap);
        if (progress < 1) rafId = requestAnimationFrame(loop);
      };
      rafId = requestAnimationFrame(loop);
    };

    return {
      updateTransform,
      smoothAnimation,
      cancel: () => rafId && cancelAnimationFrame(rafId),
    };
  }, [enableTilt]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!cardRef.current || !wrapRef.current || !animationHandlers) return;
    const rect = cardRef.current.getBoundingClientRect();
    animationHandlers.updateTransform(e.clientX - rect.left, e.clientY - rect.top, cardRef.current, wrapRef.current);
  }, [animationHandlers]);

  const handlePointerEnter = useCallback(() => {
    if (!wrapRef.current || !cardRef.current || !animationHandlers) return;
    animationHandlers.cancel();
    wrapRef.current.classList.add('active');
    cardRef.current.classList.add('active');
  }, [animationHandlers]);

  const handlePointerLeave = useCallback((e: React.PointerEvent) => {
    if (!wrapRef.current || !cardRef.current || !animationHandlers) return;
    wrapRef.current.classList.remove('active');
    cardRef.current.classList.remove('active');
    animationHandlers.smoothAnimation(ANIMATION_CONFIG.SMOOTH_DURATION, e.nativeEvent.offsetX, e.nativeEvent.offsetY, cardRef.current, wrapRef.current);
  }, [animationHandlers]);
  
  useEffect(() => {
    if (!enableTilt || !animationHandlers || !wrapRef.current || !cardRef.current) return;

    const wrap = wrapRef.current;
    const card = cardRef.current;
    const { INITIAL_DURATION } = ANIMATION_CONFIG;
    
    const initialX = wrap.clientWidth / 2;
    const initialY = wrap.clientHeight / 2;

    animationHandlers.updateTransform(initialX, initialY, card, wrap);
    animationHandlers.smoothAnimation(INITIAL_DURATION, initialX, initialY, card, wrap);

  }, [enableTilt, animationHandlers]);

  return (
    <div
      ref={wrapRef}
      className={`hc-wrapper ${className}`}
    >
      <div
        ref={cardRef}
        className="hc-card"
        onPointerEnter={handlePointerEnter}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <div className="hc-inside">
          <div className="hc-shine" />
          <div className="hc-glare" />
          <div className="hc-content-wrapper">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export const HolographicCardsSection: FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cardData = [
    {
      icon: <Sparkles className="w-12 h-12 mb-4 text-white/80" />,
      title: "Verhaltensanalyse",
      hormoziText: "Decken Sie die wahren Absichten und Motivationen hinter Worten und Taten auf. Wir lehren Sie, nonverbale Signale und Sprachmuster zu lesen, um ein vollständiges Bild jeder Situation zu erhalten."
    },
    {
      icon: <Zap className="w-12 h-12 mb-4 text-white/80" />,
      title: "Prognostische Intelligenz",
      hormoziText: "Antizipieren Sie zukünftige Handlungen und Ergebnisse mit hoher Genauigkeit. Indem Sie Verhaltensmuster verstehen, können Sie Trends vorhersagen und proaktiv statt reaktiv handeln."
    },
    {
      icon: <Star className="w-12 h-12 mb-4 text-white/80" />,
      title: "Strategische Beeinflussung",
      hormoziText: "Nutzen Sie Ihr Wissen über menschliches Verhalten, um Ergebnisse gezielt zu gestalten. Führen Sie Verhandlungen, gestalten Sie Beziehungen und steuern Sie Interaktionen mit subtiler Präzision."
    }
  ];

  return (
    <div className="w-full py-20 lg:py-40 bg-black">
      <style jsx global>{`
        :root {
          --hc-card-radius: 24px;
        }
        .hc-wrapper {
          perspective: 600px;
          transform: translate3d(0,0,0.1px);
          position: relative;
        }
        .hc-wrapper::before {
          content: '';
          position: absolute;
          inset: -15px;
          background: radial-gradient(circle at 50% 50%, #00c1ffff 1%, #073aff00 76%), conic-gradient(from 124deg at 50% 50%, #c137ffff 0%, #07c6ffff 40%, #07c6ffff 60%, #c137ffff 100%);
          border-radius: inherit;
          transition: all 0.6s ease;
          will-change: filter, transform;
          filter: contrast(1.5) saturate(1.5) blur(25px);
          transform: scale(0.85);
          opacity: 0.5;
        }
        .hc-wrapper.active::before {
          filter: contrast(1) saturate(1) blur(25px);
          transform: scale(0.95);
          opacity: 1;
        }
        .hc-card {
          width: 320px;
          height: 400px;
          border-radius: var(--hc-card-radius);
          position: relative;
          background: radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y), hsla(266, 100%, 90%, var(--card-opacity, 0)) 4%, hsla(266, 0%, 60%, 0) 100%), radial-gradient(35% 52% at 55% 20%, #00ffaac4 0%, #073aff00 100%), radial-gradient(100% 100% at 50% 50%, #00c1ffff 1%, #073aff00 76%), conic-gradient(from 124deg at 50% 50%, #c137ffff 0%, #07c6ffff 40%, #07c6ffff 60%, #c137ffff 100%);
          overflow: hidden;
          transform-style: preserve-3d;
          transition: transform 1s ease;
          transform: rotateY(var(--rotate-y, 0deg)) rotateX(var(--rotate-x, 0deg));
        }
        .hc-card.active {
          transition: transform 0.1s ease;
        }
        .hc-card * {
          transform-style: preserve-3d;
        }
        .hc-inside {
          position: absolute;
          inset: 1px;
          border-radius: var(--hc-card-radius);
          background: linear-gradient(145deg, #2d2333 0%, #3a5e74 100%);
          transform: translateZ(0.1px);
          overflow: hidden;
        }
        .hc-shine {
          position: absolute;
          inset: 0;
          z-index: 3;
          background: repeating-linear-gradient(0deg, hsl(53, 100%, 69%) calc(5% * 1), hsl(93, 100%, 69%) calc(5% * 2), hsl(176, 100%, 76%) calc(5% * 3), hsl(228, 100%, 74%) calc(5% * 4), hsl(283, 100%, 73%) calc(5% * 5), hsl(2, 100%, 73%) calc(5% * 6), hsl(53, 100%, 69%) calc(5% * 7)), repeating-linear-gradient(-45deg, #0e152e 0%, hsl(180, 10%, 60%) 3.8%, hsl(180, 29%, 66%) 4.5%, hsl(180, 10%, 60%) 5.2%, #0e152e 10%, #0e152e 12%);
          background-position: 0 var(--background-y, 50%), var(--background-x, 50%) var(--background-y, 50%);
          background-size: 500% 500%, 300% 300%;
          background-blend-mode: color-dodge;
          filter: brightness(0.8) contrast(1.5) saturate(0.8);
          opacity: 0.5;
          mix-blend-mode: color-dodge;
        }
        .hc-glare {
          position: absolute;
          inset: 0;
          z-index: 4;
          background: radial-gradient(farthest-corner circle at var(--pointer-x) var(--pointer-y), hsla(0,0%,100%,0.8) 10%, hsla(0,0%,100%,0) 80%);
          mix-blend-mode: overlay;
          opacity: calc(var(--pointer-from-center, 0) * 0.7 + 0.3);
        }
        .hc-content-wrapper {
          position: relative;
          z-index: 5;
          width: 100%;
          height: 100%;
          padding: 2rem;
          color: white;
          transform: translateZ(1px);
        }
      `}</style>
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-center text-center">
            <Badge>Leistungen</Badge>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-white">
                Dimensionen des Profilings
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground">
                Jede Karte enthüllt einen Aspekt, wie Sie durch tiefgreifendes Verständnis von Verhalten strategische Vorteile erzielen.
              </p>
            </div>
          </div>
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center"
            onMouseLeave={() => setHoveredCard(null)}
          >
            {cardData.map((card, index) => (
              <div key={index} onMouseEnter={() => setHoveredCard(index)}>
                <HolographicCard>
                  <div className="flex flex-col h-full items-center justify-center text-center">
                    {card.icon}
                    <h3 className="text-3xl font-bold text-white mb-2">{card.title}</h3>
                  </div>
                </HolographicCard>
              </div>
            ))}
          </div>
          <div className="mt-8 h-48">
            <AnimatePresence>
              {hoveredCard !== null && (
                <motion.div
                  key={hoveredCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-center max-w-2xl mx-auto"
                >
                  <p className="text-xl leading-relaxed text-slate-300">
                    {cardData[hoveredCard].hormoziText}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
