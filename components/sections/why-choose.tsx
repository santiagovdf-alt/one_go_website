"use client"

import { motion } from "framer-motion"
import { MapPin, TrendingUp, Handshake, Lock } from "lucide-react"
import { Card } from "@/components/ui/card"

const differentiators = [
  {
    icon: MapPin,
    title: "Local Expertise, Competitive Pricing",
    description: "Spanish-based with EU pricing advantages. Save 40-60% compared to US/UK agencies while getting the same quality.",
  },
  {
    icon: TrendingUp,
    title: "ROI-Focused Approach",
    description: "We don't sell technology—we deliver measurable results. Every solution includes ROI tracking and reporting.",
  },
  {
    icon: Handshake,
    title: "Hands-On Partnership",
    description: "Not just consultants—your AI implementation partners. Ongoing training and support included with every project.",
  },
  {
    icon: Lock,
    title: "GDPR Compliant & Secure",
    description: "EU-based data handling and compliance. Enterprise-grade security for all solutions. Your data stays protected.",
  },
]

export function WhyChoose() {
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
            WHY CHOOSE ONE GO
          </h2>
          <p className="text-xl text-navy/70 max-w-2xl mx-auto">
            We&apos;re different from traditional AI consultancies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full border-2 border-navy/10 hover:border-navy/30 transition-colors bg-white">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-navy flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-xl text-navy mb-3">
                      {item.title}
                    </h3>
                    <p className="text-navy/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
