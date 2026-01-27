import { motion } from "framer-motion"
import { Plus, Calendar } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24">
      {/* CTA CARD */}
      <div className="relative mx-auto max-w-[1120px] overflow-hidden rounded-2xl bg-[#6A4BFF] px-12 py-20 text-white shadow-xl">

        {/* Animated Background Elements */}
        <motion.div
          className="absolute -top-20 -left-20 h-96 w-96 rounded-full border border-white/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute bottom-[-120px] right-[-120px] h-[500px] w-[500px] rounded-full border border-white/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating Icons */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/20"
            style={{
              top: `${20 + i * 10}%`,
              left: `${10 + i * 12}%`,
            }}
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {i % 2 === 0 ? <Plus size={28} /> : <Calendar size={26} />}
          </motion.div>
        ))}

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold md:text-3xl"
          >
            A Smarter Way to Run Vaccination Operations
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 text-lg text-white/90"
          >
            Vaxify brings citizens, hospitals, and administrators onto a single
            streamlined system — enabling easy appointment booking, controlled
            hospital management, and transparent oversight from one secure
            platform.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg bg-white px-10 py-4 text-lg font-semibold text-indigo-600 shadow-2xl"
            >
              Get Started with Vaxify
            </motion.button>

            <motion.p
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mt-4 text-sm"
            >
              Built for citizens. Trusted by hospitals. Governed by admins.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
