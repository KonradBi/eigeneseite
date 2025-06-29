"use client"

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { AlertTriangle, TrendingDown, Users, Target, CheckCircle } from 'lucide-react'

interface PainCardProps {
  title: string
  description: string
  icon: React.ReactNode
  index: number
  isInView: boolean
  impact: string
}

const PainCard: React.FC<PainCardProps> = ({ title, description, icon, index, isInView, impact }) => {
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
      <div className="relative bg-white border border-gray-200 rounded-xl p-8 h-full shadow-sm hover:shadow-md transition-all duration-300">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
          <div className="text-blue-600">
            {icon}
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          {title}
        </h3>

        <p className="text-gray-600 leading-relaxed mb-6">
          {description}
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 inline-block">
          <span className="text-gray-700 text-sm font-medium">{impact}</span>
        </div>
      </div>
    </motion.div>
  )
}

export const EnhancedPainSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" })

  const challenges = [
    {
      title: "Missed Revenue Opportunities",
      description: "When you can't accurately read client intentions and motivations, you miss critical buying signals and fail to address real concerns. This leads to lost deals that could have been won with better behavioral insight.",
      icon: <TrendingDown className="w-6 h-6" />,
      impact: "Average impact: $150K+ annually"
    },
    {
      title: "Ineffective Team Dynamics", 
      description: "Without understanding individual communication styles and motivational drivers, team productivity suffers. Conflicts arise from misunderstandings that could be prevented with proper behavioral awareness.",
      icon: <Users className="w-6 h-6" />,
      impact: "Productivity loss: 23% average"
    },
    {
      title: "Poor Strategic Partnerships",
      description: "Making partnership decisions without understanding the true character and reliability of potential partners leads to costly mistakes. Due diligence goes beyond financials—it requires behavioral assessment.",
      icon: <AlertTriangle className="w-6 h-6" />,
      impact: "Failed partnerships cost $200K+"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Target className="w-8 h-8 text-blue-600" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            The Communication Intelligence Gap
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed">
            Most professionals operate with incomplete information about the people they interact with daily. 
            This behavioral blindness creates predictable, costly problems that compound over time.
          </p>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6 inline-block">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              <span className="text-blue-800 font-medium">
                Research shows: 73% of business failures stem from communication breakdowns
              </span>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {challenges.map((challenge, index) => (
            <PainCard
              key={index}
              title={challenge.title}
              description={challenge.description}
              icon={challenge.icon}
              index={index}
              isInView={isInView}
              impact={challenge.impact}
            />
          ))}
        </div>

        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              The Strategic Advantage of Behavioral Intelligence
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Elite performers in business, law enforcement, and intelligence agencies rely on advanced 
              behavioral analysis to make critical decisions. These same methodologies can be applied 
              to transform your professional interactions and outcomes.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-800 font-semibold">Proven Results</span>
                </div>
                <p className="text-green-700 text-sm">
                  Clients report 340% improvement in negotiation outcomes within 90 days
                </p>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-800 font-semibold">Evidence-Based</span>
                </div>
                <p className="text-blue-700 text-sm">
                  Methods developed from 15+ years of field research and practical application
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}