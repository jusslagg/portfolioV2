"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const BlackHoleMaterial = shaderMaterial(
  { uTime: 0 },
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  `
    precision highp float;
    varying vec2 vUv;
    uniform float uTime;

    void main() {
      vec2 uv = vUv * 2.0 - 1.0;
      float r = length(uv);
      float theta = atan(uv.y, uv.x);
      float swirl = sin(theta * 8.0 + uTime * 0.8);
      float glow = smoothstep(1.0, 0.0, r) * 0.45;
      float core = smoothstep(0.2, 0.0, r);
      float accretion = smoothstep(0.35, 0.7, r) * 0.9;
      float pulse = 0.3 + 0.3 * sin(uTime * 1.2 + r * 12.0 + swirl * 0.5);
      vec3 color = mix(vec3(0.05, 0.0, 0.1), vec3(0.6, 0.2, 1.0), glow + pulse);
      color += vec3(0.3, 0.3, 0.8) * accretion * (0.6 + 0.4 * swirl);
      color += vec3(0.8, 0.4, 1.0) * pow(core, 3.0);
      float alpha = smoothstep(1.05, 0.4, r);
      gl_FragColor = vec4(color, alpha);
    }
  `,
);

const ParticleField = () => {
  const points = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i += 1) {
      const radius = THREE.MathUtils.randFloat(1.2, 3.5);
      const angle = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const y = THREE.MathUtils.randFloat(-0.6, 0.6);
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return positions;
  }, []);

  const ref = useRef(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color={new THREE.Color("#c098ff")}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const BlackHoleCore = () => {
  const material = useMemo(() => new BlackHoleMaterial(), []);

  useFrame((_, delta) => {
    material.uniforms.uTime.value += delta;
  });

  return (
    <mesh rotation-x={-Math.PI / 2}>
      <planeGeometry args={[6, 6, 256, 256]} />
      <primitive object={material} attach="material" transparent />
    </mesh>
  );
};

const ParallaxGroup = ({ parallax }) => {
  const groupRef = useRef(null);

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      parallax.y * 0.1,
      0.08,
    );
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      parallax.x * 0.1,
      0.08,
    );
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <ambientLight intensity={0.6} />
      <spotLight position={[3, 5, 3]} intensity={2} color="#b98bff" />
      <BlackHoleCore />
      <ParticleField />
    </group>
  );
};

export const BlackHoleScene = ({ parallax = { x: 0, y: 0 } }) => (
  <div className="absolute inset-0 -z-10 opacity-90">
    <Canvas camera={{ position: [0, 2.4, 3.4], fov: 35 }} dpr={[1, 1.5]} gl={{ antialias: true }}>
      <color attach="background" args={["#05030f"]} />
      <ParallaxGroup parallax={parallax} />
    </Canvas>
  </div>
);
