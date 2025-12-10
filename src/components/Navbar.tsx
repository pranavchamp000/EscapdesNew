import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import shortLogo from 'figma:asset/89808a90aae33ad673dfc296d28032c7217aa2f2.png';
import { Link } from 'react-scroll';

interface NavbarProps {
  onApplyClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onApplyClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About', 'Courses', 'Curriculum', 'Workshops', 'Team', 'Student Showcase', 'Reviews', 'Contact'];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-900/95 backdrop-blur-sm py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center gap-2">
           <Link to="home" smooth={true} duration={500} className="flex items-center cursor-pointer">
            <img 
              src={shortLogo} 
              alt="Escapades Culinary Academy" 
              className="h-12 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="text-xs font-sans tracking-wide text-gray-200 hover:text-gold-500 transition-colors uppercase"
            >
              {link}
            </a>
          ))}
          <button 
            onClick={onApplyClick}
            className="bg-gold-500 hover:bg-gold-600 text-black py-2 px-6 rounded-sm text-xs tracking-widest transition-transform hover:scale-105"
          >
            APPLY NOW
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-900 border-t border-gray-800">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 hover:text-gold-500 font-sans uppercase tracking-wider text-sm"
              >
                {link}
              </a>
            ))}
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                onApplyClick();
              }}
              className="bg-gold-500 text-black py-3 w-full mt-4"
            >
              APPLY NOW
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;