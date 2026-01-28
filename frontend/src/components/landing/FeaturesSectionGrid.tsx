import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users } from "lucide-react";
import { AnimatedGroup } from "@/components/ui/animated-group";

export function Features1() {
  return (
    <section className="relative bg-white pt-20 pb-3 md:pt-32 md:pb-4 overflow-hidden">
      {/* SOFT AMBIENT BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 w-full">
        {/* HEADER — APPEARS FIRST */}
        <AnimatedGroup inView preset="blur-slide">
          <div className="mx-auto max-w-2xl text-center mb-10">
            <h2 className="text-balance text-2xl md:text-3xl font-semibold tracking-tight">
              Features for modern vaccination management
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Simple, secure, and intelligent tools designed to streamline compliance.
            </p>
          </div>
        </AnimatedGroup>

        {/* GRID — APPEARS AFTER HEADER */}
        <AnimatedGroup
          inView
          variants={{
            container: {
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  delayChildren: 0.25, // 👈 HEADER FIRST, THEN CARDS
                  staggerChildren: 0.08,
                },
              },
            },
            item: {
              hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            },
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Configurable */}
            <Card className="group border-slate-100 bg-white/70 backdrop-blur shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <CardContent className="p-5 text-center space-y-4">
                <div className="relative mx-auto h-16 w-32 flex items-center justify-center">
                  <motion.svg viewBox="0 0 200 80" className="absolute w-full h-full">
                    <motion.ellipse
                      cx="100"
                      cy="40"
                      rx="70"
                      ry="24"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="3"
                      strokeDasharray="6 10"
                      animate={{ strokeDashoffset: [0, -40] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.svg>
                  <span className="relative z-10 text-2xl font-bold">100%</span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Configurable</h3>
                  <p className="text-xs text-muted-foreground">
                    Vaccines, slots, and rules are fully configurable.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Secure */}
            <Card className="group border-slate-100 bg-white/70 backdrop-blur shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <CardContent className="p-5 text-center space-y-4">
                <div className="relative mx-auto w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center">
                  <motion.svg viewBox="0 0 100 100" className="absolute inset-0">
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#c7d2fe"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="250"
                      strokeDashoffset="250"
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    />
                  </motion.svg>
                  <Shield className="w-4 h-4 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Secure by design</h3>
                  <p className="text-xs text-muted-foreground">
                    Role-based access ensures data privacy for all users.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Realtime */}
            <Card className="group border-slate-100 bg-white/70 backdrop-blur shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <CardContent className="p-5 text-center space-y-4">
                <div className="relative h-12 w-full">
                  <div className="absolute inset-x-0 top-1/2 h-px bg-slate-200" />
                  {[0, 1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute top-1/2 -translate-y-1/2"
                      style={{ left: `${i * 25}%` }}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-indigo-500" />
                    </motion.div>
                  ))}
                  <span className="absolute right-0 -top-1 text-[9px] font-bold text-indigo-600">
                    LIVE
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Real-time updates</h3>
                  <p className="text-xs text-muted-foreground">
                    Records sync instantly across the entire platform.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Admin — UNTOUCHED */}
            <Card className="md:col-span-2 border-slate-100 bg-white/80 backdrop-blur shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <CardContent className="p-6 flex items-center justify-between gap-8">
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold">Admin control</h3>
                  <p className="text-xs text-muted-foreground max-w-[200px]">
                    Verify hospitals and monitor platform activity in real time.
                  </p>
                </div>
                <div className="space-y-2 w-[200px]">
                  {["Pending", "Review"].map((label, i) => (
                    <motion.div
                      key={label}
                      className="flex items-center justify-between rounded-md border px-3 py-2 text-xs bg-slate-50"
                      animate={{ backgroundColor: ["#fff", "#eef2ff", "#fff"] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 1.5 }}
                    >
                      <span className="font-medium">{label}</span>
                      <span className="text-muted-foreground">
                        {i === 0 ? "Active" : "Idle"}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Everyone */}
            <Card className="border-slate-100 bg-white/70 backdrop-blur shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <CardContent className="p-5 flex items-center gap-4">
                <div className="relative h-12 w-12 rounded-full bg-indigo-50 flex items-center justify-center">
                  <motion.div
                    className="absolute inset-0 rounded-full border border-dashed border-indigo-200"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  />
                  <Users className="h-4 w-4 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Built for everyone</h3>
                  <p className="text-xs text-muted-foreground">
                    Universal role access.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}
