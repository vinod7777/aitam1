import React, { useState, useEffect } from 'react'
import StarsCanvas from './star'
import Nav from './nav.jsx';
import TechParticlesCanvas from './TechParticles';
import Title from './Title'
import HomeModel from './HomeModel'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import gfg from '../assets/gfg.png'

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
      <Nav />
      <div className="absolute inset-0 z-10"><TechParticlesCanvas /></div>
      <div className="absolute inset-0 z-20">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 45
          }} 
          gl={{ localClippingEnabled: true }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.05} />
            <directionalLight intensity={0.2} position={[5, 5, 5]} />
            <pointLight color="#00ffff" intensity={1.5} distance={10} decay={2} position={[0, -3, 0]} />
            <HomeModel />
            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={0.3}
              enablePan={false}
            />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute inset-0 flex flex-col items-center translate-y-10 justify-center text-center z-30">
        <div className="z-10 transform ">
          <Title />
        </div>
        <div className="z-10 transform ">
          <p
            className="text-[#d1d5dc] text-1xl md:text-2xl lg:text-3xl tracking-[0.2em] font-bold"
            style={{
              fontFamily: "'Orbitron', 'Inter', system-ui, sans-serif",
              WebkitFontSmoothing: 'antialiased',
            }}
          >
            SEASON 3
          </p>
        </div>
        <div className="">
          
            <p className="text-[#00ffff] text-[0.8rem] md:text-[1.1rem] lg:text-[1.3rem] tracking-[0.2em] translate-y-1 font-bold">
              <span className="text-[#00ffff] drop-shadow-[0_0_8px_#00ffff]">[INNOVATION</span>
              <span className="mx-2 text-white">·</span>
              <span className="text-[#ff00ff] drop-shadow-[0_0_8px_#ff00ff]">TECHNOLOGY</span>
              <span className="mx-2 text-white">·</span>
              <span className="text-[#00ff00] drop-shadow-[0_0_8px_#00ff00]">FUTURE]</span>
            </p>
          </div>

          <div className='translate-y-7'>
            <p className='text-[#ffff] text-[0.8rem] md:text-[1.1rem] lg:text-[1.3rem] font-bold'>Powered By</p>
            <img src={gfg} alt="gfg" className="w-20 md:w-25 lg:w-32  h-auto bg-white p-2 rounded-md mt-2 " />
          </div>
      </div>
      <div className="absolute inset-0 z-0"><StarsCanvas /></div>

    </section>
  );
}
