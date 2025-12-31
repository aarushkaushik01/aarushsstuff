
import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-24 border-t border-purple-900/10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <div className="flex items-center gap-5">
            <div className="w-2.5 h-12 bg-gradient-to-b from-purple-400 to-indigo-600 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.4)]"></div>
            <h2 className="text-5xl font-black tracking-tighter text-white">About Me</h2>
          </div>
          <div className="space-y-6">
            <p className="text-gray-200 leading-relaxed text-2xl font-bold tracking-tight">
              I'm Aarush, a 13-year-old game developer who makes games for fun.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg font-medium">
              I specialize in game development using powerful engines like <strong>Unity</strong> and <strong>Godot</strong>. I have deep expertise in <strong>C#</strong> and <strong>Python.</strong> I make games in my free time using these resources and then put some of them on this website.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 pt-4">
            <div className="glass px-6 py-4 rounded-3xl text-sm flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-2xl bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                <i className="fa-solid fa-code text-purple-400"></i>
              </div>
              <span className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Develops w/ <span className="text-white">C# & Python</span></span>
            </div>
            <div className="glass px-6 py-4 rounded-3xl text-sm flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                <i className="fa-solid fa-layer-group text-indigo-400"></i>
              </div>
              <span className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Uses <span className="text-white">Unity & Godot</span></span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-16 bg-indigo-600/10 blur-[120px] rounded-full"></div>
          <div className="relative aspect-[4/3] rounded-[48px] overflow-hidden glass border-2 border-purple-500/20 shadow-2xl transition-all duration-700 hover:scale-[1.02]">
              <img 
                src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1000&auto=format&fit=crop" 
                alt="Programming Workspace" 
                className="w-full h-full object-cover transition-all duration-1000"
              />
             <div className="absolute inset-0 bg-gradient-to-t from-[#06040d] via-transparent to-transparent opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
