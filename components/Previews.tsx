
import React, { useState } from 'react';
import { GAMES } from '../data/games';

const Previews: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const allPreviews = GAMES.flatMap(g => g.previews || []);

  if (allPreviews.length === 0) return null;

  return (
    <section id="previews" className="py-24 border-t border-purple-900/10">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-2 h-10 bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
        <h2 className="text-4xl font-extrabold tracking-tight text-white">Game Previews</h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allPreviews.map((src, i) => (
          <button 
            key={i} 
            onClick={() => setSelectedImage(src)}
            className="group relative aspect-video rounded-2xl overflow-hidden glass border border-purple-500/10 transition-all hover:scale-[1.02] active:scale-95 cursor-zoom-in"
          >
            <img 
              src={src} 
              alt={`Preview ${i}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-purple-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <i className="fa-solid fa-magnifying-glass-plus text-white text-3xl transform scale-75 group-hover:scale-100 transition-transform"></i>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white/50 hover:text-white text-4xl transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <img 
            src={selectedImage} 
            alt="Full Preview" 
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Previews;
