"use client"

import { motion } from "framer-motion"
import { Target, GraduationCap, Bot, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Target,
    title: "AI Strategy & Consulting",
    description: "We analyze your business and create a custom AI roadmap that delivers results",
    benefits: ["ROI analysis", "Implementation planning", "Competitive advantage"],
  },
  {
    icon: GraduationCap,
    title: "Training & Enablement",
    description: "Hands-on training to help your team work smarter with AI tools",
    benefits: ["Team workshops", "Ongoing support", "Best practices"],
  },
  {
    icon: Bot,
    title: "AI Implementation Solutions",
    description: "Custom AI systems built for your specific business needs",
    benefits: ["AI Chatbots & Support", "Process Automation", "Semantic Search & RAG"],
  },
]

export function Services() {
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
            OUR SERVICES
          </h2>
          <p className="text-xl text-navy/70 max-w-2xl mx-auto">
            Comprehensive AI solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Card className="h-full bg-navy text-white border-0 shadow-xl hover:shadow-2xl transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="font-montserrat text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-white/70 text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-white/90">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/70"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="white"
                    className="w-full group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
