"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Weber",
    title: "Marketing Director, TechCorp",
    content: "Nach dem Training habe ich endlich gelernt, komplexe Strategien so zu präsentieren, dass jeder sie versteht. Meine Präsentationen sind jetzt deutlich überzeugender.",
    avatar: "👩‍💼",
    rating: 5,
    highlight: "10x überzeugender"
  },
  {
    id: 2,
    name: "Michael Braun", 
    title: "Geschäftsführer, StartupXYZ",
    content: "Meine Verhandlungen sind seit dem Coaching strukturierter und erfolgreicher. Ich konnte in 3 Monaten 40% mehr Deals abschließen.",
    avatar: "👨‍💼",
    rating: 5,
    highlight: "40% mehr Deals"
  },
  {
    id: 3,
    name: "Anna Müller",
    title: "Projektleiterin, BigCorp", 
    content: "Ich kann jetzt auch die schwierigsten Gespräche souverän führen. Das Training war Gold wert - meine Führungsqualitäten haben sich komplett transformiert.",
    avatar: "👩‍🎓",
    rating: 5,
    highlight: "Führungsqualitäten transformiert"
  }
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="gradient-bg section-padding">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-medium text-gradient mb-4">Was Kunden sagen</h2>
          <div className="section-divider mb-8"></div>
          <p className="text-gray-400 text-lg">Echte Ergebnisse von echten Menschen</p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="testimonial-card p-12 rounded-3xl text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-8">
              {currentTestimonial.avatar}
            </div>
            
            <div className="flex justify-center mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">⭐</span>
              ))}
            </div>
            
            <blockquote className="text-2xl md:text-3xl text-gray-200 italic mb-8 leading-relaxed">
              "{currentTestimonial.content}"
            </blockquote>
            
            <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-full text-white font-bold mb-6">
              {currentTestimonial.highlight}
            </div>
            
            <div>
              <div className="text-xl font-bold text-white mb-2">{currentTestimonial.name}</div>
              <div className="text-gray-400">{currentTestimonial.title}</div>
            </div>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="card-subtle p-6 rounded-2xl cursor-pointer hover-glow"
              onClick={() => setCurrentIndex(index)}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{testimonial.name}</div>
                  <div className="text-gray-400 text-xs">{testimonial.title}</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                "{testimonial.content}"
              </p>
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">⭐</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-blue-500 w-8' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 