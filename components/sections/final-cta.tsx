"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-navy via-navy to-navy-dark text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-montserrat font-black text-4xl md:text-6xl mb-6 leading-tight">
            READY TO TRANSFORM YOUR BUSINESS WITH AI?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            Get a free AI audit and discover how we can help you save time,
            increase efficiency, and boost revenue
          </p>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <Button
              variant="white"
              size="xl"
              className="group shadow-2xl hover:scale-105 transition-transform text-lg px-12 py-6 h-auto"
            >
              Book Your Free Consultation
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Trust Reinforcement */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 text-white/70 mb-8"
          >
            <div className="flex items-center gap-2">
              <span className="text-white">✓</span>
              <span>No commitment</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white">✓</span>
              <span>30-min call</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white">✓</span>
              <span>Free AI roadmap</span>
            </div>
          </motion.div>

          {/* Alternative Contact */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col items-center gap-2"
          >
            <p className="text-white/60">Or reach out directly:</p>
            <a
              href="mailto:hello@onegoai.com"
              className="flex items-center gap-2 text-white hover:text-white/80 transition-colors font-semibold"
            >
              <Mail className="w-5 h-5" />
              hello@onegoai.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
