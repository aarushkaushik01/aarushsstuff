
import React from 'react';
import Header from './components/Header';
import GameCard from './components/GameCard';
import AboutMe from './components/AboutMe';
import Previews from './components/Previews';
import Footer from './components/Footer';
import { GAMES } from './data/games';

function App() {
  return (
    <div className="min-h-screen flex flex-col max-w-6xl mx-auto px-6 lg:px-8">
      {/* Background radial glow */}
      <div className="fixed top-[-10%] left-[10%] w-[40%] h-[40%] bg-purple-600/10 blur-[150px] -z-10 rounded-full"></div>
      <div className="fixed bottom-[-10%] right-[10%] w-[30%] h-[30%] bg-indigo-600/10 blur-[150px] -z-10 rounded-full"></div>
      
      <Header />
      
      <main className="flex-grow space-y-20">
        <AboutMe />
        
        <Previews />

        <section id="downloads" className="py-24 border-t border-purple-900/10">
          <div className="mb-12 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-8 bg-purple-500 rounded-full"></div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white">Downloads</h2>
            </div>
            <p className="text-xs font-bold text-purple-400/60 uppercase tracking-widest">
              {GAMES.length} {GAMES.length === 1 ? 'Title' : 'Titles'} Available
            </p>
          </div>

          {GAMES.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {GAMES.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          ) : (
            <div className="py-32 text-center border-2 border-dashed border-purple-900/10 rounded-[32px] glass">
              <i className="fa-solid fa-cube text-5xl text-purple-900/40 mb-6"></i>
              <h3 className="text-xl font-bold text-purple-200/50">No games yet...</h3>
              <p className="text-purple-300/30 text-sm mt-2">Check back soon for the next release.</p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
