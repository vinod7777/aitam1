import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Model = ({ ...props }) => {
  const { scene } = useGLTF("/globe/scene.gltf");
  const ref = useRef();

  const targetScale = 0.00025;
  useFrame((state, delta) => {
    if (!ref.current) return;
    const currentScale = ref.current.scale.x;
    // Smoothly animate the scale from its current value to the target
    if (currentScale < targetScale) {
      const speed = 4; // Slower on loading
      const newScale = currentScale + (targetScale - currentScale) * Math.min(1, delta * speed);
      ref.current.scale.setScalar(newScale);
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={0} // Start scale at 0 for a smooth scale-in animation
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
      {...props}
    />
  );
};

useGLTF.preload("/globe/scene.gltf");

export default Model;
