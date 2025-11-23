'use client'

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import Battery3D from './Battery3D'
import ParticlesBackground from './ParticlesBackground'

export default function Scene3D() {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full bg-earth-charcoal-900">
            <Canvas camera={{ position: [0, 0, 6], fov: 40 }}>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <spotLight position={[-10, -10, -10]} intensity={0.5} />

                    <group position={[4, 0, 0]}>
                        <Battery3D />
                    </group>

                    <ParticlesBackground />

                    <Environment preset="city" />
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
                </Suspense>
            </Canvas>
        </div>
    )
}
