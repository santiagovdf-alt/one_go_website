"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Do we need technical knowledge to work with AI?",
    answer: "No! We handle all the technical complexity and train your team on how to use the AI solutions effectively. Our goal is to make AI accessible to everyone in your organization, regardless of technical background.",
  },
  {
    question: "How long does implementation take?",
    answer: "Simple solutions like AI chatbots typically take 2-4 weeks. More complex systems like process automation or custom integrations take 8-12 weeks. We provide a detailed timeline during the strategy phase.",
  },
  {
    question: "What if the AI doesn't deliver results?",
    answer: "We work on ROI-based projects with clear success metrics defined upfront. Every solution includes performance tracking and reporting. We stand behind our work and are committed to delivering measurable value.",
  },
  {
    question: "Is our data secure?",
    answer: "Absolutely. We're EU-based and fully GDPR-compliant. All solutions use enterprise-grade security, and your data is handled with the highest standards of privacy and protection. We can provide detailed security documentation upon request.",
  },
  {
    question: "Do you work with companies outside Spain?",
    answer: "Yes! While we're based in Spain, we serve clients across the EU and internationally. We work in English, Spanish, and can accommodate other languages as needed.",
  },
  {
    question: "What kind of support do you provide after implementation?",
    answer: "Every project includes ongoing support and training. We offer 24/7 technical support, regular check-ins, performance optimization, and team training sessions to ensure your success.",
  },
]

export function FAQ() {
  return (
    <section className="py-20 md:py-32 bg-navy-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-navy mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-xl text-navy/70 max-w-2xl mx-auto">
            Got questions? We&apos;ve got answers
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="bg-white rounded-lg p-6 shadow-lg">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-navy hover:text-navy/80">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-navy/70 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
