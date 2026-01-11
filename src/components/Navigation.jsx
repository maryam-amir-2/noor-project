import { CheckCircle2, Circle, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation({ active, setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const steps = [
    { id: 'logic', label: "01. Existence", desc: "Start here" },
    { id: 'tawheed', label: "02. Tawheed", desc: "The Core" },
    { id: 'why-islam', label: "03. Why Islam?", desc: "The Proofs" },
    { id: 'pillars', label: "04. Al-Islam", desc: "The Actions" },
    { id: 'imaan', label: "05. Al-Imaan", desc: "The Beliefs" },
    { id: 'ihsan', label: "05. Al-Ihsaan", desc: "The Highest Level" },
    { id: 'qna', label: "06. Q&A", desc: "Safe Space" },
  ];

  const MenuContent = () => (
    <div className="flex flex-col gap-2 p-4 pb-20">
      <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-4 mb-2">The Journey</h2>
      {steps.map((step) => (
        <button
          key={step.id}
          onClick={() => {
            setActiveSection(step.id);
            setIsOpen(false);
          }}
          className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
            active === step.id 
            ? "bg-emerald-50 text-emerald-700 border-l-4 border-emerald-600" 
            : "hover:bg-slate-50 text-slate-600"
          }`}
        >
          {active === step.id ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          ) : (
            <Circle className="w-5 h-5 text-slate-300" />
          )}
          <div className="text-left">
            <p className="font-bold text-sm leading-none">{step.label}</p>
            <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-tighter">{step.desc}</p>
          </div>
        </button>
      ))}
    </div>
  );

  return (
    <>
      {/* MOBILE HEADER */}
      <div className="md:hidden sticky top-0 bg-white border-b p-4 flex justify-between items-center z-50">
        <span className="font-bold text-emerald-900 tracking-tighter">NOOR.</span>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 bg-emerald-50 rounded-lg text-emerald-700">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE SLIDE-OUT MENU */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-20 overflow-y-auto">
          <MenuContent />
        </div>
      )}

      {/* DESKTOP SIDEBAR */}
      <aside className="hidden md:block w-72 h-screen sticky top-0 border-r border-slate-100 bg-white/50 backdrop-blur-md overflow-y-auto">
        <div className="p-8">
          <h1 className="text-2xl font-black text-slate-950 mb-12 tracking-tighter">NOOR<span className="text-emerald-500">.</span></h1>
          <MenuContent />
        </div>
      </aside>
    </>
  );
}
