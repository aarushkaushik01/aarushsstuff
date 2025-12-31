
import React from 'react';


const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] max-w-4xl z-[60] glass rounded-[20px] md:rounded-[24px] px-4 md:px-8 py-3 md:py-4 shadow-2xl overflow-hidden">
        <div className="flex justify-between items-center gap-2">
          <button 
            onClick={() => scrollToSection('top')}
            className="font-extrabold text-sm md:text-xl tracking-tighter text-gradient group cursor-pointer border-none bg-transparent p-0 whitespace-nowrap"
          >
            Aarush<span className="text-purple-400 group-hover:text-white transition-colors hidden sm:inline">'s Stuff</span>
            <span className="text-purple-400 group-hover:text-white transition-colors sm:hidden">'s</span>
          </button>
          
          <div className="flex gap-3 md:gap-8 text-[9px] md:text-[10px] font-black uppercase tracking-wider md:tracking-[0.2em] text-gray-500 shrink-0">
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-purple-400 transition-colors relative group cursor-pointer border-none bg-transparent p-0 whitespace-nowrap"
            >
              About Me
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-500 rounded-full transition-all group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('previews')}
              className="hover:text-purple-400 transition-colors relative group cursor-pointer border-none bg-transparent p-0 whitespace-nowrap"
            >
              Previews
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-500 rounded-full transition-all group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('downloads')}
              className="hover:text-purple-400 transition-colors relative group cursor-pointer border-none bg-transparent p-0 whitespace-nowrap"
            >
              Downloads
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-500 rounded-full transition-all group-hover:w-full"></span>
            </button>
          </div>
        </div>
      </nav>

      <header className="pt-40 md:pt-56 pb-20 md:pb-32 px-4 flex flex-col items-center justify-center space-y-8 md:space-y-10">
        <div className="relative">
          <div className="absolute -inset-8 bg-purple-600/20 blur-[60px] rounded-full animate-pulse"></div>
          <div className="relative p-1.5 rounded-[32px] md:rounded-[40px] bg-gradient-to-br from-purple-500 to-indigo-600 shadow-[0_0_40px_rgba(139,92,246,0.3)] animate-float">
            <img 
              src="littleduckblue.png" 
              alt="Aarush's logo" 
              className="w-28 h-28 md:w-40 md:h-40 rounded-[28px] md:rounded-[36px] object-cover border-4 border-[#06040d]"
            />
          </div>
        </div>
        <div className="text-center space-y-4 px-4">
          <h1 className="text-5xl md:text-9xl font-black tracking-tighter text-gradient drop-shadow-2xl">
            Aarush's Stuff
          </h1>
          <p className="text-purple-300/40 font-black tracking-[0.2em] md:tracking-[0.4em] uppercase text-[9px] md:text-xs max-w-[280px] md:max-w-none mx-auto leading-relaxed">
            13-Year-Old Developer • Unity & Godot Creator
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;
