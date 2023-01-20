import { MeshDistortMaterial } from "@react-three/drei";
import React from "react";

export default function Box() {
  return (
    <mesh rotation={[90, 0, 20]}>
      <icosahedronBufferGeometry attach="geometry" args={[2.5, 0, 0]} />
      <MeshDistortMaterial
        attach="material"
        color="white"
        wireframe={true}
        distort={0.4}
      />
    </mesh>
  );
}
