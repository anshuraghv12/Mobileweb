// app/page.tsx
import HeroSection from '@/components/hero-section';
import  DeviceCards  from "@/components/device-cards"
import { RepairForm } from "@/components/repair-form"
import { Testimonials } from "@/components/testimonials"
import { TrustBadges } from "@/components/trust-badges" 
import  AboutShop  from "@/components/AboutShop"

import { Footer } from "@/components/footer"
import  WhyChooseUs from "@/components/WhyChooseUS"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection/>
      <TrustBadges />
      <DeviceCards />
      <AboutShop/>
      <WhyChooseUs/>
      {/* <Testimonials /> */}
      <RepairForm />

      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
