import { Suspense, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import StarsCanvas from "../components/star.jsx";
import Model from "../components/Model.jsx";
import LoadingTitle from "../components/LoadingTitle.jsx";

function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <StarsCanvas />
      <div className="relative w-full h-screen">
        <div className="absolute inset-0">
          <Canvas
            shadows
            frameloop="always"
            gl={{ preserveDrawingBuffer: true }}
            camera={{ 
              fov: 45,
              near: 0.1,
              far: 200,
              position: [0, 0, 8]
            }}
          >
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1.5} />
              <Model page="loading" />
              <OrbitControls
                autoRotate
                autoRotateSpeed={0.5}
                enableZoom={false}
                maxPolarAngle={Math.PI}
                minPolarAngle={0}
              />
            </Suspense>
            <Preload all />
          </Canvas>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <p className=" z-50">
           <LoadingTitle  />
          </p>
        </div>
      </div>
    </>
  );
}
export default Loading;