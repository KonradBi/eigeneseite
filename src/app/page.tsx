

import ContactButton from "@/components/ContactButton";
import { RevolutionHero } from '@/components/ui/revolution-hero';
import { HolographicCardsSection } from '@/components/ui/holographic-card';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <RevolutionHero 
        title="DIE EINE FÄHIGKEIT, DIE ALLES KONTROLLIERT"
        subtitle="MENSCHLICHES VERHALTEN MEISTERN"
        description="Wir geben Ihnen das weltweit fortschrittlichste Profiling-Training. Dekodieren Sie Verhalten, nehmen Sie Einfluss und dominieren Sie jede Situation."
        primaryButtonText="Start Revolution"
        secondaryButtonText="Learn More"
      />


            <div className="relative z-10 bg-black">
        <HolographicCardsSection />

        {/* Pain Section */}
        <section className="py-20 lg:py-32 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter max-w-3xl mx-auto">Schluss mit Raten. Schluss mit Zweifeln.</h2>
            <p className="text-lg md:text-xl text-slate-400 mt-4 max-w-2xl mx-auto">Sie verlassen Meetings und fragen sich, was wirklich gesagt wurde. Sie verlieren Deals, weil Sie die wahren Motive Ihres Gegenübers nicht kannten. Das kostet Sie mehr als nur Geld. Es kostet Sie Kontrolle.</p>
            <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
              <div className="bg-slate-900 p-6 rounded-lg border border-slate-800">
                <h3 className="font-bold text-xl mb-2">Verpasste Chancen</h3>
                <p className="text-slate-400">Die Frustration, eine Verhandlung zu verlieren, die Sie hätten gewinnen müssen.</p>
              </div>
              <div className="bg-slate-900 p-6 rounded-lg border border-slate-800">
                <h3 className="font-bold text-xl mb-2">Fehlende Sicherheit</h3>
                <p className="text-slate-400">Das Gefühl, belogen zu werden, ohne es beweisen zu können.</p>
              </div>
              <div className="bg-slate-900 p-6 rounded-lg border border-slate-800">
                <h3 className="font-bold text-xl mb-2">Falsche Partner</h3>
                <p className="text-slate-400">Die Unsicherheit, ob ein potenzieller Partner oder Mitarbeiter wirklich hält, was er verspricht.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Value Stack Section */}
        <section className="py-20 lg:py-32 bg-slate-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter max-w-3xl mx-auto">Das ist kein Kurs. Das ist ein Arsenal.</h2>
            <p className="text-lg md:text-xl text-slate-400 mt-4 max-w-2xl mx-auto">Wir geben Ihnen alles, was Sie brauchen, um jede Interaktion zu dominieren. Hier ist, was Sie bekommen:</p>
            <div className="max-w-3xl mx-auto mt-12 text-left">
              <div className="bg-black rounded-lg border border-slate-700 divide-y divide-slate-700">
                <div className="p-6 flex justify-between items-center"><span className="text-lg">Das komplette Profiling-System</span><span className="font-bold text-lg text-slate-400">Wert: 4.999€</span></div>
                <div className="p-6 flex justify-between items-center"><span className="text-lg">Die Deception-Detection-Toolbox</span><span className="font-bold text-lg text-slate-400">Wert: 1.499€</span></div>
                <div className="p-6 flex justify-between items-center"><span className="text-lg">Die Predictive-Behavior-Matrix</span><span className="font-bold text-lg text-slate-400">Wert: 2.999€</span></div>
                <div className="p-6 flex justify-between items-center"><span className="text-lg">Wöchentliche Live-Sparring-Sessions</span><span className="font-bold text-lg text-slate-400">Wert: 3.500€</span></div>
                <div className="p-6 flex justify-between items-center"><span className="text-lg">Zugang zur Elite-Community</span><span className="font-bold text-lg text-slate-400">Wert: 1.999€</span></div>
                                <div className="p-6 flex justify-between items-center bg-slate-800"><span className="text-lg text-yellow-400">Bonus: Das &apos;Unshakeable Frame&apos; Modul</span><span className="font-bold text-lg text-yellow-400">Wert: 999€</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Grand Slam Offer & CTA */}
        <section className="py-20 lg:py-32 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Ein Angebot, das Sie nicht ablehnen können.</h2>
              <p className="text-lg md:text-xl text-slate-400 mt-4">Sie erhalten das gesamte Arsenal im Wert von <span className="line-through">15.995€</span> für eine einmalige, risikofreie Investition.</p>
              <div className="my-12 p-8 bg-slate-900 border border-yellow-500 rounded-lg">
                                <h3 className="text-2xl font-bold text-yellow-400">Die &apos;Doppelte-Verhandlungs-Macht&apos; Garantie</h3>
                <p className="text-slate-300 mt-4 text-lg">Wenn Sie nach 90 Tagen nicht das Gefühl haben, dass Sie Verhandlungen mit doppelter Sicherheit und Klarheit führen, erstatten wir Ihnen nicht nur den vollen Betrag zurück, sondern zahlen Ihnen zusätzlich 300€ für Ihre investierte Zeit. <span className="font-bold">Sie können nicht verlieren.</span></p>
              </div>
              <ContactButton />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
