"use client"

import Image from "next/image"
import { Waves, Sun, Calendar, MapPin, Utensils } from "lucide-react"

const benefits = [
  {
    icon: Waves,
    title: "Condiciones del mar en tiempo real",
    description: "Altura de olas, periodo, viento y mejor hora para surfear."
  },
  {
    icon: Calendar,
    title: "Eventos y fiestas",
    description: "No te pierdas ningún concierto, mercado o fiesta local."
  },
  {
    icon: Utensils,
    title: "Donde comer",
    description: "Los mejores restaurantes, bares y chiringuitos de la zona."
  },
  {
    icon: MapPin,
    title: "Puntos de interes",
    description: "Playas, parking, contenedores y servicios cerca de ti."
  }
]

export function ForVisitors() {
  return (
    <section id="visitantes" className="py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">
              Para visitantes
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-6 text-balance">
              Tu compañero <span className="font-semibold">en El Palmar</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Ya sea tu primera vez o vuelves cada verano, BM te ayuda a descubrir 
              lo mejor de El Palmar. Información actualizada por locales para que 
              vivas la experiencia auténtica.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                Descargar en App Store
              </button>
              <button className="flex items-center gap-2 border border-border px-6 py-3 rounded-lg text-sm font-medium hover:bg-muted transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.807 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                Descargar en Google Play
              </button>
            </div>
          </div>

          {/* Image/Phone Mockup */}
          <div className="relative lg:pl-12">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative mx-auto w-[280px] h-[580px] bg-secondary rounded-[3rem] p-3 shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-secondary rounded-b-2xl" />
                <div className="w-full h-full bg-card rounded-[2.5rem] overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/808808cd398f470ad82eae92657d6b04-KZwglq3jNljtuqcrZ7hpHZEQq5N7Yh.jpg"
                    alt="BM El Palmar App"
                    fill
                    className="object-cover"
                  />
                  {/* App Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-4 right-4 text-white">
                    <p className="text-xs opacity-70 mb-1">Descubre</p>
                    <p className="text-xl font-light">El Palmar</p>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-4 top-24 max-w-[180px] animate-float">
                <div className="relative overflow-hidden rounded-xl shadow-xl">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hoy%20en%20el%20palmar-xK6nLmkdcRTDZBQH2WFfQhZzqjQwlr.jpg)' }}
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 60px 30px rgba(0,0,0,0.5)' }} />
                  {/* Shimmer effect */}
                  <div 
                    className="absolute inset-0 animate-shimmer pointer-events-none"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                      width: '50%'
                    }}
                  />
                  <div className="relative p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Sun className="w-4 h-4 text-white drop-shadow" />
                      </div>
                      <span className="text-xs font-medium text-white drop-shadow-lg">Hoy en El Palmar</span>
                    </div>
                    <p className="text-3xl font-semibold text-white drop-shadow-lg">24°C</p>
                    <p className="text-xs text-white/90 drop-shadow">Soleado, viento 15km/h</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-32 max-w-[180px] animate-float-delayed">
                <div className="relative overflow-hidden rounded-xl shadow-xl">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/condiciones-3bB4WwtB4tvVjiyy0gKwjRs1c4mCAS.jpg)' }}
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 60px 30px rgba(0,0,0,0.5)' }} />
                  {/* Shimmer effect */}
                  <div 
                    className="absolute inset-0 animate-shimmer pointer-events-none"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                      width: '50%'
                    }}
                  />
                  <div className="relative p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Waves className="w-4 h-4 text-white drop-shadow" />
                      </div>
                      <span className="text-xs font-medium text-white drop-shadow-lg">Condiciones</span>
                    </div>
                    <p className="text-3xl font-semibold text-white drop-shadow-lg">1.2m</p>
                    <p className="text-xs text-white/90 drop-shadow">Periodo 12s - Buenas</p>
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
