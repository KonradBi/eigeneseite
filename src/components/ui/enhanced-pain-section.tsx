"use client"

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { AlertTriangle, TrendingDown, Users, Target } from 'lucide-react'

interface PainCardProps {
  title: string
  description: string
  icon: React.ReactNode
  index: number
  isInView: boolean
  cost: string
}

const PainCard: React.FC<PainCardProps> = ({ title, description, icon, index, isInView, cost }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      className="group relative"
    >
      {/* Card content */}
      <div className="relative bg-white border border-gray-200 rounded-xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        {/* Icon */}
        <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
          <div className="text-white">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6">
          {description}
        </p>

        {/* Cost indicator */}
        <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-2 inline-block">
          <span className="text-red-700 text-sm font-semibold">{cost}</span>
        </div>
      </div>
    </motion.div>
  )
}

export const EnhancedPainSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" })

  const painPoints = [
    {
      title: "Verpasste Geschäftschancen",
      description: "Wichtige Verhandlungen scheitern, weil Sie die Signale Ihres Gegenübers nicht richtig deuten können. Konkurrenten mit besseren Kommunikationsfähigkeiten gewinnen die Deals.",
      icon: <TrendingDown className="w-7 h-7" />,
      cost: "Durchschnittlich €180.000 pro Jahr"
    },
    {
      title: "Unsicherheit in Gesprächen", 
      description: "Sie spüren, dass etwas nicht stimmt, können aber nicht einschätzen, ob Ihr Gesprächspartner ehrlich ist. Diese Unsicherheit schwächt Ihre Verhandlungsposition erheblich.",
      icon: <AlertTriangle className="w-7 h-7" />,
      cost: "Schwächere Verhandlungsposition"
    },
    {
      title: "Fehlentscheidungen bei Partnerschaften",
      description: "Ohne die Fähigkeit, Menschen richtig einzuschätzen, treffen Sie Entscheidungen basierend auf unvollständigen Informationen. Das führt zu kostspieligen Fehlbesetzungen und gescheiterten Kooperationen.",
      icon: <Users className="w-7 h-7" />,
      cost: "Bis zu €250.000 pro Fehlentscheidung"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        {/* Title section */}
        <motion.div 
          className="text-center mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full mb-6">
            <Target className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Die versteckten Kosten schlechter Kommunikation
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed">
            Jeden Tag verlieren Unternehmer und Führungskräfte wertvolle Geschäfte, 
            weil sie die wahren Absichten ihrer Gesprächspartner nicht erkennen können. 
            <span className="font-semibold text-gray-900"> Diese Blindheit kostet Sie mehr, als Sie denken.</span>
          </p>

          {/* Statistics highlight */}
          <div className="mt-8 bg-red-50 border border-red-200 rounded-xl p-6 inline-block">
            <div className="flex items-center justify-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <span className="text-red-800 font-semibold">
                Studien zeigen: 67% aller Geschäftsdeals scheitern an Kommunikationsproblemen
              </span>
            </div>
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {painPoints.map((point, index) => (
            <PainCard
              key={index}
              title={point.title}
              description={point.description}
              icon={point.icon}
              index={index}
              isInView={isInView}
              cost={point.cost}
            />
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Die Lösung liegt in professioneller Kommunikationsschulung
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Erfolgreiche Unternehmer investieren in ihre Kommunikationsfähigkeiten, 
              weil sie wissen: Wer Menschen lesen kann, kontrolliert das Gespräch. 
              Wer das Gespräch kontrolliert, gewinnt das Geschäft.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-green-800 font-semibold">
                  ROI von professionellem Kommunikationstraining: 847% im ersten Jahr
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}