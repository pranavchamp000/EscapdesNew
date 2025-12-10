import React, { useState, useEffect } from 'react';
import { WORKSHOPS } from '../constants';
import { X, Check, ArrowLeft, Send } from 'lucide-react';

interface WorkshopSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialWorkshopId: string;
  onProceed: (selectedIds: string[]) => void;
}

interface UserDetails {
  name: string;
  phone: string;
  email: string;
  programInterest: string;
  specificWorkshop?: string;
}

const WorkshopSelectionModal: React.FC<WorkshopSelectionModalProps> = ({
  isOpen,
  onClose,
  initialWorkshopId,
  onProceed
}) => {
  const [selectedWorkshopIds, setSelectedWorkshopIds] = useState<string[]>([initialWorkshopId]);
  const [step, setStep] = useState<'selection' | 'form'>('selection');
  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: '',
    phone: '',
    email: '',
    programInterest: '',
    specificWorkshop: ''
  });
  const [errors, setErrors] = useState<Partial<UserDetails>>({});

  // Add new workshop to selection when modal opens, and reset form step
  useEffect(() => {
    if (isOpen && initialWorkshopId) {
      // Add the clicked workshop to selection if not already present
      setSelectedWorkshopIds(prev => {
        if (!prev.includes(initialWorkshopId)) {
          return [initialWorkshopId, ...prev];
        }
        // If already selected, move it to the front
        return [initialWorkshopId, ...prev.filter(id => id !== initialWorkshopId)];
      });
      setStep('selection');
      setUserDetails({ name: '', phone: '', email: '', programInterest: '', specificWorkshop: '' });
      setErrors({});
    }
  }, [isOpen, initialWorkshopId]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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

  const toggleWorkshop = (workshopId: string) => {
    setSelectedWorkshopIds(prev => {
      if (prev.includes(workshopId)) {
        return prev.filter(id => id !== workshopId);
      } else {
        return [...prev, workshopId];
      }
    });
  };

  const handleProceed = () => {
    onProceed(selectedWorkshopIds);
    onClose();
  };

  const handleContinueToForm = () => {
    setStep('form');
  };

  const validateForm = () => {
    const newErrors: Partial<UserDetails> = {};
    
    if (!userDetails.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!userDetails.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(userDetails.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!userDetails.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userDetails.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!userDetails.programInterest.trim()) {
      newErrors.programInterest = 'Program interest is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // TODO: Send data to backend or email service
      console.log('Workshop Booking:', {
        workshops: selectedWorkshopIds,
        userDetails
      });
      // Clear selection after successful submission
      setSelectedWorkshopIds([]);
      handleProceed();
    }
  };

  const handleInputChange = (field: keyof UserDetails, value: string) => {
    setUserDetails(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (!isOpen) return null;

  const selectedWorkshops = selectedWorkshopIds
    .map(id => WORKSHOPS.find(w => w.id === id))
    .filter(Boolean);

  const availableWorkshops = WORKSHOPS.filter(w => !selectedWorkshopIds.includes(w.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white w-full max-w-5xl max-h-[85vh] overflow-hidden shadow-2xl animate-scale-in">
        {step === 'selection' ? (
          <>
            {/* Header */}
            <div className="relative border-b border-gray-200 px-8 py-6 bg-[#f8f5f2]">
              <h3 className="text-2xl font-serif text-dark-900">Select Your Workshops</h3>
              <p className="text-sm text-gray-600 mt-1 font-sans">Choose one or multiple workshops to reserve your seat</p>
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-gray-400 hover:text-gold-600 transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content - Split View */}
            <div className="flex flex-col md:flex-row h-[calc(85vh-180px)]">
              {/* Left Panel - Your Selection (60%) */}
              <div className="md:w-[60%] border-b md:border-b-0 md:border-r border-gray-200 p-8 overflow-y-auto bg-white">
                <h4 className="text-sm uppercase tracking-widest text-gold-600 mb-4 font-semibold">Your Selection</h4>
                
                {selectedWorkshops.length === 0 ? (
                  <div className="flex items-center justify-center h-64 text-gray-400">
                    <p className="font-sans">No workshops selected</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {selectedWorkshops.map((workshop) => (
                      <div 
                        key={workshop!.id}
                        className="group relative bg-white border-2 border-gold-500 overflow-hidden transition-all duration-300 hover:shadow-lg"
                      >
                        {/* Checkmark Badge */}
                        <div className="absolute top-4 right-4 z-10 bg-gold-500 rounded-full p-1.5">
                          <Check size={16} className="text-white" />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                          {/* Thumbnail */}
                          <div className="sm:w-48 aspect-[3/2] overflow-hidden shrink-0 relative">
                            <img 
                              src={workshop!.image} 
                              alt={workshop!.title}
                              className="w-full h-full object-cover"
                            />
                            {/* Date Badge */}
                            <div className={`absolute top-0 left-0 ${workshop!.status === 'upcoming' ? 'bg-green-600' : 'bg-red-600'} text-white text-center px-3 py-2 min-w-[70px] z-10 flex flex-col items-center justify-center`}>
                              {workshop!.date.includes('/') ? (
                                <>
                                  <span className="block text-sm font-serif leading-tight">{workshop!.date.split(' ')[0]}</span>
                                  <span className="text-[8px] uppercase tracking-wider block mt-0.5">{workshop!.date.split(' ')[1]}</span>
                                </>
                              ) : (
                                <>
                                  <span className="block text-sm font-serif leading-tight">{workshop!.date.split(' ')[0].replace(/st|nd|rd|th/, '')}</span>
                                  <span className="text-[8px] uppercase tracking-wider block mt-0.5">{workshop!.date.split(' ')[1]}</span>
                                </>
                              )}
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1 p-4 flex flex-col justify-between">
                            <div>
                              <h5 className="text-xl font-serif text-dark-900 mb-2">{workshop!.title}</h5>
                              <p className="text-xs text-gray-500 mb-2 font-sans">{workshop!.date} • {workshop!.time}</p>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-lg font-serif text-dark-900">{workshop!.price}</span>
                              <button
                                onClick={() => toggleWorkshop(workshop!.id)}
                                className="text-xs uppercase tracking-wider text-red-600 hover:text-red-700 transition-colors font-sans"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Panel - Add More (40%) */}
              <div className="md:w-[40%] p-8 overflow-y-auto bg-[#fafaf8]">
                <h4 className="text-sm uppercase tracking-widest text-dark-900 mb-4 font-semibold animate-gentle-pulse">
                  Add More Workshops <span className="text-gray-500">(Optional)</span>
                </h4>
                
                {availableWorkshops.length === 0 ? (
                  <div className="flex items-center justify-center h-64 text-gray-400">
                    <p className="text-sm font-sans">All workshops selected</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {availableWorkshops.map((workshop) => (
                      <div
                        key={workshop.id}
                        onClick={() => toggleWorkshop(workshop.id)}
                        className="cursor-pointer bg-white border border-gray-200 hover:border-gold-500 transition-all duration-300 overflow-hidden group hover:shadow-md"
                      >
                        <div className="aspect-[3/2] overflow-hidden relative">
                          <img 
                            src={workshop.image} 
                            alt={workshop.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          {/* Date Badge */}
                          <div className={`absolute top-0 left-0 ${workshop.status === 'upcoming' ? 'bg-green-600' : 'bg-red-600'} text-white text-center px-2.5 py-2 min-w-[60px] z-10 flex flex-col items-center justify-center`}>
                            {workshop.date.includes('/') ? (
                              <>
                                <span className="block text-xs font-serif leading-tight">{workshop.date.split(' ')[0]}</span>
                                <span className="text-[7px] uppercase tracking-wider block mt-0.5">{workshop.date.split(' ')[1]}</span>
                              </>
                            ) : (
                              <>
                                <span className="block text-xs font-serif leading-tight">{workshop.date.split(' ')[0].replace(/st|nd|rd|th/, '')}</span>
                                <span className="text-[7px] uppercase tracking-wider block mt-0.5">{workshop.date.split(' ')[1]}</span>
                              </>
                            )}
                          </div>
                        </div>
                        <div className="p-4">
                          <h5 className="font-serif text-dark-900 mb-1 group-hover:text-gold-600 transition-colors leading-tight">{workshop.title}</h5>
                          <p className="text-xs text-gray-500 font-sans">{workshop.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 px-8 py-5 bg-white flex items-center justify-between">
              <p className="text-sm text-gray-600 font-sans">
                {selectedWorkshops.length} workshop{selectedWorkshops.length !== 1 ? 's' : ''} selected
              </p>
              <button
                onClick={handleContinueToForm}
                disabled={selectedWorkshops.length === 0}
                className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 text-xs uppercase tracking-widest transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gold-500"
              >
                Continue with {selectedWorkshops.length} Workshop{selectedWorkshops.length !== 1 ? 's' : ''}
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Header - Form Step */}
            <div className="relative border-b border-gray-200 px-8 py-6 bg-[#f8f5f2]">
              <button
                onClick={() => setStep('selection')}
                className="absolute top-6 left-6 text-gray-600 hover:text-gold-600 transition-colors flex items-center gap-2"
                aria-label="Go back"
              >
                <ArrowLeft size={20} />
                <span className="text-xs uppercase tracking-wider font-sans">Back</span>
              </button>
              <h3 className="text-2xl font-serif text-dark-900 text-center">Your Contact Details</h3>
              <p className="text-sm text-gray-600 mt-1 font-sans text-center">We{"'"}ll reach out to confirm your booking</p>
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-gray-400 hover:text-gold-600 transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content - Form */}
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row h-[calc(85vh-180px)]">
              {/* Left Panel - Selected Workshops Summary (40%) */}
              <div className="md:w-[40%] border-b md:border-b-0 md:border-r border-gray-200 p-8 overflow-y-auto bg-[#fafaf8]">
                <h4 className="text-xs uppercase tracking-widest text-gold-600 mb-4">Booking Summary</h4>
                <div className="space-y-3">
                  {selectedWorkshops.map((workshop) => (
                    <div 
                      key={workshop!.id}
                      className="bg-white border border-gold-300 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="bg-gold-500 rounded-full p-1 shrink-0">
                          <Check size={12} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-serif text-dark-900 mb-1 leading-tight">{workshop!.title}</h5>
                          <p className="text-xs text-gray-500 font-sans">{workshop!.date}</p>
                          <p className="text-sm text-dark-900 font-serif mt-2">{workshop!.price}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-xs uppercase tracking-wider text-gray-600 font-sans">Total Workshops</span>
                    <span className="text-xl font-serif text-dark-900">{selectedWorkshops.length}</span>
                  </div>
                </div>
              </div>

              {/* Right Panel - Contact Form (60%) */}
              <div className="md:w-[60%] p-8 overflow-y-auto bg-white">
                <h4 className="text-xs uppercase tracking-widest text-gray-600 mb-6 font-sans">Personal Information</h4>
                
                <div className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm text-dark-900 mb-2 font-sans">
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={userDetails.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-gold-500 transition-colors font-sans`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="text-xs text-red-600 mt-1 font-sans">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="block text-sm text-dark-900 mb-2 font-sans">
                      Phone Number <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={userDetails.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-gold-500 transition-colors font-sans`}
                      placeholder="Enter your 10-digit phone number"
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-600 mt-1 font-sans">{errors.phone}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm text-dark-900 mb-2 font-sans">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={userDetails.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-gold-500 transition-colors font-sans`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600 mt-1 font-sans">{errors.email}</p>
                    )}
                  </div>

                  {/* Program Interest Field */}
                  <div>
                    <label htmlFor="programInterest" className="block text-sm text-dark-900 mb-2 font-sans">
                      Program Interest <span className="text-red-600">*</span>
                    </label>
                    <select
                      id="programInterest"
                      value={userDetails.programInterest}
                      onChange={(e) => handleInputChange('programInterest', e.target.value)}
                      className={`w-full px-4 py-3 border ${errors.programInterest ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-gold-500 transition-colors font-sans cursor-pointer ${!userDetails.programInterest ? 'text-gray-400' : 'text-dark-900'}`}
                    >
                      <option value="" disabled>Select Program Interest</option>
                      <option value="diploma">8 Week Certification Course</option>
                      <option value="weekend">Professional Weekend Program</option>
                      <option value="workshop">Single Day Workshop</option>
                    </select>
                    {errors.programInterest && (
                      <p className="text-xs text-red-600 mt-1 font-sans">{errors.programInterest}</p>
                    )}
                  </div>

                  {/* Conditional Workshop Selection */}
                  {userDetails.programInterest === 'workshop' && (
                    <div className="animate-in fade-in duration-300">
                      <label htmlFor="specificWorkshop" className="block text-sm text-dark-900 mb-2 font-sans">
                        Select Specific Workshop <span className="text-red-600">*</span>
                      </label>
                      <select
                        id="specificWorkshop"
                        value={userDetails.specificWorkshop || ''}
                        onChange={(e) => handleInputChange('specificWorkshop', e.target.value)}
                        className={`w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gold-500 transition-colors font-sans cursor-pointer ${!userDetails.specificWorkshop ? 'text-gray-400' : 'text-dark-900'}`}
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

                  {/* Info Note */}
                  <div className="bg-gold-50 border border-gold-200 p-4 mt-8">
                    <p className="text-xs text-gray-700 font-sans leading-relaxed">
                      <strong className="text-dark-900">Note:</strong> Our team will contact you within 24 hours to confirm your seat and provide payment details. Please ensure your contact information is accurate.
                    </p>
                  </div>
                </div>
              </div>
            </form>

            {/* Footer - Form Step */}
            <div className="border-t border-gray-200 px-8 py-5 bg-white flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep('selection')}
                className="text-xs uppercase tracking-wider text-gray-600 hover:text-gold-600 transition-colors flex items-center gap-2 font-sans"
              >
                <ArrowLeft size={14} />
                Edit Selection
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 text-xs uppercase tracking-widest transition-all flex items-center gap-2"
              >
                Reserve My Seat <Send size={14} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WorkshopSelectionModal;