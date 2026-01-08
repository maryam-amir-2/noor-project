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
    <section className="max-w-4xl mx-auto px-6 py-12" id="tawheed">
      <div className="bg-emerald-900 rounded-3xl p-8 md:p-12 text-white">
        <span className="text-emerald-400 font-bold tracking-widest text-xs uppercase">Step 02</span>
        <h2 className="text-3xl font-bold mt-2 mb-6 text-white border-b border-emerald-800 pb-4">
          Tawheed: The Core of Islam
        </h2>
        
        <p className="text-emerald-100 mb-8 leading-relaxed">
          Tawheed isn't just "believing in one God." It is understanding that Allah is unique in every way. 
          Without Tawheed, our Islam is like a building without a foundation.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((item, index) => (
            <div key={index} className="bg-emerald-800/50 p-6 rounded-2xl border border-emerald-700">
              <h3 className="font-bold text-lg mb-2 text-emerald-300">{item.title}</h3>
              <p className="text-sm text-emerald-100 leading-relaxed mb-4">{item.desc}</p>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-900/50 px-2 py-1 rounded">
                {item.evidence}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}