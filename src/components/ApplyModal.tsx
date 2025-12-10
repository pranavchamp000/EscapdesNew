import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { WORKSHOPS } from '../constants';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApplyModal: React.FC<ApplyModalProps> = ({ isOpen, onClose }) => {
  const [courseInterest, setCourseInterest] = useState('');
  const [specificWorkshop, setSpecificWorkshop] = useState('');

  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300" 
        onClick={onClose}
      ></div>
      <div className="relative bg-white text-dark-900 w-full max-w-md p-8 md:p-10 shadow-2xl animate-fade-in-up rounded-sm z-10">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-dark-900 transition-colors"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-3xl font-serif mb-2">Apply Now</h2>
        <p className="text-gray-500 text-sm mb-8">Start your culinary journey with Escapades.</p>
        
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1">
            <label className="text-xs uppercase tracking-wider text-gray-500">Name</label>
            <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold-500 transition-colors" placeholder="Your Name" />
          </div>
          
          <div className="space-y-1">
             <label className="text-xs uppercase tracking-wider text-gray-500">Email</label>
            <input type="email" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold-500 transition-colors" placeholder="your@email.com" />
          </div>

          <div className="space-y-1">
             <label className="text-xs uppercase tracking-wider text-gray-500">Phone Number</label>
            <input type="tel" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold-500 transition-colors" placeholder="+91 98765 43210" />
          </div>

          <div className="space-y-1">
             <label className="text-xs uppercase tracking-wider text-gray-500">Interested Course</label>
             <select 
               value={courseInterest}
               onChange={(e) => {
                 setCourseInterest(e.target.value);
                 // Reset workshop selection when course changes
                 if (e.target.value !== 'workshop') {
                   setSpecificWorkshop('');
                 }
               }}
               className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold-500 transition-colors bg-transparent cursor-pointer"
             >
                <option value="" disabled>Select a course</option>
                <option value="diploma">8 Week Certification Course</option>
                <option value="weekend">Professional Weekend Program</option>
                <option value="workshop">Single Day Workshop</option>
             </select>
          </div>

          {/* Conditional Workshop Selection */}
          {courseInterest === 'workshop' && (
            <div className="space-y-1 animate-in fade-in duration-300">
               <label className="text-xs uppercase tracking-wider text-gray-500">Select Workshop</label>
               <select 
                 value={specificWorkshop}
                 onChange={(e) => setSpecificWorkshop(e.target.value)}
                 className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold-500 transition-colors bg-transparent cursor-pointer"
               >
                  <option value="" disabled>Select a workshop</option>
                  {WORKSHOPS.map((workshop) => (
                    <option key={workshop.id} value={workshop.id}>
                      {workshop.title}
                    </option>
                  ))}
               </select>
            </div>
          )}

          <div className="pt-4 flex items-start gap-3">
            <input type="checkbox" id="marketing-consent-modal" className="mt-1 accent-gold-500 w-4 h-4 cursor-pointer" />
            <label htmlFor="marketing-consent-modal" className="text-xs text-gray-500 leading-relaxed cursor-pointer select-none">
              I agree to the Terms & Conditions and understand that my information will be used for marketing purposes.
            </label>
          </div>

          <button className="w-full bg-dark-900 text-white uppercase tracking-widest py-4 hover:bg-gold-500 hover:text-white transition-all duration-300 mt-4">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyModal;