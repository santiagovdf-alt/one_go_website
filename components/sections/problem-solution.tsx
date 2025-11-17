"use client"

import { motion } from "framer-motion"
import { X, Check } from "lucide-react"
import { Card } from "@/components/ui/card"

const problems = [
  "It seems too technical and complicated",
  "They don't know where to start",
  "Expensive consultants with no ROI guarantee",
  "Generic solutions that don't fit their business",
]

const solutions = [
  "Clear implementation roadmap",
  "Hands-on training for your team",
  "Custom solutions built for your needs",
  "Measurable results and ROI tracking",
]

export function ProblemSolution() {
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
            AI Doesn&apos;t Have to Be Complicated
          </h2>
          <p className="text-xl text-navy/70 max-w-2xl mx-auto">
            We understand the challenges SMEs face when implementing AI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 h-full border-2 border-red-100 bg-white">
              <h3 className="font-montserrat font-bold text-2xl text-navy mb-6">
                Most SMEs struggle with AI because...
              </h3>
              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                      <X className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="text-navy/80 leading-relaxed">{problem}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 h-full border-2 border-green-200 bg-gradient-to-br from-white to-green-50">
              <h3 className="font-montserrat font-bold text-2xl text-navy mb-6">
                We make AI simple, practical, and profitable
              </h3>
              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-navy/80 font-medium leading-relaxed">{solution}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
