"use client"

import Image from "next/image"
import { useState } from "react"

const categories = [
  {
    id: "comer",
    name: "Comer",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/comer-dcJhtVsluX5K1f7nR5aVE9I5wvFqIe.jpg",
    subcategories: ["Restaurantes", "Cervecerias & Bares", "Mercados", "Desayunos & Brunch"]
  },
  {
    id: "ocio",
    name: "Ocio",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ocio-EsSfT7M5ofUc16UwW8RFSY3UffGWty.jpg",
    subcategories: ["Musica y Conciertos", "Tardeo", "Beach Club", "Copas"]
  },
  {
    id: "surf",
    name: "Surf",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/surf-rklPNL1IJ6jjQQVxlEjx9LKQRTtdni.jpg",
    subcategories: ["Escuelas", "Alquiler", "Surf Shop", "Surf Camp"]
  },
  {
    id: "tiendas",
    name: "Tiendas",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tiendas-E7KBAyLw4LjRkbgAwQEzNilIDUzk7Q.jpg",
    subcategories: ["Alimentacion", "Mercados", "Kioscos"]
  },
  {
    id: "parking",
    name: "Parking",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/parkingtorrenue-Py88GiohmIGGZHNFbSnIY8RW9wvALa.jpg",
    subcategories: ["Parking cercano", "Areas caravanas"]
  },
  {
    id: "alojamiento",
    name: "Alojamiento",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alojamientoss-kE9SqrK47b21hzhZmUsa2tGAOzEGXj.jpg",
    subcategories: ["Hostales", "Camping", "Vivienda Turistica"]
  },
  {
    id: "playas",
    name: "Playas",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/playademoron-qthEoJSj1rsJ0yx60bRx6a1JL4Ibxd.jpg",
    subcategories: ["Calderas", "Moron", "El Palmar", "Punta Lejos"]
  },
  {
    id: "aventura",
    name: "Aventura",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner_senderismo-8VqnefE01BB0TBZqsHGrvzSyVOCvkJ.jpg",
    subcategories: ["Rutas bici", "Senderismo", "Experiencias"]
  },
  {
    id: "contenedores",
    name: "Contenedores",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-u2srKH5Lrgrkx8EVBDRK1nEPCqE8UP.jpg",
    subcategories: ["Vidrio", "Residuos", "Papeleras"]
  },
  {
    id: "servicios",
    name: "Servicios",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/puestosocorro-H0niX0y7uOTIuBbX2J9FQCThlGLwvX.jpg",
    subcategories: ["Farmacia", "Socorro", "Telefonos"]
  },
  {
    id: "cultura",
    name: "Cultura",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cultura-AyiOp9cE7ca45QwwdjgTDOcvMXz4jq.jpg",
    subcategories: ["Entrevistas", "Historia", "El Fanzine"]
  },
  {
    id: "mapa",
    name: "Mapa",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mapa-dAfujYSg6BbTG4fKXwDcN2sWiVLboc.jpg",
    subcategories: ["Interactivo", "Filtros", "Cercanos"]
  }
]

export function Categories() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section id="explora" className="py-32 md:py-40 px-6 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-primary text-xs tracking-[0.3em] uppercase mb-6 font-light">
            Explora El Palmar
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-secondary tracking-tight mb-6">
            Todo lo que necesitas,{" "}
            <span className="italic">en un solo lugar</span>
          </h2>
          <p className="text-secondary/60 text-base md:text-lg max-w-xl mx-auto font-light">
            12 categorias con toda la informacion para disfrutar de El Palmar
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => {
            const isHovered = hoveredId === category.id
            
            return (
              <div
                key={category.id}
                className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredId(category.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className={`object-cover transition-all duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
                />
                <div className={`absolute inset-0 transition-all duration-500 ${isHovered ? "bg-primary/70" : "bg-black/30"}`} />
                
                {/* Content */}
                <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
                  <h3 className="text-white text-lg md:text-xl font-light tracking-wide mb-2">
                    {category.name}
                  </h3>
                  
                  <div className={`overflow-hidden transition-all duration-500 ${isHovered ? "max-h-32 opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="flex flex-wrap gap-1 pt-2 border-t border-white/30">
                      {category.subcategories.map((sub, idx) => (
                        <span key={idx} className="text-[10px] md:text-xs text-white/90 font-light">
                          {sub}{idx < category.subcategories.length - 1 && " · "}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
