import { motion } from "framer-motion"
import { FlickeringGrid } from "@/components/ui/flickering-grid"

export function CTASection() {
  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="relative overflow-hidden rounded-[40px] border border-slate-100 bg-[#F9FAFB] px-6 pt-10 shadow-sm">

          {/* FLICKERING GRID BACKGROUND */}
          <FlickeringGrid
            className="absolute inset-0 z-0"
            squareSize={2}
            gridGap={5}
            color="#858e9a"
            maxOpacity={0.30}
            flickerChance={0.04}
          />


          {/* TOP INDIGO GRADIENT */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-70 bg-gradient-to-b from-indigo-600/15 via-indigo-600/5 to-transparent" />

          {/* CONTENT */}
          <div className="relative z-20 mx-auto max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-semibold tracking-tight text-slate-900 md:text-[34px]"
            >
              Ready to Run Smarter Operations?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mt-2 text-base text-slate-500"
            >
              Start your free trial today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="mt-6"
            >
              <button className="rounded-lg bg-[#6A4BFF] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#583ce0]">
                Try Vaxify for Free
              </button>
            </motion.div>
          </div>

          {/* DASHBOARD PREVIEW */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative z-20 mt-8 flex justify-center"
          >
            <div className="relative w-full max-w-4xl max-h-[320px] overflow-hidden rounded-t-xl border-x border-t border-slate-200 bg-white p-1 shadow-xl ring-1 ring-slate-950/5">
              <img
                src="/hero-dash.png"
                alt="app screen"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white/30 to-transparent" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
