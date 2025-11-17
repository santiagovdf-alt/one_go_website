"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card } from "@/components/ui/card"

const stats = [
  { value: "50+", label: "Businesses Transformed" },
  { value: "€500K+", label: "Saved in Operations" },
  { value: "30%", label: "Average Efficiency Increase" },
  { value: "24/7", label: "Support Available" },
]

const testimonials = [
  {
    quote: "ONE GO transformed our customer service. Our response time dropped from hours to seconds, and customer satisfaction is through the roof.",
    author: "María García",
    role: "CEO, RetailTech Solutions",
    rating: 5,
  },
  {
    quote: "The ROI was visible within the first month. Their AI chatbot handles 70% of our support tickets automatically.",
    author: "Carlos Rodríguez",
    role: "Operations Director, TechStart Madrid",
    rating: 5,
  },
  {
    quote: "Finally, an AI agency that speaks our language and understands SME needs. Not just consultants—true partners.",
    author: "Laura Martínez",
    role: "Founder, Digital Innovations",
    rating: 5,
  },
]

export function SocialProof() {
  return (
    <section className="py-20 md:py-32 bg-navy-dark text-white">
      <div className="container mx-auto px-4">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-montserrat font-black text-4xl md:text-5xl mb-2 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-white/70 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-4">
            TRUSTED BY BUSINESSES ACROSS SPAIN
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Don&apos;t just take our word for it—hear from our clients
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full p-6 bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-white/20 mb-4" />
                <p className="text-white/90 mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center text-lg font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-white/60">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Case Study Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-montserrat font-bold text-2xl mb-2">
                  How a Málaga Real Estate Agency 3X&apos;d Their Lead Response Time
                </h3>
                <p className="text-white/70">
                  Discover how we helped them automate lead qualification and boost conversions by 45%
                </p>
              </div>
              <button className="whitespace-nowrap px-6 py-3 bg-white text-navy font-semibold rounded-md hover:bg-white/90 transition-colors">
                Read Full Case Study
              </button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
