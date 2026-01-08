"use client";
import { useState } from 'react';

export default function Pillars() {
  const [activeTab, setActiveTab] = useState('overview');

  const pillarData = [
    { id: 'shahadah', title: '01. Shahadah', icon: '☝️' },
    { id: 'salah', title: '02. Salah', icon: '🕌' },
    { id: 'zakah', title: '03. Zakah', icon: '💰' },
    { id: 'sawm', title: '04. Sawm', icon: '🌙' },
    { id: 'hajj', title: '05. Hajj', icon: '🕋' },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      {/* 1. THE AUTHORITY HEADER */}
      <div className="bg-slate-950 text-white p-8 rounded-3xl mb-8 text-center shadow-xl border-b-4 border-emerald-600">
        <h2 className="text-3xl font-black mb-4 uppercase tracking-tighter text-emerald-400">The 5 Foundations</h2>
        <div className="bg-slate-900 p-4 rounded-xl inline-block border border-slate-800">
          <p className="italic text-emerald-100 text-sm font-medium">
            "Islam is built upon five..." — Prophet Muhammad ﷺ [Sahih Bukhari 8]
          </p>
        </div>
        <p className="mt-6 text-slate-300 text-sm max-w-xl mx-auto font-bold leading-relaxed">
          These are Fard (Obligatory). Fulfilling them with sincerity leads to Allah's Love and Jannah.
        </p>
      </div>

      {/* 2. PILLAR NAVIGATION */}
      <div className="flex overflow-x-auto gap-2 mb-8 pb-2 no-scrollbar">
        {pillarData.map((p) => (
          <button
            key={p.id}
            onClick={() => setActiveTab(p.id)}
            className={`flex-shrink-0 px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest transition-all ${
              activeTab === p.id 
              ? "bg-emerald-600 text-white shadow-lg scale-105" 
              : "bg-white text-slate-900 border-2 border-slate-100 hover:border-emerald-200"
            }`}
          >
            {p.icon} {p.title}
          </button>
        ))}
      </div>

      {/* 3. CONTENT AREA */}
      <div className="bg-white rounded-[2.5rem] border-2 border-slate-100 p-6 md:p-10 shadow-sm animate-in fade-in zoom-in duration-500">
        {activeTab === 'shahadah' && <ShahadahContent />}
        {activeTab === 'salah' && <SalahContent />}
        {activeTab === 'zakah' && <ZakahContent />}
        {activeTab === 'sawm' && <SawmContent />}
        {activeTab === 'hajj' && <HajjContent />}
      </div>
    </section>
  );
}

/* --- SUB-COMPONENTS --- */

function ShahadahContent() {
  const conditions = [
    { title: "Al-’Ilm (Knowledge)", desc: "Understanding the meaning of the declaration, both what it negates and what it affirms." },
    { title: "Al-Yaqeen (Certainty)", desc: "Having absolute certainty in the heart without even a grain of doubt." },
    { title: "Al-Ikhlaas (Sincerity)", desc: "Directing all worship to Allah alone, seeking only His pleasure." },
    { title: "As-Sidq (Truthfulness)", desc: "Saying it from the heart, where the heart matches what the tongue speaks." },
    { title: "Al-Mahabbah (Love)", desc: "Loving this statement, what it stands for, and those who act upon it." },
    { title: "Al-Inqiyaad (Submission)", desc: "Complete physical and spiritual submission to the commands of Allah." },
    { title: "Al-Qubool (Acceptance)", desc: "Accepting everything this statement necessitates with a willing heart." }
  ];

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <h3 className="text-4xl font-black text-slate-900 tracking-tighter">The Shahadah</h3>
        <span className="bg-emerald-900 text-white text-[10px] font-black px-4 py-1.5 rounded-full tracking-widest uppercase italic">The Key to Jannah</span>
      </div>

      <div className="p-8 bg-slate-950 rounded-[2.5rem] border-b-8 border-emerald-600 shadow-2xl">
        <p className="text-4xl font-arabic text-white text-right mb-6 leading-[1.8]">
          لَا إِلٰهَ إِلَّا الله مُحَمَّدٌ رَسُولُ الله
        </p>
        <div className="space-y-4 pt-6 border-t border-slate-800">
          <p className="text-emerald-400 font-black text-xs tracking-widest uppercase">The Testimony</p>
          <p className="text-white font-bold text-xl leading-relaxed italic">
            "None has the right to be worshipped except Allah, and Muhammad is the Messenger of Allah."
          </p>
        </div>
      </div>

      <div>
        <h4 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
          <span className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center text-sm">7</span>
          The Conditions (Shurut)
        </h4>
        <div className="grid md:grid-cols-2 gap-4">
          {conditions.map((item, idx) => (
            <div key={idx} className="p-5 bg-white border-2 border-slate-100 rounded-2xl hover:border-emerald-500 transition-colors group">
              <p className="font-black text-slate-900 group-hover:text-emerald-700 transition-colors mb-1">{item.title}</p>
              <p className="text-slate-600 text-xs font-bold leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


function SalahContent() {
  const [expandedStep, setExpandedStep] = useState(0); // Set 0 to have first one open

  const steps = [
    { num: "01", title: "Opening Takbir", instruction: "Raise hands to shoulders or ears.", arabic: "اللهُ أَكْبَرُ", roman: "Allahu Akbar", english: "Allah is the Greatest.", ref: "Bukhari 735", img: "/salah-1.png" },
    { num: "02", title: "The Standing (Qiyam)", instruction: "Right hand over left on chest. Recite Fatiha.", arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ. الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ. الرَّحْمَنِ الرَّحِيمِ. مَالِكِ يَوْمِ الدِّينِ. إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ. اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ. صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ", roman: "Bismillaahir-Rahmaanir-Raheem...", english: "In the name of Allah... All praise is due to Allah...", ref: "Muslim 395", img: "/salah-2.png" },
    { num: "03", title: "Ruku (Bowing)", instruction: "Say 'Allahu Akbar'. Back flat, hands on knees.", arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ", roman: "Subhana Rabbiyal 'Adheem (3x)", english: "Glory be to my Lord, the Magnificent.", ref: "Muslim 772", img: "/salah-3.png" },
    { num: "04", title: "Rising from Ruku", instruction: "Stand straight. 'Sami Allahu liman hamidah' while rising.", arabic: "سَمِعَ اللهُ لِمَنْ حَمِدَهُ. رَبَّنَا وَلَكَ الْحَمْدُ", roman: "Sami' Allahu liman hamidah. Rabbana wa lakal hamd.", english: "Allah hears those who praise Him. Our Lord, to You is all praise.", ref: "Bukhari 722", img: "/salah-4.png" },
    { num: "05", title: "First Sujud", instruction: "Say 'Allahu Akbar'. 7 body parts touch the floor.", arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى", roman: "Subhana Rabbiyal 'A-la (3x)", english: "Glory be to my Lord, the Most High.", ref: "Muslim 486", img: "/salah-5.png" },
    { num: "06", title: "Jalsa (Sitting)", instruction: "Say 'Allahu Akbar'. Sit upright between prostrations.", arabic: "اللَّهُمَّ اغْفِرْ لِي، وَارْحَمْنِي، وَاجْبُرْنِي، وَاهْدِنِي، وَارْزُقْنِي", roman: "Allahumma-ghfir-li, war-hamni...", english: "O Allah, forgive me, have mercy on me...", ref: "Tirmidhi 284", img: "/salah-6.png" },
    { num: "07", title: "Second Sujud", instruction: "Repeat the prostration exactly as the first.", arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى", roman: "Subhana Rabbiyal 'A-la", english: "Glory be to my Lord, the Most High.", img: "/salah-7.png" },
    { num: "08", title: "Tashahhud & Salawat", instruction: "Point index finger. Recite testimony and blessings.", arabic: "التَّحِيَّاتُ لِلَّهِ... اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ...", roman: "At-tahiyyatu lillahi... Allahumma salli 'ala Muhammad...", english: "All compliments are for Allah... O Allah, send blessings...", ref: "Bukhari 1202", img: "/salah-8.png" },
    { num: "09", title: "The Tasleem", instruction: "Turn head right, then left to end.", arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ", roman: "As-salamu alaykum wa rahmatullah", english: "May peace and mercy be upon you.", ref: "Muslim 582", img: "/salah-9.png" }
  ];

  return (
    <div className="space-y-4">
  {/* NEW HIGH-CONTRAST BANNER */}
  <div className="bg-slate-950 text-white p-6 rounded-[2rem] mb-6 border-l-8 border-emerald-500 shadow-xl">
    <p className="text-emerald-400 font-black text-[10px] uppercase tracking-widest mb-2 italic">Essential Prophet ﷺ Guidance</p>
    <p className="font-bold text-sm leading-relaxed mb-3">
      "Pray as you have seen me praying" <span className="text-slate-500 font-black text-[9px]">— Bukhari 631</span>. 
      There is <span className="text-emerald-400 underline underline-offset-4">no difference</span> in positions for men and women.
    </p>
    <div className="h-px bg-slate-800 w-full my-3"></div>
    <p className="text-xs text-slate-300 font-medium">
      Tap any step to see the full Dua.
    </p>
  </div>

      {steps.map((step, index) => (
        <div 
          key={step.num} 
          onClick={() => setExpandedStep(expandedStep === index ? -1 : index)}
          className={`cursor-pointer group transition-all duration-300 border-2 rounded-3xl overflow-hidden ${
            expandedStep === index ? "border-emerald-500 shadow-lg bg-white" : "border-slate-100 hover:border-slate-200 bg-slate-50/50"
          }`}
        >
          {/* Main Row: Visible at all times */}
          <div className="flex items-center p-4 md:p-6 gap-6">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl flex-shrink-0 border border-slate-100 p-2 overflow-hidden shadow-sm group-hover:scale-105 transition-transform">
              <img src={step.img} alt={step.title} className="w-full h-full object-contain" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <span className="bg-slate-900 text-white text-[10px] font-black px-2 py-0.5 rounded italic">STEP {step.num}</span>
                <h3 className={`font-black text-lg md:text-xl tracking-tight transition-colors ${expandedStep === index ? "text-emerald-700" : "text-slate-900"}`}>
                  {step.title}
                </h3>
              </div>
              <p className="text-slate-500 text-xs font-bold leading-tight">{step.instruction}</p>
            </div>

            <div className={`transition-transform duration-300 text-slate-300 ${expandedStep === index ? "rotate-180 text-emerald-500" : ""}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>

          {/* Expandable Content: Hidden unless clicked */}
          {expandedStep === index && (
            <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-300">
              <div className="bg-slate-950 rounded-[2rem] p-6 shadow-inner border-b-4 border-emerald-500">
                <p className="text-3xl font-arabic text-white text-right mb-6 leading-[1.8] tracking-wide">
                  {step.arabic}
                </p>
                
                <div className="space-y-3 pt-4 border-t border-slate-800">
                  <div className="flex gap-2 items-start">
                    <span className="text-emerald-500 font-black text-[10px] mt-1 shrink-0">ROMAN:</span>
                    <p className="text-emerald-400 font-mono text-xs leading-relaxed font-bold uppercase">{step.roman}</p>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="text-white font-black text-[10px] mt-1 shrink-0">MEANING:</span>
                    <p className="text-slate-100 text-sm font-bold leading-relaxed italic">{step.english}</p>
                  </div>
                </div>
              </div>
              
              {step.ref && (
                <p className="mt-4 text-[9px] font-black text-slate-400 uppercase tracking-widest pl-2">
                  Reference: {step.ref}
                </p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}


function ZakahContent() {
  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <h3 className="text-4xl font-black text-slate-900 tracking-tighter">Az-Zakah</h3>
        <span className="bg-emerald-900 text-white text-[10px] font-black px-4 py-1.5 rounded-full tracking-widest uppercase italic">Pillar 03</span>
      </div>

      <div className="bg-emerald-50 p-6 rounded-3xl border-2 border-emerald-100">
        <p className="text-emerald-900 font-bold leading-relaxed">
          Zakat is a mandatory annual obligation requiring Muslims who meet the <span className="underline decoration-emerald-400 decoration-2">Nisab</span> (wealth threshold) to donate 2.5% of their surplus wealth. It is a spiritual obligation that purifies both your money and your soul.
        </p>
      </div>

      {/* Categories */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="p-6 bg-slate-900 rounded-[2rem] text-white">
            <h4 className="font-black text-emerald-400 text-xs uppercase tracking-widest mb-3 italic">01. Obligation & Purpose</h4>
            <p className="text-sm font-bold text-slate-100 leading-relaxed">
              Distinct from voluntary charity (Sadaqah), Zakah purifies wealth, cleanses the soul from greed, and fosters social justice.
            </p>
          </div>
          
          <div className="p-6 bg-white border-2 border-slate-100 rounded-[2rem]">
            <h4 className="font-black text-slate-400 text-xs uppercase tracking-widest mb-3 italic">02. Calculation (How it works)</h4>
            <ul className="text-sm font-bold text-slate-800 space-y-3">
              <li className="flex gap-2">• <span className="text-emerald-600">Nisab:</span> Threshold of 85g gold or 595g silver.</li>
              <li className="flex gap-2">• <span className="text-emerald-600">Amount:</span> 2.5% (1/40th) of accumulated savings.</li>
              <li className="flex gap-2">• <span className="text-emerald-600">Duration:</span> Wealth must be held for 1 full Lunar Year.</li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-50 p-8 rounded-[2rem] border-2 border-slate-100 flex flex-col justify-center">
          <h4 className="font-black text-slate-900 text-sm mb-4 uppercase tracking-tighter">The Divine Command (Full Verse)</h4>
          <p className="text-2xl font-arabic text-right mb-4 leading-loose text-slate-800">
            إِنَّمَا الصَّدَقَاتُ لِلْفُقَرَاءِ وَالْمَسَاكِينِ وَالْعَامِلِينَ عَلَيْهَا وَالْمُؤَلَّفَةِ قُلُوبُهُمْ وَفِي الرِّقَابِ وَالْغَارِمِينَ وَفِي سَبِيلِ اللَّهِ وَابْنِ السَّبِيلِ ۖ فَرِيضَةً مِّنَ اللَّهِ ۗ وَاللَّهُ عَلِيمٌ حَكِيمٌ
          </p>
          <div className="pt-4 border-t border-slate-200">
            <p className="text-slate-600 text-xs font-bold italic leading-relaxed">
              "Zakah expenditures are only for the poor and for the needy and for those employed to collect [zakah] and for bringing hearts together [for Islam] and for freeing captives [or slaves] and for those in debt and for the cause of Allah and for the [stranded] traveler - an obligation [imposed] by Allah. And Allah is Knowing and Wise."
            </p>
            <p className="mt-3 text-[10px] font-black text-emerald-600 uppercase tracking-widest">Surah At-Tawbah 9:60</p>
          </div>
        </div>
      </div>

      <div className="p-6 bg-slate-950 rounded-3xl text-center">
        <p className="text-white font-black text-sm uppercase tracking-[0.3em]">Redistribution of Wealth • Purification • Justice</p>
      </div>
    </div>
  );
}


function SawmContent() {
  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <h3 className="text-4xl font-black text-slate-900 tracking-tighter">As-Sawm</h3>
        <span className="bg-emerald-900 text-white text-[10px] font-black px-4 py-1.5 rounded-full tracking-widest uppercase italic">Pillar 04</span>
      </div>

      <div className="p-8 bg-slate-950 rounded-[2.5rem] border-b-8 border-emerald-600 shadow-2xl">
        <p className="text-2xl font-arabic text-white text-right mb-6 leading-[1.8]">
          يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ
        </p>
        <div className="space-y-4 pt-6 border-t border-slate-800">
          <p className="text-emerald-400 font-black text-xs tracking-widest uppercase">The Command</p>
          <p className="text-white font-bold text-lg leading-relaxed italic">
            "O you who have believed, decreed upon you is fasting as it was decreed upon those before you that you may become God-conscious (Taqwa)."
          </p>
          <p className="text-[10px] font-black text-slate-500 tracking-widest">SURAH AL-BAQARAH 2:183</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-6 bg-white border-2 border-slate-100 rounded-3xl">
          <h4 className="font-black text-slate-900 text-xs uppercase mb-3 tracking-widest">The "How"</h4>
          <p className="text-slate-600 text-xs font-bold leading-relaxed">
            Abstaining from food, drink, and marital relations from <span className="text-emerald-600">Fajr (Dawn)</span> until <span className="text-emerald-600">Maghrib (Sunset)</span> with the sincere intention of worshipping Allah.
          </p>
        </div>
        <div className="p-6 bg-white border-2 border-slate-100 rounded-3xl">
          <h4 className="font-black text-slate-900 text-xs uppercase mb-3 tracking-widest">The "What to Avoid"</h4>
          <p className="text-slate-600 text-xs font-bold leading-relaxed">
            Fasting is not just of the stomach. One must avoid lying, backbiting, arguing, and all sinful speech or behavior that diminishes the reward.
          </p>
        </div>
        <div className="p-6 bg-emerald-50 border-2 border-emerald-100 rounded-3xl">
          <h4 className="font-black text-emerald-900 text-xs uppercase mb-3 tracking-widest">The Benefit</h4>
          <p className="text-emerald-800 text-xs font-bold leading-relaxed">
            It builds Taqwa (God-consciousness), develops self-discipline, and helps us empathize with those who go hungry every day of the year.
          </p>
        </div>
      </div>
    </div>
  );
}



function HajjContent() {
  const hajjSteps = [
    { title: "Ihram", desc: "Entering a state of ritual purity and wearing the specific white garments." },
    { title: "Tawaf", desc: "Circling the Kaaba seven times in the Masjid al-Haram." },
    { title: "Sa'i", desc: "Walking seven times between the hills of Safa and Marwa." },
    { title: "Arafah", desc: "The pinnacle of Hajj: standing on the plain of Arafat in prayer and repentance." },
    { title: "Muzdalifah", desc: "Staying overnight and gathering pebbles for the stoning." },
    { title: "Ramy al-Jamarat", desc: "Symbolically stoning the devil to reject evil." }
  ];

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <h3 className="text-4xl font-black text-slate-900 tracking-tighter">Al-Hajj</h3>
        <span className="bg-emerald-900 text-white text-[10px] font-black px-4 py-1.5 rounded-full tracking-widest uppercase italic">Pillar 05</span>
      </div>

      <div className="bg-slate-50 p-8 rounded-[2.5rem] border-2 border-slate-100">
        <p className="text-2xl font-arabic text-right mb-6 leading-loose text-slate-800">
          وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا ۚ وَمَن كَفَرَ فَإِنَّ اللَّهَ غَنِيٌّ عَنِ الْعَالَمِينَ
        </p>
        <div className="pt-4 border-t border-slate-200">
          <p className="text-slate-600 font-bold text-sm italic leading-relaxed">
            "And [due] to Allah from the people is a pilgrimage to the House - for whoever is able to find thereto a way. But whoever disbelieves - then indeed, Allah is free from need of the worlds."
          </p>
          <p className="mt-3 text-[10px] font-black text-emerald-600 uppercase tracking-widest">SURAH ALI 'IMRAN 3:97</p>
        </div>
      </div>

      <div className="bg-slate-900 rounded-[2rem] p-8 text-white shadow-xl">
        <h4 className="text-emerald-400 font-black text-xs uppercase tracking-widest mb-6">The Journey (Brief Overview)</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {hajjSteps.map((step, idx) => (
            <div key={idx} className="space-y-2">
              <span className="text-[10px] font-black text-slate-500 uppercase italic">Step {idx + 1}</span>
              <p className="font-bold text-sm text-white">{step.title}</p>
              <p className="text-[10px] text-slate-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-6 bg-emerald-900 rounded-2xl text-center">
        <p className="text-emerald-100 font-bold text-sm leading-relaxed">
          Hajj is mandatory once in a lifetime for every Muslim who is physically and financially able. 
          It is a complete reset of the soul, erasing past sins for those whose Hajj is accepted.
        </p>
      </div>
    </div>
  );
}