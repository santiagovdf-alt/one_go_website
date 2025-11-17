"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee"

const stats = [
  { value: "50+", label: "Businesses Transformed" },
  { value: "€500K+", label: "Saved in Operations" },
  { value: "30%", label: "Average Efficiency Increase" },
  { value: "24/7", label: "Support Available" },
]

const testimonials = [
  {
    author: {
      name: "María García",
      handle: "CEO, RetailTech Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "ONE GO transformed our customer service. Our response time dropped from hours to seconds, and customer satisfaction is through the roof.",
  },
  {
    author: {
      name: "Carlos Rodríguez",
      handle: "Operations Director, TechStart Madrid",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "The ROI was visible within the first month. Their AI chatbot handles 70% of our support tickets automatically.",
  },
  {
    author: {
      name: "Laura Martínez",
      handle: "Founder, Digital Innovations",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Finally, an AI agency that speaks our language and understands SME needs. Not just consultants—true partners.",
  },
  {
    author: {
      name: "Javier Sánchez",
      handle: "CTO, InnovateES",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    text: "The implementation was seamless. Their team guided us every step of the way, and the results exceeded our expectations.",
  },
  {
    author: {
      name: "Ana Torres",
      handle: "Marketing Director, GrowthCo",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    text: "Working with ONE GO has been a game-changer. Our marketing automation now runs like clockwork, saving us 15 hours per week.",
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

        {/* Testimonials Marquee */}
        <TestimonialsSection
          title="TRUSTED BY BUSINESSES ACROSS SPAIN"
          description="Don't just take our word for it—hear from our clients"
          testimonials={testimonials}
          className="bg-transparent"
        />

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
                <h3 className="font-montserrat font-bold text-2xl mb-2 text-white">
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
