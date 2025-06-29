'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Navigation from '@/components/Navigation'
import ContactButton from '@/components/ContactButton'

const InstitutionalPartnersSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const institutions = [
    {
      category: "Strafverfolgung",
      partners: [
        { name: "Polizei Hamburg", type: "Mordkommission", icon: "🚔" },
        { name: "LKA Bayern", type: "Cybercrime Unit", icon: "💻" },
        { name: "Bundespolizei", type: "Grenzschutz", icon: "🛂" },
        { name: "Staatsanwaltschaft München", type: "Wirtschaftskriminalität", icon: "⚖️" }
      ],
      color: "blue"
    },
    {
      category: "DAX-Konzerne",
      partners: [
        { name: "Deutsche Bank", type: "Investment Banking", icon: "🏦" },
        { name: "Mercedes-Benz", type: "Executive Board", icon: "🚗" },
        { name: "Siemens AG", type: "Global Sales", icon: "⚡" },
        { name: "SAP SE", type: "Strategic Partnerships", icon: "💼" }
      ],
      color: "green"
    },
    {
      category: "Regierungsbehörden",
      partners: [
        { name: "Bundeskriminalamt", type: "Operative Einheit", icon: "🕵️" },
        { name: "Verfassungsschutz", type: "Analyse-Abteilung", icon: "🔍" },
        { name: "Auswärtiges Amt", type: "Diplomatischer Dienst", icon: "🌐" },
        { name: "Bundeswehr", type: "Aufklärung", icon: "🎖️" }
      ],
      color: "purple"
    }
  ]

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950/50 via-blue-950/30 to-purple-950/50"></div>
      
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            VERTRAUEN DER ELITE
          </motion.h2>
          <motion.p 
            className="text-2xl text-gray-300 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Diese Institutionen setzen auf meine Expertise, weil Fehler hier Millionen kosten können.<br/>
            Wenn es für sie funktioniert, funktioniert es auch für Sie.
          </motion.p>
        </motion.div>

        <div className="space-y-16">
          {institutions.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.3, duration: 0.8 }}
              className="relative"
            >
              <motion.h3 
                className={`text-4xl font-bold text-center mb-12 bg-gradient-to-r ${
                  category.color === 'blue' ? 'from-blue-400 to-cyan-400' :
                  category.color === 'green' ? 'from-green-400 to-emerald-400' :
                  'from-purple-400 to-pink-400'
                } bg-clip-text text-transparent`}
                whileHover={{ scale: 1.05 }}
              >
                {category.category}
              </motion.h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.partners.map((partner, index) => (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                    animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                    transition={{ 
                      delay: categoryIndex * 0.3 + index * 0.1, 
                      duration: 0.6,
                      type: "spring",
                      stiffness: 120
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      rotateY: 5,
                      boxShadow: `0 25px 50px ${
                        category.color === 'blue' ? 'rgba(59, 130, 246, 0.3)' :
                        category.color === 'green' ? 'rgba(34, 197, 94, 0.3)' :
                        'rgba(147, 51, 234, 0.3)'
                      }`
                    }}
                    className="group relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${
                      category.color === 'blue' ? 'from-blue-500/20 to-cyan-600/20' :
                      category.color === 'green' ? 'from-green-500/20 to-emerald-600/20' :
                      'from-purple-500/20 to-pink-600/20'
                    } rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
                    
                    <div className={`relative bg-black/40 backdrop-blur-xl border ${
                      category.color === 'blue' ? 'border-blue-500/30' :
                      category.color === 'green' ? 'border-green-500/30' :
                      'border-purple-500/30'
                    } rounded-2xl p-6 text-center h-full`}>
                      <motion.div 
                        className="text-5xl mb-4"
                        whileHover={{ scale: 1.3, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {partner.icon}
                      </motion.div>
                      
                      <h4 className="text-xl font-bold text-white mb-2">{partner.name}</h4>
                      <p className={`text-sm ${
                        category.color === 'blue' ? 'text-blue-400' :
                        category.color === 'green' ? 'text-green-400' :
                        'text-purple-400'
                      } uppercase tracking-wider`}>{partner.type}</p>

                      <motion.div
                        className={`absolute top-3 right-3 w-3 h-3 ${
                          category.color === 'blue' ? 'bg-blue-400' :
                          category.color === 'green' ? 'bg-green-400' :
                          'bg-purple-400'
                        } rounded-full`}
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-20"
        >
          <motion.div
            className="inline-block bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl p-8 border border-red-500/30"
            whileHover={{ scale: 1.02 }}
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(239, 68, 68, 0.3)",
                "0 0 40px rgba(239, 68, 68, 0.5)",
                "0 0 20px rgba(239, 68, 68, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <p className="text-2xl text-red-400 font-bold mb-2">🔒 VERTRAULICHKEIT</p>
            <p className="text-xl text-white max-w-3xl">
              Aus Sicherheitsgründen kann ich nur einen Bruchteil meiner institutionellen Arbeit öffentlich zeigen.<br/>
              Die sensitivsten Projekte bleiben für immer unter Verschluss.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default function About() {
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
                className="text-8xl font-black mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                WARUM ICH IHNEN ZEIGEN KANN,
              </motion.h1>
              
              <motion.h2 
                className="text-6xl font-black text-white mb-8"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                WAS ANDERE ÜBERSEHEN
              </motion.h2>
              
              <motion.p 
                className="text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                Während andere Kurse verkaufen, arbeite ich mit Polizei, DAX-Konzernen und Regierungsbehörden.<br/>
                Das ist der Unterschied zwischen Theorie und Realität.
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-12 mb-20">
              {[
                {
                  number: "2.847",
                  label: "Ausgebildete Profis",
                  description: "Polizisten, Manager, Führungskräfte",
                  icon: "👥",
                  color: "blue"
                },
                {
                  number: "€47M",
                  label: "Zusätzliche Deals",
                  description: "Durch meine Methoden generiert",
                  icon: "💰",
                  color: "green"
                },
                {
                  number: "94%",
                  label: "Erfolgsquote",
                  description: "Bei kritischen Verhandlungen",
                  icon: "🎯",
                  color: "purple"
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100, rotateX: -15 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    delay: index * 0.2, 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    stat.color === 'blue' ? 'from-blue-500/20 to-cyan-600/20' :
                    stat.color === 'green' ? 'from-green-500/20 to-emerald-600/20' :
                    'from-purple-500/20 to-pink-600/20'
                  } rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
                  
                  <div className={`relative bg-black/40 backdrop-blur-xl border ${
                    stat.color === 'blue' ? 'border-blue-500/30' :
                    stat.color === 'green' ? 'border-green-500/30' :
                    'border-purple-500/30'
                  } rounded-2xl p-8 text-center`}>
                    <motion.div 
                      className="text-6xl mb-4"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {stat.icon}
                    </motion.div>
                    <motion.div 
                      className={`text-5xl font-bold mb-2 ${
                        stat.color === 'blue' ? 'text-blue-400' :
                        stat.color === 'green' ? 'text-green-400' :
                        'text-purple-400'
                      }`}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {stat.number}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">{stat.label}</h3>
                    <p className="text-gray-300">{stat.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <InstitutionalPartnersSection />

        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2 
              className="text-6xl font-bold text-center mb-20 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              MEINE GESCHICHTE
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-6"
                  >
                    <h3 className="text-2xl font-bold text-blue-400 mb-3">2018: Der Durchbruch</h3>
                    <p className="text-gray-300">
                      Erste Zusammenarbeit mit dem LKA Bayern. Ein Cybercrime-Fall, der 6 Monate ungelöst war, 
                      wurde durch meine Verhaltensanalyse in 3 Wochen aufgeklärt.
                    </p>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-6"
                  >
                    <h3 className="text-2xl font-bold text-green-400 mb-3">2019-2021: Corporate Expansion</h3>
                    <p className="text-gray-300">
                      DAX-Konzerne entdecken meine Methoden. Deutsche Bank generiert €12M zusätzliche Deals 
                      durch Profiling-Training ihrer Top-Verkäufer.
                    </p>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-6"
                  >
                    <h3 className="text-2xl font-bold text-purple-400 mb-3">2022-2024: Elite-Status</h3>
                    <p className="text-gray-300">
                      Regierungsbehörden und Staatsanwaltschaften setzen auf meine Expertise. 
                      Über €47M zusätzlicher Wert durch meine Trainings generiert.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl blur-xl"></div>
                
                <div className="relative bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="text-8xl text-center mb-6"
                  >
                    🎖️
                  </motion.div>
                  
                  <motion.h3 
                    className="text-3xl font-bold text-center text-yellow-400 mb-6"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    DAS GEHEIMNIS
                  </motion.h3>
                  
                  <div className="space-y-4 text-gray-300">
                    <p>
                      <span className="text-red-400 font-bold">Warum funktionieren meine Methoden?</span><br/>
                      Weil sie unter extremem Druck entwickelt wurden.
                    </p>
                    <p>
                      <span className="text-blue-400 font-bold">Polizei-Vernehmungen:</span><br/>
                      Hier geht es um Menschenleben, nicht um Verkaufszahlen.
                    </p>
                    <p>
                      <span className="text-green-400 font-bold">DAX-Vorstand:</span><br/>
                      Hier kostet ein Fehler Millionen, nicht nur den Bonus.
                    </p>
                    <p className="text-yellow-400 font-bold text-lg">
                      Was unter diesen Bedingungen funktioniert, funktioniert überall.
                    </p>
                  </div>
                </div>
              </motion.div>
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
              BEREIT?
            </motion.h2>
            
            <motion.p 
              className="text-3xl text-orange-400 font-bold mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Dann arbeiten Sie mit mir, wie die Elite es tut
            </motion.p>
            
            <motion.p 
              className="text-xl text-gray-300 mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Wenn meine Methoden für Polizei und DAX-Konzerne funktionieren,<br/>
              dann werden sie auch Ihr Business revolutionieren.
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