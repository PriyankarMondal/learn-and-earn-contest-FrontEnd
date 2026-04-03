import { Hero } from '../features/home/Hero'
import { HowItWorks } from '../features/home/HowItWorks'
import { FeaturedContests } from '../features/home/FeaturedContests'
import { Testimonials } from '../features/home/Testimonials'
import { CtaBanner } from '../features/home/CtaBanner'

export function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <FeaturedContests />
      <Testimonials />
      <CtaBanner />
    </main>
  )
}
