"use client"

import Image from "next/image"

const widgets = [
  {
    id: "altura",
    title: "Altura de olas",
    value: "1.68",
    unit: "m",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner_altura_olas-SXOTufannFVg9wZ6gITmg672CjzucX.jpg"
  },
  {
    id: "periodo",
    title: "Periodo",
    value: "12",
    unit: "s",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner_periodo_olas-8XNjddKDwKPjRSRXNz7zeDFZ1HqDtH.jpg"
  },
  {
    id: "viento",
    title: "Direccion",
    value: "E",
    unit: "",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner_direccion_viento-DmEMYswNYGaNpBXuAdlqBsJcIl5gNV.jpg"
  },
  {
    id: "estado",
    title: "Estado del mar",
    value: "Offshore",
    unit: "",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner_estado_mar-nrgtauKE3vMklTkuuHRQQWgeRWXej5.jpg"
  }
]

export function SurfWidgets() {
  return (
    <section id="surf" className="py-32 md:py-40 px-6 bg-secondary text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-primary text-xs tracking-[0.3em] uppercase mb-6 font-light">
            Datos en Tiempo Real
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight mb-6">
            Condiciones de{" "}
            <span className="italic">surf</span>
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto font-light">
            Informacion actualizada para planificar tu sesion perfecta
          </p>
        </div>

        {/* Widgets Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {widgets.map((widget) => (
            <div
              key={widget.id}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <Image
                src={widget.image}
                alt={widget.title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <p className="text-white/50 text-xs tracking-wider uppercase mb-2 font-light">
                  {widget.title}
                </p>
                <p className="text-4xl md:text-5xl font-extralight text-white tracking-tight">
                  {widget.value}
                  <span className="text-xl font-light text-white/60 ml-1">{widget.unit}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-white/30 text-xs tracking-wider uppercase mt-12 font-light">
          Datos actualizados en tiempo real desde la app
        </p>
      </div>
    </section>
  )
}
