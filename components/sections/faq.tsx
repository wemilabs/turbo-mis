import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Turbo C-25.3?",
    answer:
      "Comprehensive, fast, secure, robust, and easy-to-use. A Learning Management System designed for educational institutions, streamlining course management, student tracking, and administrative tasks. Here's Turbo C-25.3",
  },
  {
    question: "Oh my god! Another one?",
    answer:
      "Definitely not! Turbo C-25.3 brings new parameters in the game. With its Embedded Intelligence Engine (EIE), Turbo C-25.3 can perform tasks that existing solutions can't. Performance Analytics, Accounting, AI, Machine Learning, and more. You name it, Turbo C-25.3 can handle it. It's not a usual LMS/MIS, we are in a new era. Turbo C-25.3 is a real smart assistant right here in your computer to help you manage your institution.",
  },
  {
    question: "Why did we build Turbo C-25.3?",
    answer:
      "Sofware shouldn’t be painful. The existing ones we’ve been using in the past just don’t really work. Lot of frustration, financial incoherences, struggles… pffiou! Endless list. Instead of using the app, we found ourselves fighting with it. Therefore we decided to give birth to Turbo C-25.3, our brand new modern, fast, secure, and easy-to-use LMS/MIS. We are profoundly proud of it and can't wait to see more and more academic institutions adopting it.",
  },
  {
    question: "How can I get started?",
    answer:
      "Getting started is easy! Simply click the 'Get Started' button to create your account. Our team will guide you through the setup process.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a generous 03-month free trial with full access to all features. No credit card required.",
  },
  {
    question: "What support options are available?",
    answer:
      "We provide 24/7 email support, live chat during business hours, and comprehensive documentation. Enterprise plans include dedicated support.",
  },
  {
    question: "Can I integrate with other tools?",
    answer:
      "Yes, Turbo C-25.3 offers extensive integration capabilities with popular education tools, payment systems, and communication platforms.",
  },
  {
    question: "Who's behind Turbo C-25.3?",
    answer:
      "Turbo C-25.3 is part of the Cyborg Project, owned by the Wemi Labs.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about Turbo C-25.3
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
