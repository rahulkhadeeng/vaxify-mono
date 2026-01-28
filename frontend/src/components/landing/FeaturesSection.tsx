"use client";

import React from "react";
import {
  Database,
  BarChart3,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/* MAIN SECTION                                                               */
/* -------------------------------------------------------------------------- */

export function Features() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed sm:grid-cols-2 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* FEATURE CARD                                                               */
/* -------------------------------------------------------------------------- */

function FeatureCard({ feature }: { feature: (typeof FEATURES)[number] }) {
  const Icon = feature.icon;

  return (
    <div
      className={cn(
        "relative overflow-hidden p-6 md:p-8",
        "border border-dashed",
        "bg-background",
      )}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/40 to-transparent opacity-60" />
      </div>

      <GridPattern />

      <Icon className="relative z-10 h-5 w-5 text-foreground/70" />

      <h3 className="relative z-10 mt-6 text-sm font-medium">
        {feature.title}
      </h3>

      <p className="relative z-10 mt-2 text-xs leading-relaxed text-muted-foreground">
        {feature.description}
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* GRID PATTERN                                                               */
/* -------------------------------------------------------------------------- */

function GridPattern() {
  const id = React.useId();

  return (
    <svg
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full",
        "[mask-image:linear-gradient(to_right,transparent_0%,transparent_30%,white_100%)]",
      )}
    >
      <defs>
        <pattern id={id} width="24" height="24" patternUnits="userSpaceOnUse">
          <path
            d="M.5 24V.5H24"
            fill="none"
            stroke="rgba(0,0,0,0.06)"
            strokeWidth="1"
          />
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill={`url(#${id})`} />

      <g fill="rgba(0,0,0,0.08)">
        <rect x="72" y="48" width="24" height="24" />
        <rect x="168" y="96" width="24" height="24" />
        <rect x="120" y="24" width="24" height="24" />
      </g>
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* FEATURES DATA (FINAL – 3 CARDS ONLY)                                       */
/* -------------------------------------------------------------------------- */

const FEATURES = [
  {
    title: "Secure Digital Records",
    icon: Database,
    description:
      "Store and manage complete vaccination histories in a centralized system with strong security and privacy safeguards.",
  },
  {
    title: "Smart Monitoring & Insights",
    icon: BarChart3,
    description:
      "Track appointments, vaccination progress, and coverage trends while ensuring timely reminders for upcoming doses.",
  },
  {
    title: "Controlled Access & Compliance",
    icon: ShieldCheck,
    description:
      "Enable clear role-based access for users, hospitals, and administrators with audit-ready and compliant records.",
  },
];
