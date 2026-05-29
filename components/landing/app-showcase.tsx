"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

const screenshots = [
  {
    id: "inicio",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-17%20at%2004.00.33-mObq7DnK56hVLLxpwj9tg83w4qY5jo.jpeg",
    label: "Inicio"
  },
  {
    id: "altura",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-17%20at%2004.00.33%20%283%29-oxQ4OGL90F4CcllEaS8u4islxLtCvN.jpeg",
    label: "Surf"
  },
  {
    id: "explorar",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-17%20at%2004.00.33%20%284%29-jsrKruS1SbXKpcTFrdTfwuuRZYHhRl.jpeg",
    label: "Explorar"
  },
  {
    id: "mapa",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mapa-dAfujYSg6BbTG4fKXwDcN2sWiVLboc.jpg",
    label: "Mapa"
  }
]

const features = [
  { title: "Puesta de sol", desc: "Hora exacta actualizada cada dia" },
  { title: "Favoritos", desc: "Guarda tus lugares preferidos" },
  { title: "Notificaciones", desc: "Eventos y ofertas destacadas" },
  { title: "Mapa completo", desc: "Todos los negocios geolocalizados" }
]

export function AppShowcase() {
  const [activeScreenshot, setActiveScreenshot] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreenshot((prev) => (prev + 1) % screenshots.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="app" className="py-32 md:py-40 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-6 font-light">
              La App
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-secondary tracking-tight mb-8 leading-tight">
              Todo El Palmar{" "}
              <span className="italic">en tu bolsillo</span>
            </h2>
            <p className="text-secondary/60 text-base md:text-lg font-light mb-12 leading-relaxed">
              Diseno intuitivo con toda la informacion que necesitas para disfrutar 
              al maximo tu experiencia en El Palmar.
            </p>

            {/* Features List */}
            <div className="space-y-6 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-px h-12 bg-primary/30 mt-1" />
                  <div>
                    <h4 className="text-secondary font-medium mb-1">{feature.title}</h4>
                    <p className="text-secondary/50 text-sm font-light">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Screenshot tabs */}
            <div className="flex flex-wrap gap-6">
              {screenshots.map((screenshot, index) => (
                <button
                  key={screenshot.id}
                  onClick={() => setActiveScreenshot(index)}
                  className={`text-xs tracking-[0.15em] uppercase font-light pb-2 border-b transition-all ${
                    index === activeScreenshot
                      ? "text-primary border-primary"
                      : "text-secondary/40 border-transparent hover:text-secondary/60"
                  }`}
                >
                  {screenshot.label}
                </button>
              ))}
            </div>
          </div>

          {/* Phone Mockup with Hand */}
          <div className="relative flex justify-center order-1 lg:order-2">
            <div className="relative w-[280px] h-[480px] md:w-[320px] md:h-[550px]">
              {/* Hand */}
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mano-hpFqyoIIGrQE97S2eywoxbsteaDf8u.png"
                alt="App BM El Palmar"
                fill
                className="object-contain z-10"
              />
              {/* Screenshot */}
              <div className="absolute top-[4%] left-[20%] right-[16%] bottom-[6%] overflow-hidden rounded-[1.8rem]">
                {screenshots.map((screenshot, index) => (
                  <Image
                    key={screenshot.id}
                    src={screenshot.image}
                    alt={screenshot.label}
                    fill
                    className={`object-cover transition-opacity duration-700 ${
                      index === activeScreenshot ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
