import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus, Environment, Text, Float } from '@react-three/drei';
import * as THREE from 'three';

function HealingOrb({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.scale.setScalar(hovered ? 1.2 : 1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere
        ref={meshRef}
        position={position}
        args={[0.8]}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.8}
          emissive={color}
          emissiveIntensity={hovered ? 0.3 : 0.1}
          roughness={0.2}
          metalness={0.1}
        />
      </Sphere>
    </Float>
  );
}

function TherapyElement({ position, rotation }: { position: [number, number, number]; rotation: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
      <Box ref={meshRef} position={position} rotation={rotation} args={[0.6, 0.1, 0.6]}>
        <meshStandardMaterial
          color="#8B4513"
          roughness={0.8}
          metalness={0.1}
        />
      </Box>
    </Float>
  );
}

function AyurvedicSymbol() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Torus position={[0, 0, 0]} args={[1.5, 0.1, 16, 100]}>
        <meshStandardMaterial
          color="#DAA520"
          emissive="#DAA520"
          emissiveIntensity={0.2}
          roughness={0.3}
          metalness={0.7}
        />
      </Torus>
      <Text
        position={[0, 0, 0.1]}
        fontSize={0.5}
        color="#2E8B57"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter.woff"
      >
        ॐ
      </Text>
    </group>
  );
}

export default function TherapyScene() {
  return (
    <div className="w-full h-[60vh] relative">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        className="bg-transparent"
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#DAA520" />
        
        {/* Central Ayurvedic Symbol */}
        <AyurvedicSymbol />
        
        {/* Healing Orbs */}
        <HealingOrb position={[-3, 2, 0]} color="#2E8B57" />
        <HealingOrb position={[3, -1, 0]} color="#DAA520" />
        <HealingOrb position={[0, 3, -2]} color="#4682B4" />
        
        {/* Therapy Elements */}
        <TherapyElement position={[-2, -2, 1]} rotation={[0.2, 0.5, 0]} />
        <TherapyElement position={[2, 2, -1]} rotation={[-0.2, -0.5, 0]} />
        
        <Environment preset="sunset" />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-healing opacity-20 pointer-events-none" />
    </div>
  );
}