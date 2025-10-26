import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Model = ({ ...props }) => {
  // Load the glTF scene placed under `public/globe/scene.gltf`.
  // This project includes `client/public/globe/scene.gltf` and the
  // accompanying `scene.bin` in the same folder, so it is served at
  // `/globe/scene.gltf` and `/globe/scene.bin`.
  // Note: this model uses large world coordinates (values in the
  // thousands). We apply a conservative scale so it becomes visible
  // in a typical three.js camera. If the model is off-center, we can
  // normalize its position later by computing a bounding box.
  const { scene } = useGLTF("/globe/scene.gltf");
  const ref = useRef();

  // Animate scale from 1 -> targetScale for a smooth load animation
  const targetScale = 0.00025;
  useFrame((state, delta) => {
    if (!ref.current) return;
    const s = ref.current.scale.x;
    // simple exponential-like lerp for smooth animation
    const speed = 7; // larger is faster
    const newS = s + (targetScale - s) * Math.min(1, delta * speed);
    ref.current.scale.setScalar(newS);
  });

  // The primitive object is a way to directly render a complex THREE.js object.
  // We are scaling it down and positioning it. You may need to adjust these
  // values based on your model's original size and pivot point.
  return (
    <primitive
      ref={ref}
      object={scene}
      // Start value will be updated by the frame loop; set an initial
      // scalar so the primitive exists at scale 1 before animation begins.
      scale={1}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
      {...props}
    />
  );
};

// Preload the model to improve loading experience
// Preload the model to improve loading experience (path must match above)
useGLTF.preload("/globe/scene.gltf");

export default Model;
