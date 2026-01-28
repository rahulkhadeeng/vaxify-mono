import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users } from "lucide-react";

export function Features1() {
  return (
    <section className="bg-white py-4 md:py-8 min-h-[85vh] flex flex-col justify-center overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 w-full">
        {/* header - Very compact */}
        <div className="mx-auto max-w-2xl text-center mb-8">
          <h2 className="text-balance text-2xl md:text-3xl font-semibold tracking-tight">
            Features for modern vaccination management
          </h2>
          <p className="mt-1 text-[13px] text-muted-foreground leading-snug">
            Simple, secure, and intelligent tools designed to streamline compliance.
          </p>
        </div>

        {/* grid - Tight gap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Configurable */}
          <Card className="shadow-sm border-slate-100">
            <CardContent className="p-4 text-center space-y-3">
              <div className="relative mx-auto h-16 w-32 flex items-center justify-center">
                <motion.svg
                  viewBox="0 0 200 80"
                  className="absolute w-full h-full"
                  aria-hidden
                >
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
                <span className="relative z-10 text-2xl font-bold tracking-tight">100%</span>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold">Configurable</h3>
                <p className="text-[11px] text-muted-foreground leading-normal">
                  Vaccines, slots, and rules are fully configurable.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Secure by design */}
          <Card className="shadow-sm border-slate-100">
            <CardContent className="p-4 text-center space-y-3">
              <div className="relative mx-auto w-12 h-12">
                <motion.svg viewBox="0 0 100 100" className="absolute inset-0">
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#e5e7eb"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="250"
                    strokeDashoffset="250"
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  />
                </motion.svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-slate-500" />
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold">Secure by design</h3>
                <p className="text-[11px] text-muted-foreground leading-normal">
                  Role-based access ensures data privacy for all users.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Real-time updates */}
          <Card className="shadow-sm border-slate-100">
            <CardContent className="p-4 text-center space-y-3">
              <div className="relative h-12 w-full">
                <div className="absolute inset-x-0 top-1/2 h-px bg-slate-100" />
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 -translate-y-1/2"
                    style={{ left: `${i * 25}%` }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-indigo-500" />
                  </motion.div>
                ))}
                <motion.div
                  className="absolute right-0 top-0 text-[8px] font-bold text-indigo-600"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  LIVE
                </motion.div>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold">Real-time updates</h3>
                <p className="text-[11px] text-muted-foreground leading-normal">
                  Records sync instantly across the entire platform.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Admin Control - Split Row Layout */}
          <Card className="md:col-span-2 shadow-sm border-slate-100">
            <CardContent className="p-5 flex flex-row items-center justify-between gap-6">
              <div className="max-w-[180px] space-y-1">
                <h3 className="text-sm font-semibold">Admin control</h3>
                <p className="text-[11px] text-muted-foreground leading-normal">
                  Verify hospitals and monitor platform activity in real time.
                </p>
              </div>
              <div className="flex-1 space-y-1.5 max-w-[200px]">
                {[{ label: "Pending", active: true }, { label: "Review", active: false }].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center justify-between rounded border border-slate-50 px-2 py-1.5 bg-slate-50/50"
                    animate={item.active ? { backgroundColor: ["#fff", "#f5f3ff", "#fff"] } : {}}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 1.2 }}
                  >
                    <span className="text-[10px] font-medium">{item.label}</span>
                    <span className="text-[9px] text-muted-foreground">{item.active ? "Active" : "Idle"}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Built for everyone */}
          <Card className="shadow-sm border-slate-100">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="relative h-12 w-12 shrink-0">
                <motion.div
                  className="absolute inset-0 rounded-full border border-dashed border-slate-200"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Users className="h-4 w-4 text-indigo-500" />
                </div>
              </div>
              <div className="text-left space-y-0.5">
                <h3 className="text-sm font-semibold">Built for everyone</h3>
                <p className="text-[10px] text-muted-foreground">Universal role access.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}