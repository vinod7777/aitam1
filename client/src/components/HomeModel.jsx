import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const HomeModel = ({ ...props }) => {
  const { scene } = useGLTF("/globe/scene.gltf");
  const ref = useRef();

  const targetScale = 0.00056;
  useFrame((state, delta) => {
    if (!ref.current) return;
    const currentScale = ref.current.scale.x;
    
    if (currentScale < targetScale) {
      const speed = 7;
      const newScale = currentScale + (targetScale - currentScale) * Math.min(1, delta * speed);
      ref.current.scale.setScalar(newScale);
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={0} 
      position={[0, -3.25, 0]} 
      rotation={[0, 0, 0]}
      {...props}
    />
  );
};

export default HomeModel;