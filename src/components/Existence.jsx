"use client";

export default function Existence() {
  const signs = [
    {
      title: "Design & Logic",
      desc: "Look at the precision of the planets and your DNA. A painting needs a painter; a code needs a coder. A universe this perfect cannot be a 'lucky accident'.",
      icon: "⚖️"
    },
    {
      title: "The Beginning",
      desc: "Science confirms the universe had a starting point. Logic says nothing comes from nothing. There must be a 'First Cause' that wasn't created by anything else.",
      icon: "💥"
    },
    {
      title: "The Provision",
      desc: "The earth provides oxygen, water, and food exactly when we need it. This isn't just nature, it's a system designed to keep you alive by a Sustainer.",
      icon: "🌱"
    }
  ];

  return (
    <section className="max-w-md mx-auto px-4 py-8 animate-in fade-in duration-700" id="logic">
      
      {/* Header Block */}
      <div className="bg-slate-900 rounded-[2rem] p-8 text-center mb-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-24 h-24 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <span className="text-emerald-400 font-black tracking-[0.3em] text-[10px] uppercase mb-2 block">Step 01: The Source</span>
        <h2 className="text-3xl font-black text-white leading-tight uppercase tracking-tighter">
          DOES <br/><span className="text-emerald-500">GOD</span> EXIST?
        </h2>
      </div>

      {/* Main Argument */}
      <div className="bg-white border-2 border-slate-100 rounded-[2rem] p-6 mb-6">
        <p className="text-xs font-bold text-slate-600 leading-relaxed mb-6">
          Islam doesn't ask for blind faith. It asks you to look at the "Signs" (Aayaat) around you. Common sense is the first step to finding Allah.
        </p>

        <div className="bg-emerald-50 p-5 rounded-2xl border-l-4 border-emerald-500 mb-6">
          <p className="italic text-emerald-900 text-sm font-bold leading-snug">
            "Were they created by nothing, or were they the creators of themselves?"
          </p>
          <p className="text-[10px] font-black mt-3 text-emerald-700 uppercase tracking-widest">— Quran 52:35</p>
        </div>

        {/* The 3 Signs Grid */}
        <div className="space-y-4">
          {signs.map((sign, i) => (
            <div key={i} className="flex gap-4 items-start p-2">
              <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-xl shrink-0 border border-slate-100">
                {sign.icon}
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-900 uppercase mb-1">{sign.title}</h4>
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                  {sign.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The Fitrah Callout */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Internal Compass</h4>
        </div>
        <p className="text-[11px] font-bold text-slate-700 leading-normal">
          Deep down, every person has <span className="text-emerald-700 underline decoration-2">Fitrah</span>...a natural instinct that knows we have a Creator. We only feel "lost" when we ignore it.
        </p>
      </div>

    </section>
  );
}
