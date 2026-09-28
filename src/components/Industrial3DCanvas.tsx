import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Industrial3DCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    container.appendChild(renderer.domElement);

    // Soft Cinematic Lighting (Strict C-Concepts Palette: Charcoal & Soft Warm Specular)
    const ambientLight = new THREE.AmbientLight(0x1a1d24, 1.2);
    scene.add(ambientLight);

    // Soft key light
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(4, 6, 4);
    scene.add(keyLight);

    // Soft subtle warm accent rim light
    const rimLight = new THREE.DirectionalLight(0xff4500, 0.8);
    rimLight.position.set(-4, -4, -2);
    scene.add(rimLight);

    // Top soft fill
    const topLight = new THREE.DirectionalLight(0x8e95a2, 0.9);
    topLight.position.set(0, 8, -2);
    scene.add(topLight);

    // -------------------------------------------------------------
    // SINGLE PRECISISON INDUSTRIAL SCULPTURE
    // Precision machined matte black ring & inner polished core
    // -------------------------------------------------------------
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Materials
    const matteBlackMetal = new THREE.MeshStandardMaterial({
      color: 0x121418,
      metalness: 0.85,
      roughness: 0.28,
    });

    const brushedAluminum = new THREE.MeshStandardMaterial({
      color: 0x9ea4b0,
      metalness: 0.92,
      roughness: 0.18,
    });

    const subtleGlass = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.35,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.85,
      ior: 1.5,
    });

    const subtleOrangeAccent = new THREE.MeshStandardMaterial({
      color: 0xff4500,
      emissive: 0xff4500,
      emissiveIntensity: 0.2,
      roughness: 0.4,
      metalness: 0.6,
    });

    // 1. Chamfered Outer Anodized Cylinder Ring
    const outerRingGeo = new THREE.CylinderGeometry(1.6, 1.6, 0.4, 64);
    const outerRingMesh = new THREE.Mesh(outerRingGeo, matteBlackMetal);
    mainGroup.add(outerRingMesh);

    // Milled inner bevel ring
    const innerRingGeo = new THREE.TorusGeometry(1.4, 0.06, 32, 64);
    const innerRingMesh = new THREE.Mesh(innerRingGeo, brushedAluminum);
    innerRingMesh.rotation.x = Math.PI / 2;
    mainGroup.add(innerRingMesh);

    // 2. Center Glass & Metal Optical Chamber
    const glassCoreGeo = new THREE.SphereGeometry(0.85, 32, 32);
    const glassCoreMesh = new THREE.Mesh(glassCoreGeo, subtleGlass);
    mainGroup.add(glassCoreMesh);

    // Inner mechanical pin ring
    const pinGroup = new THREE.Group();
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const pinGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.35, 16);
      const pinMesh = new THREE.Mesh(pinGeo, subtleOrangeAccent);
      pinMesh.position.set(Math.cos(angle) * 1.05, 0, Math.sin(angle) * 1.05);
      pinGroup.add(pinMesh);
    }
    mainGroup.add(pinGroup);

    // Mouse Interaction variables
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 0.4;
      mouseY = y * 0.4;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop (Slow, restrained, elegant motion)
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Subtle rotation
      mainGroup.rotation.y = elapsedTime * 0.15 + mouseX;
      mainGroup.rotation.x = Math.sin(elapsedTime * 0.2) * 0.08 + mouseY;
      pinGroup.rotation.y = elapsedTime * -0.25;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[400px] sm:min-h-[500px] flex items-center justify-center">
      <div ref={containerRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};
