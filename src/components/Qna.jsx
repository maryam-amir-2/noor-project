"use client";
import { useState } from 'react';

export default function QnaContent() {
  const [openIndex, setOpenIndex] = useState(0);

  // Define your contact details here
  const WHATSAPP_NUMBER = "966540936067"; // Replace with your actual number (include country code, no + or spaces)
  const CONTACT_EMAIL = "maryamamir74774@gmail.com"; // Replace with your actual email
  const DEFAULT_MESSAGE = "Assalamu Alaikum, I have a question about Islam...";

  const categories = [
    {
      label: "The Basics",
      questions: [
        {
          q: "What is the core belief of Islam?",
          a: "The heart of Islam is Tawheed—believing in only One God (Allah). It means only He is worthy of worship and He has no partners, children, or equals."
        },
        {
          q: "Who is Allah?",
          a: "Allah is the Arabic name for the One Almighty God. He is the same God worshipped by the Prophets like Abraham, Moses, and Jesus."
        },
        {
          q: "Do Muslims worship Muhammad ﷺ?",
          a: "No. Muslims love and respect him as the final Messenger, but we only worship Allah, the Creator."
        },
        {
          q: "Do Muslims believe in Jesus?",
          a: "Yes! Muslims believe Jesus ('Isa) was a great Prophet born miraculously from the Virgin Mary. We love him, but we do not believe he is God or the son of God."
        },
        {
          q: "What is the Quran?",
          a: "The Quran is the holy book of Islam. It is the literal word of Allah, revealed to Prophet Muhammad ﷺ to guide all of humanity."
        }
      ]
    },
    {
      label: "Daily Life",
      questions: [
        {
          q: "How often do Muslims pray?",
          a: "Muslims pray 5 times a day. Each prayer takes about 5-10 minutes and helps us stay connected to Allah throughout our busy day."
        },
        {
          q: "Why do Muslims wash before prayer?",
          a: "This is called Wudu. It is a way to clean both our body and our mind so we feel fresh and pure before standing in front of Allah."
        },
        {
          q: "What is Ramadan?",
          a: "Ramadan is a holy month where Muslims fast (no food or water) from sunrise to sunset. It teaches us self-control and helps us feel for those who are hungry."
        },
        {
          q: "What are Halal and Haram?",
          a: "Halal means 'Allowed' (like healthy food and good actions). Haram means 'Forbidden' (like alcohol, pork, or hurting others) because these things are harmful to us."
        }
      ]
    },
    {
      label: "Society",
      questions: [
        {
          q: "Does Islam oppress women?",
          a: "No. Islam gave women rights to own property and get an education over 1,400 years ago. If women are treated badly in some places, it is because of culture, not the religion."
        },
        {
          q: "Does Islam promote violence?",
          a: "No. Islam comes from a word meaning 'Peace.' It strictly forbids hurting innocent people. Fighting is only allowed for self-defense or to stop a bully (oppression)."
        },
        {
          q: "Is Islam just for Arabs?",
          a: "Not at all. Islam is for everyone, regardless of their race. In fact, most Muslims in the world today are not Arab."
        }
      ]
    }
  ];

  const allQuestions = categories.flatMap(cat => cat.questions);

  return (
    <div className="max-w-md mx-auto py-8 px-4 space-y-8">
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic">Questions</h2>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Clear answers for curious minds</p>
      </div>

      <div className="space-y-8">
        {categories.map((category, catIdx) => (
          <div key={catIdx} className="space-y-3">
            <h3 className="text-[10px] font-black text-amber-600 uppercase tracking-[0.2em] px-2">
              {category.label}
            </h3>

            <div className="space-y-2">
              {category.questions.map((item, qIdx) => {
                const globalIndex = allQuestions.indexOf(item);
                const isOpen = openIndex === globalIndex;

                return (
                  <div 
                    key={qIdx}
                    className={`transition-all duration-300 rounded-[1.5rem] border-2 ${
                      isOpen 
                      ? "border-slate-900 bg-slate-900 shadow-xl" 
                      : "border-slate-100 bg-white hover:border-slate-200"
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : globalIndex)}
                      className="w-full flex items-center justify-between p-4 text-left"
                    >
                      <span className={`text-xs font-black uppercase tracking-tight transition-colors ${
                        isOpen ? "text-amber-500" : "text-slate-700"
                      }`}>
                        {item.q}
                      </span>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all shrink-0 ${
                        isOpen ? "bg-amber-500 text-slate-900 rotate-180" : "bg-slate-100 text-slate-400"
                      }`}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m6 9 6 6 6-6"/>
                        </svg>
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-5 animate-in fade-in slide-in-from-top-1">
                        <p className="text-[13px] font-medium text-slate-300 leading-relaxed pt-3 border-t border-white/10">
                          {item.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Support - UPDATED WITH WHATSAPP/EMAIL */}
      <div className="bg-slate-50 rounded-[2rem] p-8 text-center border border-slate-100 space-y-4">
        <div className="space-y-1">
            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest">Need more help?</p>
            <h4 className="text-lg font-black text-slate-900 leading-tight">Speak with someone today.</h4>
        </div>
        
        <div className="flex flex-col gap-2">
            {/* WhatsApp Button */}
            <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white text-[10px] font-black px-6 py-4 rounded-2xl uppercase tracking-widest hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Us
            </a>

            {/* Email Button */}
            <a 
                href={`mailto:${CONTACT_EMAIL}?subject=Inquiry from App&body=${encodeURIComponent(DEFAULT_MESSAGE)}`}
                className="bg-slate-900 text-white text-[10px] font-black px-6 py-4 rounded-2xl uppercase tracking-widest hover:bg-amber-500 hover:text-slate-900 transition-all flex items-center justify-center gap-2"
            >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                Email Support
            </a>
        </div>
      </div>
    </div>
  );
}
