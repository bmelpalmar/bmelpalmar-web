import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-32 md:py-40 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-6 font-light">
              Bienvenido a BM El Palmar
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-secondary leading-tight tracking-tight mb-8">
              Una guia local creada por quienes{" "}
              <span className="italic">viven y aman</span>{" "}
              El Palmar
            </h2>
            <div className="space-y-6 text-secondary/70 text-base md:text-lg leading-relaxed font-light">
              <p>
                BM El Palmar nace de la pasion por este rincon de la costa gaditana. 
                Nuestra mision es conectar a visitantes y locales con lo mejor de El Palmar: 
                los mejores planes, donde comer, experiencias de surf y todo lo que hace 
                unico este lugar.
              </p>
              <p>
                Ubicados en uno de los lugares mas especiales del sur de Espana, te invitamos 
                a descubrir unas vacaciones inolvidables bajo el calido sol gaditano y con 
                vistas privilegiadas al oceano Atlantico.
              </p>
            </div>
            
            <a 
              href="#explora" 
              className="inline-block mt-10 text-xs tracking-[0.2em] uppercase border-b border-primary text-primary pb-1 hover:border-secondary hover:text-secondary transition-colors"
            >
              Descubre mas
            </a>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/899b05d1c3d7aebd2358746840fff260-EvGvlgq8C4kvOdoBIrC5AzFpwDfDUE.jpg"
                alt="Torre de El Palmar"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
