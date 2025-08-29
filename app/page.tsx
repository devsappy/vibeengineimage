import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Capabilities from '@/components/Capabilities'
import Showcase from '@/components/Showcase'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Capabilities />
      <Showcase />
      <CTA />
      <Footer />
    </main>
  )
}