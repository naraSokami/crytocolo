import styles from '../styles/pages/welcome.module.sass';
import * as THREE from "three";
import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { Block, useBlock } from "../src/three/blocks";
import state from "../src/three/store";
import { useGLTF } from '@react-three/drei';
import { useHover } from 'react-use-gesture';

function Plane({ color = "white", ...props }) {
  return (
    <mesh {...props}>
      <planeGeometry />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

function Cross() {
  const ref = useRef();
  const { viewportHeight } = useBlock();
  useFrame(() => {
    const curTop = state.top.current;
    const curY = ref.current.rotation.z;
    const nextY =
      (curTop / ((state.pages - 1) * viewportHeight * state.zoom)) * Math.PI;
    ref.current.rotation.z = THREE.MathUtils.lerp(curY, nextY, 0.1);
  });
  return (
    <group ref={ref} scale={[2, 2, 2]}>
      <Plane scale={[1, 0.2, 0.2]} color="#e2bfca" />
      <Plane scale={[0.2, 1, 0.2]} color="#e2bfca" />
    </group>
  );
}

function Content({ left, children }) {
  const { contentMaxWidth, canvasWidth, margin } = useBlock();
  const aspect = 1.75;
  const alignRight = (canvasWidth - contentMaxWidth - margin) / 2;
  return (
    <group position={[alignRight * (left ? -1 : 1), 0, 0]}>
      <Plane
        scale={[contentMaxWidth, contentMaxWidth / aspect, 1]}
        color="#bfe2ca"
      />
      {children}
    </group>
  );
}

function Stripe() {
  const { contentMaxWidth } = useBlock();
  return (
    <Plane
      scale={[100, contentMaxWidth, 1]}
      rotation={[0, 0, Math.PI / 4]}
      position={[0, 0, -1]}
      color="#e3f6f5"
    />
  );
}

function EcoLight() {
  const glb = useGLTF("/models/ecoLight/scene.gltf", true)
  return <primitive object={glb.scene} dispose={null} />
}


export default function () {
  const [hovered, setHovered] = useState(false)
  const scrollArea = useRef();
  const onScroll = (e) => (state.top.current = e.target.scrollTop);
  useEffect(() => void onScroll({ target: scrollArea.current }), []);

  const bind = useHover(({ hovering }) => setHovered(hovering))

  return (
    <>
      <Canvas
        linear
        orthographic
        camera={{ zoom: state.zoom, position: [0, 0, 500] }}
      >
        
        {/* First section */}
        <Block factor={1.5} offset={0}>
            <ambientLight intensity={10} />
            <mesh {...bind()}>
              {/* <spotLight
                penumbra={100}
                distance={200}
                angle={120}
                anglePower={80}
                intensity={3}
              /> */}
              <EcoLight />
            </mesh>
            {/* <Content left >
            </Content> */}
        </Block>
        {/* Second section */}
        <Block factor={2.0} offset={1}>
          <Content />
        </Block>
        {/* Stripe */}
        <Block factor={-1.0} offset={1}>
          <Stripe />
        </Block>
        {/* Last section */}
        <Block factor={1.5} offset={2}>
          <Content left>
            <Block factor={-0.5}>
              <Cross />
            </Block>
          </Content>
        </Block>
        <Block factor={1.5} offset={3}>
          <Content />
        </Block>
      </Canvas>
      <div className={styles.scrollArea} ref={scrollArea} onScroll={onScroll}>
        <div style={{ height: `${state.pages * 100}vh` }} />
      </div>
    </>
  )
}
