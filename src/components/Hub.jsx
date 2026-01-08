import { BookOpen, Compass, Heart, MessageCircle } from 'lucide-react';

export default function Hub({ setActiveSection, active }) {
  const cards = [
    { id: 'logic', title: "The Why", icon: <Compass className="w-6 h-6" /> },
    { id: 'tawheed', title: "The Core", icon: <BookOpen className="w-6 h-6" /> },
    { id: 'pillars', title: "The Action", icon: <Heart className="w-6 h-6" /> },
    { id: 'qna', title: "The Questions", icon: <MessageCircle className="w-6 h-6" /> },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => setActiveSection(card.id)}
            className={`p-4 rounded-2xl border transition-all duration-300 flex flex-col items-center text-center ${
              active === card.id 
              ? "bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-200" 
              : "bg-white border-slate-100 text-slate-600 hover:border-emerald-300"
            }`}
          >
            <div className={`mb-2 ${active === card.id ? "text-white" : "text-emerald-600"}`}>
              {card.icon}
            </div>
            <span className="font-bold text-sm">{card.title}</span>
          </button>
        ))}
      </div>
    </section>
  );
}