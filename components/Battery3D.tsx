'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Text3D, Center } from '@react-three/drei'
import * as THREE from 'three'

// Using a standard font URL
const FONT_URL = 'https://threejs.org/examples/fonts/helvetiker_bold.typeface.json'

export default function Battery3D() {
  const rotatingGroup = useRef<THREE.Group>(null)
  const fillRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    // Rotate only the battery body
    if (rotatingGroup.current) {
      rotatingGroup.current.rotation.y += 0.005
    }

    // Animate filling
    if (fillRef.current) {
      const time = state.clock.getElapsedTime()
      const scaleY = (Math.sin(time) + 1.5) / 2.5
      fillRef.current.scale.y = scaleY
      fillRef.current.position.y = -1.4 + 1.4 * scaleY
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group rotation={[0.15, -0.2, 0.05]}>

        {/* Clean, Professional Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#4ade80" />

        {/* Rotating Battery Body */}
        <group ref={rotatingGroup}>
          {/* Battery Body (Premium Glass Shell) */}
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[1, 1, 3, 64]} />
            <meshPhysicalMaterial
              color="#0a0f0d"
              metalness={0.2}
              roughness={0.1}
              transmission={0.8}
              transparent
              opacity={0.9}
              clearcoat={1}
              clearcoatRoughness={0.1}
            />
          </mesh>

          {/* Charging Fill (Neon Core) */}
          <mesh ref={fillRef} position={[0, -1.4, 0]}>
            <cylinderGeometry args={[0.85, 0.85, 2.8, 32]} />
            <meshStandardMaterial
              color="#4ade80"
              emissive="#4ade80"
              emissiveIntensity={2}
              toneMapped={false}
            />
          </mesh>

          {/* Chrome Caps - Shiny Metallic */}
          <mesh position={[0, 1.6, 0]}>
            <cylinderGeometry args={[0.4, 0.4, 0.2, 64]} />
            <meshStandardMaterial color="#ffffff" metalness={1} roughness={0.1} envMapIntensity={1.5} />
          </mesh>
          <mesh position={[0, 1.5, 0]}>
            <cylinderGeometry args={[1.05, 1.05, 0.1, 64]} />
            <meshStandardMaterial color="#ffffff" metalness={1} roughness={0.1} envMapIntensity={1.5} />
          </mesh>
          <mesh position={[0, -1.5, 0]}>
            <cylinderGeometry args={[1.05, 1.05, 0.1, 64]} />
            <meshStandardMaterial color="#ffffff" metalness={1} roughness={0.1} envMapIntensity={1.5} />
          </mesh>

          {/* Wrapped 3D Text - Metallic Chrome */}
          <group position={[0, 0, 0]}>
            {"EARTH POWER".split('').map((char, i) => {
              const angle = (i - 5) * 0.5
              const textRadius = 1.15

              return (
                <group
                  key={i}
                  position={[Math.sin(angle) * textRadius, 0, Math.cos(angle) * textRadius]}
                  rotation={[0, angle, 0]}
                >
                  <Center>
                    <Text3D
                      font={FONT_URL}
                      size={0.35}
                      height={0.05}
                      curveSegments={12}
                      bevelEnabled={true}
                      bevelThickness={0.01}
                      bevelSize={0.01}
                      bevelOffset={0}
                      bevelSegments={3}
                    >
                      {char}
                      {/* Metallic Material */}
                      <meshStandardMaterial
                        color="#ffffff"
                        metalness={1}
                        roughness={0.1}
                        envMapIntensity={1.5}
                      />
                    </Text3D>
                  </Center>
                </group>
              )
            })}
          </group>
        </group>
      </group>
    </Float>
  )
}
