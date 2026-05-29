"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, ChevronDown, ChevronUp, ArrowRight, Sparkles } from "lucide-react"

const plans = [
  {
    name: "Plan Base",
    subtitle: "Empieza a destacar en tus categorías principales.",
    price: "29",
    priceAnnual: "249",
    categories: "Hasta 2 categorías",
    features: [
      "Aparición en hasta 2 categorías",
      "Logo visible en la ficha",
      "Hasta 5 fotografías",
      "Ficha estándar",
      "WhatsApp e Instagram",
      "1 push de bienvenida"
    ],
    badge: null,
    isPremium: false
  },
  {
    name: "Plan Plus",
    subtitle: "Llega a cinco frentes a la vez.",
    price: "59",
    priceAnnual: "499",
    categories: "Hasta 5 categorías",
    features: [
      "Aparición en hasta 5 categorías",
      '"Recomendados por BM"',
      "Hasta 10 fotografías",
      "Ficha ampliada",
      "2 ofertas al mes",
      "2 push al mes"
    ],
    badge: "Más Popular",
    isPremium: false
  },
  {
    name: "Plan Premium",
    subtitle: "Tu negocio en todas partes dentro de la app.",
    price: "89",
    priceAnnual: "849",
    categories: "Todas tus categorías",
    features: [
      "Aparición en todas tus categorías",
      "Sección Destacados",
      "Fotos ilimitadas",
      "Ficha completa + insignia",
      "Ofertas ilimitadas",
      "Push ilimitadas + Agenda eventos"
    ],
    badge: "Premium",
    isPremium: true
  }
]

export function PricingPreview() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section id="planes-preview" className="py-16 lg:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">
            Planes de visibilidad
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-6 text-balance">
            Planes y <span className="font-semibold">Tarifas</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cuántas categorías ocupas y cómo de visible eres dentro de cada una depende del plan que elijas.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            La visibilidad dentro de la app sigue este orden de prioridad: <strong className="text-foreground">Premium → Plus → Base → Gratuito</strong>
          </p>
        </div>

        {/* Toggle Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-medium hover:bg-primary/90 transition-all"
          >
            {isExpanded ? "Ocultar planes" : "Ver todos los planes"}
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Plans Grid - Collapsible */}
        <div className={`transition-all duration-500 ${isExpanded ? "max-h-none opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
          {/* Presencia Basica Gratuita */}
          <div className="bg-card p-6 rounded-xl border border-border mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-2">Presencia Básica — Gratuita</h3>
            <p className="text-sm text-muted-foreground mb-4">Todos los negocios de El Palmar tienen presencia automatica y gratuita en BM El Palmar:</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Nombre comercial visible en su categoria principal</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Botón &quot;Cómo llegar&quot;</span>
              </div>
            </div>
          </div>

          {/* Plans Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 pb-4">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  plan.isPremium 
                    ? "border-2 border-amber-400 shadow-lg shadow-amber-400/10" 
                    : "border border-border"
                }`}
              >
                {/* Left accent bar */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${plan.isPremium ? "bg-amber-400" : "bg-muted"}`} />
                
                <div className="p-6 lg:p-8">
                  {plan.badge && (
                    <span className={`inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded mb-4 ${
                      plan.isPremium 
                        ? "bg-amber-400 text-amber-950" 
                        : "bg-primary text-primary-foreground"
                    }`}>
                      {plan.badge}
                    </span>
                  )}
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{plan.subtitle}</p>
                  
                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-border">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-primary">{plan.price}€</span>
                      <span className="text-sm text-muted-foreground">/mes</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {plan.priceAnnual}€/año (2 meses gratis)
                    </p>
                  </div>

                  {/* Categories */}
                  <div className="bg-muted/50 rounded-lg px-4 py-3 mb-6">
                    <span className="text-sm font-medium text-foreground">{plan.categories}</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a 
                    href="#contacto"
                    className={`block w-full text-center py-3 rounded-lg text-sm font-medium transition-all ${
                      plan.isPremium
                        ? "bg-amber-400 text-amber-950 hover:bg-amber-500"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                  >
                    Contratar
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* More Info Link */}
          <div className="text-center">
            <Link 
              href="/planes"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Ver todos los detalles, temporadas y servicios adicionales
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Preview Cards when collapsed */}
        <div className={`transition-all duration-500 ${!isExpanded ? "opacity-100" : "opacity-0 h-0 overflow-hidden"}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <div 
                key={index}
                onClick={() => setIsExpanded(true)}
                className={`relative bg-card rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  plan.isPremium 
                    ? "border-2 border-amber-400" 
                    : "border border-border"
                }`}
              >
                <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-xl ${plan.isPremium ? "bg-amber-400" : "bg-muted"}`} />
                
                <div className="flex justify-between items-start mb-4">
                  <div>
                    {plan.badge && (
                      <span className={`inline-block text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded mb-2 ${
                        plan.isPremium 
                          ? "bg-amber-400 text-amber-950" 
                          : "bg-primary text-primary-foreground"
                      }`}>
                        {plan.badge}
                      </span>
                    )}
                    <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-primary">{plan.price}€</span>
                    <span className="text-xs text-muted-foreground">/mes</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{plan.categories}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
