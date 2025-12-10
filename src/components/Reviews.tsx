import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-dark-900 text-white border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h4 className="text-gold-500 text-xs tracking-widest uppercase mb-3">Student Love</h4>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Google Reviews</h2>
          <div className="flex justify-center items-center gap-1 text-gold-400 mb-2">
            {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={20} fill="currentColor" />)}
          </div>
          <p className="text-gray-400 text-sm">4.9/5 Rating on Google Reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {TESTIMONIALS.map((review) => (
            <div key={review.id} className="bg-dark-800 p-8 rounded-sm border border-gray-800 hover:border-gold-500/30 transition-colors reveal flex flex-col">
              <h3 className="font-serif text-white text-xl italic mb-3">"{review.quote}"</h3>
              <div className="flex gap-1 text-gold-500 mb-6">
                 {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-gray-300 font-sans leading-relaxed flex-grow mb-6">
                {review.text}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gold-600 rounded-full flex items-center justify-center font-serif text-black">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-serif text-white">{review.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 reveal">
            <a 
              href="https://share.google/ZHhbTwRUrkaXl4muS" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gold-500 text-sm uppercase tracking-widest border-b border-gold-500 pb-1 hover:text-white hover:border-white transition-colors"
            >
                Read all reviews on Google
            </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;