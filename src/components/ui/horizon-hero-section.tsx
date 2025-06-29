import React from 'react';

interface HorizonHeroSectionProps {
  title: string;
  subtitle: string;
  keywords: string[];
}

export const HorizonHeroSection: React.FC<HorizonHeroSectionProps> = ({ title, subtitle, keywords }) => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            {title}
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {keywords.map((keyword, index) => (
              <span key={index} className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizonHeroSection;
