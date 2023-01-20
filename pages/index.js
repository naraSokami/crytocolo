import styles from '../styles/pages/welcome.module.sass';
import * as THREE from "three";
import React, { useRef, useEffect, useState, Suspense } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { Block, useBlock } from "../src/three/blocks";
import state from "../src/three/store";
import { Environment, PerspectiveCamera, useGLTF } from '@react-three/drei';
import { useHover } from 'react-use-gesture';
import Loader from '../src/three/loader';


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
    <group position={[alignRight * (left ? -1 : 1), 0, 0]} onPointerDown={(e) => console.log('down')}>
      
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

function EcoLight() {
  const glb = useGLTF("/models/ecoLight/scene.gltf", true)
  return <primitive object={glb.scene} dispose={null} />
}

function DubaiTower() {
  // const glb = useGLTF("/models/pudgy_black_cat.glb", true)
  const glb = useGLTF("/models/dubai.glb", true)
  return <primitive object={glb.scene} dispose={null} scale={100} position={[5, 0, 0]} />
}

function PlaneThatFlies() {
  const glb = useGLTF("/models/plane.glb", true)
  return <primitive object={glb.scene} dispose={null} scale={.03} rotation={[1.5, Math.PI, 0]} />
}

export default function () {
  const [hovered, setHovered] = useState(false)
  const scrollArea = useRef();
  const onScroll = (e) => (state.top.current = e.target.scrollTop);
  useEffect(() => void onScroll({ target: scrollArea.current }), []);
  const camera = useRef(null);

  const bind = useHover(({ hovering }) => setHovered(hovering))

  return (
    <>
      <Canvas
        linear
        orthographic
        camera={{ zoom: state.zoom, position: [0, 0, 500] }}
      >
      <Suspense fallback={<Loader />}>
          {/* First section */}
          <Block factor={1.5} offset={0}>
              <Content left>
                  <ambientLight />
                  <PlaneThatFlies />
              </Content>
          </Block>
          {/* Second section */}
          <Block factor={2.0} offset={1}>
            <Content />
          </Block>
          {/* Stripe */}
          <Block factor={-1.0} offset={1}>
            {/* <Stripe /> */}
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
            {/* <Content /> */}
            <mesh onClick={() => alert('Hellooo')} >
              <boxGeometry />
              <meshPhongMaterial color="royalblue" />
            </mesh>
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
