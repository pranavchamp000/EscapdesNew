import React, { useRef, useState } from 'react';
import { WORKSHOPS } from '../constants';
import { Calendar, Clock, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import WorkshopSelectionModal from './WorkshopSelectionModal';

const Workshops: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWorkshopId, setSelectedWorkshopId] = useState<string>('');

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      // Calculate dynamic width based on the first card
      const card = container.firstElementChild as HTMLElement;
      const cardWidth = card ? card.offsetWidth : 350;
      const gap = 24; // Tailwind gap-6 is 24px
      const scrollAmount = cardWidth + gap;

      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleBookSeat = (workshopId: string) => {
    setSelectedWorkshopId(workshopId);
    setIsModalOpen(true);
  };

  const handleProceed = (selectedIds: string[]) => {
    // TODO: Navigate to contact form with pre-selected workshops
    console.log('Selected workshop IDs:', selectedIds);
    // You can add navigation logic here to scroll to contact form
    // or pass the selected workshops to the contact form
  };

  return (
    <section id="workshops" className="py-24 bg-dark-900 relative overflow-hidden">
       {/* Decorative Background Element */}
       <div className="absolute top-0 right-0 w-1/3 h-full bg-dark-800/50 pointer-events-none skew-x-12 -mr-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal">
          <div>
            <h4 className="text-gold-500 text-xs tracking-widest uppercase mb-3">Short Courses</h4>
            <h2 className="text-4xl font-serif text-white">Weekend Workshops</h2>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
             <button 
                onClick={() => scroll('left')}
                className="p-3 border border-gray-700 text-white hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all duration-300 rounded-full active:scale-95"
                aria-label="Scroll left"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="p-3 border border-gray-700 text-white hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all duration-300 rounded-full active:scale-95"
                 aria-label="Scroll right"
              >
                <ChevronRight size={24} />
              </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-12 hide-scrollbar snap-x snap-mandatory scroll-smooth"
        >
          {WORKSHOPS.map((workshop) => (
            <div 
              key={workshop.id} 
              className="bg-white min-w-[300px] md:min-w-[350px] max-w-[350px] snap-start group overflow-hidden cursor-pointer hover:shadow-[0_20px_50px_rgba(197,160,89,0.15)] transition-all duration-500 reveal flex flex-col relative top-0 hover:-top-2"
            >
              <div className="aspect-[3/2] overflow-hidden relative shrink-0">
                <img 
                  src={workshop.image} 
                  alt={workshop.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className={`absolute top-0 left-0 ${workshop.status === 'upcoming' ? 'bg-green-600' : 'bg-red-600'} text-white text-center px-4 py-3 min-w-[90px] z-10 flex flex-col items-center justify-center`}>
                   {workshop.date.includes('/') ? (
                     <>
                       <span className="block text-lg font-serif leading-tight">{workshop.date.split(' ')[0]}</span>
                       <span className="text-[9px] uppercase tracking-wider block mt-0.5">{workshop.date.split(' ')[1]}</span>
                     </>
                   ) : (
                     <>
                       <span className="block text-lg font-serif leading-tight">{workshop.date.split(' ')[0].replace(/st|nd|rd|th/, '')}</span>
                       <span className="text-[9px] uppercase tracking-wider block mt-0.5">{workshop.date.split(' ')[1]}</span>
                     </>
                   )}
                </div>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
              </div>

              <div className="p-8 flex flex-col flex-grow bg-white">
                <h3 className="text-2xl font-serif text-dark-900 mb-3 group-hover:text-gold-600 transition-colors leading-tight">
                  {workshop.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-3 leading-relaxed font-sans">
                  {workshop.description}
                </p>
                
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <div className="flex flex-col gap-3 mb-6">
                    <div className="flex items-center gap-3 text-xs text-gray-500 uppercase tracking-wider">
                      <Calendar size={14} className="text-gold-600" />
                      {workshop.date}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-500 uppercase tracking-wider">
                      <Clock size={14} className="text-gold-600" />
                      {workshop.time}
                    </div>
                    {workshop.nextDate && (
                      <div className="flex items-center gap-3 text-xs text-gold-600 uppercase tracking-wider">
                        <Calendar size={14} className="text-gold-600" />
                        <span>Next: {workshop.nextDate}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xl text-dark-900 font-serif">{workshop.price}</span>
                    <button className="group/btn flex items-center gap-2 text-xs uppercase tracking-widest text-dark-900 hover:text-gold-600 transition-colors" onClick={() => handleBookSeat(workshop.id)}>
                      Book Seat <ArrowRight size={14} className="transform group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Workshop Selection Modal */}
      <WorkshopSelectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialWorkshopId={selectedWorkshopId}
        onProceed={handleProceed}
      />
    </section>
  );
};

export default Workshops;