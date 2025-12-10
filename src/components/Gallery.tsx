import React, { useCallback, useEffect } from 'react';
import { Instagram, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { freshImage1, freshImage2, freshImage3, freshImage4, freshImage5, freshImage6, freshImage8, freshImage9, freshImage10, freshImage11, freshImage13, freshImage14, freshImage15, freshImage16, freshImage17, freshImage18 } from '../constants';

// Gallery images array
const images = [
  { type: 'image', src: freshImage1, alt: "Students kneading dough at Escapades Culinary Academy" },
  { type: 'image', src: freshImage2, alt: "Hands shaping fresh dough - learning in action" },
  { type: 'image', src: freshImage3, alt: "Freshly proofed dough balls ready for baking" },
  { type: 'image', src: freshImage4, alt: "Chocolate cake with fresh fruit garnish" },
  { type: 'image', src: freshImage5, alt: "Classic white cake with cherry decoration" },
  { type: 'image', src: freshImage6, alt: "Layered chocolate pastry with mirror glaze" },
  { type: 'image', src: freshImage8, alt: "Multi-grain seeded bread in baking pan" },
  { type: 'image', src: freshImage9, alt: "Gourmet cupcakes with decorative frosting" },
  { type: 'image', src: freshImage10, alt: "Seeded bagel with cinnamon roll on newspaper" },
  { type: 'image', src: freshImage11, alt: "Golden braided bread with herb sauce" },
  { type: 'image', src: freshImage13, alt: "Turquoise fondant cake with yellow pinwheel and number 3" },
  { type: 'image', src: freshImage14, alt: "Tiered celebration cake with fondant teddy bear and balloons" },
  { type: 'image', src: freshImage15, alt: "Fondant teddy bear cake topper with colorful balloons" },
  { type: 'image', src: freshImage16, alt: "Golden yellow macarons with white filling on marble plate" },
  { type: 'image', src: freshImage17, alt: "Chocolate ganache being poured over mini dessert on cooling rack" },
  { type: 'image', src: freshImage18, alt: "Layered chocolate opera cake with mirror glaze" },
];

// Duplicate images for smoother infinite loop
const duplicatedImages = [...images, ...images];

const Gallery: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      skipSnaps: false,
      dragFree: false,
      containScroll: 'trimSnaps',
      duration: 25,
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 2000, stopOnInteraction: false, jump: false })]
  );

  // Pause autoplay on hover
  const onMouseEnter = useCallback(() => {
    if (emblaApi) emblaApi.plugins().autoplay?.stop();
  }, [emblaApi]);

  const onMouseLeave = useCallback(() => {
    if (emblaApi) emblaApi.plugins().autoplay?.play();
  }, [emblaApi]);

  // Navigation functions
  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      const autoplay = emblaApi.plugins().autoplay;
      if (autoplay) {
        autoplay.stop();
        emblaApi.scrollPrev();
        setTimeout(() => autoplay.play(), 1000);
      } else {
        emblaApi.scrollPrev();
      }
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      const autoplay = emblaApi.plugins().autoplay;
      if (autoplay) {
        autoplay.stop();
        emblaApi.scrollNext();
        setTimeout(() => autoplay.play(), 1000);
      } else {
        emblaApi.scrollNext();
      }
    }
  }, [emblaApi]);

  return (
    <section id="student showcase" className="py-20 bg-[#f8f5f2] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-10 reveal">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-dark-900 mb-2">Student Showcase</h2>
            <p className="text-gray-500 font-sans text-sm">Showcasing our students' exceptional creations - where talent, creativity, and passion flourish at our academy.</p>
          </div>
          <a href="https://www.instagram.com/escapadesculinarystudio/" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest hover:text-gold-600 transition-colors">
            Follow on Instagram <Instagram size={14} />
          </a>
        </div>

        {/* Carousel with Navigation Arrows */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute -left-6 md:-left-12 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-100 transition-all duration-300 z-10 hover:scale-125"
            aria-label="Previous image"
            style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.5))' }}
          >
            <ChevronLeft className="text-white" size={40} strokeWidth={3} />
          </button>
          
          <button
            onClick={scrollNext}
            className="absolute -right-6 md:-right-12 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-100 transition-all duration-300 z-10 hover:scale-125"
            aria-label="Next image"
            style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.5))' }}
          >
            <ChevronRight className="text-white" size={40} strokeWidth={3} />
          </button>

          {/* Embla Carousel */}
          <div 
            className="embla overflow-hidden -mx-2" 
            ref={emblaRef}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div className="embla__container flex">
              {duplicatedImages.map((image, idx) => (
                <div 
                  key={idx} 
                  className="embla__slide relative group overflow-hidden rounded-sm flex-shrink-0 px-2"
                  style={{ flex: '0 0 auto', minWidth: 0 }}
                >
                  <div className="w-[320px] h-[400px]">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                    />
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

export default Gallery;
