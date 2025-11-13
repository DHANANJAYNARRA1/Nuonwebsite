import React from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "What is Nuon?",
    answer: "Nuon stands for Nurses United Opportunities Nourished. It's an all-in-one mobile app designed specifically for nurses to access professional development courses, connect with mentors, manage their wellbeing, and track their career achievements—all in one unified platform.",
  },
  {
    question: "When will the app launch?",
    answer: "We're currently in the final stages of development and plan to launch in early 2026. By joining our early access waitlist, you'll be among the first to know when we go live and you'll receive exclusive early bird benefits including one free course.",
  },
  {
    question: "Who are the mentors?",
    answer: "Our mentors are experienced, vetted healthcare professionals specializing in various fields including Critical Care, Emergency Medicine, Pediatrics, Oncology, and more. Each mentor goes through a rigorous verification process to ensure they can provide high-quality guidance and support to fellow nurses.",
  },
  {
    question: "What kind of courses will be available?",
    answer: "Nuon will offer a curated marketplace of professional development courses covering topics like Advanced Patient Care, Wound Care Management, New Clinical Guidelines, Specialized Techniques, and much more. All courses are designed specifically for nurses and taught by industry experts.",
  },
  {
    question: "Is my information secure?",
    answer: "Absolutely. We take data privacy and security very seriously. All personal information is encrypted and stored securely. We comply with healthcare data protection regulations and will never share your information with third parties without your explicit consent.",
  },
  {
    question: "What is the 'early access perk'?",
    answer: "Early access members who join our waitlist will receive one free course when the app launches. You'll also get priority access to new features, exclusive content, and the opportunity to shape the future of Nuon through your feedback.",
  },
];

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-purple-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-purple-700 text-lg max-w-3xl mx-auto">
            Got questions? We've got answers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="backdrop-blur-md bg-purple-50/50 border border-purple-200 rounded-xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-purple-900 hover:text-purple-700 text-left py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-purple-700 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
