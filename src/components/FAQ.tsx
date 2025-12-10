import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'8-week' | 'weekend' | 'general'>('8-week');

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Group FAQs by category
  const certificationFAQs = FAQS.filter(faq => faq.category === '8-week');
  const weekendFAQs = FAQS.filter(faq => faq.category === 'weekend');
  const generalFAQs = FAQS.filter(faq => faq.category === 'general');

  const getCurrentFAQs = () => {
    switch (activeTab) {
      case '8-week':
        return certificationFAQs;
      case 'weekend':
        return weekendFAQs;
      case 'general':
        return generalFAQs;
      default:
        return certificationFAQs;
    }
  };

  const currentFAQs = getCurrentFAQs();

  return (
    <section id="faq" className="py-24 bg-[#f8f5f2]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          
          <div className="md:w-1/3 reveal">
             <h4 className="text-gold-600 text-xs tracking-widest uppercase mb-3">Support</h4>
             <h2 className="text-4xl font-serif text-dark-900 mb-6">Common Questions</h2>
             <p className="text-gray-600 mb-8 leading-relaxed">
               Can't find what you're looking for? Reach out to our team directly.
             </p>
             <button className="bg-dark-900 text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-gold-600 transition-colors">
               Contact Us
             </button>
          </div>

          <div className="md:w-2/3 reveal">
            {/* Tab Navigation */}
            <div className="flex gap-2 mb-8 border-b border-gray-200">
              <button
                onClick={() => {
                  setActiveTab('8-week');
                  setOpenIndex(null);
                }}
                className={`pb-4 px-4 text-sm tracking-wide transition-all relative ${
                  activeTab === '8-week' 
                    ? 'text-gold-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                8 Week Certification
                {activeTab === '8-week' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-600"></div>
                )}
              </button>
              <button
                onClick={() => {
                  setActiveTab('weekend');
                  setOpenIndex(null);
                }}
                className={`pb-4 px-4 text-sm tracking-wide transition-all relative ${
                  activeTab === 'weekend' 
                    ? 'text-gold-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Weekend Program
                {activeTab === 'weekend' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-600"></div>
                )}
              </button>
              <button
                onClick={() => {
                  setActiveTab('general');
                  setOpenIndex(null);
                }}
                className={`pb-4 px-4 text-sm tracking-wide transition-all relative ${
                  activeTab === 'general' 
                    ? 'text-gold-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                General
                {activeTab === 'general' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-600"></div>
                )}
              </button>
            </div>

            {/* FAQ Content */}
            <div className="divide-y divide-gray-200">
              {currentFAQs.map((faq, index) => (
                <div key={index} className="bg-transparent">
                  <button 
                    onClick={() => toggle(index)}
                    className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
                  >
                    <span className={`font-serif text-lg pr-4 ${openIndex === index ? 'text-gold-600' : 'text-dark-900'} group-hover:text-gold-600 transition-colors`}>
                      {faq.question}
                    </span>
                    <span className="text-gray-400 group-hover:text-gold-600 flex-shrink-0">
                      {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-gray-600 font-sans text-sm leading-relaxed pr-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;