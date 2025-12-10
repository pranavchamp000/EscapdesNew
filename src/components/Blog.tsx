import React from 'react';
import { BLOGS } from '../constants';
import { ArrowRight } from 'lucide-react';

interface BlogProps {
  onViewAll?: () => void;
}

const Blog: React.FC<BlogProps> = ({ onViewAll }) => {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12 reveal">
          <div>
            <h4 className="text-gold-500 text-xs tracking-widest uppercase mb-3">Journal</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-dark-900">Baking Insights</h2>
          </div>
          <button 
            onClick={onViewAll}
            className="hidden md:flex items-center gap-2 text-dark-900 uppercase tracking-widest text-xs hover:text-gold-600 transition-colors"
          >
            View All Posts <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {BLOGS.map((blog) => (
            <div key={blog.id} className="group cursor-pointer reveal">
              <div className="overflow-hidden mb-6 h-64">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-400 uppercase tracking-wider mb-3">
                <span className="text-gold-600">Tips</span>
                <span>•</span>
                <span>{blog.date}</span>
              </div>
              <h3 className="text-2xl font-serif text-dark-900 mb-3 group-hover:text-gold-600 transition-colors">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                {blog.excerpt}
              </p>
              <span className="text-xs uppercase tracking-widest text-dark-900 border-b border-dark-900 pb-1 group-hover:text-gold-600 group-hover:border-gold-600 transition-colors inline-block">
                Read More
              </span>
            </div>
          ))}
        </div>
        
         <div className="text-center mt-12 md:hidden reveal">
             <button 
               onClick={onViewAll}
               className="text-dark-900 uppercase tracking-widest text-xs border-b border-dark-900 pb-1"
             >
                View All Posts
            </button>
         </div>
      </div>
    </section>
  );
};

export default Blog;
