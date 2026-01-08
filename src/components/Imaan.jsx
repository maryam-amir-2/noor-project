"use client";
import { useState } from 'react';

export default function ImaanContent() {
  const [active, setActive] = useState(0);

  const pillars = [
    { 
      title: "Allah", 
      arabic: "باللَّه", 
      desc: "Believing in the oneness of God (Tawhid), His names, attributes, and that He is the sole Creator and Sustainer.", 
      verse: "لَيْسَ كَمِثْلِهِ شَيْءٌ ۖ وَهُوَ السَّمِيعُ الْبَصِيرُ", 
      ref: "42:11" 
    },
    { 
      title: "Angels", 
      arabic: "بِالْمَلَائِكَةِ", 
      desc: "Believing in these unseen beings created from light, who carry out Allah's commands (e.g., Jibril, Mika'il).", 
      verse: "لَّا يَعْصُونَ اللَّهَ مَا أَمَرَهُمْ وَيَفْعَلُونَ مَا يُؤْمَرُونَ", 
      ref: "66:6" 
    },
    { 
      title: "Books", 
      arabic: "بِالْكُتُبِ", 
      desc: "Believing in the divine scriptures Allah revealed, such as the Torah, Gospel, Psalms, and the Quran.", 
      verse: "نَزَّلَ عَلَيْكَ الْكِتَابَ بِالْحَقِّ مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ", 
      ref: "3:3" 
    },
    { 
      title: "Messengers", 
      arabic: "بِالرُّسُلِ", 
      desc: "Believing in all the prophets sent by Allah, from Adam to Muhammad (peace be upon them all).", 
      verse: "لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِ", 
      ref: "2:285" 
    },
    { 
      title: "Last Day", 
      arabic: "بِالْيَوْمِ الْآخِرِ", 
      desc: "Believing in the Day of Judgment, resurrection, accountability, paradise, and hellfire.", 
      verse: "وَأَنَّ السَّاعَةَ آتِيَةٌ لَّا رَيْبَ فِيهَا", 
      ref: "22:7" 
    },
    { 
      title: "Qadar", 
      arabic: "بِالْقَدَرِ", 
      desc: "Believing that everything, good or bad, happens by Allah's knowledge and will, but humans have free will to choose their actions.", 
      verse: "إِنَّا كُلَّ شَيْءٍ خَلَقْنَاهُ بِقَدَرٍ", 
      ref: "54:49" 
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-10 py-4">
      {/* Intro Section */}
      <div className="border-l-4 border-emerald-600 pl-6">
        <h3 className="text-4xl font-black text-slate-900 tracking-tighter italic uppercase">Al-Imaan</h3>
        <p className="text-slate-900 font-bold text-sm tracking-widest mt-1">
          The six pillars (or articles) of Iman (faith) form the foundation of a Muslim's belief, established in the famous Hadith of Jibril.
        </p>
      </div>

      {/* 3x2 Grid - Fixed Colors */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {pillars.map((p, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`p-6 rounded-2xl text-left transition-all border-2 ${
              active === i 
              ? "bg-slate-900 border-slate-900 shadow-xl scale-[1.02]" 
              : "bg-white border-slate-200 hover:border-emerald-500"
            }`}
          >
            <p className={`text-[10px] font-black mb-1 ${active === i ? "text-emerald-400" : "text-emerald-700"}`}>
              PILLAR 0{i+1}
            </p>
            <p className={`font-black text-sm uppercase tracking-tight ${active === i ? "text-white" : "text-slate-900"}`}>
              {p.title}
            </p>
          </button>
        ))}
      </div>

      {/* Detail Box - High Contrast */}
      <div className="bg-white border-2 border-slate-900 rounded-[2.5rem] overflow-hidden shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]">
        <div className="p-8 md:p-12 space-y-8">
          <div className="flex justify-between items-start">
            <h4 className="text-3xl font-black text-slate-900 underline decoration-emerald-500 underline-offset-8 decoration-4">
              {pillars[active].title}
            </h4>
            <span className="text-3xl font-arabic text-emerald-700 font-bold">{pillars[active].arabic}</span>
          </div>

          <p className="text-xl font-bold text-slate-900 leading-relaxed max-w-2xl">
            {pillars[active].desc}
          </p>

          <div className="bg-slate-900 rounded-3xl p-8 text-white relative">
            <p className="text-2xl font-arabic text-right mb-6 leading-loose text-white">
              {pillars[active].verse}
            </p>
            <div className="flex items-center gap-3">
              <span className="h-1 bg-emerald-500 flex-1"></span>
              <span className="text-xs font-black text-emerald-400 tracking-widest uppercase">
                Quran {pillars[active].ref}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}