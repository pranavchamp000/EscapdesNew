import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseId?: string;
}

const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose, courseId }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skillLevel: ''
  });

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Enquiry submitted:', formData);
    // Handle form submission logic here
    onClose();
    setFormData({ name: '', email: '', phone: '', skillLevel: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-5xl bg-white rounded-sm shadow-2xl overflow-hidden max-h-[90vh] flex flex-col md:flex-row animate-fadeIn border border-gold-500/10">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 text-gray-600 hover:text-gold-500 transition-colors bg-white/90 backdrop-blur-sm rounded-full p-2"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Left Side - Quote Panel (40%) */}
        <div className="hidden md:flex md:w-2/5 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden items-center justify-center p-12 border-r border-gold-500/10">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gold-500/10 rounded-full -translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-gold-500/10 rounded-full translate-x-20 translate-y-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gold-500/5 to-transparent"></div>
          
          {/* Dynamic Quote based on courseId */}
          {courseId === 'diploma' ? (
            <div className="relative z-10 text-center">
              <div className="mb-6">
                <span className="text-gold-500 text-6xl font-serif leading-none">&ldquo;</span>
              </div>
              <p className="text-white text-2xl md:text-3xl font-serif leading-relaxed mb-8 italic">
                Where flour meets
                <br />
                passion, magic
                <br />
                happens
              </p>
              <div className="w-16 h-px bg-gold-500/50 mx-auto"></div>
            </div>
          ) : (
            <div className="relative z-10 text-center">
              <div className="mb-6">
                <span className="text-gold-500 text-6xl font-serif leading-none">&ldquo;</span>
              </div>
              <p className="text-white text-2xl md:text-3xl font-serif leading-relaxed mb-8 italic">
                Baking is love
                <br />
                made visible
              </p>
              <div className="w-16 h-px bg-gold-500/50 mx-auto"></div>
            </div>
          )}
        </div>

        {/* Right Side - Form (60%) */}
        <div className="flex-1 md:w-3/5 overflow-y-auto">
          <div className="p-8 md:p-12">
            {/* Heading */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-serif text-dark-900 mb-3">
                Begin Your Baking Journey
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Tell us about yourself and we'll guide you to the perfect program
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm text-gray-700 mb-2 uppercase tracking-wider">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gold-500 transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm text-gray-700 mb-2 uppercase tracking-wider">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gold-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm text-gray-700 mb-2 uppercase tracking-wider">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gold-500 transition-colors"
                  placeholder="10-digit mobile number"
                />
              </div>

              {/* Skill Level */}
              <div>
                <label htmlFor="skillLevel" className="block text-sm text-gray-700 mb-2 uppercase tracking-wider">
                  Your Skill Level *
                </label>
                <select
                  id="skillLevel"
                  name="skillLevel"
                  value={formData.skillLevel}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gold-500 transition-colors bg-white"
                >
                  <option value="">Select your skill level</option>
                  <option value="newbie">Newbie - Never baked before</option>
                  <option value="beginner">Beginner - Some home baking experience</option>
                  <option value="intermediate">Intermediate - Regular home baker</option>
                  <option value="expert">Expert - Professional or advanced skills</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gold-500 text-white py-4 rounded-sm hover:bg-gold-600 transition-colors uppercase tracking-widest text-sm font-medium"
              >
                Send Enquiry
              </button>
            </form>

            {/* Additional Info */}
            <p className="text-xs text-gray-500 text-center mt-6">
              Our team will reach out to you within 24 hours to discuss the best program for your goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryModal;