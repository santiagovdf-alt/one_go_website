"use client"

import { motion } from "framer-motion"
import { Phone, FileText, Rocket } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const steps = [
  {
    number: 1,
    icon: Phone,
    title: "Discovery Call (FREE)",
    description: "30-minute consultation where we analyze your business needs and identify AI opportunities. No commitment required.",
    cta: "Book Your Free Audit",
  },
  {
    number: 2,
    icon: FileText,
    title: "Custom Strategy",
    description: "Receive your tailored AI roadmap with clear ROI projections, implementation timeline, and transparent pricing.",
    cta: null,
  },
  {
    number: 3,
    icon: Rocket,
    title: "Implementation & Support",
    description: "We build and integrate solutions, train your team, provide ongoing support, and track results together.",
    cta: null,
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-navy mb-4">
            HOW IT WORKS
          </h2>
          <p className="text-xl text-navy/70 max-w-2xl mx-auto">
            Simple, transparent process from discovery to results
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-24 w-0.5 h-16 bg-navy/20 hidden md:block"></div>
                )}

                <Card className="p-8 border-2 border-navy/10 hover:border-navy/30 transition-colors bg-white">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Step Number & Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center mb-4 md:mb-0">
                        <span className="font-montserrat font-black text-2xl text-white">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <step.icon className="w-6 h-6 text-navy" />
                        <h3 className="font-montserrat font-bold text-2xl text-navy">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-navy/70 leading-relaxed mb-4">
                        {step.description}
                      </p>
                      {step.cta && (
                        <Button variant="default" size="lg">
                          {step.cta}
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
