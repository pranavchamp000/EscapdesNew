import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Slight slow motion for elegance
      videoRef.current.muted = true; // Force mute to ensure autoplay works
      videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2626&auto=format&fit=crop"
          className="w-full h-full object-cover opacity-60 animate-fade-in"
        >
          {/* Using 1080p version for better performance */}
          <source 
            src="https://videos.pexels.com/video-files/6604629/6604629-hd_1920_1080_25fps.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        {/* Overlay gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 reveal bg-[rgba(165,163,102,0)]">
        <h3 className="text-gold-500 font-sans text-xs md:text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in-up">
          Hyderabad's Premier Baking Academy
        </h3>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 italic animate-fade-in-up delay-200">
          Master the Art <br/> of Patisserie
        </h1>
        <p className="text-gray-300 max-w-2xl text-sm md:text-lg font-sans leading-relaxed mb-10 animate-fade-in-up delay-300">
          Where passion meets precision. Join our City & Guilds certified intensive baking programs and turn your culinary dreams into reality.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 animate-fade-in-up delay-400">
          <button className="bg-gold-500 hover:bg-gold-600 text-black py-3 px-8 rounded-sm tracking-widest text-xs uppercase transition-all transform hover:scale-105">
            View Courses
          </button>
          <button className="border border-white hover:bg-white hover:text-black text-white py-3 px-8 rounded-sm tracking-widest text-xs uppercase transition-all hover:shadow-lg">
            Visit Academy
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50 z-20">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;