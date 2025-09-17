import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, PresentationControls, Float } from '@react-three/drei';
import { Group } from 'three';
import { motion } from 'framer-motion';

interface HarpyModelProps {
  scrollProgress: number;
  isVisible: boolean;
}

function HarpyScene({ scrollProgress }: { scrollProgress: number }) {
  const group = useRef<Group>(null);
  const { scene } = useGLTF('/assets/harpy-model.glb');
  
  useFrame((state) => {
    if (group.current) {
      // Rotação suave baseada no scroll
      group.current.rotation.y = scrollProgress * Math.PI * 0.5;
      // Movimento vertical sutil
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <PresentationControls
        global
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
        rotation={[0, 0, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
        <group ref={group} scale={1.5} position={[0, -1, 0]}>
          <primitive object={scene} />
        </group>
      </PresentationControls>
    </Float>
  );
}

export default function HarpyModel({ scrollProgress, isVisible }: HarpyModelProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: isVisible ? 1 : 0.7, 
        scale: isVisible ? 1 : 0.9,
        rotateY: scrollProgress * 20
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1.5} 
          castShadow
          color="#ffc947"
        />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#ffffff" />
        
        <HarpyScene scrollProgress={scrollProgress} />
        
        <Environment 
          preset="forest"
          background={false}
          blur={0.8}
        />
      </Canvas>
    </motion.div>
  );
}