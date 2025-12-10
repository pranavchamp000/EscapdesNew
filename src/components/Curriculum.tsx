import React, { useState } from 'react';
import { CURRICULUM, WEEKEND_CURRICULUM } from '../constants';
import { Plus, Minus } from 'lucide-react';
import { getCurriculumIcon, getWeekendCurriculumIcon } from './CurriculumIcons';

const Curriculum: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'8-week' | 'weekend'>('8-week');

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleTabChange = (tab: '8-week' | 'weekend') => {
    setActiveTab(tab);
    setOpenIndex(0); // Reset to first item when switching tabs
  };

  const currentCurriculum = activeTab === '8-week' ? CURRICULUM : WEEKEND_CURRICULUM;
  const getIconForModule = activeTab === '8-week' ? getCurriculumIcon : getWeekendCurriculumIcon;

  return (
    <section id="curriculum" className="py-24 bg-[#f8f5f2]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12 reveal">
          <h4 className="text-gold-600 text-xs tracking-widest uppercase mb-3">What You Will Learn at Escapades</h4>
          <h2 className="text-4xl md:text-5xl font-serif text-dark-900">Curriculum Overview</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Two distinct professional pathways, each designed to transform your baking journey with hands-on training and expert guidance
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10 reveal">
          <div className="inline-flex bg-white border border-gray-200 p-1.5">
            <button
              onClick={() => handleTabChange('8-week')}
              className={`px-8 py-3 text-sm transition-all duration-300 ${
                activeTab === '8-week'
                  ? 'bg-gold-600 text-white'
                  : 'text-gray-600 hover:text-gold-600'
              }`}
            >
              8 Week Certification
            </button>
            <button
              onClick={() => handleTabChange('weekend')}
              className={`px-8 py-3 text-sm transition-all duration-300 ${
                activeTab === 'weekend'
                  ? 'bg-gold-600 text-white'
                  : 'text-gray-600 hover:text-gold-600'
              }`}
            >
              Professional Weekend Program
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {currentCurriculum.map((module, index) => {
            const IconComponent = getIconForModule(module.id);
            
            return (
              <div 
                key={module.id} 
                className="bg-white border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md reveal"
              >
                <button 
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center p-5 text-left focus:outline-none group"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`flex-shrink-0 transition-colors duration-300 ${
                      openIndex === index ? 'text-gold-600' : 'text-gold-500/60 group-hover:text-gold-600'
                    }`}>
                      <IconComponent className="w-7 h-7 md:w-8 md:h-8" />
                    </div>
                    <span className={`font-serif text-lg md:text-xl transition-colors duration-300 ${
                      openIndex === index ? 'text-gold-600' : 'text-gray-800 group-hover:text-gold-600'
                    }`}>
                      {module.title}
                    </span>
                  </div>
                  <span className="text-gold-600 flex-shrink-0 ml-4">
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-5 pt-0 text-gray-600 font-sans leading-relaxed border-t border-dashed border-gray-100 mt-2">
                    {module.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;