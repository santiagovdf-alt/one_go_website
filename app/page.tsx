import { HeroSection } from "@/components/sections/hero-section"
import { ProblemSolution } from "@/components/sections/problem-solution"
import { Services } from "@/components/sections/services"
import { SocialProof } from "@/components/sections/social-proof"
import { WhyChoose } from "@/components/sections/why-choose"
import { HowItWorks } from "@/components/sections/how-it-works"
import { FAQ } from "@/components/sections/faq"
import { FinalCTA } from "@/components/sections/final-cta"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSolution />
      <Services />
      <SocialProof />
      <WhyChoose />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
