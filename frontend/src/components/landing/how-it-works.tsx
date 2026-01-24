"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, CalendarDays, ShieldCheck, Check } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Discover & Choose",
    description: "Browse verified vaccination centers, view available vaccines, working hours, and real-time slot availability — all in one place.",
    icon: <Search className="w-5 h-5 text-slate-400" />,
    label: "Step 1",
    arrow: (
      <svg width="40" height="35" viewBox="0 0 40 35" fill="none" className="text-slate-400 mb-2">
        <path d="M5 5C15 5 25 10 30 25M30 25L23 24M30 25L29 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    graphic: (
      <div className="relative w-32 h-40 bg-white rounded-xl shadow-sm border border-slate-100 p-3 flex flex-col gap-2 overflow-hidden">
        <motion.div 
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-[2px] bg-indigo-400/30 z-10"
        />
        <div className="w-full h-2 bg-slate-100 rounded-full" />
        <div className="w-3/4 h-2 bg-slate-100 rounded-full" />
        <div className="mt-auto space-y-2">
          {[1, 2, 3].map((i) => (
            <motion.div 
              key={i}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
              className="w-full h-6 bg-slate-50 rounded-lg border border-slate-100" 
            />
          ))}
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Book & Manage",
    description: "Users select a date and time slot to book an appointment. Appointments are instantly visible to both the user and the hospital staff.",
    icon: <CalendarDays className="w-5 h-5 text-slate-400" />,
    label: "Step 2",
    arrow: (
      <svg width="40" height="35" viewBox="0 0 40 35" fill="none" className="text-slate-400 mt-2 rotate-180">
        <path d="M5 5C15 5 25 10 30 25M30 25L23 24M30 25L29 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    graphic: (
      <div className="relative w-40 h-32 bg-white rounded-xl shadow-sm border border-slate-100 p-3">
        <div className="flex justify-between mb-3">
          <div className="w-12 h-2 bg-slate-100 rounded-full" />
          <div className="w-4 h-4 bg-slate-50 rounded-full" />
        </div>
        {/* Slot Grid */}
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-6 bg-slate-50 rounded border border-slate-100" />
          ))}
          {/* The "Booking" Slot */}
          <motion.div 
            animate={{ 
              backgroundColor: ["#f8fafc", "#6366f1", "#10b981", "#f8fafc"],
              borderColor: ["#f1f5f9", "#4338ca", "#059669", "#f1f5f9"]
            }}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.3, 0.7, 1] }}
            className="h-6 rounded border flex items-center justify-center"
          >
            <motion.div
              animate={{ opacity: [0, 0, 1, 0] }}
              transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.7, 1] }}
            >
              <Check className="w-3 h-3 text-white" />
            </motion.div>
          </motion.div>
        </div>
        {/* Mouse Pointer Animation */}
        <motion.div 
          animate={{ x: [80, 105, 80], y: [60, 45, 60] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute z-20"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="drop-shadow-sm">
            <path d="M1 1L5 11L7 7L11 5L1 1Z" fill="black" />
          </svg>
        </motion.div>
      </div>
    )
  },
  {
    id: 3,
    title: "Administer & Track",
    description: "Hospital staff manage daily appointments and update vaccination status, while admins oversee hospital approvals.",
    icon: <ShieldCheck className="w-5 h-5 text-slate-400" />,
    label: "Step 3",
    arrow: (
      <svg width="40" height="35" viewBox="0 0 40 35" fill="none" className="text-slate-400 mb-2 scale-x-[-1]">
        <path d="M5 5C15 5 25 10 30 25M30 25L23 24M30 25L29 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    graphic: (
      <div className="w-40 space-y-3 p-2">
        {/* Record Item 1 */}
        <div className="bg-white rounded-lg p-2 shadow-sm border border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-slate-100 rounded-full" />
            <div className="w-12 h-2 bg-slate-100 rounded-full" />
          </div>
          <div className="px-2 py-0.5 rounded-full bg-emerald-50 text-[8px] font-bold text-emerald-600 border border-emerald-100">DONE</div>
        </div>
        {/* Record Item 2 (Active/Pulsing) */}
        <motion.div 
          animate={{ x: [-2, 2, -2] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="bg-white rounded-lg p-2 shadow-md border-l-4 border-l-indigo-500 border border-slate-100 flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-indigo-50 rounded-full flex items-center justify-center">
               <ShieldCheck className="w-3 h-3 text-indigo-500" />
            </div>
            <div className="w-12 h-2 bg-slate-100 rounded-full" />
          </div>
          <motion.div 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="px-2 py-0.5 rounded-full bg-indigo-50 text-[8px] font-bold text-indigo-600 border border-indigo-100"
          >
            VERIFYING
          </motion.div>
        </motion.div>
      </div>
    )
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-32 bg-background overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_0%,transparent_0%,var(--background)_75%)] opacity-40"
      />
      
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-32">
          <p className="text-[#6366f1] text-[13px] font-mono font-bold mb-4 uppercase tracking-[0.2em]">How it works</p>
          <h2 className="text-4xl md:text-[48px] font-bold tracking-tight mb-4 text-foreground">
            Vaccination Management in 3 Simple Steps
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            A seamless coordination between users, staff, and administrators.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex flex-col items-center">
              
              {(index === 0 || index === 2) && (
                <div className="hidden lg:flex flex-col items-center absolute -top-20">
                  <span className="text-lg font-bold text-slate-900">{step.label}</span>
                  {step.arrow}
                </div>
              )}

              <div className="relative flex flex-col bg-[#F3F4F6]/50 border border-transparent rounded-[2rem] p-10 h-full w-full">
                <h4 className="text-center text-xl font-bold text-[#0F172A] mb-8">
                  {step.title}
                </h4>

                <div className="relative aspect-[4/3] w-full bg-[#E5E7EB]/30 rounded-[1.5rem] flex items-center justify-center mb-8 border border-white/20 overflow-hidden">
                  {step.graphic}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                       style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />
                </div>

                <p className="text-center text-slate-500 text-[14px] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index === 1 && (
                <div className="hidden lg:flex flex-col items-center absolute -bottom-20">
                  {step.arrow}
                  <span className="text-lg font-bold text-slate-900">{step.label}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}