"use client";
import { useState } from 'react';

export default function Pillars() {
  const [activeTab, setActiveTab] = useState('overview');

  const pillarData = [
    { id: 'shahadah', title: 'Shahadah', sub: 'Faith', icon: '☝️', color: 'bg-emerald-50 text-emerald-700 border-emerald-200', active: 'bg-emerald-600 text-white' },
    { id: 'salah', title: 'Salah', sub: 'Prayer', icon: '🕌', color: 'bg-blue-50 text-blue-700 border-blue-200', active: 'bg-blue-600 text-white' },
    { id: 'zakah', title: 'Zakah', sub: 'Charity', icon: '💰', color: 'bg-amber-50 text-amber-700 border-amber-200', active: 'bg-amber-600 text-white' },
    { id: 'sawm', title: 'Sawm', sub: 'Fasting', icon: '🌙', color: 'bg-indigo-50 text-indigo-700 border-indigo-200', active: 'bg-indigo-600 text-white' },
    { id: 'hajj', title: 'Hajj', sub: 'Pilgrimage', icon: '🕋', color: 'bg-slate-100 text-slate-700 border-slate-200', active: 'bg-slate-900 text-white' },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-6 md:py-10">
      <div className="bg-slate-950 text-white p-6 rounded-3xl mb-6 shadow-xl border-b-4 border-emerald-600 text-center relative overflow-hidden">
        <div className="relative z-10">
          <span className="text-emerald-400 font-bold tracking-[0.2em] text-[10px] uppercase mb-2 block">The Framework</span>
          <h2 className="text-3xl font-black mb-2 uppercase tracking-tighter text-white">The 5 Pillars</h2>
          <p className="text-slate-400 text-xs font-medium max-w-sm mx-auto">
            These are the non-negotiable foundations of a Muslim's life.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:flex md:flex-wrap gap-2 mb-6">
        <button
          onClick={() => setActiveTab('overview')}
          className={`col-span-2 md:col-span-1 p-3 rounded-xl font-bold text-xs uppercase tracking-wide transition-all border-2 flex items-center justify-center gap-2 ${
            activeTab === 'overview' ? "bg-slate-900 border-slate-900 text-white shadow-md" : "bg-white border-slate-100 text-slate-400"
          }`}
        >
          <span>🏠</span> Overview
        </button>
        {pillarData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`p-3 rounded-xl font-bold text-left transition-all border-2 flex flex-col justify-center ${
              activeTab === tab.id ? `${tab.active} border-transparent shadow-md scale-[1.02]` : `bg-white ${tab.color} border-transparent`
            }`}
          >
            <div className="flex justify-between items-start w-full">
              <span className="text-lg">{tab.icon}</span>
              <span className="text-[10px] opacity-60 uppercase tracking-widest">{tab.sub}</span>
            </div>
            <span className="text-sm font-black mt-1">{tab.title}</span>
          </button>
        ))}
      </div>

      <div className="bg-white border-2 border-slate-100 rounded-[1.5rem] md:rounded-[2.5rem] p-4 md:p-10 shadow-sm min-h-[400px]">
        {activeTab === 'overview' && (
           <div className="text-center space-y-6 max-w-xl mx-auto py-8">
             <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-4xl shadow-inner">🕌</div>
             <div className="space-y-3">
                <h3 className="text-2xl font-black text-slate-900 uppercase">The Foundation</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
                  Just as a house collapses without pillars, Islam cannot stand without these five actions. They are the priority before anything else.
                </p>
             </div>
           </div>
        )}
        {activeTab === 'shahadah' && <ShahadahContent />}
        {activeTab === 'salah' && <SalahContent />}
        {activeTab === 'zakah' && <ZakahContent />}
        {activeTab === 'sawm' && <SawmContent />}
        {activeTab === 'hajj' && <HajjContent />}
      </div>
    </section>
  );
}

function ShahadahContent() {
  return (
    <div className="space-y-6">
      <div className="bg-emerald-50 rounded-2xl p-6 md:p-10 text-center border border-emerald-100">
        <p className="text-2xl md:text-4xl font-arabic text-emerald-900 leading-[2.0] mb-4">لَا إِلٰهَ إِلَّا الله مُحَمَّدٌ رَسُولُ الله</p>
        <div className="h-px bg-emerald-200 w-1/2 mx-auto my-4"></div>
        <p className="text-sm font-bold text-slate-700 italic">"There is no god but Allah, and Muhammad is His Messenger."</p>
      </div>
      <h4 className="font-black text-slate-900 text-sm uppercase px-2 pt-4">Essential Conditions</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[{ t: "Knowledge", d: "Understanding what you are saying." }, { t: "Certainty", d: "Having zero doubt in your heart." }, { t: "Sincerity", d: "Doing it for Allah, not for people." }, { t: "Submission", d: "Physically acting on Allah's commands." }].map((item, i) => (
          <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:border-emerald-200 bg-white transition-colors">
            <span className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0">{i+1}</span>
            <div><p className="font-bold text-slate-900 text-sm">{item.t}</p><p className="text-xs text-slate-500 font-medium">{item.d}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SalahContent() {
  const [expandedStep, setExpandedStep] = useState(0);
  const [showWuduSteps, setShowWuduSteps] = useState(false);

  const wuduSteps = [
    "1. Intention & Bismillah",
    "2. Wash hands 3x",
    "3. Rinse mouth 3x",
    "4. Clean nose 3x",
    "5. Wash face 3x",
    "6. Wash arms to elbows 3x",
    "7. Wipe head & ears 1x",
    "8. Wash feet to ankles 3x"
  ];

  const steps = [
    { num: "01", title: "Standing (Qiyam)", arabic: "اللهُ أَكْبَرُ", roman: "Allahu Akbar", english: "Allah is Greatest", img: "/salah-1.png", desc: "Begin by standing upright and performing the Takbir al-Ihram by raising your hands and saying 'Allahu Akbar' to start the prayer." },
    { num: "02", title: "Recitation", arabic: "بِسْمِ اللَّهِ...", roman: "Surah Al-Fatiha", english: "The Opening Chapter", img: "/salah-2.png", desc: "Place your hands on your chest and recite silently from the Quran, including Surah Al-Fatihah and another short passage (in the first two rak'ahs)." },
    { num: "03", title: "Bowing (Ruku')", arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ", roman: "Subhana Rabbiyal 'Adheem", english: "Glory to my Lord, the Magnificent", img: "/salah-3.png", desc: "Say 'Allahu Akbar' and bow, placing hands on knees and keeping the back straight, and say 'Subhana Rabbiyal 'Adheem' at least three times." },
    { num: "04", title: "Standing (Qaumah)", arabic: "سَمِعَ اللهُ لِمَنْ حَمِدَهُ", roman: "Sami' Allahu liman hamidah", english: "Allah hears who praises Him", img: "/salah-4.png", desc: "Return to a standing position, saying 'Sami'Allahu liman hamidah' while rising and 'Rabbana walakal-hamd' once standing." },
    { num: "05", title: "Prostration (Sujud)", arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى", roman: "Subhana Rabbiyal A'laa", english: "Glory to my Lord, the Most High", img: "/salah-5.png", desc: "Say 'Allahu Akbar' and prostrate, ensuring the forehead, nose, palms, knees, and toes touch the ground. Say 'Subhana Rabbiyal A'laa' at least three times." },
    { num: "06", title: "Sitting (Juloos)", arabic: "رَبِّ اغْفِرْ لِي", roman: "Rabbigh-fir lee", english: "My Lord, forgive me", img: "/salah-6.png", desc: "Rise from prostration, saying 'Allahu Akbar', and sit briefly." },
    { num: "07", title: "Second Prostration", arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى", roman: "Subhana Rabbiyal A'laa", english: "Glory to my Lord, the Most High", img: "/salah-7.png", desc: "Say 'Allahu Akbar' and perform a second prostration, again saying 'Subhana Rabbiyal A'laa' three times." },
    { num: "08", title: "Tashahhud", arabic: "التَّحِيَّاتُ لِلَّهِ...", roman: "At-tahiyyatu lillahi...", english: "All compliments are for Allah...", img: "/salah-8.png", desc: "Following the second prostration of the second rak'ah (and the final rak'ah), sit and recite the Tashahhud and Salatul Ibraheemiyyah." },
    { num: "09", title: "Concluding (Tasleem)", arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ", roman: "As-salamu 'alaykum wa rahmatullah", english: "Peace and mercy of Allah be upon you", img: "/salah-9.png", desc: "End the prayer by turning your head to the right and then to the left, saying the greeting each time." }
  ];

  const prerequisites = [
    { title: "Wudu", desc: "Ritual purification (ablution).", expandable: true },
    { title: "Niyyah", desc: "Sincere intention to pray." },
    { title: "Awrah", desc: "Covering body (Men: navel-knees; Women: all except hands/face)." },
    { title: "Cleanliness", desc: "Clean body, clothes, and place." },
    { title: "Qiblah", desc: "Facing the Kaaba in Mecca." },
    { title: "Proper Time", desc: "Performing within the designated time." },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2">
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 md:p-6">
        <h3 className="font-black text-blue-900 text-lg uppercase mb-3 text-center md:text-left">Complete Prayer Guide</h3>
        <p className="text-xs text-slate-700 leading-relaxed font-medium mb-4">
          Salah consists of units called <span className="font-bold">rak'ahs</span>. Below is the full sequence.
        </p>
      </div>

      <div>
        <h4 className="font-black text-slate-900 text-sm uppercase px-2 mb-3">Prerequisites (Conditions)</h4>
        <div className="grid grid-cols-2 gap-3">
          {prerequisites.map((item, i) => (
            <div 
              key={i} 
              onClick={() => item.expandable && setShowWuduSteps(!showWuduSteps)}
              className={`bg-white border-2 rounded-xl p-3 transition-all ${item.expandable ? "cursor-pointer border-blue-200 hover:bg-blue-50/50" : "border-slate-100"}`}
            >
              <div className="flex justify-between items-start">
                <p className="text-xs font-black text-slate-900 mb-1">{item.title}</p>
                {item.expandable && <span className="text-[10px] text-blue-500 font-bold">{showWuduSteps ? '−' : '+'}</span>}
              </div>
              <p className="text-[10px] text-slate-500 leading-tight">{item.desc}</p>
              
              {/* Expandable Wudu Steps */}
              {item.expandable && showWuduSteps && (
                <div className="mt-3 pt-3 border-t border-blue-100 space-y-1.5 animate-in slide-in-from-top-1">
                  {wuduSteps.map((step, idx) => (
                    <p key={idx} className="text-[9px] font-bold text-blue-700 leading-tight">
                      {step}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Rest of the component remains exactly the same as your provided code */}
      <div className="space-y-3">
        <div className="flex items-center justify-between mb-4 px-2">
          <h4 className="font-black text-slate-900 text-sm uppercase tracking-tight">Step-by-Step Procedure</h4>
          <span className="text-[9px] text-blue-600 font-bold bg-blue-50 px-2 py-1 rounded-full">Tap to Expand</span>
        </div>
        {steps.map((step, index) => (
          <div key={index} onClick={() => setExpandedStep(expandedStep === index ? -1 : index)} className={`border-2 rounded-2xl overflow-hidden transition-all duration-300 ${expandedStep === index ? "border-blue-500 bg-white shadow-lg" : "border-slate-100 bg-slate-50/50"}`}>
            <div className="flex items-center p-3 gap-3">
              <div className="w-14 h-14 bg-white rounded-lg border border-slate-100 p-1 shrink-0 flex items-center justify-center">
                <img src={step.img} alt={step.title} className="max-w-full max-h-full object-contain" />
              </div>
              <div className="flex-1">
                <h4 className="font-black text-slate-900 text-xs uppercase tracking-tighter">{step.title}</h4>
                <p className="text-[10px] text-slate-500 font-bold mt-0.5 line-clamp-1">{step.desc}</p>
              </div>
              <div className={`text-slate-300 transition-transform ${expandedStep === index ? "rotate-180 text-blue-500" : ""}`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </div>
            </div>
            {expandedStep === index && (
              <div className="bg-slate-950 p-5 text-white animate-in slide-in-from-top-2">
                <p className="text-2xl font-arabic text-right mb-4 leading-loose">{step.arabic}</p>
                <p className="text-[11px] text-slate-300 italic mb-4 leading-relaxed">{step.desc}</p>
                <div className="grid grid-cols-2 gap-4 border-t border-slate-800 pt-3">
                  <div><span className="text-[9px] text-blue-400 font-black uppercase">Recite</span><p className="text-xs font-bold font-mono">{step.roman}</p></div>
                  <div><span className="text-[9px] text-emerald-400 font-black uppercase">Meaning</span><p className="text-[10px] italic text-slate-400">"{step.english}"</p></div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-slate-50 rounded-3xl p-5 border-2 border-slate-100 space-y-4">
        <h4 className="font-black text-slate-900 text-sm uppercase text-center border-b pb-2">Prayer Completion Logic</h4>
        {[
          { t: "Second Rak'ah", d: "After the first rak'ah, stand up saying 'Allahu Akbar' and repeat the cycle (Steps 2-7)." },
          { t: "Sitting & Tashahhud", d: "In prayers with 2 rak'ahs (Fajr), perform Step 8 and 9 immediately after the 2nd prostration. In 3 or 4 rak'ah prayers, sit for the first part of Tashahhud after the 2nd rak'ah, then stand back up." },
          { t: "Final Rak'ah", d: "In the final unit of any prayer, perform the full Tashahhud (Step 8) followed by the Tasleem (Step 9) to finish." }
        ].map((item, i) => (
          <div key={i} className="flex gap-4">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-900 text-white text-[10px] font-black shrink-0">{i+1}</span>
            <div><p className="font-black text-slate-900 text-xs mb-0.5">{item.t}</p><p className="text-[10px] text-slate-500 font-medium leading-relaxed">{item.d}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ZakahContent() {
  return (
    <div className="space-y-6">
      <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 text-center">
        <h3 className="text-3xl font-black text-amber-900 mb-1">2.5%</h3>
        <p className="text-xs font-bold text-amber-800 uppercase tracking-widest">Of Surplus Wealth</p>
      </div>
      <div className="space-y-4">
        <div className="bg-white border-2 border-slate-100 rounded-2xl p-5"><h4 className="font-black text-slate-900 text-sm mb-2">How it works</h4><p className="text-xs text-slate-600 leading-relaxed font-medium">If you have savings above the threshold (Nisab) held for one full lunar year, you give 2.5% to the poor.</p></div>
        <div>
          <h4 className="font-black text-slate-900 text-sm uppercase px-2 mb-2">Who receives it?</h4>
          <div className="grid grid-cols-2 gap-2">
            {["The Poor", "The Needy", "Debt-ridden", "Travelers", "New Muslims", "Captives", "Zakat Workers", "Cause of Allah"].map((item, i) => (
              <div key={i} className="bg-slate-50 p-2 rounded-lg text-center border border-slate-100"><span className="text-[10px] font-bold text-slate-700">{item}</span></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SawmContent() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-indigo-50 p-5 rounded-2xl border border-indigo-100">
        <div><h3 className="font-black text-indigo-900 text-lg">Ramadan</h3><p className="text-[10px] text-indigo-700 font-bold uppercase tracking-wide">The Month of Quran</p></div>
        <span className="text-3xl">🌙</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
         <div className="p-4 rounded-xl border-2 border-slate-100 bg-white text-center"><p className="text-[9px] font-black text-slate-400 uppercase mb-1">From</p><p className="font-bold text-slate-900 text-xs">Fajr (Dawn)</p></div>
         <div className="p-4 rounded-xl border-2 border-slate-100 bg-white text-center"><p className="text-[9px] font-black text-slate-400 uppercase mb-1">Until</p><p className="font-bold text-slate-900 text-xs">Maghrib (Sunset)</p></div>
      </div>
      <div className="bg-white p-5 rounded-2xl border-2 border-slate-100">
        <p className="text-xs text-slate-600 font-medium leading-relaxed italic">"Whoever does not give up false speech and evil deeds, Allah is not in need of his leaving his food and drink."</p>
      </div>
    </div>
  );
}

function HajjContent() {
  return (
    <div className="space-y-6">
      <div className="bg-slate-900 text-white p-6 rounded-2xl text-center relative overflow-hidden">
        <h3 className="font-black text-xl mb-1">The Pilgrimage</h3>
        <p className="text-xs text-slate-300 font-medium italic">Once in a lifetime (if able)</p>
      </div>
      <div className="space-y-3">
        {[{ step: "1. Ihram", desc: "Enter state of purity" }, { step: "2. Tawaf", desc: "Circle Kaaba 7 times" }, { step: "3. Sa'i", desc: "Walk Safa to Marwa" }, { step: "4. Arafah", desc: "The main day of prayer" }].map((s, i) => (
          <div key={i} className="flex items-center justify-between p-3 border-b border-slate-100"><span className="font-bold text-slate-900 text-xs">{s.step}</span><span className="text-[10px] text-slate-500">{s.desc}</span></div>
        ))}
      </div>
    </div>
  );
}
