import type { ComponentProps, ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

interface FooterLink {
  title: string;
  href: string;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

export function Footer() {
  return (
    <footer className="relative mt-20 bg-background">
      <div className="relative mx-auto max-w-5xl px-6 py-14 rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(colors.foreground/8%),transparent)]">
        
        {/* glowing top border line */}
        <div className="absolute top-0 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/20 blur" />

        <div className="grid gap-12 md:grid-cols-[1.2fr_2fr]">
          {/* brand */}
          <AnimatedContainer className="space-y-4">
            <div>
              <Link
                to="/"
                className="flex items-center gap-2 text-2xl font-bold text-indigo-600"
              >
                <img src="/logo.svg" alt="" width={30} />
              </Link>
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

// animation wrapper
type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>["className"];
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
      viewport={{ once: true, margin: "-80px" }}
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

const footerLinks: FooterSection[] = [
  {
    label: "Product",
    links: [
      { title: "Features", href: "/features" },
      { title: "Hospitals", href: "/hospitals" },
      { title: "Appointments", href: "/appointments" },
      { title: "Dashboards", href: "/dashboard" },
    ],
  },
  {
    label: "Company",
    links: [
      { title: "About", href: "/about" },
      { title: "FAQs", href: "/faqs" },
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms of Service", href: "/terms" },
    ],
  },
  {
    label: "Resources",
    links: [
      { title: "Help Center", href: "/help" },
      { title: "Documentation", href: "/docs" },
      { title: "Changelog", href: "/changelog" },
      { title: "Contact Support", href: "/contact" },
    ],
  },
];
