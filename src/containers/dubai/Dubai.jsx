import React from "react";
import Article from "../../components/sandbox/article/Article";

import { OctGeo } from "../../components/sandbox";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Dubai = () => {
  return (
    <div className="bthsTech__whatAreWe" id="wbthsTech">
      <Article
        className="bthsTech__whatarewe-article"
        title="Dubai"
        text="Brooklyn Technical High School Technologies is a team started in 2022 
        hoping to provide students with oppurtunities to practice skills useful in computer science. 
        We hope to provide our skills to the Brooklyn Tech community in hopes that we can not only learn and apply our skills to a common goal but also so that gain the experience of working with a team in order to create software that can improve the daily lives of not only students but also teachers."
      />
      <div className="bthsTech__3d">
        <Canvas>
          <OrbitControls
            enableZoom={false}
            autoRotate={true}
            autoRotateSpeed={0.5}
          />
          <ambientLight intensity={0.2} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <OctGeo />
        </Canvas>
      </div>
    </div>
  );
};

export default Dubai;
