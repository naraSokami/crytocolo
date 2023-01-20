import React from "react";
import Article from "../../components/sandbox/article/Article";

import { IcoGeo, OctGeo } from "../../components/sandbox";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const WhatBTHSTech = () => {
  return (
    <div className="bthsTech__whatBTHSTech">
      <div className="bthsTech__3d">
        <Canvas>
          <OrbitControls
            enableZoom={false}
            autoRotate={true}
            autoRotateSpeed={0.5}
          />
          <ambientLight intensity={0.2} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <IcoGeo />
        </Canvas>
      </div>
      <Article
        title="Our Mission"
        text="We hope to provide a place for students to practice and gain experience in computer science while also learning to work in a team. 
        We want to make the field approachable to any who have an interest in computer science topics by providing a space to explore and learn about those topics.
        Our team also aims to develop helpful programs, resources, and technology that benefits the students, teachers, and staff
        through dedicating time towards projects."
      />
    </div>
  );
};

export default WhatBTHSTech;
