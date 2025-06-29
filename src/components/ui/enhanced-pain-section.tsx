"use client"

import React, { useRef, useEffect, useMemo, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { AlertTriangle, TrendingDown, Users, Target, CheckCircle, Brain, Eye, Zap } from 'lucide-react'
import * as THREE from 'three'

interface PainCardProps {
  title: string
  description: string
  icon: React.ReactNode
  index: number
  isInView: boolean
  impact: string
  onHover: (isHovered: boolean) => void
}

const PainCard: React.FC<PainCardProps> = ({ title, description, icon, index, isInView, impact, onHover }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
    onHover(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    onHover(false)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="group relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500"
        whileHover={{ 
          y: -8,
          scale: 1.02,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        style={{
          background: isHovered 
            ? 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)'
            : 'rgba(255,255,255,0.8)'
        }}
      >
        {/* Animated border gradient */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(147,51,234,0.1) 100%)',
            padding: '1px'
          }}
        >
          <div className="w-full h-full rounded-2xl bg-white/90 backdrop-blur-xl" />
        </motion.div>

        <div className="relative z-10">
          <motion.div 
            className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg"
            whileHover={{ 
              scale: 1.1,
              rotate: 5,
              transition: { duration: 0.3 }
            }}
          >
            <div className="text-white">
              {icon}
            </div>
          </motion.div>

          <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
            {title}
          </h3>

          <p className="text-gray-600 leading-relaxed mb-6 text-sm">
            {description}
          </p>

          <motion.div 
            className="bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-xl px-4 py-3 inline-block"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-gray-800 text-sm font-semibold">{impact}</span>
          </motion.div>
        </div>

        {/* Subtle glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          style={{
            background: 'radial-gradient(circle at center, rgba(59,130,246,0.3) 0%, transparent 70%)',
            filter: 'blur(20px)'
          }}
        />
      </motion.div>
    </motion.div>
  )
}

// Three.js 3D Background Component
const ThreeBackground: React.FC<{ mousePosition: { x: number; y: number }; isHovered: boolean }> = ({ 
  mousePosition, 
  isHovered 
}) => {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene>()
  const rendererRef = useRef<THREE.WebGLRenderer>()
  const cameraRef = useRef<THREE.PerspectiveCamera>()
  const particlesRef = useRef<THREE.Points>()
  const geometryRef = useRef<THREE.BufferGeometry>()
  const frameRef = useRef<number>()

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 50
    cameraRef.current = camera

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    })
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    rendererRef.current = renderer
    mountRef.current.appendChild(renderer.domElement)

    // Particle system
    const particleCount = 1000
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      
      // Position
      positions[i3] = (Math.random() - 0.5) * 100
      positions[i3 + 1] = (Math.random() - 0.5) * 100
      positions[i3 + 2] = (Math.random() - 0.5) * 100

      // Color (blue to purple gradient)
      const colorMix = Math.random()
      colors[i3] = 0.2 + colorMix * 0.4     // R
      colors[i3 + 1] = 0.4 + colorMix * 0.3 // G
      colors[i3 + 2] = 0.8 + colorMix * 0.2 // B

      // Size
      sizes[i] = Math.random() * 2 + 0.5
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))
    geometryRef.current = geometry

    // Particle material
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        mouseX: { value: 0 },
        mouseY: { value: 0 },
        hoverIntensity: { value: 0 }
      },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vSize;
        uniform float time;
        uniform float mouseX;
        uniform float mouseY;
        uniform float hoverIntensity;

        void main() {
          vColor = color;
          vSize = size;
          
          vec3 pos = position;
          
          // Gentle wave motion
          pos.x += sin(time * 0.5 + position.y * 0.01) * 2.0;
          pos.y += cos(time * 0.3 + position.x * 0.01) * 1.5;
          pos.z += sin(time * 0.4 + position.x * 0.005 + position.y * 0.005) * 1.0;
          
          // Mouse interaction
          float mouseInfluence = 1.0 - distance(vec2(pos.x, pos.y), vec2(mouseX * 50.0, mouseY * 50.0)) * 0.02;
          mouseInfluence = max(0.0, mouseInfluence);
          pos.z += mouseInfluence * hoverIntensity * 10.0;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z) * (1.0 + hoverIntensity * 0.5);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vSize;
        
        void main() {
          float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
          float alpha = 1.0 - smoothstep(0.0, 0.5, distanceToCenter);
          alpha *= 0.6;
          
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)
    particlesRef.current = particles

    // Animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate)
      
      const time = Date.now() * 0.001
      material.uniforms.time.value = time
      material.uniforms.mouseX.value = mousePosition.x
      material.uniforms.mouseY.value = mousePosition.y
      material.uniforms.hoverIntensity.value = isHovered ? 1.0 : 0.0

      // Gentle rotation
      particles.rotation.x = time * 0.05
      particles.rotation.y = time * 0.03

      renderer.render(scene, camera)
    }
    animate()

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current || !camera || !renderer) return
      
      const width = mountRef.current.clientWidth
      const height = mountRef.current.clientHeight
      
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [mousePosition, isHovered])

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 opacity-30"
      style={{ pointerEvents: 'none' }}
    />
  )
}

export const EnhancedPainSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 })
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isAnyCardHovered, setIsAnyCardHovered] = useState(false)

  useEffect(() => {
    const unsubscribeX = springX.on('change', (latest) => {
      setMousePosition(prev => ({ ...prev, x: latest }))
    })
    const unsubscribeY = springY.on('change', (latest) => {
      setMousePosition(prev => ({ ...prev, y: latest }))
    })

    return () => {
      unsubscribeX()
      unsubscribeY()
    }
  }, [springX, springY])

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!sectionRef.current) return
    
    const rect = sectionRef.current.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    
    mouseX.set(x)
    mouseY.set(y)
  }

  const challenges = useMemo(() => [
    {
      title: "Missed Revenue Opportunities",
      description: "When you can't accurately read client intentions and motivations, you miss critical buying signals and fail to address real concerns. This leads to lost deals that could have been won with better behavioral insight.",
      icon: <TrendingDown className="w-7 h-7" />,
      impact: "Average impact: $150K+ annually"
    },
    {
      title: "Ineffective Team Dynamics", 
      description: "Without understanding individual communication styles and motivational drivers, team productivity suffers. Conflicts arise from misunderstandings that could be prevented with proper behavioral awareness.",
      icon: <Users className="w-7 h-7" />,
      impact: "Productivity loss: 23% average"
    },
    {
      title: "Poor Strategic Partnerships",
      description: "Making partnership decisions without understanding the true character and reliability of potential partners leads to costly mistakes. Due diligence goes beyond financials—it requires behavioral assessment.",
      icon: <AlertTriangle className="w-7 h-7" />,
      impact: "Failed partnerships cost $200K+"
    }
  ], [])

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* 3D Background */}
      <ThreeBackground mousePosition={mousePosition} isHovered={isAnyCardHovered} />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-20 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-8 shadow-xl"
            whileHover={{ 
              scale: 1.1,
              rotate: 5,
              transition: { duration: 0.3 }
            }}
          >
            <Brain className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            The Communication
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Intelligence </span>
            Gap
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
            Most professionals operate with incomplete information about the people they interact with daily. 
            This behavioral blindness creates predictable, costly problems that compound over time.
          </p>

          <motion.div 
            className="mt-10 bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl p-8 inline-block shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <span className="text-gray-800 font-semibold text-lg">
                Research shows: 73% of business failures stem from communication breakdowns
              </span>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {challenges.map((challenge, index) => (
            <PainCard
              key={index}
              title={challenge.title}
              description={challenge.description}
              icon={challenge.icon}
              index={index}
              isInView={isInView}
              impact={challenge.impact}
              onHover={setIsAnyCardHovered}
            />
          ))}
        </div>

        <motion.div
          className="text-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <div className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-xl">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                The Strategic Advantage of Behavioral Intelligence
              </h3>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Elite performers in business, law enforcement, and intelligence agencies rely on advanced 
              behavioral analysis to make critical decisions. These same methodologies can be applied 
              to transform your professional interactions and outcomes.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6"
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-green-800 font-bold text-lg">Proven Results</span>
                </div>
                <p className="text-green-700">
                  Clients report 340% improvement in negotiation outcomes within 90 days
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6"
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-blue-800 font-bold text-lg">Evidence-Based</span>
                </div>
                <p className="text-blue-700">
                  Methods developed from 15+ years of field research and practical application
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}