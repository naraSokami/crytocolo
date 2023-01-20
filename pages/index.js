import styles from '../styles/pages/welcome.module.sass';
import * as THREE from "three";
import React, { useRef, useEffect, useState, Suspense } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { Block, useBlock } from "../src/three/blocks";
import state from "../src/three/store";
import { Environment, PerspectiveCamera, useGLTF } from '@react-three/drei';
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
        {/* <Plane
          scale={[contentMaxWidth, contentMaxWidth / aspect, 1]}
          color="#bfe2ca"
        /> */}
      {/* <spotLight
        // penumbra={100}
        distance={200}
        angle={80}
        anglePower={10}
        intensity={1}
        color="#ffffff"
        position={[0, 20, 10]}
      /> */}
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
      color="#00bbff"
    />
  );
}

function DubaiTower() {
  const glb = useGLTF("/models/dubai.glb", true)
  return <primitive object={glb.scene} dispose={null} />
}
export default function () {
  const scrollArea = useRef();
  const onScroll = (e) => (state.top.current = e.target.scrollTop);
  
  return (
    <>
      <Canvas 
        linear
        perspective
        camera={{ zoom: state.zoom, position: [0, 0, 500] }}
      >
      <Suspense fallback={<Loader />}>
          {/* First section */}
          <Block factor={1.5} offset={0}>
              <Content left >
                <ambientLight />
                <DubaiTower />
              </Content>
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
          <Environment preset={'studio'} blur={0.65} />
        </Suspense>
      </Canvas>
      <div className={styles.scrollArea} ref={scrollArea} onScroll={onScroll}>
        <div style={{ height: `${state.pages * 100}vh` }} />
      </div>
    </>
  )
}
