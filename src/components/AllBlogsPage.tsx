import React, { useEffect } from 'react';
import { BLOGS } from '../constants';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import Footer from './Footer';

interface AllBlogsPageProps {
  onBack: () => void;
}

const AllBlogsPage: React.FC<AllBlogsPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header / Nav area */}
      <div className="bg-dark-900 text-white py-6 sticky top-0 z-50">
        <div className="container mx-auto px-6 flex items-center gap-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 hover:text-gold-500 transition-colors uppercase text-xs tracking-widest"
          >
            <ArrowLeft size={16} /> Back to Home
          </button>
          <div className="h-4 w-px bg-gray-700 mx-2"></div>
          <span className="font-serif text-lg tracking-wide">The Escapades Journal</span>
        </div>
      </div>

      <div className="flex-grow container mx-auto px-6 py-12 md:py-20 max-w-4xl">
        <div className="text-center mb-20">
            <h4 className="text-gold-600 text-xs tracking-widest uppercase mb-3">Our Blog</h4>
            <h1 className="text-4xl md:text-6xl font-serif text-dark-900 mb-6">Culinary Chronicles</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
                Dive deep into the science of baking, explore new techniques, and get inspired by our latest stories and tutorials.
            </p>
        </div>

        <div className="space-y-24">
          {BLOGS.map((blog) => (
            <article key={blog.id} className="border-b border-gray-200 pb-20 last:border-0">
              {/* Header Section */}
              <div className="mb-8">
                <div className="flex items-center gap-6 text-xs text-gray-500 uppercase tracking-wider mb-4">
                  <span className="flex items-center gap-2">
                    <Calendar size={14} className="text-gold-600" />
                    {blog.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock size={14} className="text-gold-600" />
                    5 Min Read
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-5xl font-serif text-dark-900 mb-3 leading-tight">
                  {blog.title}
                </h1>
                
                {blog.subtitle && (
                  <h2 className="text-xl md:text-2xl text-gray-600 font-light italic mb-6">
                    {blog.subtitle}
                  </h2>
                )}
              </div>

              {/* Image */}
              <div className="aspect-[16/9] w-full overflow-hidden mb-10 bg-gray-100 rounded-sm">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Description / Excerpt */}
              <div className="bg-gold-500/5 p-8 border-l-4 border-gold-500 mb-10">
                <p className="text-lg md:text-xl text-dark-800 font-serif leading-relaxed">
                  {blog.excerpt}
                </p>
              </div>

              {/* Full Content */}
              <div className="prose prose-lg max-w-none text-gray-700">
                {blog.content?.map((section, idx) => (
                  <div key={idx} className="mb-8">
                    {section.heading && (
                      <h2 className="text-2xl font-serif text-dark-900 mb-4 mt-8">
                        {section.heading}
                      </h2>
                    )}
                    <p className="leading-relaxed whitespace-pre-line text-base md:text-lg">
                      {section.text}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AllBlogsPage;
