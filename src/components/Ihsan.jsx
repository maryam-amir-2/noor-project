"use client";

export default function IhsanContent() {
  return (
    <div className="max-w-4xl mx-auto space-y-6 py-2 animate-in fade-in duration-500">
      
      {/* 1. Header Section - Tightened */}
      <div className="border-l-4 border-emerald-600 pl-4">
        <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic">
          Al-Ihsan
        </h3>
        <p className="text-emerald-700 font-black text-[10px] tracking-widest mt-0.5">
          THE HIGHEST LEVEL OF FAITH
        </p>
      </div>

      <p className="text-base font-bold text-slate-900 leading-snug">
        In Islam, Ihsan is worshiping Allah with excellence and sincerity—conscious that 
        He sees you, even if you can't see Him. It is the pinnacle of the spiritual journey.
      </p>

      {/* 2. The Prophet's Definition - Compact Hero */}
      <div className="bg-slate-900 p-6 rounded-3xl text-white border-b-4 border-emerald-600 shadow-lg">
        <p className="text-lg font-bold leading-relaxed italic border-l-2 border-emerald-500 pl-4">
          "To worship Allah as if you see Him, and if you do not see Him, then indeed He sees you."
        </p>
      </div>

      {/* 3. Core Meaning & Key Aspects - Compact Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white border-2 border-slate-900 p-5 rounded-2xl shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
          <h4 className="text-sm font-black text-emerald-700 uppercase mb-3 tracking-tight">Core Meaning</h4>
          <ul className="space-y-3 text-xs font-bold text-slate-900">
            <li><span className="text-emerald-600">◈</span> Excellence in doing things in the most beautiful way.</li>
            <li><span className="text-emerald-600">◈</span> Going beyond mere obligation to the pinnacle of faith.</li>
          </ul>
        </div>

        <div className="bg-white border-2 border-slate-900 p-5 rounded-2xl shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
          <h4 className="text-sm font-black text-emerald-700 uppercase mb-3 tracking-tight">Key Aspects</h4>
          <ul className="space-y-3 text-xs font-bold text-slate-900">
            <li><span className="text-emerald-600">◈</span> <span className="underline decoration-emerald-200">Worship:</span> Praying with focus (khushu') and sincerity.</li>
            <li><span className="text-emerald-600">◈</span> <span className="underline decoration-emerald-200">Deeds:</span> Acting with kindness and integrity in all life.</li>
          </ul>
        </div>
      </div>

      {/* 4. Salaf & Practical - Clean & Small */}
      <div className="bg-emerald-50 border-2 border-emerald-200 p-6 rounded-3xl">
        <h4 className="text-sm font-black text-emerald-900 uppercase mb-2">The Salaf Perspective</h4>
        <p className="text-xs font-bold text-slate-900 leading-normal mb-4">
          Early Muslims understood Ihsan as internalizing faith so deeply that actions 
          reflect a constant awareness of Allah's observation.
        </p>
        
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-emerald-200">
          <div>
            <p className="font-black text-emerald-800 text-[9px] uppercase">Quality</p>
            <p className="text-[11px] font-bold text-slate-900">Small, consistent deeds done with excellence.</p>
          </div>
          <div>
            <p className="font-black text-emerald-800 text-[9px] uppercase">Intentionality</p>
            <p className="text-[11px] font-bold text-slate-900">Infusing every action with the best intention.</p>
          </div>
        </div>
      </div>
    </div>
  );
}