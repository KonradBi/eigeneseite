"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-16 bg-black">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
            Jeder Tag, den Sie warten, kostet Sie Geld
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Während Sie überlegen, machen andere bereits die Deals, die Sie hätten haben können. Hier ist Ihr direkter Draht zum System.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
            <h2 className="text-2xl font-bold mb-6 text-orange-400">Starten Sie heute</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Vollständiger Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-700 focus:border-orange-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  E-Mail Adresse *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-700 focus:border-orange-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Was ist Ihr größtes Problem? *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-700 focus:border-orange-500 focus:outline-none"
                  required
                >
                  <option value="">Wählen Sie Ihr Problem</option>
                  <option value="deals">Ich verliere wichtige Deals an Konkurrenten</option>
                  <option value="lies">Menschen belügen mich und ich merke es nicht</option>
                  <option value="hiring">Ich stelle die falschen Leute ein</option>
                  <option value="negotiations">Meine Verhandlungen scheitern ständig</option>
                  <option value="kids-ai">Mein Kind braucht einen KI-Vorsprung</option>
                  <option value="other">Etwas anderes</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Beschreiben Sie Ihre Situation
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Was haben Sie bereits versucht? Wie viel kostet Sie das Problem jährlich?"
                  className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-700 focus:border-orange-500 focus:outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-6 rounded-lg transition-colors text-lg"
              >
                Sofort Termin sichern
              </button>
            </form>
            <p className="text-gray-500 text-sm mt-4">
              Antwortzeit: Innerhalb 4 Stunden
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
              <h2 className="text-2xl font-bold mb-6 text-orange-400">Die Kosten des Wartens</h2>
              <div className="space-y-4">
                <div className="bg-red-900/20 p-4 rounded-lg border border-red-800">
                  <div className="text-lg font-bold text-red-400 mb-2">1 Monat Warten = 28.000€ Verlust</div>
                  <p className="text-gray-300 text-sm">
                    Durchschnittlich verlieren Unternehmer 1-2 wichtige Deals pro Monat
                  </p>
                </div>
                <div className="bg-red-900/20 p-4 rounded-lg border border-red-800">
                  <div className="text-lg font-bold text-red-400 mb-2">1 Jahr Warten = 347.000€ Verlust</div>
                  <p className="text-gray-300 text-sm">
                    Plus verpasste Opportunities und falsche Personalentscheidungen
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
              <h2 className="text-2xl font-bold mb-6 text-orange-400">Direkter Kontakt</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-400 rounded-full mr-4"></div>
                  <span className="text-gray-300">WhatsApp: +49 XXX XXXXXXX</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-400 rounded-full mr-4"></div>
                  <span className="text-gray-300">E-Mail: direkt@profiling-experte.de</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-400 rounded-full mr-4"></div>
                  <span className="text-gray-300">Notfall-Hotline: Für akute Deal-Situationen</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-900/20 rounded-lg border border-green-800">
                <div className="text-sm font-bold text-green-400 mb-2">Verfügbarkeit</div>
                <div className="text-gray-300 text-sm">Mo-Fr 8:00-20:00 | Sa 10:00-16:00</div>
                <div className="text-gray-300 text-sm">Notfälle: 24/7 per WhatsApp</div>
              </div>
            </div>

            <div className="bg-orange-900/20 p-8 rounded-lg border border-orange-800">
              <h2 className="text-xl font-bold mb-4 text-orange-400">⚠️ Wichtiger Hinweis</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Ich arbeite nur mit Menschen, die <span className="font-bold">sofort handeln</span> und 
                <span className="font-bold"> ernst meinen</span>. Wenn Sie nur "mal schauen" wollen, 
                sparen Sie sich die Zeit. Meine Kunden investieren mindestens 5.000€ und erwarten 
                mindestens 50.000€ Ergebnis.
              </p>
            </div>

            <div className="bg-yellow-900/20 p-6 rounded-lg border border-yellow-800">
              <h3 className="text-lg font-bold text-yellow-400 mb-3">Aktuelle Warteliste</h3>
              <div className="text-3xl font-bold text-yellow-400 mb-2">23 Personen</div>
              <p className="text-gray-300 text-sm">
                Nächster freier Platz: <span className="font-bold">März 2025</span>
              </p>
              <p className="text-yellow-300 text-sm mt-2">
                Aber: Notfälle und große Deals bekommen Sofort-Termine
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 