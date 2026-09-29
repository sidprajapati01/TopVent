import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Planet3DProps {
  className?: string;
  isDark?: boolean;
}

export const Planet3D: React.FC<Planet3DProps> = ({ className = '', isDark = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [fpsReady, setFpsReady] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let isVisible = true;

    // Dimensions
    const width = container.clientWidth || 320;
    const height = container.clientHeight || 280;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4.2;

    // WebGL Renderer with high performance settings
    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.25;
      container.appendChild(renderer.domElement);
      setFpsReady(true);
    } catch {
      // Graceful WebGL fallback handled via UI
      return;
    }

    // Procedural High-Res Texture Generator for Luxury Celestial Planet
    const createPlanetTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');
      if (!ctx) return new THREE.Texture();

      // Deep celestial gradient base
      const bgGrad = ctx.createLinearGradient(0, 0, 0, 512);
      bgGrad.addColorStop(0, '#10031f');
      bgGrad.addColorStop(0.3, '#1c0836');
      bgGrad.addColorStop(0.5, '#2b0c50');
      bgGrad.addColorStop(0.7, '#1f0738');
      bgGrad.addColorStop(1, '#0e021a');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, 1024, 512);

      // Luxury topographical bands & metallic auroral currents
      const drawCurvedBands = (color: string, yOffset: number, widthScale: number, count: number) => {
        ctx.fillStyle = color;
        for (let i = 0; i < count; i++) {
          ctx.beginPath();
          const startX = (i * 220) % 1024;
          const y = yOffset + Math.sin(i * 1.5) * 45;
          ctx.arc(startX, y, 70 * widthScale, 0, Math.PI * 2);
          ctx.fill();
        }
      };

      // Amber/Tangerine liquid gold veins
      ctx.globalAlpha = 0.55;
      drawCurvedBands('#ff7700', 160, 1.2, 8);
      drawCurvedBands('#ffa733', 256, 0.9, 10);
      drawCurvedBands('#ff5500', 360, 1.4, 7);

      // Shimmering micro-stripes
      ctx.globalAlpha = 0.28;
      for (let y = 0; y < 512; y += 8) {
        ctx.fillStyle = y % 16 === 0 ? '#ffb366' : '#9b5de5';
        ctx.fillRect(0, y, 1024, 2);
      }

      // High-contrast gold & violet continent swirl contours
      ctx.globalAlpha = 0.85;
      ctx.strokeStyle = '#ff9933';
      ctx.lineWidth = 3;
      for (let j = 0; j < 12; j++) {
        ctx.beginPath();
        const px = (j * 110) % 1024;
        const py = 120 + ((j * 43) % 280);
        ctx.ellipse(px, py, 90, 35, j * 0.4, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.globalAlpha = 1.0;
      const texture = new THREE.CanvasTexture(canvas);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.ClampToEdgeWrapping;
      return texture;
    };

    // Bump Texture for realistic relief & specular glints
    const createBumpTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');
      if (!ctx) return new THREE.Texture();
      ctx.fillStyle = '#808080';
      ctx.fillRect(0, 0, 512, 256);
      ctx.fillStyle = '#ffffff';
      for (let i = 0; i < 400; i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 256;
        const r = Math.random() * 4 + 1;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      return new THREE.CanvasTexture(canvas);
    };

    const planetTexture = createPlanetTexture();
    const bumpTexture = createBumpTexture();

    // Planet Core Sphere
    const sphereGeometry = new THREE.SphereGeometry(1.22, 64, 64);
    const sphereMaterial = new THREE.MeshStandardMaterial({
      map: planetTexture,
      bumpMap: bumpTexture,
      bumpScale: 0.04,
      roughness: 0.38,
      metalness: 0.65,
    });
    const planetMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    planetMesh.rotation.z = 0.38; // 22-degree axial tilt like luxury watches & Saturn
    scene.add(planetMesh);

    // Glowing Atmospheric Aura Halo
    const atmosphereGeometry = new THREE.SphereGeometry(1.28, 48, 48);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#fe6b00'),
      transparent: true,
      opacity: 0.16,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
    });
    const atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphereMesh);

    // Outer Violet Shimmer Halo
    const outerHaloGeometry = new THREE.SphereGeometry(1.36, 32, 32);
    const outerHaloMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#9333ea'),
      transparent: true,
      opacity: 0.08,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
    });
    const outerHalo = new THREE.Mesh(outerHaloGeometry, outerHaloMaterial);
    scene.add(outerHalo);

    // Celestial Golden Ring (Fashion Orbit Ring)
    const ringGeometry = new THREE.RingGeometry(1.52, 1.84, 80);
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#ff8c38'),
      roughness: 0.3,
      metalness: 0.85,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.72,
    });
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh.rotation.x = Math.PI / 2.3;
    ringMesh.rotation.y = 0.22;
    scene.add(ringMesh);

    // Sparkling Orbital Satellite Dust Particles
    const particleCount = 180;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.9 + Math.random() * 0.9;
      const angle = Math.random() * Math.PI * 2;
      const heightVar = (Math.random() - 0.5) * 0.35;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = heightVar;
      positions[i * 3 + 2] = Math.sin(angle) * radius;

      const isGold = Math.random() > 0.4;
      colors[i * 3] = isGold ? 1.0 : 0.75;
      colors[i * 3 + 1] = isGold ? 0.6 : 0.3;
      colors[i * 3 + 2] = isGold ? 0.2 : 0.9;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.038,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    particleSystem.rotation.x = Math.PI / 2.3;
    scene.add(particleSystem);

    // Lighting Setup
    // Key Warm Light
    const keyLight = new THREE.DirectionalLight('#ff9e42', 2.8);
    keyLight.position.set(4, 3, 3);
    scene.add(keyLight);

    // Fill Cool Ambient
    const fillLight = new THREE.DirectionalLight('#c084fc', 1.2);
    fillLight.position.set(-4, -2, -2);
    scene.add(fillLight);

    // Ambient baseline
    const ambientLight = new THREE.AmbientLight('#280847', 1.6);
    scene.add(ambientLight);

    // Point Light for center specular highlight
    const pointLight = new THREE.PointLight('#ff5500', 2.0, 8);
    pointLight.position.set(1.5, 1.2, 2.8);
    scene.add(pointLight);

    // Dynamic Scroll Interaction Tracking
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;
    let targetRotationSpeed = 0.005;
    let currentRotationSpeed = 0.005;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      // Scroll input gives dynamic rotational impulse
      scrollVelocity = delta * 0.0025;
      targetRotationSpeed = 0.006 + Math.min(Math.abs(scrollVelocity) * 2.2, 0.08);
      targetRotationX += delta * 0.0012;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Touch & Pointer Drag Interaction for 3D exploration
    let isDragging = false;
    let prevPointerX = 0;
    let prevPointerY = 0;
    let dragVelocityX = 0;
    let dragVelocityY = 0;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      setIsInteracting(true);
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      prevPointerX = clientX;
      prevPointerY = clientY;
      dragVelocityX = 0;
      dragVelocityY = 0;
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      const deltaX = clientX - prevPointerX;
      const deltaY = clientY - prevPointerY;
      prevPointerX = clientX;
      prevPointerY = clientY;

      dragVelocityX = deltaX * 0.005;
      dragVelocityY = deltaY * 0.005;

      targetRotationY += dragVelocityX;
      targetRotationX += dragVelocityY;
    };

    const onPointerUp = () => {
      isDragging = false;
      setTimeout(() => setIsInteracting(false), 800);
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    domElement.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    // Responsive Canvas Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newWidth, height: newHeight } = entry.contentRect;
        if (newWidth > 0 && newHeight > 0 && renderer) {
          camera.aspect = newWidth / newHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(newWidth, newHeight);
        }
      }
    });
    resizeObserver.observe(container);

    // Intersection Observer to suspend rendering when offscreen
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting;
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(container);

    // Animation Loop with smooth inertial lerping
    const renderLoop = () => {
      animationFrameId = requestAnimationFrame(renderLoop);

      if (!isVisible || !renderer) return;

      // Decay scroll velocity impulse back to steady celestial rotation
      currentRotationSpeed += (targetRotationSpeed - currentRotationSpeed) * 0.06;
      targetRotationSpeed += (0.005 - targetRotationSpeed) * 0.04;

      // Damp drag velocity
      if (!isDragging) {
        targetRotationY += dragVelocityX;
        targetRotationX += dragVelocityY;
        dragVelocityX *= 0.94;
        dragVelocityY *= 0.94;
      }

      // Continuous natural orbital rotation + scroll velocity
      planetMesh.rotation.y += currentRotationSpeed;
      ringMesh.rotation.z -= currentRotationSpeed * 0.65;
      particleSystem.rotation.z += currentRotationSpeed * 0.8;

      // Apply tilt & drag deltas with smooth settling curves
      planetMesh.rotation.x += (targetRotationX - planetMesh.rotation.x) * 0.08;
      planetMesh.rotation.y += (targetRotationY - planetMesh.rotation.y) * 0.08;

      // Keep bounding limits on X tilt so user never loses orientation
      targetRotationX = Math.max(-0.65, Math.min(0.65, targetRotationX));

      // Subtle atmospheric pulsation
      const time = performance.now() * 0.0015;
      atmosphereMesh.scale.setScalar(1 + Math.sin(time) * 0.012);
      outerHalo.scale.setScalar(1 + Math.cos(time * 0.8) * 0.018);

      renderer.render(scene, camera);
    };

    renderLoop();

    // Clean up all resources when unmounted
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
      domElement.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      domElement.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);

      resizeObserver.disconnect();
      intersectionObserver.disconnect();

      sphereGeometry.dispose();
      sphereMaterial.dispose();
      planetTexture.dispose();
      bumpTexture.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
      outerHaloGeometry.dispose();
      outerHaloMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();

      if (renderer) {
        renderer.dispose();
        if (renderer.domElement.parentElement) {
          renderer.domElement.parentElement.removeChild(renderer.domElement);
        }
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[260px] sm:h-[300px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none overflow-hidden touch-none ${className}`}
      title="Scroll or drag to rotate TopVent Celestial Sphere"
    >
      {/* Interactive Helper Badge */}
      <div
        className={`absolute bottom-2.5 left-1/2 -translate-x-1/2 z-10 px-3 py-1 rounded-full text-[11px] font-medium transition-all duration-300 pointer-events-none flex items-center gap-1.5 shadow-sm ${
          isInteracting
            ? 'bg-orange-500/90 text-white scale-105'
            : isDark
            ? 'bg-slate-900/70 text-slate-300 border border-white/10 backdrop-blur-md'
            : 'bg-white/80 text-slate-700 border border-slate-200/80 backdrop-blur-md'
        }`}
      >
        <span className="material-symbols-outlined text-[14px] text-orange-400 animate-spin" style={{ animationDuration: '4s' }}>
          3d_rotation
        </span>
        <span className="tracking-tight">
          {isInteracting ? 'Rotating 3D Orb' : 'Interactive WebGL • Scroll or Drag to Spin'}
        </span>
      </div>

      {/* Subtle Glow backdrop */}
      <div className="absolute inset-0 bg-radial from-orange-500/10 via-purple-600/5 to-transparent pointer-events-none -z-10" />
    </div>
  );
};
