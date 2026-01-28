import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedGroup } from "@/components/ui/animated-group";

export function FAQSection() {
  const faqItems = [
    {
      id: "faq-1",
      question: "What is Vaxify and who is it for?",
      answer:
        "Vaxify is a vaccination management platform designed for citizens to book appointments, hospitals to manage vaccination schedules, and administrators to oversee system operations.",
    },
    {
      id: "faq-2",
      question: "How do users book a vaccination appointment?",
      answer:
        "Users can browse approved hospitals, view available vaccines and time slots, and book appointments by selecting a preferred date and time after logging in.",
    },
    {
      id: "faq-3",
      question: "Can users cancel or manage their appointments?",
      answer:
        "Yes. Users can view upcoming appointments and cancel them directly from their dashboard before the vaccination is completed.",
    },
    {
      id: "faq-4",
      question: "How do hospitals join and operate on Vaxify?",
      answer:
        "Hospitals are registered by staff members and become available to users only after administrative approval. Once approved, staff can manage schedules, vaccines, and appointments.",
    },
    {
      id: "faq-5",
      question: "Who updates vaccination and appointment statuses?",
      answer:
        "Hospital staff are responsible for updating appointment statuses, including marking vaccinations as completed or cancelled.",
    },
    {
      id: "faq-6",
      question: "How is access and data security handled?",
      answer:
        "Vaxify uses secure authentication and role-based access control to ensure that each user can access only the data and features relevant to their role.",
    },
  ];

  return (
    <section className="py-32">
      <div className="mx-auto max-w-2xl px-6 space-y-16">

        {/* HEADING — APPEARS FIRST (Hero rhythm) */}
        <AnimatedGroup preset="blur-slide">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
        </AnimatedGroup>

        {/* ACCORDION — APPEARS AFTER */}
        <AnimatedGroup
          variants={{
            container: {
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  delayChildren: 0.15,
                  staggerChildren: 0.08,
                },
              },
            },
            item: {
              hidden: { opacity: 0, y: 14 },
              visible: { opacity: 1, y: 0 },
            },
          }}
        >
          <Accordion type="single" collapsible className="text-left">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedGroup>

      </div>
    </section>
  );
}
