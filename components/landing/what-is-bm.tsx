"use client"

import { Smartphone, MapPin, Calendar, Waves, Sparkles } from "lucide-react"

const features = [
  {
    icon: MapPin,
    title: "Descubre lo local",
    description: "Más de 150 negocios verificados entre restaurantes, bares, tiendas y servicios.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/descubre_local-ryGCKdgBklpV6uy608kMmhgmBLYQhL.jpg"
  },
  {
    icon: Calendar,
    title: "Eventos y planes",
    description: "Entérate de fiestas, mercados, conciertos y todo lo que pasa en El Palmar.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eventos_planes-OP4Ki7Fx420bwPp65DuB1ALQyXTVid.jpg"
  },
  {
    icon: Waves,
    title: "Condiciones del mar",
    description: "Consulta las olas, viento, mareas y encuentra el mejor momento para surfear.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/condiciones_mar-gjduPGIaED48NlUa6k41rvIgcEvNhb.jpg"
  },
  {
    icon: Smartphone,
    title: "Todo en tu móvil",
    description: "Información actualizada y offline para que no te pierdas nada.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/todoentumovil-xNn8DVGP7rAAZ3hO943VSd56TWxmga.jpg"
  }
]

export function WhatIsBM() {
  return (
    <section id="about" className="py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Intro Section */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">
            Tu plataforma digital
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-6 text-balance">
            Todo en un sólo lugar <span className="font-semibold">BM El Palmar</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            BM El Palmar es la plataforma digital que reúne todos los negocios, servicios y experiencias de El Palmar en un sólo lugar. Ofrecemos visibilidad real a través de nuestra app móvil y web, conectando directamente con miles de visitantes y residentes.
          </p>
        </div>

        {/* Concepto Section */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">
            Nuestro enfoque
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-6 text-balance">
            Sabemos cómo es <span className="font-semibold">El Palmar</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-4">
            Un chiringuito no es sólo un restaurante. Un bar no es sólo un bar. En El Palmar los negocios tienen múltiples facetas — dan de comer, ponen música, organizan noches y reciben a surfistas y turistas a la vez. Por eso en BM El Palmar hemos diseñado los planes para que, cuanto más crece tu visibilidad, más categorías puedes ocupar.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Con el Plan Base estás donde más te importa. Con el Plus llegas a tres frentes a la vez. Con el Premium tu negocio está en todas partes dentro de la app. Cada paso hacia arriba es más visibilidad, más categorías y más visitantes encontrándote.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${feature.image})` }}
              />
              {/* Inner Shadow Overlay */}
              <div 
                className="absolute inset-0"
                style={{ boxShadow: 'inset 0 0 80px 40px rgba(0,0,0,0.5)' }}
              />
              
              {/* Shimmer Effect */}
              <div 
                className="absolute inset-0 animate-shimmer pointer-events-none"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                  width: '50%'
                }}
              />
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-6">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white drop-shadow-lg" />
                </div>
                <div>
                  <h3 
                    className="text-lg font-semibold text-white mb-2"
                    style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}
                  >
                    {feature.title}
                  </h3>
                  <p 
                    className="text-sm text-white/95 leading-relaxed"
                    style={{ textShadow: '0 1px 6px rgba(0,0,0,0.6)' }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
