'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Navigation from '@/components/Navigation'
import ContactButton from '@/components/ContactButton'
import { Rocket, Shield, Target, Zap, Crown, Star, Brain, Eye, TrendingUp, Award, Users, CheckCircle } from 'lucide-react';

const PolicePartnershipSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const policeResults = [
    {
      unit: "Polizei Hamburg - Mordkommission",
      case: "Serientäter-Vernehmung",
      before: "47 Stunden erfolglose Befragung",
      after: "Geständnis nach 23 Minuten",
      method: "Micro-Expression Reading + Profiling",
      icon: "🕵️‍♂️"
    },
    {
      unit: "LKA Bayern - Cybercrime",
      case: "Internationale Hacker-Gruppe", 
      before: "6 Monate ohne Durchbruch",
      after: "Komplette Aufklärung in 3 Wochen",
      method: "Verhaltensanalyse bei Online-Kommunikation",
      icon: "💻"
    },
    {
      unit: "Bundespolizei - Grenzschutz",
      case: "Menschenhandel-Ring",
      before: "€2.3M Schäden durch unentdeckte Fälle",
      after: "100% Erkennungsrate bei Verdächtigen",
      method: "Stress-Pattern Recognition",
      icon: "🚔"
    }
  ]

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-indigo-900/30 to-purple-950/40"></div>
      
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 25% 75%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 75% 25%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            WENN DIE POLIZEI MIR VERTRAUT
          </motion.h2>
          <motion.p 
            className="text-2xl text-gray-300 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            ...dann können Sie sich auch darauf verlassen, dass meine Methoden funktionieren.<br/>
            Hier sind echte Fälle aus der Strafverfolgung:
          </motion.p>
        </motion.div>

        <div className="space-y-12">
          {policeResults.map((result, index) => (
            <motion.div
              key={result.unit}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ 
                delay: index * 0.2, 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? 2 : -2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              
              <div className="relative bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <motion.div 
                      className="flex items-center mb-4"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-4xl mr-4">{result.icon}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{result.unit}</h3>
                        <p className="text-blue-400 text-lg">{result.case}</p>
                      </div>
                    </motion.div>
                    
                    <div className="space-y-4">
                      <motion.div 
                        className="bg-red-500/20 border border-red-500/30 rounded-lg p-4"
                        initial={{ scale: 0.9 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: index * 0.2 + 0.3 }}
                      >
                        <p className="text-red-400 font-semibold">VORHER: {result.before}</p>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-green-500/20 border border-green-500/30 rounded-lg p-4"
                        initial={{ scale: 0.9 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: index * 0.2 + 0.5 }}
                      >
                        <p className="text-green-400 font-semibold">NACHHER: {result.after}</p>
                      </motion.div>
                    </div>
                  </div>
                  
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.7, type: "spring", stiffness: 200 }}
                  >
                    <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl p-6 border border-purple-500/30">
                      <p className="text-purple-400 text-sm uppercase tracking-wider mb-2">Methode</p>
                      <p className="text-white text-lg font-semibold">{result.method}</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-20"
        >
          <motion.div
            className="inline-block bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl p-8 border border-yellow-500/30"
            whileHover={{ scale: 1.02 }}
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(234, 179, 8, 0.3)",
                "0 0 40px rgba(234, 179, 8, 0.5)",
                "0 0 20px rgba(234, 179, 8, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <p className="text-2xl text-yellow-400 font-bold mb-2">🏆 GEHEIMHALTUNG</p>
            <p className="text-xl text-white max-w-2xl">
              Die meisten meiner Polizei-Erfolge darf ich aus Ermittlungsgründen nicht öffentlich zeigen.<br/>
              Diese Beispiele sind nur die Spitze des Eisbergs.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default function Consulting() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="pt-20">
        <section className="py-32 relative overflow-hidden">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          
          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-20"
            >
              <motion.h1 
                className="text-8xl font-black mb-8 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                SIE HABEN EIN PROBLEM
              </motion.h1>
              
              <motion.p 
                className="text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Ihre Konkurrenz schließt Deals ab, während Sie noch überlegen.<br/>
                Ihre Kunden lügen Sie an, und Sie merken es nicht.<br/>
                Ihre Verhandlungen scheitern, bevor sie begonnen haben.
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {[
                { problem: "Deals platzen", cost: "€2.3M", icon: "💸" },
                { problem: "Kunden lügen", cost: "€847K", icon: "🎭" },
                { problem: "Teams versagen", cost: "€1.2M", icon: "💔" },
                { problem: "Zeit verschwendet", cost: "€634K", icon: "⏰" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100, rotateX: -15 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    delay: index * 0.1, 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  
                  <div className="relative bg-black/40 backdrop-blur-xl border border-red-500/30 rounded-2xl p-6 text-center">
                    <motion.div 
                      className="text-5xl mb-4"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {item.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-red-400 mb-2">{item.problem}</h3>
                    <motion.div 
                      className="text-2xl font-bold text-red-500"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      -{item.cost}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <PolicePartnershipSection />

        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2 
              className="text-6xl font-bold text-center mb-20 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              MEINE LÖSUNG FÜR SIE
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-16">
              {[
                {
                  title: "EXECUTIVE PROFILING",
                  subtitle: "Für Führungskräfte & Unternehmer",
                  price: "€25.000",
                  duration: "3 Tage Intensiv",
                  features: [
                    "Micro-Expression Reading in 0.3 Sekunden",
                    "Verhandlungspsychologie der Elite",
                    "Lügenerkennung ohne Technologie",
                    "Persönlichkeits-Profiling in Echtzeit",
                    "Manipulation & Gegenmanipulation"
                  ],
                  guarantee: "€500K+ ROI oder Geld zurück",
                  icon: "👑"
                },
                {
                  title: "CORPORATE TRANSFORMATION", 
                  subtitle: "Für Teams & Organisationen",
                  price: "€75.000",
                  duration: "2 Wochen Programm",
                  features: [
                    "Komplette Team-Transformation",
                    "Verkaufspsychologie-Bootcamp",
                    "Kundenanalyse-Systeme",
                    "Kommunikations-Optimierung",
                    "Langzeit-Coaching (6 Monate)"
                  ],
                  guarantee: "€2M+ Umsatzsteigerung garantiert",
                  icon: "🏢"
                }
              ].map((package_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  whileHover={{ 
                    scale: 1.02, 
                    boxShadow: "0 25px 50px rgba(34, 197, 94, 0.3)",
                    rotateY: index === 0 ? 3 : -3
                  }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  
                  <div className="relative bg-black/40 backdrop-blur-xl border border-green-500/30 rounded-2xl p-8">
                    <motion.div 
                      className="text-6xl mb-6 text-center"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {package_.icon}
                    </motion.div>
                    
                    <h3 className="text-3xl font-bold text-green-400 mb-2 text-center">{package_.title}</h3>
                    <p className="text-gray-300 text-center mb-6">{package_.subtitle}</p>
                    
                    <div className="text-center mb-8">
                      <motion.div 
                        className="text-5xl font-bold text-white mb-2"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {package_.price}
                      </motion.div>
                      <p className="text-green-400">{package_.duration}</p>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {package_.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + idx * 0.1 }}
                          className="flex items-center text-gray-300"
                        >
                          <span className="text-green-400 mr-3">✓</span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                    
                    <motion.div 
                      className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg p-4 border border-yellow-500/30 text-center"
                      animate={{ 
                        boxShadow: [
                          "0 0 20px rgba(234, 179, 8, 0.3)",
                          "0 0 30px rgba(234, 179, 8, 0.5)",
                          "0 0 20px rgba(234, 179, 8, 0.3)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <p className="text-yellow-400 font-bold">{package_.guarantee}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 relative overflow-hidden">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(239, 68, 68, 0.1) 0%, rgba(249, 115, 22, 0.1) 100%)",
                "linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(239, 68, 68, 0.1) 100%)",
                "linear-gradient(45deg, rgba(239, 68, 68, 0.1) 0%, rgba(249, 115, 22, 0.1) 100%)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          <div className="relative max-w-4xl mx-auto text-center px-6">
            <motion.h2 
              className="text-7xl font-black mb-8 text-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              WARNUNG!
            </motion.h2>
            
            <motion.p 
              className="text-3xl text-red-400 font-bold mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Nur 12 Plätze pro Jahr verfügbar
            </motion.p>
            
            <motion.p 
              className="text-xl text-gray-300 mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Ich arbeite nur mit Klienten, die bereit sind, €1M+ zu investieren oder zu verdienen.<br/>
              Wenn Sie nicht in diese Kategorie gehören, verschwenden Sie meine Zeit nicht.
            </motion.p>

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.5, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ContactButton />
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
} 