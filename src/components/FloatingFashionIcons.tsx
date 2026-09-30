import React, { useEffect, useRef } from 'react';

interface FloatingIcon {
  id: number;
  emoji: string;
  size: number;
  x: number;      // percentage 0-100
  y: number;      // percentage 0-100
  speed: number;  // scroll multiplier
  rotation: number;
  opacity: number;
}

const FASHION_ICONS = ['👗', '👠', '👔', '🕶️', '👜', '⌚', '👞', '🧥', '👕', '👒'];

export const FloatingFashionIcons: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate random icon positions (stable, one-time)
  const icons: FloatingIcon[] = React.useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      emoji: FASHION_ICONS[i % FASHION_ICONS.length],
      size: 28 + Math.random() * 24,        // 28-52px
      x: Math.random() * 100,                // 0-100%
      y: Math.random() * 100,                // 0-100%
      speed: 0.3 + Math.random() * 0.7,      // 0.3-1.0 parallax
      rotation: -30 + Math.random() * 60,    // -30 to 30deg
      opacity: 0.15 + Math.random() * 0.2,   // 0.15-0.35
    }));
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const y = window.scrollY;
      container.style.setProperty('--scroll', `${y}px`);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0, opacity: 1 }}
      aria-hidden="true"
    >
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="absolute select-none fashion-float"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            fontSize: `${icon.size}px`,
            opacity: icon.opacity,
            transform: `
              translateY(calc(var(--scroll, 0px) * -${icon.speed}))
              rotate(${icon.rotation}deg)
            `,
            filter: 'drop-shadow(0 0 12px rgba(249, 115, 22, 0.3))',
            animation: `float-${icon.id % 3} ${8 + icon.id * 0.4}s ease-in-out infinite`,
          }}
        >
          {icon.emoji}
        </div>
      ))}
    </div>
  );
};