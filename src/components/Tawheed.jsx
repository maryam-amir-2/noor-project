export default function Tawheed() {
  const categories = [
    {
      title: "Lordship (Rububiyyah)",
      desc: "Believing that Allah is the only Creator, Provider, and Owner of everything in the universe.",
      evidence: "Surah Al-Fatihah, Ayah 2"
    },
    {
      title: "Worship (Uluhiyyah)",
      desc: "Directing all acts of worship—like prayer, dua, and hope—to Allah alone, without any partners.",
      evidence: "Surah Al-Jinn, Ayah 18"
    },
    {
      title: "Names & Attributes",
      desc: "Believing in Allah's names (like Al-Rahman) exactly as they are in the Quran, without changing their meaning or imagining Him to look like His creation.",
      evidence: "Surah Ash-Shura, Ayah 11"
    }
  ];

  return (
    /* UPDATED: Reduced padding and adjusted max-width for mobile (Line 21) */
    <section className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12" id="tawheed">
      
      {/* UPDATED: Changed p-8 to p-6 md:p-12 (Line 23) */}
      <div className="bg-emerald-900 rounded-3xl p-6 md:p-12 text-white shadow-xl">
        <span className="text-emerald-400 font-bold tracking-widest text-[10px] md:text-xs uppercase">Step 02</span>
        
        {/* UPDATED: Responsive text size text-2xl md:text-3xl (Line 26) */}
        <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-6 text-white border-b border-emerald-800 pb-4">
          Tawheed: The Core of Islam
        </h2>
        
        {/* UPDATED: Adjusted text size and leading for readability (Line 30) */}
        <p className="text-emerald-100 mb-8 leading-relaxed text-sm md:text-base">
          Tawheed isn't just "believing in one God." It is understanding that Allah is unique in every way. 
          Without Tawheed, our Islam is like a building without a foundation.
        </p>

        {/* UPDATED: Grid gap adjustment (Line 35) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((item, index) => (
            <div key={index} className="bg-emerald-800/50 p-6 rounded-2xl border border-emerald-700">
              {/* UPDATED: Responsive font text-base md:text-lg (Line 38) */}
              <h3 className="font-bold text-base md:text-lg mb-2 text-emerald-300">{item.title}</h3>
              <p className="text-xs md:text-sm text-emerald-50/80 leading-relaxed mb-4">{item.desc}</p>
              <div className="pt-3 border-t border-emerald-700/50">
                <p className="text-[9px] md:text-[10px] font-black uppercase tracking-tighter text-emerald-400">{item.evidence}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
