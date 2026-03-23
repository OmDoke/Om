import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// 1. Animated Particle Field
const ParticleField = () => {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate 2000 random points for the floating nodes
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50; // z
    }
    return positions;
  }, []);

  useFrame((_state, delta) => {
    if (pointsRef.current) {
      // Gentle drift
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particlesPosition, 3]}
        />
      </bufferGeometry>
      {/* Cyan particles to simulate neural/microservices nodes */}
      <pointsMaterial size={0.08} color="#00F5FF" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

// 2. Rotating Icosahedron
const HeroGeometry = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.x += delta * 0.1;
      // Floating up and down
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[5, 0, -5]} scale={[2.5, 2.5, 2.5]}>
      {/* Low-poly standard Icosahedron */}
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#050A14" wireframe={false} />
      {/* Wireframe overlay in cyan */}
      <mesh>
        <icosahedronGeometry args={[1.01, 0]} />
        <meshBasicMaterial color="#00F5FF" wireframe />
      </mesh>
    </mesh>
  );
};

// Main Canvas Component
const CyberBackground3D: React.FC = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, background: '#050A14' }}>
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={0.5} color="#3A4A5C" />
        {/* Cyan and Purple point lights */}
        <pointLight position={[10, 10, 10]} color="#00F5FF" intensity={2} />
        <pointLight position={[-10, -10, -10]} color="#7B2FFF" intensity={2} />
        
        <ParticleField />
        <HeroGeometry />
      </Canvas>
      {/* Dark overlay to ensure text readability */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'radial-gradient(circle at center, transparent 0%, #050A14 100%)',
        pointerEvents: 'none',
        zIndex: 1
      }} />
    </div>
  );
};

export default CyberBackground3D;
