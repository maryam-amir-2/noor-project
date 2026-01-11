"use client";
import { useState } from 'react';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import Existence from '../components/Existence';
import Tawheed from '../components/Tawheed';
import WhyIslam from '../components/WhyIslam';
import Pillars from '../components/Pillars';
import ImaanContent from '../components/Imaan';
import IhsanContent from '../components/Ihsan';
import QnaContent from '../components/Qna';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  const journeyOrder = [
    { id: 'home', label: 'Home' },
    { id: 'logic', label: 'Existence' },
    { id: 'tawheed', label: 'The Core (Tawheed)' },
    { id: 'why-islam', label: 'Why Islam?' },
    { id: 'pillars', label: 'Al-Islam (The 5 Pillars)' },
    { id: 'imaan', label: 'Al-Imaan (The 6 Pillars)' },
    { id: 'ihsan', label: 'Ihsan: The Highest Level' },
    { id: 'qna', label: 'Questions' }
  ];

  const currentIndex = journeyOrder.findIndex(item => item.id === activeSection);
  const prevSection = journeyOrder[currentIndex - 1];
  const nextSection = journeyOrder[currentIndex + 1];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#FDFCF8]">
      
      <Navigation active={activeSection} setActiveSection={setActiveSection} />
      
      {/* UPDATED: Changed p-6 to px-0 py-6 on mobile (Line 38) */}
      <main className={`flex-1 flex flex-col ${
        activeSection === 'home' 
        ? 'w-full h-screen' 
        : 'max-w-5xl mx-auto md:p-12 px-0 py-6'
      }`}>
        
        {/* UPDATED: Changed slide-in-from-right-8 to right-4 for mobile (Line 43) */}
        <div className={`flex-1 ${
          activeSection === 'home' 
          ? '' 
          : 'animate-in fade-in slide-in-from-right-4 md:slide-in-from-right-8 duration-700 min-h-[70vh]'
        }`}>
          {activeSection === 'home' && (
            <Hero onStart={() => setActiveSection('logic')} />
          )}
          
          {activeSection === 'logic' && <Existence />}
          {activeSection === 'tawheed' && <Tawheed />}
          {activeSection === 'why-islam' && <WhyIslam />}
          {activeSection === 'pillars' && <Pillars />}
          {activeSection === 'imaan' && <ImaanContent />}
          {activeSection === 'ihsan' && <IhsanContent />}
          {activeSection === 'qna' && <QnaContent />}
        </div>

        {/* 3. JOURNEY CONTROLS */}
        {activeSection !== 'home' && (
          /* UPDATED: Changed mt-20 to mt-12 and added px-4 (Line 61) */
          <div className="mt-12 md:mt-20 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 pb-12 px-4">
            {prevSection && prevSection.id !== 'home' ? (
              <button 
                onClick={() => setActiveSection(prevSection.id)}
                className="group flex flex-col items-start gap-1 p-4 rounded-2xl border-2 border-slate-100 hover:border-emerald-500 transition-all w-full md:w-auto"
              >
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Previous Step</span>
                <span className="font-bold text-slate-900 group-hover:text-emerald-700 text-sm md:text-base">← {prevSection.label}</span>
              </button>
            ) : <div />}

            {nextSection && (
              <button 
                onClick={() => setActiveSection(nextSection.id)}
                className="group flex flex-col items-end gap-1 p-4 rounded-2xl border-2 border-emerald-100 bg-emerald-50 hover:bg-emerald-600 transition-all w-full md:w-auto"
              >
                <span className="text-[10px] font-black text-emerald-600 group-hover:text-emerald-200 uppercase tracking-[0.2em]">Next Step</span>
                <span className="font-bold text-emerald-900 group-hover:text-white text-sm md:text-base">{nextSection.label} →</span>
              </button>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
