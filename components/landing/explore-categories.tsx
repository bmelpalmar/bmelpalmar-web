"use client"

import { 
  UtensilsCrossed, 
  Music, 
  Waves, 
  ShoppingBag, 
  Car, 
  Home, 
  Umbrella, 
  Recycle,
  Mountain,
  Wrench,
  Landmark,
  Map
} from "lucide-react"

const categories = [
  {
    icon: UtensilsCrossed,
    name: "Comer",
    subcategories: ["Restaurantes", "Cervecerias & Bares", "Zoco Bares", "Desayunos & Brunch"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/comer-otTGq1HO12TW3QODauw81TMfZQjx8l.jpg"
  },
  {
    icon: Music,
    name: "Ocio",
    subcategories: ["Música en vivo", "Fiestas", "Ambiente nocturno"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ocio-EeT91SaJSrkKiHvzNcAt63xzkH2kyG.jpg"
  },
  {
    icon: Waves,
    name: "Surf",
    subcategories: ["Escuelas", "Alquiler", "Surfshops"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/surf-zco4KZzadCmnyMRcR7Ic2NXWR6M3bR.jpg"
  },
  {
    icon: ShoppingBag,
    name: "Tiendas",
    subcategories: ["Supermercados", "Moda", "Artesanía"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tiendas-5cCb1wNTdKvlS3Z8mCzBJWZwEgt2Rb.jpg"
  },
  {
    icon: Car,
    name: "Parking",
    subcategories: ["Aparcamientos", "Zonas de pernocta"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/parking-kAypxnOdSo0bCUOu1qQ6RFNL36FKRt.jpg"
  },
  {
    icon: Home,
    name: "Alojamiento",
    subcategories: ["Hostales", "Camping", "Surf camps"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alojamientoss-gm46L6FfmPiuUHYMuYa4fyFyW5IBem.jpg"
  },
  {
    icon: Umbrella,
    name: "Playas",
    subcategories: ["Las mejores zonas"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/playa-fbCetjmRXzQFfU1SNBaBk79iCUnadk.jpg"
  },
  {
    icon: Recycle,
    name: "Contenedores",
    subcategories: ["Puntos de reciclaje"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/contenedores-F5H3CH7GbUXJcKjHkZjqeWlt4xSoHx.jpg"
  },
  {
    icon: Mountain,
    name: "Aventura",
    subcategories: ["Rutas", "Experiencias únicas"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rutas-oRMu94pHU0rZ8EetrfkRUz38BGfxeQ.jpg"
  },
  {
    icon: Wrench,
    name: "Servicios",
    subcategories: ["Lo que necesitas"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/servicios-3onJKJ5U2MI90MKFj6BnLlEv1oZKRx.jpg"
  },
  {
    icon: Landmark,
    name: "Cultura",
    subcategories: ["Historia local", "Lugares emblemáticos"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cultura-lAF8luyTWpoYrKIe3DVK2UBCH9eTVf.jpg"
  },
  {
    icon: Map,
    name: "Mapa",
    subcategories: ["Todos los puntos de interés"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mapa-DYVelSBc9qAQwab3u0SzRjm1WMKj2w.jpg"
  }
]

export function ExploreCategories() {
  return (
    <section id="explorar" className="py-16 lg:py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">
            Todo en un solo lugar
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-6 text-balance">
            Explora <span className="font-semibold">El Palmar</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Encuentra todo lo que necesitas organizado en categorias. 
            Desde donde comer hasta las mejores olas del dia.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:from-black/90 transition-all duration-300" />
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-4">
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                
                {/* Text */}
                <div>
                  <h3 className="font-semibold text-white text-lg mb-1 drop-shadow-lg">
                    {category.name}
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-2">
                    {category.subcategories.join(" · ")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Descarga la app y empieza a explorar
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg text-sm font-medium hover:bg-secondary/90 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              App Store
            </button>
            <button className="flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg text-sm font-medium hover:bg-secondary/90 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.807 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
              </svg>
              Google Play
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
