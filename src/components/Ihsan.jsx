"use client";

export default function IhsanContent() {
  return (
    <div className="max-w-md mx-auto space-y-5 py-4 px-4 animate-in fade-in duration-700">
      
      {/* 1. Simple Header */}
      <div className="border-l-4 border-emerald-500 pl-3">
        <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase italic">
          Al-Ihsan
        </h3>
        <p className="text-emerald-600 font-black text-[9px] tracking-[0.2em] uppercase">
          Worship with Excellence
        </p>
      </div>

      <p className="text-xs font-bold text-slate-600 leading-relaxed">
        Ihsan is the highest level of faith. It means doing everything...your prayers, your work, and your kindness, in the most beautiful way possible because you know Allah is watching.
      </p>

      {/* 2. The Golden Rule of Ihsan */}
      <div className="bg-slate-900 p-5 rounded-[2rem] text-white border-b-4 border-emerald-500 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/10 rounded-full blur-2xl"></div>
        <p className="text-sm font-bold leading-relaxed italic border-l-2 border-emerald-500 pl-4 relative z-10">
          "Worship Allah as if you see Him; for if you do not see Him, He surely sees you."
        </p>
        <p className="text-[8px] text-slate-400 mt-3 uppercase tracking-widest">— The Prophet (pbuh)</p>
      </div>

      {/* 3. The 3 Pillars of Ihsan */}
      <div className="grid gap-3">
        <div className="bg-white border-2 border-slate-100 p-4 rounded-2xl shadow-sm hover:border-emerald-200 transition-colors">
          <h4 className="text-[10px] font-black text-emerald-700 uppercase mb-2 tracking-widest">1. Excellence (Itqan)</h4>
          <p className="text-[11px] font-bold text-slate-900 leading-snug">
            Don't just "do" things. Do them perfectly. Whether it's a prayer or a job at work, do it like Allah is your only witness.
          </p>
        </div>

        <div className="bg-white border-2 border-slate-100 p-4 rounded-2xl shadow-sm hover:border-emerald-200 transition-colors">
          <h4 className="text-[10px] font-black text-emerald-700 uppercase mb-2 tracking-widest">2. Sincerity (Ikhlas)</h4>
          <p className="text-[11px] font-bold text-slate-900 leading-snug">
            Cleaning your heart from pride. You aren't doing good for likes or "thank yous", you do it only for Allah's smile.
          </p>
        </div>

        <div className="bg-white border-2 border-slate-100 p-4 rounded-2xl shadow-sm hover:border-emerald-200 transition-colors">
          <h4 className="text-[10px] font-black text-emerald-700 uppercase mb-2 tracking-widest">3. Kindness to All</h4>
          <p className="text-[11px] font-bold text-slate-900 leading-snug">
            Ihsan isn't just praying. It’s being gentle with parents, honest in business, and even showing mercy to animals.
          </p>
        </div>
      </div>

      {/* 4. The Internal Feeling */}
      <div className="bg-emerald-50 border border-emerald-100 p-5 rounded-[2rem]">
        <h4 className="text-[10px] font-black text-emerald-900 uppercase mb-3 text-center tracking-[0.2em]">The Heart of a Muhsin</h4>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/60 p-3 rounded-xl text-center">
            <p className="text-[9px] font-black text-emerald-800 uppercase mb-1">Peace</p>
            <p className="text-[10px] font-bold text-slate-700 leading-tight">Zero stress because you trust Allah's plan.</p>
          </div>
          <div className="bg-white/60 p-3 rounded-xl text-center">
            <p className="text-[9px] font-black text-emerald-800 uppercase mb-1">Love</p>
            <p className="text-[10px] font-bold text-slate-700 leading-tight">Worshiping out of love, not just fear.</p>
          </div>
        </div>
      </div>

      {/* 5. Indicators (The Checklist) */}
      <div className="p-2">
        <h4 className="text-[10px] font-black text-slate-400 uppercase mb-3 tracking-widest">Signs of Success</h4>
        <ul className="space-y-2">
          {["Doing good in secret", "Being patient when things get hard", "Always being thankful (Shukr)", "Forgiving others easily"].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-[11px] font-bold text-slate-800">
              <span className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[8px]">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
