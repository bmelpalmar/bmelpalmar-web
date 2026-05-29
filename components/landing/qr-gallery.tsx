"use client"

import Image from "next/image"

const qrPhotos = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-ww8hkDMmf38ib8nMyuttkmv7ISz8s1.jpeg",
    location: "Chiringuito nocturno"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-lVqb35ArFvb7K0nP9nCg45nWwDycvd.jpg",
    location: "Sendero de El Palmar"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-fqU6roOjW5iXgufBFANhQHhm0O61Bu.jpeg",
    location: "Parking de la playa"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-OiFN1mBJ8Rjbh1DWxLlAqZFOoNOeFV.jpg",
    location: "Centro del pueblo"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-NpHh3mqnI0Rnyl9OlRXk2jU9ZCI6Mj.jpeg",
    location: "Sunwaves El Palmar"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-cNhM1QeH5ypP3aUE3a1AHcBkwwrXU4.jpeg",
    location: "Senal de trafico"
  }
]

export function QRGallery() {
  return (
    <section className="py-32 md:py-40 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-primary text-xs tracking-[0.3em] uppercase mb-6 font-light">
            Conoce BM El Palmar
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-secondary tracking-tight mb-6">
            Nos encontraras{" "}
            <span className="italic">en todas partes</span>
          </h2>
          <p className="text-secondary/60 text-base md:text-lg max-w-lg mx-auto font-light">
            Escanea nuestro QR y descarga la app al instante
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {qrPhotos.map((photo, index) => (
            <div
              key={index}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <Image
                src={photo.src}
                alt={`QR en ${photo.location}`}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-primary/60 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-end p-4 md:p-6">
                <p className="text-white text-sm font-light tracking-wide opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {photo.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-secondary/40 text-xs tracking-wider uppercase mt-16 font-light">
          Mas de 50 puntos con codigo QR repartidos por El Palmar
        </p>
      </div>
    </section>
  )
}
