import { Instagram, Facebook, Mail } from "lucide-react"

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/bmelpalmar/?hl=es",
    icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/bmelpalmar?locale=es_ES",
    icon: Facebook,
  },
  {
    name: "Email",
    href: "mailto:info@bmelpalmar.es",
    icon: Mail,
  },
]

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Planes", href: "#planes" },
  { name: "Temporada", href: "#temporada" },
  { name: "Servicios", href: "#servicios" },
  { name: "Contacto", href: "#contacto" },
]

export function Footer() {
  return (
    <footer className="bg-secondary text-white py-20 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 mb-16">
          {/* Logo & Description */}
          <div>
            <p className="text-lg font-light mb-4 tracking-wide">
              BM <span className="font-extralight">El Palmar</span>
            </p>
            <p className="text-white/50 text-sm font-light leading-relaxed max-w-xs">
              Tu guía local para descubrir lo mejor de El Palmar. 
              Creada por quienes viven y aman este rincón de la costa gaditana.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-6 font-light">
              Navegación
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-white/70 text-sm font-light hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-6 font-light">
              Contacto
            </p>
            <div className="space-y-3 mb-8">
              <a 
                href="mailto:info@bmelpalmar.es"
                className="block text-white/70 text-sm font-light hover:text-white transition-colors"
              >
                info@bmelpalmar.es
              </a>
              <a 
                href="tel:+34692974017"
                className="block text-white/70 text-sm font-light hover:text-white transition-colors"
              >
                692 974 017
              </a>
              <p className="text-white/70 text-sm font-light">
                El Palmar, Vejer de la Frontera, Cádiz
              </p>
            </div>
            
            {/* Social */}
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-white transition-colors"
                    aria-label={link.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 font-light">
            <p>&copy; {new Date().getFullYear()} BM El Palmar. Todos los derechos reservados.</p>
            <p className="italic">Hecho con amor desde El Palmar</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
