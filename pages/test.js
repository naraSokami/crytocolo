import React, { useRef, useEffect } from 'react';
import { Canvas, useRender } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const ModelPage = () => {
    const meshRef = useRef();

    useRender(() => {
        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;
    });

    useEffect(() => {
        const loader = new GLTFLoader();
        loader.load('/models/plane.glb', (gltf) => {
            meshRef.current.add(gltf.scene);
        });
    }, []);

    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <mesh ref={meshRef}>
                <planeBufferGeometry />
                <meshStandardMaterial />
            </mesh>
        </Canvas>
    );
};

ModelPage.getInitialProps = async ({req}) => {
    if (req) {
        return {};
    } else {
        return {};
    }
}

export default ModelPage;
