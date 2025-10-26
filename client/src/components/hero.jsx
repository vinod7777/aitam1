import React, { useState, useEffect } from 'react'
import StarsCanvas from './star'
import Title from './Title'
import HomeModel from './HomeModel'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);

  return (
    <section className="w-full h-screen relative">
      <StarsCanvas />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div className="z-10  transform -translate-y-50">
          <Title />
          
        </div>
        <div className="fixed">
            <p className="text-[#00ffff] text-lg tracking-[0.2em]  translate-y-2 font-bold">
              <span className="text-[#00ffff]">[ INNOVATION</span>
              <span className="mx-2 text-white">·</span>
              <span className="text-[#ff00ff]">TECHNOLOGY</span>
              <span className="mx-2 text-white">·</span>
              <span className="text-[#00ff00]">FUTURE ]</span>
            </p>
          </div>

        <div className="absolute inset-0 z-0">
          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 45
            }}
          >
            <Suspense fallback={null}>
              <ambientLight intensity={0.1} />
              <directionalLight intensity={0.4} position={[5, 5, 5]} />
              <HomeModel />
              <OrbitControls
                enableZoom={false}
                autoRotate
                autoRotateSpeed={0.3}
                enablePan={false}
                minPolarAngle={isMobile ? 0 : Math.PI / 2}
                maxPolarAngle={isMobile ? Math.PI : Math.PI / 2}
              />
            </Suspense>
          </Canvas>
        </div>

       
      </div>
    </section>
  );
}
