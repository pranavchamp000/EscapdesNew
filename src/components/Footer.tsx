import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import logo from 'figma:asset/4c5765b4acb27f9d3266e73bf12d5e2d623e299e.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-500 pt-16 pb-8 border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Brand */}
          <div className="reveal">
             <div className="flex flex-col items-start md:items-start">
               <img 
                 src={logo} 
                 alt="Escapades Culinary Academy" 
                 className="h-12 w-auto object-contain mb-4"
               />
               <p className="text-xs uppercase tracking-widest text-gold-500 mb-4">Culinary Academy Hyderabad</p>
               <p className="text-sm leading-relaxed text-gray-400 mb-6">
                 Hyderabad's premier baking academy offering professional diplomas and specialized workshops.
               </p>
             </div>
             <div className="flex gap-4">
              <a href="https://www.instagram.com/escapadesculinarystudio/" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors"><Instagram size={20} /></a>
              <a href="https://www.facebook.com/escapadesculinarystudio/" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors"><Facebook size={20} /></a>
              <a href="https://www.youtube.com/@escapadesculinarystudio2623" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="reveal">
            <h4 className="text-white uppercase tracking-widest text-sm mb-6">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-gold-500 transition-colors">About Us</a></li>
              <li><a href="#courses" className="hover:text-gold-500 transition-colors">Diploma Courses</a></li>
              <li><a href="#workshops" className="hover:text-gold-500 transition-colors">Masterclasses</a></li>
              <li><a href="#blog" className="hover:text-gold-500 transition-colors">Baking Blog</a></li>
            </ul>
          </div>

           {/* Contact */}
           <div className="reveal">
            <h4 className="text-white uppercase tracking-widest text-sm mb-6">Visit Us</h4>
            <address className="not-italic text-sm text-gray-400 leading-relaxed mb-4">
              Second floor, Silver Cloud Complex, Maram Infra Projects,<br/>
              2A, Shaikpet, Rai Durg,<br/>
              Hyderabad, Telangana 500104
            </address>
            <p className="text-sm text-gray-400">
              <span className="block text-gold-500">Call Us:</span>
              +91 95592 00255
            </p>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; 2025 Escapades Culinary Academy. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;