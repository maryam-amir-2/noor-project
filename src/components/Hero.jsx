"use client";

export default function Hero({ onStart }) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-emerald-950">
      
      {/* 1. TINY MENU ICON - Just the "Lines" in the corner */}
      <button 
        onClick={onStart} 
        className="absolute top-8 left-8 z-50 group flex items-center gap-3"
      >
        <div className="space-y-1.5">
          <div className="w-6 h-0.5 bg-emerald-400 group-hover:w-8 transition-all"></div>
          <div className="w-8 h-0.5 bg-white"></div>
          <div className="w-5 h-0.5 bg-emerald-400 group-hover:w-8 transition-all"></div>
        </div>
        <span className="text-[10px] font-black text-emerald-400 tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
          Open Menu
        </span>
      </button>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]"></div>

      <div className="relative z-10 text-center px-6">
        <span className="text-emerald-400 font-bold tracking-[0.3em] uppercase text-xs mb-4 block animate-in fade-in slide-in-from-top-4 duration-1000">
          Welcome to the Path
        </span>
        
        <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter mb-6">
          NOOR<span className="text-emerald-500">.</span>
        </h1>

        <p className="text-emerald-50 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed font-bold">
          A clear, modern guide to understanding Allah, His Message, and your purpose—strictly from the Quran and Sunnah.
        </p>
        
        <button 
          onClick={onStart}
          className="bg-white text-emerald-950 px-10 py-4 rounded-full font-black text-lg hover:bg-emerald-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-[0_20px_50px_rgba(16,185,129,0.3)]"
        >
          Begin Journey
        </button>
      </div>
    </section>
  );
}