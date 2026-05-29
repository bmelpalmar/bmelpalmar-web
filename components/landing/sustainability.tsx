"use client"

import Image from "next/image"

const tips = [
  { title: "No pises las dunas", desc: "Son ecosistemas fragiles que tardan anos en recuperarse" },
  { title: "Llevate tu basura", desc: "Usa los contenedores que puedes localizar en la app" },
  { title: "Respeta la flora y fauna", desc: "Deja solo tus huellas en la arena" }
]

const campaignImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-u2srKH5Lrgrkx8EVBDRK1nEPCqE8UP.jpg",
    alt: "Cuidarlo tambien es disfrutarlo"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-ZC7yTuV1QCdPRj4o6WJYG7x8xPbNo0.jpg",
    alt: "Cada bolsa se queda aqui"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-njYX1BFLyWEsjQ83DnZYE0IJA8gMMb.jpg",
    alt: "Encuentra el contenedor mas cercano"
  }
]

export function Sustainability() {
  return (
    <section id="sostenibilidad" className="py-32 md:py-40 px-6 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Gallery */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-7">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={campaignImages[0].src}
                    alt={campaignImages[0].alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="col-span-5 space-y-4 pt-12">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={campaignImages[1].src}
                    alt={campaignImages[1].alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={campaignImages[2].src}
                    alt={campaignImages[2].alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-6 font-light">
              Sostenibilidad
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-secondary tracking-tight mb-8 leading-tight">
              Cuida{" "}
              <span className="italic">El Palmar</span>
            </h2>
            <p className="text-secondary/60 text-base md:text-lg font-light mb-12 leading-relaxed">
              El Palmar es un paraiso natural que entre todos debemos proteger. 
              Si vienes de vacaciones, recuerda estas sencillas normas.
            </p>

            <div className="space-y-8">
              {tips.map((tip, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-px h-14 bg-primary/30 mt-1" />
                  <div>
                    <h3 className="text-secondary font-medium mb-1">{tip.title}</h3>
                    <p className="text-secondary/50 text-sm font-light">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-secondary/40 mt-12 text-sm font-light italic">
              Gracias por ayudarnos a mantener este rincon tan especial.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
