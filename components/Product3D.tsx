'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'

export default function Product3D() {
    const batteryRef = useRef<THREE.Group>(null)

    useFrame((state) => {
        if (batteryRef.current) {
            batteryRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3
        }
    })

    return (
        <group ref={batteryRef} position={[0, 0, 0]}>
            {/* Main Battery Cell */}
            <mesh>
                <cylinderGeometry args={[0.8, 0.8, 2.5, 32]} />
                <meshPhysicalMaterial
                    color="#1a1f1d"
                    metalness={0.8}
                    roughness={0.2}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                />
            </mesh>

            {/* Positive Terminal */}
            <mesh position={[0, 1.4, 0]}>
                <cylinderGeometry args={[0.3, 0.3, 0.3, 32]} />
                <meshStandardMaterial
                    color="#c0c0c0"
                    metalness={1}
                    roughness={0.1}
                />
            </mesh>

            {/* Green Energy Band */}
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[0.82, 0.82, 0.4, 32]} />
                <meshStandardMaterial
                    color="#35bd38"
                    metalness={0.6}
                    roughness={0.3}
                    emissive="#35bd38"
                    emissiveIntensity={0.5}
                />
            </mesh>

            {/* Label Text */}
            <Text
                position={[0, 0.6, 0.82]}
                fontSize={0.15}
                color="#4ade80"
                anchorX="center"
                anchorY="middle"
                font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff"
            >
                LFP
            </Text>

            <Text
                position={[0, 0.3, 0.82]}
                fontSize={0.1}
                color="white"
                anchorX="center"
                anchorY="middle"
                font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff"
            >
                POWER
            </Text>

            {/* Lighting */}
            <pointLight position={[2, 2, 2]} intensity={1} />
            <pointLight position={[-2, -2, 2]} intensity={0.5} color="#35bd38" />
        </group>
    )
}
