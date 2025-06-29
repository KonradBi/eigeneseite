import ContactButton from "@/components/ContactButton";
import { Trophy, TrendingUp, DollarSign, Users, Star, Crown, Zap, Target, CheckCircle, Award } from 'lucide-react';

export default function Results() {
  return (
    <div className="min-h-screen pt-16 bg-black overflow-hidden">
      {/* Hero Section with Advanced Effects */}
      <section className="relative py-32 bg-black overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-black to-yellow-900/30"></div>
          <div className="absolute top-20 left-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Success particles */}
          <div className="absolute inset-0">
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="absolute text-green-400 text-lg animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${6 + Math.random() * 8}s`
                }}
              >
                {['€', '$', '💰', '🎯', '⭐'][Math.floor(Math.random() * 5)]}
              </div>
            ))}
          </div>

          {/* Success pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
            <defs>
              <pattern id="success-pattern" patternUnits="userSpaceOnUse" width="120" height="120">
                <circle cx="60" cy="60" r="4" fill="currentColor" className="text-green-400">
                  <animate attributeName="r" values="3;6;3" dur="4s" repeatCount="indefinite" />
                </circle>
                <polygon points="60,20 80,50 60,80 40,50" fill="none" stroke="currentColor" strokeWidth="2" className="text-yellow-400">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    values="0 60 60;360 60 60"
                    dur="15s"
                    repeatCount="indefinite"
                  />
                </polygon>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#success-pattern)" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-green-200 to-yellow-200 bg-clip-text text-transparent">
                Die Millionen-Euro-Beweise
              </h1>
              <div className="absolute -top-8 -right-8 w-16 h-16 border-2 border-green-400 rounded-full animate-spin-slow opacity-50"></div>
            </div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Während andere Versprechen machen, liefern wir Belege. Hier sind die Zahlen echter Kunden.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section with 3D Effects */}
      <section className="py-20 lg:py-32 bg-black relative overflow-hidden">
        {/* 3D Grid Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-green-900/10 to-black"></div>
          <div className="absolute inset-0 opacity-15" style={{
            backgroundImage: `
              linear-gradient(rgba(34,197,94,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,197,94,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: 'perspective(700px) rotateX(50deg)',
            transformOrigin: 'center bottom'
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-green-400 via-white to-green-400 bg-clip-text text-transparent">
              Die harten Zahlen
            </h2>
            <div className="flex justify-center">
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                number: "47.2M€",
                label: "Zusätzlicher Umsatz",
                description: "Generiert durch unsere Kunden",
                icon: DollarSign,
                color: "green"
              },
              {
                number: "2.847",
                label: "Erfolgreiche Kunden",
                description: "CEOs, Unternehmer, Führungskräfte",
                icon: Users,
                color: "blue"
              },
              {
                number: "94.7%",
                label: "Erfolgsquote",
                description: "Bei Lügenerkennung nach Training",
                icon: Target,
                color: "purple"
              },
              {
                number: "847%",
                label: "Durchschnittlicher ROI",
                description: "Rückzahlung der Investition",
                icon: TrendingUp,
                color: "yellow"
              }
            ].map((stat, index) => (
              <div 
                key={index}
                className="group relative p-8 bg-slate-900/50 rounded-2xl border border-slate-800 backdrop-blur-sm overflow-hidden hover:scale-105 hover:-translate-y-4 transition-all duration-500"
              >
                {/* Glowing background */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Animated border beam */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-${stat.color}-500 via-transparent to-${stat.color}-500 p-[1px]`}>
                    <div className="w-full h-full rounded-2xl bg-slate-900/90"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <stat.icon className={`w-12 h-12 mx-auto mb-6 text-${stat.color}-400 group-hover:scale-110 transition-transform duration-300`} />
                  <div className={`text-4xl font-bold text-${stat.color}-400 mb-4 group-hover:text-${stat.color}-300 transition-colors duration-300`}>
                    {stat.number}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors duration-300">
                    {stat.label}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {stat.description}
                  </p>
                </div>

                {/* Success particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-1 h-1 bg-${stat.color}-400 rounded-full animate-ping`}
                      style={{
                        left: `${10 + Math.random() * 80}%`,
                        top: `${10 + Math.random() * 80}%`,
                        animationDelay: `${Math.random() * 2}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Case Studies Section with Holographic Effects */}
      <section className="py-20 lg:py-32 bg-black relative overflow-hidden">
        {/* Neural network background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-purple-900/10 to-black"></div>
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
            <defs>
              <pattern id="neural-results" patternUnits="userSpaceOnUse" width="100" height="100">
                <circle cx="50" cy="50" r="3" fill="currentColor" className="text-purple-400">
                  <animate attributeName="r" values="2;5;2" dur="3s" repeatCount="indefinite" />
                </circle>
                <line x1="50" y1="50" x2="150" y2="50" stroke="currentColor" strokeWidth="1" className="text-purple-400/30" />
                <line x1="50" y1="50" x2="50" y2="150" stroke="currentColor" strokeWidth="1" className="text-purple-400/30" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#neural-results)" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-white to-purple-400 bg-clip-text text-transparent">
              Echte Geschichten, echte Zahlen
            </h2>
            <div className="flex justify-center">
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {[
              {
                name: "Stefan K.",
                title: "CEO, Maschinenbau",
                result: "480.000€ Deal gerettet",
                story: "Ich wusste in den ersten 30 Sekunden, dass mein Verhandlungspartner log. Habe meine Strategie angepasst und einen 480.000€ Deal gerettet. Vorher wäre ich reingelaufen wie ein Lamm zur Schlachtbank.",
                timeframe: "Erste Woche nach Training",
                color: "green",
                icon: Trophy
              },
              {
                name: "Marina F.",
                title: "Personalchefin, 450 Mitarbeiter",
                result: "89% weniger Fehlentscheidungen",
                story: "Mein Team dachte, ich hätte plötzlich Superkräfte. Ich konnte vorhersagen, welche Mitarbeiter kündigen würden, wer loyal war und wer sabotierte. 9 von 10 meiner Vorhersagen trafen ein.",
                timeframe: "3 Monate nach Training",
                color: "blue",
                icon: Users
              },
              {
                name: "Thomas R.",
                title: "Geschäftsführer, IT",
                result: "2.1M€ zusätzlicher Umsatz",
                story: "Ich erkannte sofort, dass unser größter Kunde uns belogen hatte. Konnte rechtzeitig gegensteuern und aus einem drohenden Verlust einen 2.1M€ Gewinn machen.",
                timeframe: "6 Monate nach Training",
                color: "purple",
                icon: TrendingUp
              },
              {
                name: "Sarah M.",
                title: "Verhandlungsführerin, Automotive",
                result: "100% Erfolgsquote bei Deals",
                story: "Seit dem Training habe ich jeden wichtigen Deal gewonnen. Ich lese meine Verhandlungspartner wie offene Bücher und weiß immer 3 Schritte voraus, was sie tun werden.",
                timeframe: "12 Monate Erfolgsstreak",
                color: "yellow",
                icon: Crown
              }
            ].map((case_study, index) => (
              <div 
                key={index}
                className="group relative p-8 bg-slate-900/30 rounded-2xl border border-slate-700 backdrop-blur-sm overflow-hidden hover:scale-105 transition-all duration-500"
              >
                {/* Holographic background */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${case_study.color}-500/10 via-transparent to-${case_study.color}-300/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-${case_study.color}-500 via-${case_study.color}-300 to-${case_study.color}-500 p-[1px]`}>
                    <div className="w-full h-full rounded-2xl bg-slate-900/90"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 bg-gradient-to-r from-${case_study.color}-500 to-${case_study.color}-400 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <case_study.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-gray-100 transition-colors duration-300">
                        {case_study.name}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {case_study.title}
                      </p>
                    </div>
                  </div>
                  
                  <div className={`text-2xl font-bold text-${case_study.color}-400 mb-4 group-hover:text-${case_study.color}-300 transition-colors duration-300`}>
                    {case_study.result}
                  </div>
                  
                  <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                    "{case_study.story}"
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                    <CheckCircle className={`w-4 h-4 mr-2 text-${case_study.color}-400`} />
                    {case_study.timeframe}
                  </div>
                </div>

                {/* Success particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-1 h-1 bg-${case_study.color}-400 rounded-full animate-ping`}
                      style={{
                        left: `${15 + Math.random() * 70}%`,
                        top: `${15 + Math.random() * 70}%`,
                        animationDelay: `${Math.random() * 2}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 lg:py-32 bg-black relative overflow-hidden">
        {/* Dramatic background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-black to-green-900/20"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-yellow-400 via-white to-green-400 bg-clip-text text-transparent">
            Werden Sie der nächste Erfolgsfall
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Diese Ergebnisse sind real. Diese Menschen waren genau wie Sie - bis sie das System lernten.
          </p>
          
          <div className="relative inline-block">
            <ContactButton />
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500 via-green-500 to-yellow-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
          </div>
          
          <p className="text-sm text-gray-500 mt-8">
            <span className="inline-flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Garantierte Ergebnisse oder Geld zurück
            </span>
          </p>
        </div>
      </section>
    </div>
  );
} 