export default function WhyIslam() {
  const proofs = [
    {
      title: "The Challenge",
      desc: "The Quran challenged the masters of Arabic poetry to produce even one short chapter (Surah) like it. 1,400 years later, that challenge remains unanswered.",
      ref: "Surah Al-Baqarah, 2:23"
    },
    {
      title: "Perfect Preservation",
      desc: "Unlike other books, the Quran is the only one memorized cover-to-cover by millions. If every Bible and Torah were destroyed today, they would be gone. If every Quran were destroyed, it could be rewritten by tonight.",
      ref: "Surah Al-Hijr, 15:9"
    },
    {
      title: "Scientific Truth",
      desc: "The Quran describes the stages of an embryo, the expansion of the universe, and the deep darkness of the ocean—facts only discovered by scientists in the last 100 years.",
      ref: "Surah Az-Zariyat, 51:47"
    }
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
        <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase text-center block mb-2">Step 03</span>
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-8 italic">"Is it not enough for them that We sent down to you the Book?"</h2>
        
        <div className="grid gap-6">
          {proofs.map((proof, i) => (
            <div key={i} className="flex gap-6 p-6 rounded-2xl hover:bg-emerald-50 transition-colors group">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center font-bold text-emerald-700 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                0{i + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{proof.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-3">{proof.desc}</p>
                <p className="text-[10px] font-mono text-emerald-600 uppercase tracking-widest">{proof.ref}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}