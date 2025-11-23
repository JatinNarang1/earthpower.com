'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

export default function FloatingIcons3D() {
    const groupRef = useRef<THREE.Group>(null)

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.0003
        }
    })

    return (
        <group ref={groupRef}>
            {/* Single LFP Cell 1 - Far Right */}
            <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.2}>
                <group position={[18, 3, -25]}>
                    <mesh>
                        <cylinderGeometry args={[0.4, 0.4, 1.1, 20]} />
                        <meshStandardMaterial
                            color="#0d2818"
                            metalness={0.95}
                            roughness={0.1}
                        />
                    </mesh>
                    <mesh position={[0, 0.62, 0]}>
                        <cylinderGeometry args={[0.14, 0.14, 0.12, 16]} />
                        <meshStandardMaterial
                            color="#c0c0c0"
                            metalness={1}
                            roughness={0.05}
                        />
                    </mesh>
                    <mesh position={[0, 0.15, 0]}>
                        <cylinderGeometry args={[0.42, 0.42, 0.18, 20]} />
                        <meshStandardMaterial
                            color="#35bd38"
                            emissive="#35bd38"
                            emissiveIntensity={0.2}
                        />
                    </mesh>
                </group>
            </Float>

            {/* Single LFP Cell 2 - Far Left */}
            <Float speed={1.5} rotationIntensity={0.12} floatIntensity={0.25}>
                <group position={[-16, -4, -28]}>
                    <mesh>
                        <cylinderGeometry args={[0.35, 0.35, 0.95, 20]} />
                        <meshStandardMaterial
                            color="#1a1f1d"
                            metalness={0.9}
                            roughness={0.15}
                        />
                    </mesh>
                    <mesh position={[0, 0.54, 0]}>
                        <cylinderGeometry args={[0.12, 0.12, 0.1, 16]} />
                        <meshStandardMaterial
                            color="#c0c0c0"
                            metalness={1}
                            roughness={0.05}
                        />
                    </mesh>
                    <mesh position={[0, 0, 0]}>
                        <cylinderGeometry args={[0.37, 0.37, 0.15, 20]} />
                        <meshStandardMaterial
                            color="#4ade80"
                            emissive="#4ade80"
                            emissiveIntensity={0.18}
                        />
                    </mesh>
                </group>
            </Float>

            {/* Single LFP Cell 3 - Top Center */}
            <Float speed={1.8} rotationIntensity={0.08} floatIntensity={0.3}>
                <group position={[0, 10, -30]}>
                    <mesh>
                        <cylinderGeometry args={[0.38, 0.38, 1.05, 20]} />
                        <meshStandardMaterial
                            color="#0d2818"
                            metalness={0.92}
                            roughness={0.12}
                        />
                    </mesh>
                    <mesh position={[0, 0.6, 0]}>
                        <cylinderGeometry args={[0.13, 0.13, 0.11, 16]} />
                        <meshStandardMaterial
                            color="#c0c0c0"
                            metalness={1}
                            roughness={0.05}
                        />
                    </mesh>
                    <mesh position={[0, 0.1, 0]}>
                        <cylinderGeometry args={[0.4, 0.4, 0.16, 20]} />
                        <meshStandardMaterial
                            color="#35bd38"
                            emissive="#35bd38"
                            emissiveIntensity={0.22}
                        />
                    </mesh>
                </group>
            </Float>

            {/* Single LFP Cell 4 - Bottom Far Left */}
            <Float speed={1.4} rotationIntensity={0.11} floatIntensity={0.28}>
                <group position={[-20, -8, -24]}>
                    <mesh>
                        <cylinderGeometry args={[0.32, 0.32, 0.88, 20]} />
                        <meshStandardMaterial
                            color="#1a1f1d"
                            metalness={0.88}
                            roughness={0.18}
                        />
                    </mesh>
                    <mesh position={[0, 0.5, 0]}>
                        <cylinderGeometry args={[0.11, 0.11, 0.09, 16]} />
                        <meshStandardMaterial
                            color="#c0c0c0"
                            metalness={1}
                            roughness={0.05}
                        />
                    </mesh>
                    <mesh position={[0, 0, 0]}>
                        <cylinderGeometry args={[0.34, 0.34, 0.14, 20]} />
                        <meshStandardMaterial
                            color="#4ade80"
                            emissive="#4ade80"
                            emissiveIntensity={0.2}
                        />
                    </mesh>
                </group>
            </Float>

            {/* NEW: Single LFP Cell 5 - Right Side */}
            <Float speed={1.3} rotationIntensity={0.13} floatIntensity={0.22}>
                <group position={[22, -2, -26]}>
                    <mesh>
                        <cylinderGeometry args={[0.36, 0.36, 0.98, 20]} />
                        <meshStandardMaterial
                            color="#0d2818"
                            metalness={0.91}
                            roughness={0.14}
                        />
                    </mesh>
                    <mesh position={[0, 0.56, 0]}>
                        <cylinderGeometry args={[0.125, 0.125, 0.105, 16]} />
                        <meshStandardMaterial
                            color="#c0c0c0"
                            metalness={1}
                            roughness={0.05}
                        />
                    </mesh>
                    <mesh position={[0, 0.05, 0]}>
                        <cylinderGeometry args={[0.38, 0.38, 0.16, 20]} />
                        <meshStandardMaterial
                            color="#4ade80"
                            emissive="#4ade80"
                            emissiveIntensity={0.21}
                        />
                    </mesh>
                </group>
            </Float>

            {/* NEW: Single LFP Cell 6 - Left High */}
            <Float speed={1.6} rotationIntensity={0.09} floatIntensity={0.27}>
                <group position={[-18, 8, -29]}>
                    <mesh>
                        <cylinderGeometry args={[0.33, 0.33, 0.91, 20]} />
                        <meshStandardMaterial
                            color="#1a1f1d"
                            metalness={0.89}
                            roughness={0.16}
                        />
                    </mesh>
                    <mesh position={[0, 0.52, 0]}>
                        <cylinderGeometry args={[0.115, 0.115, 0.095, 16]} />
                        <meshStandardMaterial
                            color="#c0c0c0"
                            metalness={1}
                            roughness={0.05}
                        />
                    </mesh>
                    <mesh position={[0, 0, 0]}>
                        <cylinderGeometry args={[0.35, 0.35, 0.145, 20]} />
                        <meshStandardMaterial
                            color="#35bd38"
                            emissive="#35bd38"
                            emissiveIntensity={0.19}
                        />
                    </mesh>
                </group>
            </Float>

            {/* NEW: Single LFP Cell 7 - Center Low */}
            <Float speed={1.7} rotationIntensity={0.14} floatIntensity={0.24}>
                <group position={[5, -6, -27]}>
                    <mesh>
                        <cylinderGeometry args={[0.37, 0.37, 1.02, 20]} />
                        <meshStandardMaterial
                            color="#0d2818"
                            metalness={0.93}
                            roughness={0.13}
                        />
                    </mesh>
                    <mesh position={[0, 0.58, 0]}>
                        <cylinderGeometry args={[0.13, 0.13, 0.11, 16]} />
                        <meshStandardMaterial
                            color="#c0c0c0"
                            metalness={1}
                            roughness={0.05}
                        />
                    </mesh>
                    <mesh position={[0, 0.08, 0]}>
                        <cylinderGeometry args={[0.39, 0.39, 0.17, 20]} />
                        <meshStandardMaterial
                            color="#4ade80"
                            emissive="#4ade80"
                            emissiveIntensity={0.205}
                        />
                    </mesh>
                </group>
            </Float>

            {/* E-Rickshaw Battery Pack 1 - Far Bottom */}
            <Float speed={1} rotationIntensity={0.15} floatIntensity={0.2}>
                <group position={[8, -10, -32]} rotation={[0, Math.PI / 6, 0]}>
                    <RoundedBox args={[2.2, 1.4, 1]} radius={0.05} smoothness={4}>
                        <meshStandardMaterial
                            color="#1a1f1d"
                            metalness={0.7}
                            roughness={0.25}
                        />
                    </RoundedBox>
                    <mesh position={[0, 0.6, 0.52]}>
                        <boxGeometry args={[2, 0.25, 0.05]} />
                        <meshStandardMaterial
                            color="#35bd38"
                            emissive="#35bd38"
                            emissiveIntensity={0.25}
                        />
                    </mesh>
                    <mesh position={[-0.8, 0.72, 0]}>
                        <cylinderGeometry args={[0.08, 0.08, 0.06, 12]} />
                        <meshStandardMaterial
                            color="#d4af37"
                            metalness={1}
                            roughness={0.1}
                        />
                    </mesh>
                    <mesh position={[0.8, 0.72, 0]}>
                        <cylinderGeometry args={[0.08, 0.08, 0.06, 12]} />
                        <meshStandardMaterial
                            color="#d4af37"
                            metalness={1}
                            roughness={0.1}
                        />
                    </mesh>
                </group>
            </Float>

            {/* NEW: E-Rickshaw Battery Pack 2 - Top Right */}
            <Float speed={1.1} rotationIntensity={0.12} floatIntensity={0.23}>
                <group position={[15, 7, -31]} rotation={[0, -Math.PI / 5, 0]}>
                    <RoundedBox args={[2, 1.3, 0.95]} radius={0.05} smoothness={4}>
                        <meshStandardMaterial
                            color="#0d2818"
                            metalness={0.72}
                            roughness={0.23}
                        />
                    </RoundedBox>
                    <mesh position={[0, 0.55, 0.5]}>
                        <boxGeometry args={[1.8, 0.23, 0.05]} />
                        <meshStandardMaterial
                            color="#4ade80"
                            emissive="#4ade80"
                            emissiveIntensity={0.27}
                        />
                    </mesh>
                    <mesh position={[-0.7, 0.67, 0]}>
                        <cylinderGeometry args={[0.075, 0.075, 0.055, 12]} />
                        <meshStandardMaterial
                            color="#d4af37"
                            metalness={1}
                            roughness={0.1}
                        />
                    </mesh>
                    <mesh position={[0.7, 0.67, 0]}>
                        <cylinderGeometry args={[0.075, 0.075, 0.055, 12]} />
                        <meshStandardMaterial
                            color="#d4af37"
                            metalness={1}
                            roughness={0.1}
                        />
                    </mesh>
                </group>
            </Float>

            {/* NEW: E-Rickshaw Battery Pack 3 - Left Center */}
            <Float speed={0.9} rotationIntensity={0.16} floatIntensity={0.21}>
                <group position={[-12, 2, -33]} rotation={[0, Math.PI / 4, 0]}>
                    <RoundedBox args={[2.1, 1.35, 0.98]} radius={0.05} smoothness={4}>
                        <meshStandardMaterial
                            color="#1a1f1d"
                            metalness={0.71}
                            roughness={0.24}
                        />
                    </RoundedBox>
                    <mesh position={[0, 0.58, 0.51]}>
                        <boxGeometry args={[1.9, 0.24, 0.05]} />
                        <meshStandardMaterial
                            color="#35bd38"
                            emissive="#35bd38"
                            emissiveIntensity={0.26}
                        />
                    </mesh>
                    <mesh position={[-0.75, 0.7, 0]}>
                        <cylinderGeometry args={[0.078, 0.078, 0.058, 12]} />
                        <meshStandardMaterial
                            color="#d4af37"
                            metalness={1}
                            roughness={0.1}
                        />
                    </mesh>
                    <mesh position={[0.75, 0.7, 0]}>
                        <cylinderGeometry args={[0.078, 0.078, 0.058, 12]} />
                        <meshStandardMaterial
                            color="#d4af37"
                            metalness={1}
                            roughness={0.1}
                        />
                    </mesh>
                </group>
            </Float>

            {/* Subtle lighting */}
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, -10]} intensity={0.15} color="#35bd38" />
            <pointLight position={[-10, -10, -10]} intensity={0.1} color="#4ade80" />
        </group>
    )
}
