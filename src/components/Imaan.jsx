"use client";
import { useState } from 'react';

export default function ImaanContent() {
  const [active, setActive] = useState(0);

  const pillars = [
    { 
      title: "Allah", 
      arabic: "الله",
      concept: "ONENESS",
      isDetailed: true,
      sections: [
        {
          label: "1. The Lord (Ruboobiyyah)",
          desc: "Believing Allah is the only Creator and Owner of everything. He gives us life, food, and air. No one helps Him run the universe.",
          ref: "Quran 39:62"
        },
        {
          label: "2. Worship (Uloohiyyah)",
          desc: "This means we pray, fast, and ask for help from Allah ONLY. Praying to anyone else is the biggest sin (Shirk).",
          ref: "Quran 72:18"
        },
        {
          label: "3. Names & Qualities",
          desc: "Believing Allah is perfect. He is the All-Hearing and All-Seeing. We don't imagine Him looking like a human.",
          ref: "Quran 42:11"
        }
      ],
      footerRef: "Prophet ﷺ said: 'The right of Allah is that we worship Him and don't join anyone with Him.'"
    },
    { 
      title: "Angels", 
      arabic: "المَلَائِكَة",
      concept: "UNSEEN SERVANTS",
      desc: "Made from light, they always obey Allah and never make mistakes. They are not 'gods' and we do not pray to them.",
      details: "Jibreel brings the Message, others record our good and bad deeds every day.",
      ref: "Surah An-Nisa 4:136",
      hadith: "Angels were created from light. (Sahih Muslim)"
    },
    { 
      title: "Books", 
      arabic: "الكُتُب",
      concept: "THE BOOKS",
      desc: "Allah sent books to show us how to live. We believe in the original Torah and Gospel, but they were changed by people.",
      details: "The Quran is the final book. Allah promised to protect it from ever being changed.",
      ref: "Surah Al-Ma'idah 5:48",
      hadith: "The Quran confirms the books that came before it."
    },
    { 
      title: "Messengers", 
      arabic: "الرُّسُل",
      concept: "PROPHETS",
      desc: "Allah chose the best men to teach us. We love and believe in all of them, from Adam and Noah to Jesus and Moses.",
      details: "Muhammad ﷺ is the final Prophet. He was sent to teach all of humanity.",
      ref: "Surah Faatir 35:24",
      hadith: "All Prophets taught the same message: Worship Allah alone."
    },
    { 
      title: "Last Day", 
      arabic: "اليَوْم الآخِر",
      concept: "JUDGMENT DAY",
      desc: "This life is a test that will end. One day, Allah will bring everyone back to life to see their deeds.",
      details: "Good people go to Paradise (Jannah) and bad people to Hell (Naar). It is a day of perfect justice.",
      ref: "Surah Al-Hajj 22:7",
      hadith: "Allah will bring the dead out of their graves."
    },
    { 
      title: "The Decree", 
      arabic: "القَدَر",
      concept: "ALLAH'S PLAN",
      desc: "Allah knows everything before it happens. Nothing is a surprise to Him. He has written our life story.",
      details: "This makes us patient when things are hard and thankful when things are good. We trust His plan.",
      ref: "Surah Al-Qamar 54:49",
      hadith: "Everything happens by Allah's will."
    }
  ];

  return (
    <div className="max-w-sm mx-auto p-4 space-y-6">
      {/* Header Area */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tighter uppercase leading-none">Imaan</h2>
          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">Foundations of Faith</p>
        </div>
        <div className="flex gap-1.5">
          {pillars.map((_, i) => (
            <div key={i} className={`h-1 w-3 rounded-full transition-all ${active === i ? "bg-amber-500 w-6" : "bg-slate-200"}`} />
          ))}
        </div>
      </div>

      {/* Main Card */}
      <div className="relative">
        <div className="bg-slate-900 rounded-[2.5rem] p-6 text-white shadow-2xl h-[500px] flex flex-col border border-slate-800">
          
          {/* Top Section */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-[10px] font-black text-amber-500 mb-1 uppercase tracking-widest">Article 0{active + 1}</p>
              <h3 className="text-2xl font-black uppercase tracking-tight leading-none">{pillars[active].title}</h3>
            </div>
            <span className="text-4xl font-arabic text-amber-500 font-bold leading-none">
              {pillars[active].arabic}
            </span>
          </div>

          {/* Body Section */}
          <div className="flex-1 overflow-y-auto pr-1 space-y-4">
            {pillars[active].isDetailed ? (
              <div className="space-y-4">
                {pillars[active].sections.map((sec, idx) => (
                  <div key={idx} className="space-y-1 border-l-2 border-amber-500/40 pl-3">
                    <h4 className="text-[10px] font-black text-amber-500 uppercase">{sec.label}</h4>
                    <p className="text-[13px] text-slate-200 leading-snug font-medium">{sec.desc}</p>
                    <p className="text-[9px] text-slate-500 font-bold uppercase tracking-tighter">{sec.ref}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-sm font-bold text-slate-200 leading-relaxed">
                  {pillars[active].desc}
                </p>
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <p className="text-[12px] text-slate-400 leading-relaxed italic font-medium">
                    {pillars[active].details}
                  </p>
                </div>
                <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-amber-500 rounded-full" />
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Source: {pillars[active].ref}</p>
                    </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Controls */}
          <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
            <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">
              Topic: <span className="text-slate-300">{pillars[active].concept}</span>
            </p>
            <div className="flex gap-2">
                <button 
                  disabled={active === 0}
                  onClick={() => setActive(active - 1)}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white disabled:opacity-0"
                >
                    ←
                </button>
                <button 
                  disabled={active === 5}
                  onClick={() => setActive(active + 1)}
                  className="w-10 h-10 rounded-full bg-amber-500 text-slate-900 flex items-center justify-center font-black"
                >
                    →
                </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
        <p className="text-[11px] text-slate-500 text-center font-bold leading-relaxed">
          Prophet Muhammad ﷺ said: "Imaan is to believe in Allah, His Angels, His Books, His Messengers, the Last Day, and His Plan (Qadar)."
        </p>
      </div>
    </div>
  );
}
