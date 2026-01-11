"use client";

export default function WhyIslam() {
  const proofs = [
    {
      title: "The Challenge",
      concept: "UNIQUE",
      desc: "The Quran challenged everyone to write just one chapter like it. 1,400 years later, nobody has been able to match its beauty, wisdom, or style.",
      ref: "Quran 2:23"
    },
    {
      title: "Never Changed",
      concept: "PRESERVED",
      desc: "Millions know the Quran by heart, letter for letter. If every printed book vanished today, the Quran would be exactly the same tomorrow.",
      ref: "Quran 15:9"
    },
    {
      title: "Built-in Faith",
      concept: "FITRAH",
      desc: "Humans are born to believe in one Creator. Even an atheist instinctively calls for help from a higher power when in a life-or-death crisis.",
      ref: "Sahih Muslim 2658"
    },
    {
      title: "Simple Logic",
      concept: "ONE WILL",
      desc: "A universe with two 'bosses' (gods) would be in chaos. One perfect universe proves there is one perfect Designer behind it all.",
      ref: "Quran 21:22"
    },
    {
      title: "Science Facts",
      concept: "MIRACLE",
      desc: "The Quran describes how an embryo grows and how the universe is expanding—facts only proven by science in the last 100 years.",
      ref: "Quran 51:47"
    },
    {
      title: "The Last Link",
      concept: "FINAL",
      desc: "Islam isn't new. It’s the final message sent to finish what was started by Prophets like Noah, Abraham, Moses, and Jesus.",
      ref: "Quran 5:3"
    }
  ];

  return (
    <section className="max-w-md mx-auto px-4 py-8">
      {/* Tight Header */}
      <div className="bg-slate-900 rounded-[2rem] p-6 text-center mb-6 shadow-xl border border-slate-800">
        <span className="text-emerald-400 font-black tracking-widest text-[9px] uppercase mb-2 block">Why Islam?</span>
        <h2 className="text-xl md:text-2xl font-black text-white leading-tight uppercase">
          Signs of the <br/><span className="text-emerald-500">Truth</span>
        </h2>
      </div>

      {/* Small Mobile-Optimized Blocks */}
      <div className="space-y-3">
        {proofs.map((proof, i) => (
          <div key={i} className="bg-white border-2 border-slate-100 p-4 rounded-2xl hover:border-emerald-500 transition-all active:scale-[0.98]">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[8px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md uppercase tracking-tighter">
                {proof.concept}
              </span>
              <span className="text-slate-200 font-black text-lg">0{i + 1}</span>
            </div>
            
            <h3 className="text-sm font-black text-slate-900 mb-1 uppercase tracking-tight">
              {proof.title}
            </h3>
            
            <p className="text-slate-500 text-[11px] leading-relaxed mb-3 font-medium">
              {proof.desc}
            </p>
            
            <p className="text-[8px] font-bold text-slate-300 uppercase tracking-widest border-t pt-2">
              Source: {proof.ref}
            </p>
          </div>
        ))}
      </div>

      {/* Compact Conclusion */}
      <div className="mt-8 bg-emerald-50 rounded-2xl p-5 border border-emerald-100 text-center">
        <p className="text-emerald-900 text-[10px] font-bold leading-normal">
          Islam isn't blind faith. It's a path for people who use their logic and follow their natural hearts.
        </p>
      </div>
    </section>
  );
}
