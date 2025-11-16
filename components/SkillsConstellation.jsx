"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { AnimatePresence, motion } from "framer-motion";
import { constellationSkills } from "../data/content";

const Nodes = ({ onHover, scale = 1 }) => {
  const ref = useRef(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <group ref={ref}>
      {constellationSkills.map((skill) => (
        <mesh
          key={skill.id}
          position={skill.position.map((value) => value * scale)}
          onPointerOver={() => onHover(skill)}
          onPointerOut={() => onHover(null)}
        >
          <sphereGeometry args={[0.12, 32, 32]} />
          <meshStandardMaterial color="#c084fc" emissive="#a855f7" emissiveIntensity={0.7} />
          <Html center>
            <div className="rounded-full border border-white/10 bg-black/40 px-2 py-1 text-[10px] uppercase tracking-[0.3em] text-white/70 backdrop-blur">
              {skill.id}
            </div>
          </Html>
        </mesh>
      ))}
    </group>
  );
};

const Lines = ({ scale = 1 }) => {
  const positions = useMemo(() => {
    const points = [];
    constellationSkills.forEach((skill, index) => {
      const pos = skill.position.map((value) => value * scale);
      points.push(0, 0, 0, pos[0], pos[1], pos[2]);
      const next = constellationSkills[(index + 1) % constellationSkills.length];
      const nextPos = next.position.map((value) => value * scale);
      points.push(pos[0], pos[1], pos[2], nextPos[0], nextPos[1], nextPos[2]);
    });
    return new Float32Array(points);
  }, [scale]);
  return (
    <lineSegments>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} itemSize={3} />
      </bufferGeometry>
      <lineBasicMaterial color="#8b5cf6" opacity={0.4} transparent />
    </lineSegments>
  );
};

const useCompactLayout = () => {
  const [isCompact, setIsCompact] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsCompact(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isCompact;
};

export const SkillsConstellation = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const isCompact = useCompactLayout();
  const constellationScale = isCompact ? 0.72 : 1;
  return (
    <section
      id="skills"
      className="relative mt-16 grid gap-10 rounded-[48px] border border-white/10 bg-gradient-to-br from-[#030011]/90 via-[#060022]/85 to-[#0c0230]/85 p-6 shadow-[0_40px_140px_rgba(0,0,0,0.55)] sm:p-8 sm:mt-20 lg:grid-cols-2"
    >
      <div className="space-y-5">
        <p className="text-sm uppercase tracking-[0.5em] text-white/50">Skills</p>
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">{"Constelación tecnológica"}</h2>
        <p className="text-base text-white/70 sm:text-lg">
          {
            "Cada nodo conecta los sistemas que uso para llevar datos a resultados: integración full-stack, IA aplicada, automatización y liderazgo de equipos."
          }
        </p>
        <AnimatePresence>
          {activeSkill && (
            <motion.div
              key={activeSkill.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <p className="text-xs uppercase tracking-[0.5em] text-white/50">{activeSkill.title}</p>
              <p className="text-white/90">{activeSkill.description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="relative h-[300px] overflow-hidden rounded-[32px] border border-white/10 bg-black/30 sm:h-[360px] lg:h-[420px]">
        <Canvas
          camera={{ position: [0, 0, isCompact ? 5.4 : 4.5], fov: isCompact ? 55 : 45 }}
          dpr={[1, 1.5]}
          eventPrefix="client"
        >
          <ambientLight intensity={0.6} />
          <pointLight position={[5, 5, 5]} intensity={1} color="#c084fc" />
          <Lines scale={constellationScale} />
          <Nodes onHover={setActiveSkill} scale={constellationScale} />
        </Canvas>
      </div>
    </section>
  );
};
