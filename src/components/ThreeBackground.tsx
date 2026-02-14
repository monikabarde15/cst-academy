import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = () => {
    const count = 800; // Reduced count for safety initially
    const mesh = useRef<THREE.InstancedMesh>(null);
    const { viewport } = useThree();

    const dummy = useMemo(() => new THREE.Object3D(), []);

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100;
            const factor = 20 + Math.random() * 100;
            const speed = 0.01 + Math.random() / 200;
            const xFactor = -50 + Math.random() * 100;
            const yFactor = -50 + Math.random() * 100;
            const zFactor = -50 + Math.random() * 100;
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
        }
        return temp;
    }, [count]);

    useFrame((state) => {
        if (!mesh.current) return;

        particles.forEach((particle, i) => {
            let { factor, speed, xFactor, yFactor, zFactor } = particle;
            particle.t += speed / 2;
            const t = particle.t;

            const a = Math.cos(t) + Math.sin(t * 1) / 10;
            const b = Math.sin(t) + Math.cos(t * 2) / 10;
            const s = Math.cos(t);

            // Safer mouse interation check
            if (state.mouse) {
                particle.mx += (state.mouse.x * (viewport.width || 10) - particle.mx) * 0.02;
                particle.my += (state.mouse.y * (viewport.width || 10) - particle.my) * 0.02;
            }

            dummy.position.set(
                (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
                (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
                (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
            );

            dummy.scale.set(s, s, s);
            dummy.rotation.set(s * 5, s * 5, s * 5);
            dummy.updateMatrix();

            mesh.current.setMatrixAt(i, dummy.matrix);
        });

        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
            <dodecahedronGeometry args={[0.2, 0]} />
            <meshBasicMaterial color="#0066CC" transparent opacity={0.6} blending={THREE.AdditiveBlending} />
        </instancedMesh>
    );
};

const ThreeBackground = () => {
    // Canvas needs a defined height parent, which Hero provides. 
    // We force a black background on the container to prevent white flashes.
    return (
        <div className="absolute inset-0 z-0 bg-[#020408]">
            <Suspense fallback={<div className="w-full h-full bg-[#020408]" />}>
                <Canvas camera={{ position: [0, 0, 50], fov: 75 }} gl={{ antialias: false }}>
                    <color attach="background" args={['#020408']} />
                    <fog attach="fog" args={['#020408', 30, 100]} />
                    <ParticleField />
                    <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
                </Canvas>
            </Suspense>
        </div>
    );
};

export default ThreeBackground;
