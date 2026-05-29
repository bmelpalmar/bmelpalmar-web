"use client"

import Image from "next/image"

const benefits = [
  { title: "Miles de turistas", desc: "Conecta con visitantes que buscan experiencias autenticas" },
  { title: "Ficha personalizada", desc: "Tu negocio con fotos, descripcion, horarios y ubicacion" },
  { title: "Notificaciones push", desc: "Campanas directas para promocionar ofertas especiales" },
  { title: "Ofertas de temporada", desc: "Destaca tus promociones cuando mas importa" },
  { title: "Visibilidad garantizada", desc: "Posicionamiento preferente en tu categoria" },
  { title: "Marketing local", desc: "Llega a tu publico en el momento adecuado" }
]

const businesses = [
  {
    name: "Restaurantes y bares",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner_granbabaa-1UzIU88GuI4HEmtguCEg6KGCn1xRHy.jpg"
  },
  {
    name: "Escuelas de surf",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/surf-rklPNL1IJ6jjQQVxlEjx9LKQRTtdni.jpg"
  },
  {
    name: "Alojamientos",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VentaMolina-JW6OSW4OzJirIZHMoBMzIHbWWKka2c.png"
  }
]

export function ForBusiness() {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="negocios" className="py-32 md:py-40 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-primary text-xs tracking-[0.3em] uppercase mb-6 font-light">
            Para Negocios
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-secondary tracking-tight mb-6">
            Dale visibilidad{" "}
            <span className="italic">a tu negocio</span>
          </h2>
          <p className="text-secondary/60 text-base md:text-lg max-w-xl mx-auto font-light">
            Forma parte de la guia local de referencia de El Palmar
          </p>
        </div>

        {/* Business Images */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 mb-20">
          {businesses.map((business, index) => (
            <div key={index} className="group relative aspect-[4/3] overflow-hidden">
              <Image
                src={business.image}
                alt={business.name}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-primary/60 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-end p-4 md:p-6">
                <p className="text-white text-sm md:text-base font-light tracking-wide">{business.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-px h-14 bg-primary/30 mt-1 shrink-0" />
              <div>
                <h3 className="text-secondary font-medium mb-1">{benefit.title}</h3>
                <p className="text-secondary/50 text-sm font-light">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="inline-block border border-secondary text-secondary px-10 py-4 text-xs tracking-[0.2em] uppercase font-light transition-all hover:bg-secondary hover:text-white"
          >
            Contactanos
          </button>
          <p className="text-secondary/40 text-xs mt-6 font-light">
            Planes adaptados a cada tipo de negocio
          </p>
        </div>
      </div>
    </section>
  )
}
