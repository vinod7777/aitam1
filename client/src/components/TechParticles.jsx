import React, { useRef, useState, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import * as THREE from 'three';

const TechParticles = (props) => {
  const ref = useRef();
  const { particles, colors } = useMemo(() => {
    const numParticles = 500;
    const particles = new Float32Array(numParticles * 3);
    const colors = new Float32Array(numParticles * 3);
    const colorChoices = [new THREE.Color('#00ffff'), new THREE.Color('#ff00ff'), new THREE.Color('#00ff00')];

    for (let i = 0; i < numParticles; i++) {
      // Position
      particles[i * 3] = (Math.random() - 0.5) * 10; // x
      particles[i * 3 + 1] = (Math.random() - 0.5) * 10; // y
      particles[i * 3 + 2] = (Math.random() - 0.5) * 10; // z

      // Color
      const color = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return { particles, colors };
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta / 20;
      ref.current.rotation.y += delta / 25;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={particles} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          vertexColors
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const TechParticlesCanvas = () => (
  <div className="w-full h-full absolute inset-0 z-[-2]">
    <Canvas camera={{ position: [0, 0, 1] }}><Suspense fallback={null}><TechParticles /></Suspense><Preload all /></Canvas>
  </div>
);

export default TechParticlesCanvas;