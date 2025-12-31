
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 py-16 border-t border-purple-900/20 flex flex-col items-center">
      <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-6"></div>
      <p className="text-purple-300/40 text-xs font-bold tracking-[0.3em] uppercase">
        &copy; {new Date().getFullYear()} AARUSH'S STUFF
      </p>
    </footer>
  );
};

export default Footer;
