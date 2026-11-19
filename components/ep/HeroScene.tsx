'use client'

/**
 * Premium 3D hero: a procedural Earth Power LiFePO4 energy-storage battery
 * (proportions of the EP51105ESS: 380 × 175 × 650 mm) built from real product design cues —
 * black steel case, green front plate, branded label, LCD, chrome side handle, red terminal.
 * Uses only brand colours. No external model / HDR downloads: lighting is a procedural studio.
 */

import { useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, Lightformer, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

const GREEN = '#35BD38'
const SIGNAL = '#4ADE80'
const CYAN = '#00D4FF'
const INK = '#0B1F14'

const W = 1.0
const H = 1.7
const D = 0.5

/* ---------- canvas textures ---------- */

function makeLabel(): { tex: THREE.CanvasTexture; ready: Promise<void> } {
  const w = 820
  const h = 1200
  const c = document.createElement('canvas')
  c.width = w
  c.height = h
  const g = c.getContext('2d')!
  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 8

  const draw = (logo?: HTMLImageElement) => {
    const bg = g.createLinearGradient(0, 0, 0, h)
    bg.addColorStop(0, '#0B1F14')
    bg.addColorStop(0.55, '#102A1B')
    bg.addColorStop(1, '#173825')
    g.fillStyle = bg
    g.fillRect(0, 0, w, h)

    // fine dot matrix (subtle, as on the printed label)
    g.fillStyle = 'rgba(74,222,128,0.10)'
    for (let y = 18; y < h * 0.55; y += 22)
      for (let x = (y / 22) % 2 ? 18 : 29; x < w; x += 22) {
        g.beginPath()
        g.arc(x, y, 2.2, 0, Math.PI * 2)
        g.fill()
      }

    // brand chevron
    g.fillStyle = GREEN
    g.beginPath()
    g.moveTo(0, h * 0.56)
    g.lineTo(w * 0.5, h * 0.7)
    g.lineTo(w, h * 0.56)
    g.lineTo(w, h * 0.6)
    g.lineTo(w * 0.5, h * 0.74)
    g.lineTo(0, h * 0.6)
    g.closePath()
    g.fill()
    const lower = g.createLinearGradient(0, h * 0.6, 0, h)
    lower.addColorStop(0, '#1F7A2E')
    lower.addColorStop(1, '#0B1F14')
    g.fillStyle = lower
    g.beginPath()
    g.moveTo(0, h * 0.6)
    g.lineTo(w * 0.5, h * 0.74)
    g.lineTo(w, h * 0.6)
    g.lineTo(w, h)
    g.lineTo(0, h)
    g.closePath()
    g.fill()

    // logo mark
    if (logo) {
      const s = 150
      g.drawImage(logo, w / 2 - s / 2, 70, s, s * (logo.naturalHeight / logo.naturalWidth || 1))
    }

    g.textAlign = 'center'
    g.fillStyle = '#FFFFFF'
    g.font = '800 92px Montserrat, Arial, sans-serif'
    g.fillText('EARTH POWER', w / 2, 330)
    g.fillStyle = '#B4C2B8'
    g.font = '500 28px Montserrat, Arial, sans-serif'
    g.fillText('LITHIUM IRON PHOSPHATE (LiFePO₄)', w / 2, 384)
    g.fillStyle = SIGNAL
    g.font = '800 44px Montserrat, Arial, sans-serif'
    g.fillText('ENERGY STORAGE BATTERY', w / 2, 446)

    // model + specs
    g.fillStyle = '#FFFFFF'
    g.font = '700 70px Montserrat, Arial, sans-serif'
    g.fillText('EP51105ESS', w / 2, 800)
    g.font = '600 40px Montserrat, Arial, sans-serif'
    g.fillStyle = '#E7F7EA'
    const cols = [
      ['51.2 V', 'VOLTAGE'],
      ['100 Ah', 'CAPACITY'],
      ['5.120 kWh', 'ENERGY'],
    ]
    cols.forEach(([v, k], i) => {
      const x = w * (0.2 + i * 0.3)
      g.fillStyle = '#FFFFFF'
      g.font = '700 42px Montserrat, Arial, sans-serif'
      g.fillText(v, x, 920)
      g.fillStyle = '#9BD7A6'
      g.font = '500 22px Montserrat, Arial, sans-serif'
      g.fillText(k, x, 958)
    })

    g.strokeStyle = 'rgba(255,255,255,0.22)'
    g.lineWidth = 2
    g.beginPath()
    g.moveTo(70, 1040)
    g.lineTo(w - 70, 1040)
    g.stroke()
    g.fillStyle = '#E7F7EA'
    g.font = '600 28px Montserrat, Arial, sans-serif'
    g.fillText('BLUETOOTH BMS  ·  5-YEAR WARRANTY', w / 2, 1100)
    tex.needsUpdate = true
  }

  draw()
  const ready = new Promise<void>((res) => {
    const img = new Image()
    img.onload = () => {
      draw(img)
      res()
    }
    img.onerror = () => res()
    img.src = '/brand/earthpower-mark.png'
  })
  return { tex, ready }
}

function makeScreen(): { tex: THREE.CanvasTexture; paint: (soc: number) => void } {
  const w = 512
  const h = 300
  const c = document.createElement('canvas')
  c.width = w
  c.height = h
  const g = c.getContext('2d')!
  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  const paint = (soc: number) => {
    g.fillStyle = '#04110A'
    g.fillRect(0, 0, w, h)
    g.fillStyle = 'rgba(74,222,128,0.07)'
    for (let y = 0; y < h; y += 6) g.fillRect(0, y, w, 1)
    g.fillStyle = SIGNAL
    g.font = '800 120px Montserrat, Arial, sans-serif'
    g.textAlign = 'left'
    g.fillText(`${Math.round(soc)}%`, 36, 150)
    g.fillStyle = '#B4C2B8'
    g.font = '500 28px Montserrat, Arial, sans-serif'
    g.fillText('STATE OF CHARGE', 40, 200)
    g.fillStyle = 'rgba(255,255,255,0.12)'
    g.fillRect(36, 232, w - 72, 26)
    g.fillStyle = GREEN
    g.fillRect(36, 232, (w - 72) * (soc / 100), 26)
    g.fillStyle = CYAN
    g.beginPath()
    g.arc(w - 60, 70, 12, 0, Math.PI * 2)
    g.fill()
    tex.needsUpdate = true
  }
  paint(80)
  return { tex, paint }
}

function makeGlow(): THREE.CanvasTexture {
  const c = document.createElement('canvas')
  c.width = c.height = 256
  const g = c.getContext('2d')!
  const r = g.createRadialGradient(128, 128, 0, 128, 128, 128)
  r.addColorStop(0, 'rgba(0,0,0,0.55)')
  r.addColorStop(0.5, 'rgba(0,0,0,0.22)')
  r.addColorStop(1, 'rgba(0,0,0,0)')
  g.fillStyle = r
  g.fillRect(0, 0, 256, 256)
  return new THREE.CanvasTexture(c)
}

/* ---------- battery ---------- */

function Battery({ scrollRef, pointer, reduced, onReady }: { scrollRef: React.MutableRefObject<number>; pointer: React.MutableRefObject<[number, number]>; reduced: boolean; onReady: () => void }) {
  const invalidate = useThree((st) => st.invalidate)
  const root = useRef<THREE.Group>(null)
  const spin = useRef<THREE.Group>(null)
  const strip = useRef<THREE.MeshStandardMaterial>(null)
  const shadow = useRef<THREE.Mesh>(null)
  const ringA = useRef<THREE.Mesh>(null)
  const ringB = useRef<THREE.Mesh>(null)
  const pts = useRef<THREE.Points>(null)
  const lastScreen = useRef(0)

  const { label, labelReady, screen, glow } = useMemo(() => {
    const l = makeLabel()
    const s = makeScreen()
    return { label: l.tex, labelReady: l.ready, screen: s, glow: makeGlow() }
  }, [])

  // Reveal the scene only once the branded label (logo included) is painted, so nothing pops in.
  useEffect(() => {
    let live = true
    Promise.race([labelReady, new Promise<void>((r) => setTimeout(r, 1500))]).then(() => {
      if (!live) return
      invalidate()
      requestAnimationFrame(() => requestAnimationFrame(() => live && onReady()))
    })
    return () => {
      live = false
    }
  }, [labelReady, invalidate, onReady])

  useEffect(
    () => () => {
      label.dispose()
      screen.tex.dispose()
      glow.dispose()
    },
    [label, screen, glow],
  )

  const particles = useMemo(() => {
    const n = 44
    const pos = new Float32Array(n * 3)
    const seed = new Float32Array(n * 3)
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2
      const r = 0.85 + Math.random() * 0.7
      seed[i * 3] = Math.cos(a) * r
      seed[i * 3 + 1] = Math.random()
      seed[i * 3 + 2] = Math.sin(a) * r
      pos[i * 3] = seed[i * 3]
      pos[i * 3 + 2] = seed[i * 3 + 2]
    }
    return { pos, seed, n }
  }, [])

  useFrame((state, dt) => {
    const t = reduced ? 99 : state.clock.elapsedTime
    const g = root.current
    const s = spin.current
    if (!g || !s) return

    // entrance
    const e = 1 - Math.pow(1 - Math.min(t / 1.6, 1), 3)
    g.scale.setScalar(0.88 + 0.12 * e)
    g.position.y = (reduced ? 0 : Math.sin(t * 0.9) * 0.05) + (1 - e) * -0.25 - scrollRef.current * 0.25

    // controlled rotation: gentle sway + pointer parallax + scroll
    const targetY = 0.55 + (reduced ? 0 : Math.sin(t * 0.35) * 0.28) + pointer.current[0] * 0.35 + scrollRef.current * 1.4
    const targetX = 0.04 + pointer.current[1] * -0.12 + scrollRef.current * 0.1
    const k = reduced ? 1 : Math.min(dt * 2.2, 1)
    s.rotation.y += (targetY - s.rotation.y) * k
    s.rotation.x += (targetX - s.rotation.x) * k

    // charge strip pulse
    if (strip.current) strip.current.emissiveIntensity = 1.2 + Math.sin(t * 2.2) * 0.6

    // soft shadow follows float height
    if (shadow.current) {
      const k = 1 - (g.position.y + 0.1) * 0.35
      shadow.current.scale.setScalar(Math.max(0.7, k))
      ;(shadow.current.material as THREE.MeshBasicMaterial).opacity = 0.9 * e
    }

    if (ringA.current) ringA.current.rotation.z = t * 0.12
    if (ringB.current) ringB.current.rotation.z = -t * 0.08

    // rising charge particles
    if (pts.current) {
      const arr = pts.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < particles.n; i++) {
        const p = (particles.seed[i * 3 + 1] + t * (0.05 + (i % 5) * 0.012)) % 1
        arr[i * 3] = particles.seed[i * 3] + Math.sin(t * 0.5 + i) * 0.04
        arr[i * 3 + 1] = -1 + p * 2.6
        arr[i * 3 + 2] = particles.seed[i * 3 + 2]
      }
      pts.current.geometry.attributes.position.needsUpdate = true
    }

    // LCD: state of charge creeps 78 → 82 (≈4 fps repaint)
    if (t - lastScreen.current > 0.25) {
      lastScreen.current = t
      screen.paint(80 + Math.sin(t * 0.6) * 2)
    }
  })

  const black = { color: '#0c100d', metalness: 0.75, roughness: 0.42 }

  return (
    <group ref={root}>
      {/* ground contact shadow + restrained energy rings */}
      <mesh ref={shadow} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.08, 0]}>
        <planeGeometry args={[2.8, 2.8]} />
        <meshBasicMaterial map={glow} transparent depthWrite={false} />
      </mesh>
      <mesh ref={ringA} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.07, 0]}>
        <ringGeometry args={[1.28, 1.295, 96]} />
        <meshBasicMaterial color={SIGNAL} transparent opacity={0.28} />
      </mesh>
      <mesh ref={ringB} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.07, 0]}>
        <ringGeometry args={[1.62, 1.628, 96]} />
        <meshBasicMaterial color={GREEN} transparent opacity={0.14} />
      </mesh>

      <points ref={pts}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={particles.n} array={particles.pos} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial color={SIGNAL} size={0.024} transparent opacity={0.55} depthWrite={false} sizeAttenuation />
      </points>

      <group ref={spin}>
        {/* steel case */}
        <RoundedBox args={[W, H, D]} radius={0.045} smoothness={4}>
          <meshStandardMaterial {...black} />
        </RoundedBox>

        {/* green front plate */}
        <RoundedBox args={[W - 0.04, H - 0.06, 0.03]} radius={0.04} smoothness={4} position={[0, 0, D / 2 + 0.008]}>
          <meshPhysicalMaterial color={GREEN} metalness={0.25} roughness={0.32} clearcoat={1} clearcoatRoughness={0.18} />
        </RoundedBox>

        {/* printed label */}
        <mesh position={[0, -0.1, D / 2 + 0.0245]}>
          <planeGeometry args={[W - 0.2, 1.24]} />
          <meshStandardMaterial map={label} roughness={0.38} metalness={0.05} />
        </mesh>

        {/* LCD */}
        <RoundedBox args={[0.46, 0.27, 0.02]} radius={0.015} position={[0, 0.58, D / 2 + 0.03]}>
          <meshStandardMaterial color="#050806" metalness={0.8} roughness={0.3} />
        </RoundedBox>
        <mesh position={[0, 0.58, D / 2 + 0.0405]}>
          <planeGeometry args={[0.41, 0.225]} />
          <meshBasicMaterial map={screen.tex} toneMapped={false} />
        </mesh>

        {/* charge strip along the bottom of the plate */}
        <mesh position={[0, -0.77, D / 2 + 0.026]}>
          <boxGeometry args={[0.52, 0.012, 0.006]} />
          <meshStandardMaterial ref={strip} color={SIGNAL} emissive={SIGNAL} emissiveIntensity={1.4} toneMapped={false} />
        </mesh>

        {/* chrome side handle (left) */}
        <group position={[-W / 2, 0.3, 0.02]}>
          <mesh rotation={[0, 0, 0]} position={[-0.13, 0, 0]}>
            <cylinderGeometry args={[0.022, 0.022, 0.62, 20]} />
            <meshStandardMaterial color="#e8ece9" metalness={1} roughness={0.14} />
          </mesh>
          {[-0.26, 0.26].map((y) => (
            <mesh key={y} rotation={[0, 0, Math.PI / 2]} position={[-0.065, y, 0]}>
              <cylinderGeometry args={[0.02, 0.02, 0.13, 16]} />
              <meshStandardMaterial color="#e8ece9" metalness={1} roughness={0.14} />
            </mesh>
          ))}
        </group>

        {/* breaker + red terminal (left) */}
        <mesh position={[-W / 2 - 0.045, -0.12, 0.1]}>
          <boxGeometry args={[0.09, 0.2, 0.18]} />
          <meshStandardMaterial color="#e11d2e" roughness={0.45} metalness={0.1} />
        </mesh>
        <mesh position={[-W / 2 - 0.03, -0.38, 0.1]}>
          <boxGeometry args={[0.06, 0.1, 0.12]} />
          <meshStandardMaterial color="#151a17" roughness={0.5} metalness={0.4} />
        </mesh>

        {/* top communication ports + terminal block */}
        {[-0.22, -0.1, 0.02].map((x) => (
          <mesh key={x} position={[x, H / 2 + 0.004, -0.02]}>
            <boxGeometry args={[0.09, 0.014, 0.1]} />
            <meshStandardMaterial color="#1c231f" roughness={0.6} metalness={0.5} />
          </mesh>
        ))}
        <mesh position={[0.26, H / 2 + 0.01, -0.02]}>
          <boxGeometry args={[0.14, 0.03, 0.1]} />
          <meshStandardMaterial color={GREEN} roughness={0.45} />
        </mesh>
        <mesh position={[-0.36, H / 2 + 0.006, -0.02]}>
          <sphereGeometry args={[0.012, 12, 12]} />
          <meshBasicMaterial color={CYAN} toneMapped={false} />
        </mesh>

        {/* feet */}
        {[[-0.38, -0.16], [0.38, -0.16], [-0.38, 0.16], [0.38, 0.16]].map(([x, z]) => (
          <mesh key={`${x}${z}`} position={[x, -H / 2 - 0.02, z]}>
            <cylinderGeometry args={[0.035, 0.04, 0.04, 16]} />
            <meshStandardMaterial color="#cfd6d1" metalness={1} roughness={0.25} />
          </mesh>
        ))}
      </group>
    </group>
  )
}

/* ---------- scene ---------- */

export default function HeroScene({
  active,
  onReady,
  onLost,
  mobile,
  reduced,
}: {
  active: boolean
  onReady: () => void
  onLost: () => void
  mobile: boolean
  reduced: boolean
}) {
  const scrollRef = useRef(0)
  const pointer = useRef<[number, number]>([0, 0])

  useEffect(() => {
    const onScroll = () => {
      scrollRef.current = Math.min(Math.max(window.scrollY / 900, 0), 1)
    }
    const onMove = (e: PointerEvent) => {
      pointer.current = [(e.clientX / window.innerWidth - 0.5) * 2, (e.clientY / window.innerHeight - 0.5) * 2]
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return (
    <Canvas
      frameloop={!active ? 'never' : reduced ? 'demand' : 'always'}
      dpr={mobile ? [1, 1.5] : [1, 2]}
      camera={{ position: [0, 0.12, 4.9], fov: 30 }}
      gl={{ antialias: !mobile, alpha: true, powerPreference: 'high-performance' }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0)
        gl.domElement.addEventListener('webglcontextlost', (e) => {
          e.preventDefault()
          onLost()
        })
      }}
      aria-hidden="true"
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[3, 4, 4]} intensity={2.2} color="#ffffff" />
      <directionalLight position={[-4, 1.5, 2]} intensity={0.9} color={SIGNAL} />
      <pointLight position={[0, -1.2, 2]} intensity={0.6} color={GREEN} distance={6} />

      {/* procedural studio environment: no network HDR required */}
      <Environment resolution={256} frames={1}>
        <color attach="background" args={[INK]} />
        <Lightformer form="rect" intensity={3.2} position={[0, 5, 2]} scale={[8, 2, 1]} rotation-x={Math.PI / 2} />
        <Lightformer form="rect" intensity={2.2} position={[-5, 1, 1]} scale={[2, 6, 1]} rotation-y={Math.PI / 2} />
        <Lightformer form="rect" intensity={1.6} position={[5, 0, 2]} scale={[2, 6, 1]} rotation-y={-Math.PI / 2} />
        <Lightformer form="ring" intensity={1.4} color={SIGNAL} position={[0, 0, -5]} scale={6} />
      </Environment>

      <Battery scrollRef={scrollRef} pointer={pointer} reduced={reduced} onReady={onReady} />
    </Canvas>
  )
}
