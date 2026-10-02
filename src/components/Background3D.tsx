import React, { useEffect, useRef } from 'react';

export default function Background3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // તમારો Three.js કોડ અહીં
    // requestAnimationFrame ને throttle કરો (30fps)
    let animationId: number;
    let lastTime = 0;
    const FPS = 30;
    const interval = 1000 / FPS;

    const animate = (time: number) => {
      animationId = requestAnimationFrame(animate);
      if (time - lastTime < interval) return;
      lastTime = time;

      // તમારો render કોડ
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return <canvas ref={canvasRef} className="3d-background" />;
}