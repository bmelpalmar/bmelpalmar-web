import { Header } from "@/components/landing/header"
import { PricingPlans } from "@/components/landing/pricing-plans"
import { Footer } from "@/components/landing/footer"
import { WhatsAppButton } from "@/components/landing/whatsapp-button"

export const metadata = {
  title: "Planes y Tarifas - BM El Palmar",
  description: "Descubre los planes y tarifas para negocios en BM El Palmar. Visibilidad local, perfil completo y acceso a miles de visitantes."
}

export default function PlanesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <PricingPlans />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
