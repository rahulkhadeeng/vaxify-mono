import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/* ------------------------------------------------------------------ */
/* data */
/* ------------------------------------------------------------------ */

interface FooterLink {
  title: string;
  href: string;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: 'Product',
    links: [
      { title: 'Features', href: '/features' },
      { title: 'Hospitals', href: '/hospitals' },
      { title: 'Appointments', href: '/appointments' },
      { title: 'Dashboards', href: '/dashboard' },
    ],
  },
  {
    label: 'Company',
    links: [
      { title: 'About', href: '/about' },
      { title: 'FAQs', href: '/faqs' },
      { title: 'Privacy Policy', href: '/privacy' },
      { title: 'Terms of Service', href: '/terms' },
    ],
  },
  {
    label: 'Resources',
    links: [
      { title: 'Help Center', href: '/help' },
      { title: 'Documentation', href: '/docs' },
      { title: 'Changelog', href: '/changelog' },
      { title: 'Contact Support', href: '/contact' },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* footer */
/* ------------------------------------------------------------------ */

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-border/40 bg-background">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div className="grid gap-12 md:grid-cols-[1.2fr_2fr]">

          {/* brand */}
          <AnimatedContainer className="space-y-4">
            <div className="text-lg font-semibold tracking-tight">
              Vaxify
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Secure and reliable vaccination management platform designed to
              streamline appointment booking, hospital operations, and
              administrative oversight.
            </p>
            <p className="text-muted-foreground text-xs">
              © {new Date().getFullYear()} Vaxify. All rights reserved.
            </p>
          </AnimatedContainer>

          {/* links */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {footerLinks.map((section, index) => (
              <AnimatedContainer
                key={section.label}
                delay={0.15 + index * 0.12}
              >
                <div>
                  <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {section.label}
                  </h3>

                  <ul className="mt-4 space-y-2 text-sm">
                    {section.links.map((link) => (
                      <li key={link.title}>
                        <a
                          href={link.href}
                          className="inline-flex items-center text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedContainer>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* animation wrapper (unchanged) */
/* ------------------------------------------------------------------ */

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>['className'];
  children: ReactNode;
};

function AnimatedContainer({
  className,
  delay = 0.1,
  children,
}: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        delay,
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
