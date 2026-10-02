import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

// ═════════════════════════════════════════
// 3D OBJECTS — Scroll પર move થાય
// ═════════════════════════════════════════
const AnimatedObject = ({ scrollY }: { scrollY: React.MutableRefObject<number> }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const icoRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const scrollFactor = scrollY.current * 0.001;

    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.3 + scrollFactor * 2;
      meshRef.current.rotation.y = t * 0.4 + scrollFactor * 3;
      meshRef.current.position.y = Math.sin(t * 0.5) * 0.3 - scrollFactor * 5;
      meshRef.current.position.x = Math.cos(scrollFactor * 2) * 0.5;
    }

    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.5;
      torusRef.current.rotation.z = t * 0.3 - scrollFactor * 2;
      torusRef.current.position.y = -scrollFactor * 3;
    }

    if (icoRef.current) {
      icoRef.current.rotation.y = -t * 0.6 + scrollFactor * 4;
      icoRef.current.position.x = Math.sin(t) * 1.5;
      icoRef.current.position.y = Math.cos(t * 0.7) * 1.2 + scrollFactor * 4;
    }
  });

  return (
    <>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere ref={meshRef} args={[1, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#f97316"
            emissive="#ea580c"
            emissiveIntensity={0.4}
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </Float>

      <Torus
        ref={torusRef}
        args={[2, 0.05, 16, 100]}
        position={[0, 0, -2]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial
          color="#a855f7"
          emissive="#7c3aed"
          emissiveIntensity={0.6}
          metalness={1}
          roughness={0.1}
        />
      </Torus>

      <Icosahedron ref={icoRef} args={[0.4, 0]} position={[2, 1, -3]}>
        <meshStandardMaterial
          color="#fbbf24"
          emissive="#f59e0b"
          emissiveIntensity={0.8}
          metalness={0.9}
          roughness={0.1}
        />
      </Icosahedron>
    </>
  );
};

// ═════════════════════════════════════════
// LIGHTS
// ═════════════════════════════════════════
const SceneSetup = () => (
  <>
    <ambientLight intensity={0.3} />
    <pointLight position={[10, 10, 10]} intensity={1.5} color="#f97316" />
    <pointLight position={[-10, -10, -10]} intensity={1} color="#a855f7" />
    <spotLight position={[0, 5, 5]} angle={0.5} intensity={1} color="#fbbf24" />
  </>
);

// ═════════════════════════════════════════
// MAIN COMPONENT — SINGLE EXPORT (FIXED)
// ═════════════════════════════════════════
export const ScrollBackground3D: React.FC = () => {
  const scrollYRef = useRef(0);
  const [isMobile, setIsMobile] = useState(false);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Scroll tracker
  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ⭐ Mobile પર disable
  if (isMobile) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0, opacity: 0.55 }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <SceneSetup />
        <AnimatedObject scrollY={scrollYRef} />
      </Canvas>
    </div>
  );
};