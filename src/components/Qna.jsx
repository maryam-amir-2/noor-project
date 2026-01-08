"use client";
import { useState } from 'react';

export default function QnaContent() {
  const [openIndex, setOpenIndex] = useState(0);

  const questions = [
    {
      q: "Does Islam contradict science?",
      a: "No. The Quran encourages reasoning. Concepts like embryonic development and the expanding universe were mentioned centuries before modern discovery.",
    },
    {
      q: "Why do bad things happen?",
      a: "Life is a test. Hardship allows for the growth of virtues like patience and gratitude. True justice is served in the Hereafter.",
    },
    {
      q: "Is Islam a 'New' religion?",
      a: "No. It is the original message of all Prophets (Adam, Abraham, Moses, Jesus). Muhammad ﷺ is the final Messenger who restored this pure faith.",
    },
    {
      q: "What is the purpose of life?",
      a: "To recognize and worship our Creator alone, and to live a life of goodness, justice, and mercy as His representative on earth.",
    }
  ];

  return (
    <div className="max-w-5xl mx-auto py-6 px-4">
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        
        {/* LEFT SIDE: Compact Header */}
        <div className="lg:w-1/3 sticky top-10">
          <p className="text-emerald-700 font-black text-[10px] tracking-widest uppercase mb-2">
            Common Doubts
          </p>
          <h3 className="text-4xl font-black text-slate-900 tracking-tighter leading-none mb-4">
            Frequently Asked <span className="text-emerald-600 italic">Questions</span>
          </h3>
          <p className="text-slate-900 font-bold text-sm leading-relaxed">
            Clear, logical answers for a firm foundation in faith.
          </p>
        </div>

        {/* RIGHT SIDE: Compact Accordion */}
        <div className="lg:w-2/3 w-full space-y-3">
          {questions.map((item, i) => (
            <div 
              key={i}
              className={`border-2 rounded-2xl transition-all ${
                openIndex === i 
                ? "border-slate-900 bg-white shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]" 
                : "border-slate-200 bg-white hover:border-emerald-500"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-base font-black text-slate-900">
                  {item.q}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all shrink-0 ${
                  openIndex === i ? "bg-emerald-600 text-white rotate-180" : "bg-slate-900 text-white"
                }`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </button>

              {openIndex === i && (
                <div className="px-5 pb-5 animate-in fade-in slide-in-from-top-1 duration-200">
                  <p className="text-sm font-bold text-slate-900 leading-relaxed pt-3 border-t border-slate-100">
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}