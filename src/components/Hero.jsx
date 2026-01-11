"use client";

export default function Hero({ onStart }) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-emerald-950">
      

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-emerald-500/10 rounded-full blur-[80px] md:blur-[120px]"></div>

      <div className="relative z-10 text-center px-6">
        <span className="text-emerald-400 font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 block animate-in fade-in slide-in-from-top-4 duration-1000">
          Welcome to the Path
        </span>
        
        <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-6">
          NOOR<span className="text-emerald-500">.</span>
        </h1>

        <p className="text-emerald-50 text-base md:text-xl max-w-xl mx-auto mb-10 leading-relaxed font-bold">
          A clear, modern guide to understanding Allah, His Message, and your purpose—strictly from the Quran and Sunnah.
        </p>
        
        <button 
          onClick={onStart}
          className="bg-white text-emerald-950 px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-emerald-400 hover:scale-105 transition-all shadow-[0_0_40px_rgba(16,185,129,0.3)]"
        >
          Begin Journey
        </button>
      </div>
    </section>
  );
}
