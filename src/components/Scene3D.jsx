import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';

const Computer = () => {
  return (
    <mesh>
      <boxGeometry args={[2, 1.2, 0.1]} />
      <meshStandardMaterial color="#10b981" />
      {/* Screen */}
      <mesh position={[0, 0, 0.06]}>
        <boxGeometry args={[1.8, 1, 0.01]} />
        <meshStandardMaterial color="#059669" />
      </mesh>
      {/* Stand */}
      <mesh position={[0, -0.8, 0.2]}>
        <cylinderGeometry args={[0.1, 0.2, 0.4]} />
        <meshStandardMaterial color="#10b981" />
      </mesh>
      {/* Base */}
      <mesh position={[0, -1, 0.1]}>
        <cylinderGeometry args={[0.3, 0.3, 0.05]} />
        <meshStandardMaterial color="#059669" />
      </mesh>
    </mesh>
  );
};

const Scene3D = () => {
  return (
    <Canvas className="w-full h-[400px]">
      <Suspense fallback={null}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Computer />
      </Suspense>
    </Canvas>
  );
};

export default Scene3D;