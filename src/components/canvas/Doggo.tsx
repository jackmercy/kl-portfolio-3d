import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import Loader from '../Loader';
import { Mesh } from 'three';

const Frenchie = ({ isMobile }: { isMobile: boolean }) => {
  const ref = useRef<Mesh>(null!);
  const doggo = useGLTF('/astrofrenchie/scene.gltf');
  return (
    <mesh ref={ref}>
      <hemisphereLight
        intensity={0.15}
        groundColor='black'
      />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={doggo.scene}
        scale={isMobile ? 2 : 3.5}
        position-y={0}
        rotation-y={0}
      />
    </mesh>

  )
}

const FrenchieCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);
    const handleQueryMediaChanged = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener('change', handleQueryMediaChanged);

    return () => {
      mediaQuery.removeEventListener('change', handleQueryMediaChanged);
    };
  }, []);

  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Frenchie isMobile={isMobile}/>
      </Suspense>
    </Canvas>
  );
};


export default FrenchieCanvas