import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/* ===================== FAQ SECTION ===================== */

export function FAQSection() {
  const faqItems = [
    {
      id: "item-1",
      question: "What is Vaxify and who is it for?",
      answer:
        "Vaxify is a vaccination management platform designed for citizens to book appointments, hospitals to manage vaccination schedules, and administrators to oversee system operations.",
    },
    {
      id: "item-2",
      question: "How do users book a vaccination appointment?",
      answer:
        "Users can browse approved hospitals, view available vaccines and time slots, and book appointments by selecting a preferred date and time after logging in.",
    },
    {
      id: "item-3",
      question: "Can users cancel or manage their appointments?",
      answer:
        "Yes. Users can view upcoming appointments and cancel them directly from their dashboard before the vaccination is completed.",
    },
    {
      id: "item-4",
      question: "How do hospitals join and operate on Vaxify?",
      answer:
        "Hospitals are registered by staff members and become available to users only after administrative approval. Once approved, staff can manage schedules, vaccines, and appointments.",
    },
    {
      id: "item-5",
      question: "Who updates vaccination and appointment statuses?",
      answer:
        "Hospital staff are responsible for updating appointment statuses, including marking vaccinations as completed or cancelled.",
    },
    {
      id: "item-6",
      question: "How is access and data security handled?",
      answer:
        "Vaxify uses secure authentication and role-based access control to ensure that each user can access only the data and features relevant to their role.",
    },
  ];

  return (
    <section className="pt-24 pb-16 bg-background">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-10">
          <p className="text-[#6366f1] text-[13px] font-mono font-bold mb-4 uppercase tracking-[0.2em]">
            FAQs
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-5">

          {/* LEFT */}
          <div className="md:col-span-2">
            <h2 className="text-foreground text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Frequently Asked Questions
            </h2>

            <p className="text-muted-foreground mt-6 text-lg leading-relaxed max-w-md">
              Discover quick and comprehensive answers to common questions about
              our platform and features.
            </p>

            <p className="text-muted-foreground mt-8 hidden md:block">
              Can't find what you're looking for? Contact our{" "}
              <a
                href="mailto:support@vaxify.com"
                className="text-primary font-medium hover:underline"
              >
                customer support team
              </a>
            </p>
          </div>

          {/* RIGHT */}
          <div className="md:col-span-3">
            <Accordion
              type="single"
              collapsible
              className="w-full border-t border-border/40"
            >
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b border-border/40"
                >
                  <AccordionTrigger>
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <p className="text-muted-foreground mt-8 md:hidden">
              Can't find what you're looking for? Contact our{" "}
              <a
                href="mailto:support@vaxify.com"
                className="text-primary font-medium hover:underline"
              >
                customer support team
              </a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ===================== ACCORDION UI ===================== */

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("py-1", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        `
        flex flex-1 items-center justify-between
        py-5 text-[17px] font-medium text-foreground
        transition-colors
        `,
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 data-[state=open]:rotate-180" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden transition-all data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up"
    {...props}
  >
    <div
      className={cn(
        "pb-6 pt-1 text-muted-foreground text-[15px] leading-relaxed",
        className
      )}
    >
      {children}
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";
