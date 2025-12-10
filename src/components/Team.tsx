import React from 'react';
import { CHEF_INSTRUCTORS, teamBgImage } from '../constants';
import { ChefHat } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <section id="team" className="bg-white">
      {/* Hero Banner */}
      <div className="relative h-[700px] md:h-[800px] overflow-hidden reveal group/banner cursor-pointer">
        <img 
          src={teamBgImage}
          alt="Our Chef Team"
          className="w-full h-full object-cover object-[65%_42%] grayscale group-hover/banner:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/40 to-transparent"></div>
        
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 pb-16 md:pb-20">
            <div className="max-w-3xl">
              <h4 className="text-gold-500 text-xs tracking-widest uppercase mb-3">
                Expert Instructors
              </h4>
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">
                Meet Our Team
              </h2>
              <p className="text-gray-200 font-sans text-lg leading-relaxed">
                Led by Chef Arundati Rao and supported by four dedicated chef instructors, our team brings decades of combined experience in professional baking and patisserie. Each instructor specializes in distinct areas of the craft, ensuring you receive expert guidance across every technique.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chef Instructors Grid */}
      <div className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <h3 className="text-3xl md:text-4xl font-serif text-dark-900 mb-4">
              Our Chef Instructors
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto font-sans">
              Each of our instructors brings unique expertise and passion to the academy, creating a comprehensive learning experience across all disciplines of baking and patisserie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CHEF_INSTRUCTORS.map((chef, index) => (
              <div 
                key={chef.id} 
                className="bg-white group cursor-pointer overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 reveal flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img 
                    src={chef.image}
                    alt={chef.name}
                    className={`w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ${
                      chef.id === 4 ? 'object-[center_35%]' : ''
                    }`}
                  />
                  <div className="absolute top-4 right-4 bg-gold-500 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ChefHat size={20} className="text-white" />
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <h4 className="text-2xl font-serif text-dark-900 mb-1">
                    {chef.name}
                  </h4>
                  <p className="text-xs uppercase tracking-widest text-gold-600 mb-3">
                    {chef.title}
                  </p>
                  <p className="text-sm font-sans text-dark-900 mb-4 italic">
                    {chef.specialty}
                  </p>
                  <p className="text-sm font-sans text-gray-600 leading-relaxed">
                    {chef.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;