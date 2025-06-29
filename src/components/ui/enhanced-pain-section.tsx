"use client"

import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { AlertTriangle, TrendingDown, Users, Clock } from 'lucide-react'

interface PainCardProps {
  title: string
  description: string
  icon: React.ReactNode
  index: number
  isInView: boolean
}

const PainCard: React.FC<PainCardProps> = ({ title, description, icon, index, isInView }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(0, { stiffness: 300, damping: 30 })
  const rotateY = useSpring(0, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const rotateXValue = (e.clientY - centerY) / 10
    const rotateYValue = (centerX - e.clientX) / 10
    
    rotateX.set(rotateXValue)
    rotateY.set(rotateYValue)
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      className="relative group cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glowing background effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(239, 68, 68, 0.3) 0%, transparent 70%)",
          "--mouse-x": `${mouseX.get()}px`,
          "--mouse-y": `${mouseY.get()}px`
        } as React.CSSProperties}
      />
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/20 via-orange-500/20 to-red-500/20 p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="w-full h-full rounded-2xl bg-slate-900/90" />
      </div>

      {/* Card content */}
      <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 h-full overflow-hidden">
        {/* Floating particles */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-red-400 rounded-full"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        {/* Icon with enhanced effects */}
        <motion.div 
          className="relative mb-6"
          animate={isHovered ? { scale: 1.1, rotateY: 180 } : { scale: 1, rotateY: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative z-10 text-white">
              {icon}
            </div>
          </div>
          
          {/* Pulsing ring */}
          <motion.div
            className="absolute inset-0 border-2 border-red-400 rounded-xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Title with glitch effect */}
        <motion.h3 
          className="text-2xl font-bold text-white mb-4 relative"
          animate={isHovered ? { x: [0, -2, 2, 0] } : {}}
          transition={{ duration: 0.3, repeat: isHovered ? Infinity : 0 }}
        >
          {title}
          {isHovered && (
            <motion.span
              className="absolute inset-0 text-red-400"
              animate={{ x: [0, 1, -1, 0], opacity: [0, 0.5, 0] }}
              transition={{ duration: 0.1, repeat: Infinity }}
            >
              {title}
            </motion.span>
          )}
        </motion.h3>

        {/* Description with typewriter effect */}
        <motion.p 
          className="text-slate-400 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
        >
          {description}
        </motion.p>

        {/* Damage indicator */}
        <motion.div
          className="absolute bottom-4 right-4 bg-red-500/20 border border-red-500/30 rounded-lg px-3 py-1"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.2 + 0.8, type: "spring" }}
        >
          <span className="text-red-400 text-sm font-bold">KRITISCH</span>
        </motion.div>
      </div>
    </motion.div>
  )
}

export const EnhancedPainSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const painPoints = [
    {
      title: "Verpasste Chancen",
      description: "Die Frustration, eine Verhandlung zu verlieren, die Sie hätten gewinnen müssen. Millionen-Deals gehen an Konkurrenten, die besser lesen können.",
      icon: <TrendingDown className="w-8 h-8" />
    },
    {
      title: "Fehlende Sicherheit", 
      description: "Das Gefühl, belogen zu werden, ohne es beweisen zu können. Ihre Intuition schreit Alarm, aber Sie haben keine Gewissheit.",
      icon: <AlertTriangle className="w-8 h-8" />
    },
    {
      title: "Falsche Partner",
      description: "Die Unsicherheit, ob ein potenzieller Partner oder Mitarbeiter wirklich hält, was er verspricht. Vertrauen wird zur Schwäche.",
      icon: <Users className="w-8 h-8" />
    }
  ]

  // Enhanced background animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      life: number
      maxLife: number
    }> = []

    const createParticle = () => {
      return {
        x: Math.random() * canvas.offsetWidth,
        y: canvas.offsetHeight + 10,
        vx: (Math.random() - 0.5) * 2,
        vy: -Math.random() * 3 - 1,
        life: 0,
        maxLife: Math.random() * 100 + 50
      }
    }

    // Initialize particles
    for (let i = 0; i < 50; i++) {
      particles.push(createParticle())
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      particles.forEach((particle, index) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life++

        const alpha = 1 - (particle.life / particle.maxLife)
        const size = alpha * 3

        ctx.fillStyle = `rgba(239, 68, 68, ${alpha * 0.6})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2)
        ctx.fill()

        if (particle.life >= particle.maxLife || particle.y < -10) {
          particles[index] = createParticle()
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-black text-white overflow-hidden"
    >
      {/* Animated background canvas */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
      />

      {/* Dynamic gradient overlay */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 80%, rgba(249, 115, 22, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 20%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(239, 68, 68, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(239, 68, 68, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced title section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-block mb-6"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-6xl font-bold tracking-tighter max-w-4xl mx-auto mb-6"
            animate={isInView ? {
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            } : {}}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              background: "linear-gradient(90deg, #ffffff 0%, #ef4444 50%, #ffffff 100%)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            Schluss mit Raten. Schluss mit Zweifeln.
          </motion.h2>

          <motion.p 
            className="text-lg md:text-xl text-slate-400 mt-4 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Sie verlassen Meetings und fragen sich, was wirklich gesagt wurde. Sie verlieren Deals, 
            weil Sie die wahren Motive Ihres Gegenübers nicht kannten. Das kostet Sie mehr als nur Geld. 
            <span className="text-red-400 font-bold">Es kostet Sie Kontrolle.</span>
          </motion.p>

          {/* Damage counter */}
          <motion.div
            className="mt-8 inline-block bg-red-500/10 border border-red-500/30 rounded-xl px-6 py-3"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.8, type: "spring" }}
          >
            <motion.span 
              className="text-red-400 font-bold text-lg"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💸 Durchschnittlicher Verlust: €2.3M pro Jahr
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Enhanced cards grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {painPoints.map((point, index) => (
            <PainCard
              key={index}
              title={point.title}
              description={point.description}
              icon={point.icon}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Call to action with urgency */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            className="inline-block bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl p-8 border border-red-500/30 max-w-2xl"
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(239, 68, 68, 0.3)",
                "0 0 40px rgba(239, 68, 68, 0.6)",
                "0 0 20px rgba(239, 68, 68, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.p 
              className="text-xl text-red-400 font-bold mb-2"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ⚠️ WARNUNG
            </motion.p>
            <p className="text-white text-lg">
              Jeder Tag ohne diese Fähigkeiten kostet Sie durchschnittlich <span className="text-red-400 font-bold">€6.300</span>.
              <br />
              Wie lange können Sie sich das noch leisten?
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}