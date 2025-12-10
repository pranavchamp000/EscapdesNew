import image_7dd10edd2c532882e6fb7ee1e30b83686b9c6402 from 'figma:asset/5328a3716ac75276da7eaffb82eca551e018970e.png';
import image_971c954cad3de7122501290e8980eaf2487b88e7 from 'figma:asset/971c954cad3de7122501290e8980eaf2487b88e7.png';
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white text-dark-900 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 reveal">
            <h4 className="text-gold-500 text-xs tracking-widest uppercase mb-2">
              Meet the Founder and Academic Director
            </h4>
            <h2 className="text-4xl md:text-5xl font-serif text-dark-900 mb-6">
              Arundati Rao
            </h2>
            <blockquote className="text-xl md:text-2xl font-serif italic text-gray-600 border-l-4 border-gold-500 pl-6 mb-8 leading-relaxed">
              "Baking is not just about recipes; it's about passion, patience, and precision. I built Escapades to give aspiring baking entrepreneurs, home bakers and baking enthusiasts the professional edge they deserve."
            </blockquote>
            <p className="text-gray-600 font-sans leading-relaxed mb-8">
              Created by Arundati Rao, Escapades Baking Academy embodies the belief that baking is for everyone - a craft to be approached with curiosity, patience, and joy, not fear.
              Located at Raidurg, our world-class academy brings together rigorous training and a welcoming academy atmosphere where you can discover inspiration and build real baking skill.
            </p>
            
            <div className="flex gap-8">
              <div>
                <span className="block text-3xl font-serif text-gold-500">15+</span>
                <span className="text-xs uppercase tracking-wider text-gray-500 leading-none block">Years'</span>
                <span className="text-xs uppercase tracking-wider text-gray-500 leading-none block">Expertise</span>
              </div>
              <div>
                <span className="block text-3xl font-serif text-gold-500">C&G</span>
                <span className="text-xs uppercase tracking-wider text-gray-500 leading-none block">City & Guilds</span>
                <span className="text-xs uppercase tracking-wider text-gray-500 leading-none block">Certified</span>
              </div>
              <div>
                <span className="block text-3xl font-serif text-gold-500">100%</span>
                <span className="text-xs uppercase tracking-wider text-gray-500 leading-none block">Fully</span>
                <span className="text-xs uppercase tracking-wider text-gray-500 leading-none block">Hands-On</span>
              </div>
              <div>
                <span className="block text-3xl font-serif text-gold-500">1,000+</span>
                <span className="text-xs uppercase tracking-wider text-gray-500 leading-none block">Students</span>
                <span className="text-xs uppercase tracking-wider text-gray-500 leading-none block">Trained</span>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2 relative order-1 lg:order-2 reveal">
            <div className="relative">
              <img 
                src={image_7dd10edd2c532882e6fb7ee1e30b83686b9c6402} 
                alt="Arundati Rao" 
                className="w-full h-[600px] object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 shadow-xl"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;