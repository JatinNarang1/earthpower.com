'use client'

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { Suspense, useState, useEffect } from 'react'
import Battery3D from './Battery3D'
import ParticlesBackground from './ParticlesBackground'

export default function Scene3D() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // Adjust position based on screen size
    // Desktop: [4, 0, 0] (Right side)
    // Mobile: [0, -0.5, 0] (Centered, higher up for visibility)
    const batteryPosition: [number, number, number] = isMobile ? [0, -0.5, 0] : [4, 0, 0]
    // Reduced mobile scale to 0.65 so text fits perfectly
    const batteryScale = isMobile ? 0.65 : 1
    // Add slight tilt on mobile to show off text better
    const batteryRotation: [number, number, number] = isMobile ? [0.2, 0, 0] : [0, 0, 0]

    return (
        <div className="absolute inset-0 -z-10 h-full w-full bg-earth-charcoal-900">
            {/* Force dpr=1 on mobile for performance */}
            <Canvas camera={{ position: [0, 0, 6], fov: 40 }} dpr={isMobile ? 1 : [1, 2]}>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <spotLight position={[-10, -10, -10]} intensity={0.5} />

                    <group position={batteryPosition} scale={batteryScale} rotation={batteryRotation}>
                        <Battery3D isMobile={isMobile} />
                    </group>

                    <ParticlesBackground isMobile={isMobile} />

                    <Environment preset="city" />
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        autoRotate
                        autoRotateSpeed={0.5}
                        enableDamping={false} // Disable damping for slightly better perf
                    />
                </Suspense>
            </Canvas>
        </div>
    )
}
