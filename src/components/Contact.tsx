import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { WORKSHOPS } from '../constants';

const Contact: React.FC = () => {
  const [courseInterest, setCourseInterest] = useState('');

  return (
    <section id="contact" className="bg-gray-50 text-dark-900 flex flex-col md:flex-row">
      {/* Map Side (Replaced Image) */}
      <div className="w-full md:w-1/2 min-h-[400px] md:min-h-screen relative bg-gray-200">
         <iframe 
           src="https://maps.google.com/maps?q=Escapades+Culinary+Studio+Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
           className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
           style={{ border: 0 }}
           allowFullScreen={true}
           loading="lazy"
           referrerPolicy="no-referrer-when-downgrade"
           title="Escapades Culinary Studio Location"
         ></iframe>
         {/* Gradient Overlay for better blending at bottom */}
         <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none"></div>
         
         <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
            <div className="bg-white/95 backdrop-blur-md p-6 border-l-2 border-gold-500 shadow-lg">
              <h2 className="text-2xl font-serif mb-1 text-dark-900">ESCAPADES</h2>
              <p className="text-[10px] tracking-widest uppercase text-gold-500">Culinary Academy Hyderabad</p>
            </div>
         </div>
      </div>

      {/* Form Side */}
      <div className="w-full md:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-white">
        <h2 className="text-4xl font-serif mb-4 reveal">Begin Your Journey</h2>
        <p className="text-gray-600 mb-12 font-sans reveal">
          Visit us or send an inquiry to start your culinary adventure.
        </p>

        <div className="space-y-6 mb-12 reveal">
          <div className="flex items-start gap-4 text-gray-700">
            <MapPin className="text-gold-500 mt-1 flex-shrink-0" size={20} />
            <p className="text-sm leading-relaxed">Second floor, Silver Cloud Complex, Maram Infra Projects,<br/> 2A, Shaikpet, Rai Durg, Hyderabad, Telangana 500104</p>
          </div>
          <div className="flex items-center gap-4 text-gray-700">
            <Phone className="text-gold-500 flex-shrink-0" size={20} />
            <p className="text-sm">+91 95592 00255</p>
          </div>
          <div className="flex items-center gap-4 text-gray-700">
            <Mail className="text-gold-500 flex-shrink-0" size={20} />
            <p className="text-sm">info@escapadesbaking.academy</p>
          </div>
        </div>

        <form className="space-y-6 reveal" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full bg-white border-b border-gray-300 text-dark-900 px-0 py-3 focus:outline-none focus:border-gold-500 transition-colors placeholder-gray-400"
            />
          </div>
          <div className="space-y-1">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full bg-white border-b border-gray-300 text-dark-900 px-0 py-3 focus:outline-none focus:border-gold-500 transition-colors placeholder-gray-400"
            />
          </div>
           <div className="space-y-1">
            <input 
              type="tel" 
              placeholder="Your Phone Number" 
              className="w-full bg-white border-b border-gray-300 text-dark-900 px-0 py-3 focus:outline-none focus:border-gold-500 transition-colors placeholder-gray-400"
            />
          </div>
          <div className="space-y-1">
            <select 
              value={courseInterest}
              onChange={(e) => setCourseInterest(e.target.value)}
              className="w-full bg-white border-b border-gray-300 text-gray-600 px-0 py-3 focus:outline-none focus:border-gold-500 transition-colors cursor-pointer"
            >
              <option value="" disabled>Select Course Interest</option>
              <option value="diploma">8 Week Certification Course</option>
              <option value="weekend">Professional Weekend Program</option>
              <option value="workshop">Single Day Workshop</option>
            </select>
          </div>

          {/* Conditional Workshop Selection */}
          {courseInterest === 'workshop' && (
            <div className="space-y-1 animate-in fade-in duration-300">
              <select 
                defaultValue=""
                className="w-full bg-white border-b border-gray-300 text-gray-600 px-0 py-3 focus:outline-none focus:border-gold-500 transition-colors cursor-pointer"
              >
                <option value="" disabled>Select Workshop</option>
                {WORKSHOPS.map((workshop) => (
                  <option key={workshop.id} value={workshop.id}>
                    {workshop.title}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="pt-2 flex items-start gap-3">
            <input type="checkbox" id="marketing-consent-contact" className="mt-1 accent-gold-500 w-4 h-4 cursor-pointer" />
            <label htmlFor="marketing-consent-contact" className="text-xs text-gray-500 leading-relaxed cursor-pointer select-none">
              I agree to the Terms & Conditions and understand that my information will be used for marketing purposes.
            </label>
          </div>
          
          <button className="w-full bg-dark-900 text-white uppercase tracking-widest py-4 hover:bg-gold-500 hover:text-white transition-all duration-300 mt-8">
            Request Call Back
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;