
import React from 'react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <div className="bg-[#0f0a1d]/60 border border-purple-500/10 rounded-[32px] overflow-hidden transition-all duration-500 hover:translate-y-[-12px] hover:border-purple-500/40 hover:shadow-[0_30px_60px_-15px_rgba(139,92,246,0.25)] group">
      <div className="aspect-[16/10] relative overflow-hidden">
        <img 
          src={game.imageUrl} 
          alt={game.title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a1d] via-transparent to-transparent opacity-80"></div>
        <div className="absolute top-5 left-5 flex gap-2">
          {game.tags.map((tag, idx) => (
            <span 
              key={idx} 
              className={`px-3 py-1 text-[9px] font-black rounded-full uppercase tracking-widest shadow-lg backdrop-blur-md ${
                idx === 0 ? 'bg-purple-600/90 text-white' : 'bg-white/10 text-purple-200 border border-white/10'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-8 space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors tracking-tight">{game.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 font-medium">
            {game.description}
          </p>
        </div>
        
        <div className="flex items-center justify-between pt-6 border-t border-purple-500/10">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Released</span>
            <span className="text-xs text-purple-200/70 font-bold">{game.releaseDate}</span>
          </div>
          
          <a 
            href={game.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-white text-black hover:bg-purple-500 hover:text-white rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all shadow-xl active:scale-95"
          >
            <i className="fa-solid fa-download"></i>
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
