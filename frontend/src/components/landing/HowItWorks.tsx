import { motion } from "framer-motion";
import { Search, CalendarDays, ShieldCheck, Check } from "lucide-react";

export function HowItWorks() {
  return (
    <motion.section
      className="relative py-8 bg-white overflow-hidden min-h-[85vh] flex flex-col justify-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 0.4,
        delay: 0.6,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <div className="mx-auto max-w-5xl px-6 w-full">
        <div className="text-center mb-10">
          <p className="text-[#6366f1] text-[11px] font-mono font-bold mb-1 uppercase tracking-[0.2em]">
            How it works
          </p>
          <h2 className="text-2xl md:text-4xl font-normal tracking-tight text-slate-900 mb-1">
            Vaccination Management in 3 Simple Steps
          </h2>
          <br />
        </div>

        {/* Added max-w-4xl to the grid to bring cards closer together */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex flex-col items-center">
              {(index === 0 || index === 2) && (
                <div className="hidden lg:flex flex-col items-center absolute -top-12">
                  <span className="text-[13px] font-bold text-slate-900 mb-0.5">
                    {step.label}
                  </span>
                  {step.arrow}
                </div>
              )}

              {/* Reduced padding to p-5 and decreased the rounded corners slightly */}
              <div className="relative flex flex-col bg-[#F3F4F6]/50 border border-transparent rounded-[1.5rem] p-5 h-full w-full max-w-[280px]">
                <h4 className="text-center text-sm font-bold text-[#0F172A] mb-3">
                  {step.title}
                </h4>

                {/* Reduced margin-bottom and slightly scaled the graphic box */}
                <div className="relative aspect-square w-full bg-[#E5E7EB]/30 rounded-xl flex items-center justify-center mb-3 border border-white/20 overflow-hidden">
                  <div className="scale-90">
                    {step.graphic}
                  </div>
                  <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                      backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
                      backgroundSize: "16px 16px",
                    }}
                  />
                </div>

                <p className="text-center text-slate-500 text-[11px] leading-relaxed px-2">
                  {step.description}
                </p>
              </div>

              {index === 1 && (
                <div className="hidden lg:flex flex-col items-center absolute -bottom-12">
                  {step.arrow}
                  <span className="text-[13px] font-bold text-slate-900 mt-0.5">
                    {step.label}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

const steps = [
  {
    id: 1,
    title: "Discover & Choose",
    label: "Step 1",
    description: "Browse verified centers, view vaccines, and real-time availability in one place.",
    arrow: (
      <svg width="30" height="20" viewBox="0 0 40 35" fill="none" className="text-slate-400">
        <path d="M5 5C15 5 25 10 30 25M30 25L23 24M30 25L29 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    graphic: (
      <div className="relative w-24 h-32 bg-white rounded-lg shadow-sm border border-slate-100 p-2.5 flex flex-col gap-2 overflow-hidden">
        <motion.div
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-0.5 bg-indigo-400/30 z-10"
        />
        <div className="w-full h-1.5 bg-slate-100 rounded-full" />
        <div className="w-3/4 h-1.5 bg-slate-100 rounded-full" />
        <div className="mt-auto space-y-2">
          {[1, 2, 3].map((i) => (
            <motion.div key={i} animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }} className="w-full h-4 bg-slate-50 rounded border border-slate-100" />
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Book & Manage",
    label: "Step 2",
    description: "Select a slot and book instantly. Visible to both the user and hospital staff.",
    arrow: (
      <svg width="30" height="20" viewBox="0 0 40 35" fill="none" className="text-slate-400 rotate-180">
        <path d="M5 5C15 5 25 10 30 25M30 25L23 24M30 25L29 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    graphic: (
      <div className="relative w-32 h-24 bg-white rounded-lg shadow-sm border border-slate-100 p-2.5">
        <div className="flex justify-between mb-2">
          <div className="w-10 h-1.5 bg-slate-100 rounded-full" />
          <div className="w-3 h-3 bg-slate-50 rounded-full" />
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-4 bg-slate-50 rounded border border-slate-100" />
          ))}
          <motion.div
            animate={{ backgroundColor: ["#f8fafc", "#6366f1", "#10b981", "#f8fafc"], borderColor: ["#f1f5f9", "#4338ca", "#059669", "#f1f5f9"] }}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.3, 0.7, 1] }}
            className="h-4 rounded border flex items-center justify-center"
          >
            <motion.div animate={{ opacity: [0, 0, 1, 0] }} transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.7, 1] }}>
              <Check className="w-2.5 h-2.5 text-white" />
            </motion.div>
          </motion.div>
        </div>
        <motion.div animate={{ x: [50, 75, 50], y: [30, 15, 30] }} transition={{ duration: 4, repeat: Infinity }} className="absolute z-20">
          <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
            <path d="M1 1L5 11L7 7L11 5L1 1Z" fill="black" />
          </svg>
        </motion.div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Administer & Track",
    label: "Step 3",
    description: "Hospital staff update status, while admins oversee hospital approvals.",
    arrow: (
      <svg width="30" height="20" viewBox="0 0 40 35" fill="none" className="text-slate-400 scale-x-[-1]">
        <path d="M5 5C15 5 25 10 30 25M30 25L23 24M30 25L29 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    graphic: (
      <div className="w-32 space-y-1.5 p-1">
        <div className="bg-white rounded p-1.5 shadow-sm border border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-slate-100 rounded-full" />
            <div className="w-8 h-1 bg-slate-100 rounded-full" />
          </div>
          <div className="px-1 py-0.5 rounded-full bg-emerald-50 text-[6px] font-bold text-emerald-600">DONE</div>
        </div>
        <motion.div animate={{ x: [-1.5, 1.5, -1.5] }} transition={{ duration: 2, repeat: Infinity }} className="bg-white rounded p-1.5 shadow-md border-l-2 border-l-indigo-500 border border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-indigo-50 rounded-full flex items-center justify-center">
              <ShieldCheck className="w-2.5 h-2.5 text-indigo-500" />
            </div>
            <div className="w-8 h-1 bg-slate-100 rounded-full" />
          </div>
          <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }} className="px-1 py-0.5 rounded-full bg-indigo-50 text-[6px] font-bold text-indigo-600">VERIFYING</motion.div>
        </motion.div>
      </div>
    ),
  },
];