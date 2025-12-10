import React, { useState } from 'react';
import { COURSES } from '../constants';
import { CheckCircle, ArrowRight, Calendar } from 'lucide-react';
import EnquiryModal from './EnquiryModal';

const Courses: React.FC = () => {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState('');

  const handleEnquireClick = (courseId: string) => {
    setSelectedCourseId(courseId);
    setIsEnquiryModalOpen(true);
  };

  return (
    <section id="courses" className="py-24 bg-dark-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h4 className="text-gold-500 text-xs tracking-widest uppercase mb-3">Our Programs</h4>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Choose Your Path</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {COURSES.map((course) => (
            <div key={course.id} className="bg-dark-700 group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full border border-gray-800 hover:border-gold-500/30 reveal">
              {/* Image Header */}
              <div className="relative overflow-hidden aspect-[5/4]">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                {course.isPopular && (
                  <div className="absolute top-4 right-4 bg-gold-500 text-black text-xs px-3 py-1 uppercase tracking-wide">
                    Most Popular
                  </div>
                )}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-dark-900 to-transparent">
                   <h3 className="text-2xl font-serif">{course.title}</h3>
                   <p className="text-gray-300 text-xs uppercase tracking-wider mt-1">{course.subtitle}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-grow flex flex-col">
                <p className="text-gray-400 mb-8 leading-relaxed font-sans text-sm">
                  {course.description}
                </p>

                <div className="space-y-3 mb-8 flex-grow">
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-gold-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Next Batch */}
                {course.nextBatch && (
                  <div className="mb-6 bg-dark-800 border border-gold-500/20 p-4 rounded-sm">
                    <div className="flex items-center gap-3">
                      <Calendar size={18} className="text-gold-500 flex-shrink-0" />
                      <div>
                        <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">Next Batch Starts On</p>
                        <p className="text-gold-400 font-serif">{course.nextBatch}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="pt-6 border-t border-gray-700 mt-auto">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Investment</p>
                      <p className="text-2xl font-serif text-white">{course.price}</p>
                    </div>
                    <button className="flex items-center gap-2 text-gold-500 text-sm uppercase tracking-widest hover:text-white transition-colors" onClick={() => handleEnquireClick(course.id)}>
                      Enquire Now <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <EnquiryModal isOpen={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} courseId={selectedCourseId} />
    </section>
  );
};

export default Courses;