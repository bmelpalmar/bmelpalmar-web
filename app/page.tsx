import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { WhatIsBM } from "@/components/landing/what-is-bm"
import { ExploreCategories } from "@/components/landing/explore-categories"
import { ForVisitors } from "@/components/landing/for-visitors"
import { ForBusinessSummary } from "@/components/landing/for-business-summary"
import { PricingPreview } from "@/components/landing/pricing-preview"
import { ContactForm } from "@/components/landing/contact-form"
import { Footer } from "@/components/landing/footer"


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatIsBM />
        <ExploreCategories />
        <ForVisitors />
        <ForBusinessSummary />
        <PricingPreview />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
