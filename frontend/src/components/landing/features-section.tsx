'use client';

import {
  Database,
  BellRing,
  ShieldCheck,
  Users,
  BarChart3,
  FileCheck2,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { FeatureCard } from '@/components/ui/grid-feature-cards';

/* -------------------------------- data -------------------------------- */

const features = [
  {
    title: 'Smart Records',
    icon: Database,
    description:
      'Store and access complete vaccination histories securely in one centralized digital system.',
  },
  {
    title: 'Auto Reminders',
    icon: BellRing,
    description:
      'Get timely alerts for upcoming doses and boosters to ensure schedule adherence.',
  },
  {
    title: 'Data Security',
    icon: ShieldCheck,
    description:
      'Protect vaccination data with verified, tamper-resistant, and privacy-focused safeguards.',
  },
  {
    title: 'Role Access',
    icon: Users,
    description:
      'Enable controlled access for patients, healthcare providers, and authorized institutions.',
  },
  {
    title: 'Insight Analytics',
    icon: BarChart3,
    description:
      'Monitor vaccination coverage, trends, and performance through intuitive dashboards.',
  },
  {
    title: 'Compliance Ready',
    icon: FileCheck2,
    description:
      'Support regulatory standards and official verification with structured, audit-ready records.',
  },
];

/* ------------------------------- section ------------------------------- */

export function Features() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto w-full max-w-5xl space-y-8 px-4">

        {/* Heading */}
        <AnimatedContainer className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-wide md:text-4xl lg:text-5xl xl:font-extrabold">
            Discover features built for modern vaccination management
          </h2>
          <p className="text-muted-foreground mt-4 text-sm tracking-wide md:text-base">
            Simple, secure, and intelligent tools designed to streamline
            vaccination tracking and compliance.
          </p>
        </AnimatedContainer>

        {/* Feature grid */}
        <AnimatedContainer
          delay={0.4}
          className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed sm:grid-cols-2 md:grid-cols-3"
        >
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </AnimatedContainer>

      </div>
    </section>
  );
}

/* -------------------------- animation wrapper -------------------------- */

type AnimatedContainerProps = {
  delay?: number;
  className?: string;
  children: React.ReactNode;
};

function AnimatedContainer({
  className,
  delay = 0.1,
  children,
}: AnimatedContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
