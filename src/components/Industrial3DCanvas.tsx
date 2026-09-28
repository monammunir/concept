import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Industrial3DCanvasProps {
  currentStageIndex?: number;
  onSelectStage?: (index: number) => void;
  scrollProgress?: number;
}

export const Industrial3DCanvas: React.FC<Industrial3DCanvasProps> = ({
  currentStageIndex = 0,
  onSelectStage,
  scrollProgress = 0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [renderMode, setRenderMode] = useState<'RENDER' | 'BLUEPRINT' | 'EXPLODED' | 'SPECS'>('RENDER');
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);

  const stageLabels = [
    { id: 'CONCEPT', name: '01 / CONCEPT', desc: 'CAD Blueprinting', pos: [-2.2, 1.4, 0] },
    { id: 'DESIGN', name: '02 / DESIGN', desc: 'Surface Topology', pos: [2.3, 1.6, 0.5] },
    { id: 'ENGINEERING', name: '03 / ENGINEERING', desc: 'CNC Tolerances', pos: [-2.5, -0.8, -0.4] },
    { id: 'PRODUCTION', name: '04 / PRODUCTION', desc: 'In-House Assembly', pos: [2.2, -1.2, 0.8] },
    { id: 'EXPERIENCE', name: '05 / EXPERIENCE', desc: 'Brand Activation', pos: [0, -2.2, 1.2] },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0b0d, 0.08);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.5);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    container.appendChild(renderer.domElement);

    // Lights (Strict C-Concepts Palette: Dark charcoal ambient, cold white key, warm orange accent)
    const ambientLight = new THREE.AmbientLight(0x1a1d24, 1.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(5, 8, 5);
    scene.add(keyLight);

    const orangeAccentLight = new THREE.PointLight(0xff4500, 4, 12);
    orangeAccentLight.position.set(-3, -2, 3);
    scene.add(orangeAccentLight);

    const rimLight = new THREE.DirectionalLight(0x8e95a2, 1.5);
    rimLight.position.set(-5, -5, -4);
    scene.add(rimLight);

    // -------------------------------------------------------------
    // BUILD PRECISION INDUSTRIAL OBJECT
    // -------------------------------------------------------------
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Materials
    const darkMetalMaterial = new THREE.MeshStandardMaterial({
      color: 0x121418,
      metalness: 0.88,
      roughness: 0.25,
      wireframe: renderMode === 'BLUEPRINT',
    });

    const brushedAluminumMaterial = new THREE.MeshStandardMaterial({
      color: 0x8e95a2,
      metalness: 0.95,
      roughness: 0.18,
      wireframe: renderMode === 'BLUEPRINT',
    });

    const orangeAccentMaterial = new THREE.MeshStandardMaterial({
      color: 0xff4500,
      emissive: 0xff4500,
      emissiveIntensity: 0.6,
      roughness: 0.3,
      metalness: 0.5,
    });

    const glassCoreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.45,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.85,
      ior: 1.5,
    });

    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0xff4500,
      wireframe: true,
    });

    // 1. Central Core Octagonal Cylinder
    const coreGeo = new THREE.CylinderGeometry(1.1, 1.1, 0.9, 8);
    const coreMesh = new THREE.Mesh(coreGeo, renderMode === 'BLUEPRINT' ? wireframeMaterial : darkMetalMaterial);
    mainGroup.add(coreMesh);

    // Milled detail slots on core
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const slotGeo = new THREE.BoxGeometry(0.08, 0.7, 0.15);
      const slotMesh = new THREE.Mesh(slotGeo, renderMode === 'BLUEPRINT' ? wireframeMaterial : orangeAccentMaterial);
      slotMesh.position.set(Math.cos(angle) * 1.12, 0, Math.sin(angle) * 1.12);
      slotMesh.rotation.y = -angle;
      mainGroup.add(slotMesh);
    }

    // 2. Optical Glass Ring Core inside
    const glassGeo = new THREE.TorusGeometry(0.75, 0.15, 16, 32);
    const glassMesh = new THREE.Mesh(glassGeo, glassCoreMaterial);
    glassMesh.rotation.x = Math.PI / 2;
    mainGroup.add(glassMesh);

    // 3. Precision Mechanical Outer Gimbal Ring (Rotates independently)
    const ringGroup = new THREE.Group();
    const ringGeo = new THREE.TorusGeometry(1.6, 0.08, 16, 48);
    const ringMesh = new THREE.Mesh(ringGeo, renderMode === 'BLUEPRINT' ? wireframeMaterial : brushedAluminumMaterial);
    ringGroup.add(ringMesh);

    // Add Torx bolt caps on outer ring
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const boltGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.12, 6);
      const boltMesh = new THREE.Mesh(boltGeo, renderMode === 'BLUEPRINT' ? wireframeMaterial : darkMetalMaterial);
      boltMesh.position.set(Math.cos(angle) * 1.6, 0, Math.sin(angle) * 1.6);
      boltMesh.rotation.x = Math.PI / 2;
      ringGroup.add(boltMesh);
    }
    mainGroup.add(ringGroup);

    // 4. Four Mechanical Actuator Arms / Pistons
    const pistonsGroup = new THREE.Group();
    for (let i = 0; i < 4; i++) {
      const angle = (i / 4) * Math.PI * 2;
      const pistonArmGroup = new THREE.Group();

      const rodGeo = new THREE.CylinderGeometry(0.04, 0.04, 1.4, 12);
      const rodMesh = new THREE.Mesh(rodGeo, renderMode === 'BLUEPRINT' ? wireframeMaterial : brushedAluminumMaterial);
      rodMesh.position.y = 0.7;

      const jointGeo = new THREE.SphereGeometry(0.1, 12, 12);
      const jointMesh = new THREE.Mesh(jointGeo, renderMode === 'BLUEPRINT' ? wireframeMaterial : orangeAccentMaterial);
      jointMesh.position.y = 1.4;

      pistonArmGroup.add(rodMesh, jointMesh);
      pistonArmGroup.rotation.z = Math.PI / 2;
      pistonArmGroup.rotation.y = angle;
      pistonsGroup.add(pistonArmGroup);
    }
    mainGroup.add(pistonsGroup);

    // 5. Engineering Blueprint Grid Disc underneath
    const gridHelper = new THREE.PolarGridHelper(3.5, 16, 8, 64, 0xff4500, 0x242832);
    gridHelper.position.y = -1.8;
    if (Array.isArray(gridHelper.material)) {
      gridHelper.material.forEach(m => {
        m.opacity = 0.4;
        m.transparent = true;
      });
    } else {
      gridHelper.material.opacity = 0.4;
      gridHelper.material.transparent = true;
    }
    scene.add(gridHelper);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 1.2;
      mouseY = y * 1.2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth Rotation based on render mode and scroll progress
      const explodedOffset = renderMode === 'EXPLODED' ? 0.6 : 0;
      
      // Explode mechanical pistons
      pistonsGroup.children.forEach((piston, idx) => {
        const angle = (idx / 4) * Math.PI * 2;
        piston.position.x = THREE.MathUtils.lerp(piston.position.x, Math.cos(angle) * explodedOffset, 0.05);
        piston.position.z = THREE.MathUtils.lerp(piston.position.z, Math.sin(angle) * explodedOffset, 0.05);
      });

      // Rotation dynamics
      const baseRotationY = elapsedTime * 0.35 + scrollProgress * Math.PI * 2;
      targetRotationY = baseRotationY + mouseX * 0.8;
      targetRotationX = Math.sin(elapsedTime * 0.5) * 0.15 + mouseY * 0.6;

      mainGroup.rotation.y = THREE.MathUtils.lerp(mainGroup.rotation.y, targetRotationY, 0.08);
      mainGroup.rotation.x = THREE.MathUtils.lerp(mainGroup.rotation.x, targetRotationX, 0.08);

      ringGroup.rotation.z = elapsedTime * -0.6;
      glassMesh.rotation.z = elapsedTime * 0.4;

      // Stage rotation offsets
      if (currentStageIndex !== undefined) {
        const stageAngle = (currentStageIndex / 5) * Math.PI * 2;
        mainGroup.rotation.z = THREE.MathUtils.lerp(mainGroup.rotation.z, Math.sin(stageAngle) * 0.25, 0.05);
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
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
  }, [renderMode, scrollProgress, currentStageIndex]);

  return (
    <div className="relative w-full h-full min-h-[500px] flex items-center justify-center select-none">
      {/* 3D Canvas Mount point */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating Technical Overlay Labels */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        {stageLabels.map((lbl, idx) => {
          const isActive = currentStageIndex === idx;
          const isHovered = hoveredLabel === lbl.id;

          // Convert approx 3D coord to 2D UI positioning %
          const leftPos = 50 + lbl.pos[0] * 18;
          const topPos = 50 - lbl.pos[1] * 18;

          return (
            <div
              key={lbl.id}
              style={{ left: `${leftPos}%`, top: `${topPos}%` }}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto transition-all duration-300 ${
                isActive ? 'scale-110 z-20' : 'opacity-75 hover:opacity-100 z-10'
              }`}
              onMouseEnter={() => setHoveredLabel(lbl.id)}
              onMouseLeave={() => setHoveredLabel(null)}
              onClick={() => onSelectStage?.(idx)}
            >
              <div
                className={`flex items-center space-x-2 px-3 py-1.5 rounded-sm border text-xs font-mono backdrop-blur-md cursor-pointer transition-all ${
                  isActive
                    ? 'bg-[#FF4500]/20 border-[#FF4500] text-white shadow-[0_0_15px_rgba(255,69,0,0.4)]'
                    : 'bg-[#121418]/90 border-white/10 text-[#8E95A2] hover:border-white/40 hover:text-white'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#FF4500] animate-ping' : 'bg-white/40'}`} />
                <span className="font-semibold tracking-wider">{lbl.name}</span>
              </div>
              {(isActive || isHovered) && (
                <div className="mt-1 px-2 py-1 bg-[#0A0B0D]/95 border border-white/10 text-[10px] font-mono text-[#8E95A2] rounded-sm whitespace-nowrap shadow-xl">
                  {lbl.desc}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mode Controls & Diagnostics Toolbar */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 pointer-events-auto z-20">
        {/* Render Mode Switcher */}
        <div className="flex items-center space-x-1 p-1 bg-[#121418]/90 backdrop-blur-md border border-white/10 rounded-sm">
          {(['RENDER', 'BLUEPRINT', 'EXPLODED', 'SPECS'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setRenderMode(mode)}
              className={`px-3 py-1 text-[11px] font-mono font-medium rounded-xs transition-all ${
                renderMode === mode
                  ? 'bg-[#FF4500] text-white shadow-[0_0_10px_rgba(255,69,0,0.3)]'
                  : 'text-[#8E95A2] hover:text-white hover:bg-white/5'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>

        {/* Live Diagnostics Indicator */}
        <div className="hidden sm:flex items-center space-x-3 px-3 py-1.5 bg-[#121418]/90 backdrop-blur-md border border-white/10 text-[11px] font-mono text-[#8E95A2]">
          <div className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-[#FF4500] animate-pulse" />
            <span>CAD_SYS: ACTIVE</span>
          </div>
          <span className="text-white/20">|</span>
          <span>MAT: ANODIZED AL-7075</span>
          <span className="text-white/20">|</span>
          <span className="text-white">TOLERANCE: ±0.02mm</span>
        </div>
      </div>
    </div>
  );
};
