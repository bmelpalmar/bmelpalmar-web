"use client"

import Link from "next/link"
import { ArrowRight, Check, Bell, Heart, Star } from "lucide-react"

const benefits = [
  "Visibilidad ante miles de visitantes",
  "Perfil completo con fotos y descripción",
  "Aparece en busquedas y recomendados",
  "Promociones y eventos destacados",
  "Notificaciones push a tus clientes",
  "Soporte personalizado"
]

export function ForBusinessSummary() {
  return (
    <section id="negocios" className="py-16 lg:py-20 bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-primary-foreground/70 font-medium mb-4">
              Para negocios
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-primary-foreground mb-6 text-balance">
              Haz crecer tu negocio <span className="font-semibold">en El Palmar</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              Únete a la comunidad de negocios de BM El Palmar y conecta con 
              miles de visitantes que buscan experiencias auténticas. 
              Planes flexibles adaptados a cada tipo de negocio.
            </p>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-primary-foreground/90">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/planes"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Ver planes y tarifas
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a 
                href="#contacto"
                className="inline-flex items-center gap-2 border border-primary-foreground/30 px-6 py-3 rounded-lg text-sm font-medium text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              >
                Contactar
              </a>
            </div>
          </div>

          {/* Premium Push Notification Card */}
          <div className="lg:pl-12">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2B5A7F] via-[#1a3a52] to-[#0f2536]" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
              
              <div className="relative p-8 lg:p-10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/20 flex items-center justify-center">
                    <Bell className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Tus clientes siempre en tu radar</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4 mb-8">
                  <p className="text-sm text-white/80 leading-relaxed">
                    En El Palmar, el que se entera tarde, se queda sin mesa. Por eso hemos diseñado las notificaciones push: cuando tu negocio tiene una oferta, cuando abres una noche especial, cuando hay música en vivo — tus clientes lo saben al instante.
                  </p>
                  <p className="text-sm text-white/80 leading-relaxed">
                    Tus clientes pueden marcarte como favorito. Significa que vuelven, que te tienen guardado, que eres su lugar.
                  </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                    <Bell className="w-4 h-4 text-amber-400" />
                    <span className="text-xs text-white/90">Push instantáneas</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                    <Heart className="w-4 h-4 text-rose-400" />
                    <span className="text-xs text-white/90">Sistema favoritos</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                    <Star className="w-4 h-4 text-amber-400" />
                    <span className="text-xs text-white/90">Destacados</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs text-white/90">Sin spam</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
