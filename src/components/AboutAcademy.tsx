import React from 'react';
import { academyClassroomImage } from '../constants';

const AboutAcademy: React.FC = () => {
  return (
    <section id="academy" className="py-24 bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="reveal">
            <h4 className="text-gold-500 text-xs tracking-widest uppercase mb-3">Our Story</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-dark-900 mb-6">
              About the Academy
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded in 2012, Escapades Culinary Academy has grown from a small passion project into Hyderabad's premier baking academy. We believe that exceptional baking education should be accessible to everyone - from home bakers pursuing their passion to entrepreneurs building their dream businesses.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Located in the heart of Raidurg, our world-class 6,000 sq ft facility features specialized learning zones including dedicated cake decorating stations, artisan bread labs, and state-of-the-art teaching kitchens equipped with professional-grade equipment.
            </p>
            <p className="text-gray-600 leading-relaxed">
              What sets us apart is our commitment to hands-on learning, small batch sizes for personalized attention, and internationally recognized City & Guilds certification that gives our graduates a competitive edge in the culinary world.
            </p>
          </div>

          {/* Enhanced Image */}
          <div className="reveal">
            <div className="relative overflow-hidden rounded-sm shadow-xl">
              <img 
                src={academyClassroomImage} 
                alt="Escapades Culinary Academy Professional Kitchen" 
                className="w-full h-[500px] object-cover"
                style={{
                  filter: 'brightness(1.05) contrast(1.08) saturate(1.05)'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAcademy;