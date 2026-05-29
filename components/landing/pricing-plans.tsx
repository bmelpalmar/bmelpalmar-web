"use client"

import { Check, Crown, Building2, Calendar, Sun, Home, Mountain, Sparkles, ArrowLeft } from "lucide-react"
import Link from "next/link"

const mainPlans = [
  {
    name: "Plan Base",
    subtitle: "Empieza a destacar en tus categorías principales.",
    price: "29",
    priceAnnual: "249",
    annualNote: "249€/año (2 meses gratis)",
    categories: "Hasta 2 categorías",
    features: [
      "Aparición en hasta 2 categorías",
      "Logo visible en la ficha",
      "Hasta 5 fotografías",
      "Ficha estándar",
      "WhatsApp e Instagram",
      "1 push de bienvenida"
    ],
    badge: null,
    isPremium: false
  },
  {
    name: "Plan Plus",
    subtitle: "Llega a tres frentes a la vez.",
    price: "59",
    priceAnnual: "499",
    annualNote: "499€/año (2 meses gratis)",
    categories: "Hasta 3 categorías",
    features: [
      "Aparición en hasta 3 categorías",
      '"Recomendados por BM"',
      "Hasta 10 fotografías",
      "Ficha ampliada",
      "2 ofertas al mes",
      "2 push al mes"
    ],
    badge: "Más Popular",
    isPremium: false
  },
  {
    name: "Plan Premium",
    subtitle: "Tu negocio en todas partes dentro de la app.",
    price: "89",
    priceAnnual: "849",
    annualNote: "849€/año (2 meses gratis)",
    categories: "Todas tus categorías",
    features: [
      "Aparición en todas tus categorías",
      "Sección Destacados",
      "Fotos ilimitadas",
      "Ficha completa + insignia",
      "Ofertas ilimitadas",
      "Push ilimitadas + Agenda eventos"
    ],
    badge: "Premium",
    isPremium: true
  }
]

const experiencePlans = [
  {
    name: "Base Experiencia",
    subtitle: "Presencia básica de tu experiencia.",
    price: "29",
    pack: "Sin pack de temporada",
    categories: "Visibilidad básica",
    features: [
      "Ficha de experiencia",
      "Hasta 5 fotografías",
      "Horarios y disponibilidad"
    ],
    badge: null,
    isPremium: false
  },
  {
    name: "Plus Experiencia",
    subtitle: "Máxima visibilidad con pack flexible.",
    price: "49",
    pack: "Pack: 208€ (5 meses)",
    categories: "Visibilidad premium",
    features: [
      '"Recomendados por BM"',
      "Hasta 10 fotografías",
      "2 push al mes"
    ],
    badge: "Recomendado",
    isPremium: false
  },
  {
    name: "Premium Experiencia",
    subtitle: "Experiencia destacada con máximo alcance.",
    price: "69",
    pack: "Pack: 293€ (5 meses)",
    categories: "Visibilidad máxima",
    features: [
      '"Experiencias Destacadas"',
      "Fotos ilimitadas",
      "Push ilimitadas"
    ],
    badge: "Premium",
    isPremium: true
  }
]

const punctualServices = [
  { name: "Notificación push puntual", price: "9€", description: "1 notificación push a todos los usuarios." },
  { name: "Bono 5 push", price: "35€", description: "5 notificaciones sin caducidad (7€/unidad)" },
  { name: "Bono 10 push", price: "59€", description: "10 notificaciones sin caducidad (5,90€/unidad)" },
  { name: "Oferta extra puntual", price: "5€", description: "1 oferta activa adicional." },
  { name: "Publicación de evento", price: "15€", description: "Publicación en la Agenda con todos los detalles." }
]

const conditions = [
  "Todos los precios indicados son sin IVA (21%).",
  "Los contratos se formalizan por escrito entre BM El Palmar y el cliente.",
  "El pago se realiza por transferencia bancaria o en efectivo con justificante.",
  "Ningún plan tiene permanencia mínima. La baja se solicita con 15 días de preaviso por escrito.",
  "Los packs de temporada permiten fraccionar el pago en 1, 2 o 3 plazos mensuales sin recargo.",
  "El impago de cualquier plazo del pack de temporada dará lugar a la suspensión inmediata del servicio.",
  "Los servicios puntuales se pagan en el momento de la solicitud y no son reembolsables.",
  "BM El Palmar se reserva el derecho a modificar tarifas con 30 días de preaviso.",
  "Para el alta de alojamientos turísticos es obligatorio aportar la licencia turística en vigor.",
  "Las categorías donde aparece cada negocio las gestiona BM El Palmar desde su panel administrativo.",
  "La información sobre políticas de reserva de alojamientos es facilitada por el propietario y es de su exclusiva responsabilidad.",
  "BM El Palmar pone a disposición del cliente el número de teléfono 692 97 40 17 para atención personalizada en consultas, remisión de archivos y materiales promocionales, gestión de contratos y modificación de servicios contratados."
]

export function PricingPlans() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#2B5A7F] via-[#1a3a52] to-[#0f2536] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Volver al inicio</span>
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            BM El Palmar
          </h1>
          <p className="text-lg lg:text-xl text-white/90">
            Dossier de Tarifas y Planes de Visibilidad • Temporada 2026
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="bg-card p-8 rounded-xl border border-border shadow-sm">
            <p className="text-muted-foreground leading-relaxed">
              BM El Palmar es la plataforma digital que reune todos los negocios, servicios y experiencias de El Palmar en un solo lugar. Ofrecemos visibilidad real a traves de nuestra app movil y web, conectando directamente con miles de visitantes y residentes.
            </p>
          </div>
        </div>
      </section>

      {/* Concepto */}
      <section className="pb-16 lg:pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="bg-card p-8 rounded-xl border border-border shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-6">Sabemos cómo es El Palmar</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Un chiringuito no es solo un restaurante. Un bar no es solo un bar. En El Palmar los negocios tienen múltiples facetas — dan de comer, ponen música, organizan noches y reciben a surfistas y turistas a la vez. Por eso en BM El Palmar hemos diseñado los planes para que, cuanto más crece tu visibilidad, más categorías puedes ocupar.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Con el Plan Base estás donde más te importa. Con el Plus llegas a cinco frentes a la vez. Con el Premium tu negocio está en todas partes dentro de la app. Cada paso hacia arriba es más visibilidad, más categorías y más visitantes encontrándote.
            </p>
          </div>
        </div>
      </section>

      {/* Presencia Basica Gratuita */}
      <section className="pb-16 lg:pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b-4 border-primary">Presencia Básica — Gratuita</h2>
          <p className="text-muted-foreground mb-6">Todos los negocios de El Palmar tienen presencia automática y gratuita en BM El Palmar:</p>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-primary" />
              <span className="text-foreground">Nombre comercial visible en su categoría principal</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-primary" />
              <span className="text-foreground">Botón &quot;Cómo llegar&quot;</span>
            </div>
          </div>
        </div>
      </section>

      {/* Planes de Visibilidad */}
      <section className="pb-16 lg:pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h2 className="text-2xl font-bold text-foreground mb-3 pb-3 border-b-4 border-primary">Planes de Visibilidad — Mensual y Anual</h2>
          <p className="text-muted-foreground mb-4">
            Cuántas categorías ocupas y cómo de visible eres dentro de cada una depende del plan que elijas.
          </p>
          <p className="text-muted-foreground mb-10">
            La visibilidad dentro de la app sigue este orden de prioridad: <strong className="text-foreground">Premium → Plus → Base → Gratuito</strong>. Dentro de cada plan, BM El Palmar puede ajustar manualmente el orden de aparición de los negocios.
          </p>

          {/* Push Notification Box */}
          <div className="bg-sky-50 p-8 rounded-xl border-l-4 border-sky-400 mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Tus clientes siempre en tu radar</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              En El Palmar, el que se entera tarde, se queda sin mesa. Por eso hemos diseñado las notificaciones push: cuando tu negocio tiene una oferta, cuando abres una noche especial, cuando hay música en vivo — tus clientes lo saben al instante. No compiten por atención, compiten por la tuya.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tus clientes pueden marcarte como favorito. Significa que vuelven, que te tienen guardado, que eres su lugar. Y cada vez que abren la app y ven tu nombre destacado, es como si te hubiera escrito en su mente: &quot;este es mi sitio&quot;.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Las notificaciones push no son spam. Son la voz directa a quien realmente te quiere conocer. Y los favoritos son la puerta que nunca se cierra.
            </p>
          </div>

          {/* Plan Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {mainPlans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  plan.isPremium 
                    ? "border-2 border-amber-400 shadow-lg shadow-amber-400/10" 
                    : "border border-border"
                }`}
              >
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${plan.isPremium ? "bg-amber-400" : "bg-muted"}`} />
                
                <div className="p-6 lg:p-8">
                  {plan.badge && (
                    <span className={`inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded mb-4 ${
                      plan.isPremium 
                        ? "bg-amber-400 text-amber-950" 
                        : "bg-primary text-primary-foreground"
                    }`}>
                      {plan.badge}
                    </span>
                  )}
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{plan.subtitle}</p>
                  
                  <div className="mb-6 pb-6 border-b border-border">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-primary">{plan.price}€</span>
                      <span className="text-sm text-muted-foreground">/mes</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{plan.annualNote}</p>
                  </div>

                  <div className="bg-muted/50 rounded-lg px-4 py-3 mb-6">
                    <span className="text-sm font-medium text-foreground">{plan.categories}</span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a 
                    href="#contacto"
                    className={`block w-full text-center py-3 rounded-lg text-sm font-medium transition-all ${
                      plan.isPremium
                        ? "bg-amber-400 text-amber-950 hover:bg-amber-500"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                  >
                    Contratar
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Tabla Comparativa */}
          <div className="overflow-x-auto mb-16">
            <table className="w-full bg-card border border-border rounded-xl overflow-hidden">
              <thead className="bg-muted">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Caracteristica</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Gratuito</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Base</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Plus</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-muted/30">
                  <td className="px-4 py-3 text-sm font-medium text-foreground">Precio mensual</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">0€</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">29€</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">59€</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">89€</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="px-4 py-3 text-sm font-medium text-foreground">Categorías</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">1</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">Hasta 2</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">Hasta 3</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">Todas</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="px-4 py-3 text-sm font-medium text-foreground">Fotografías</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">—</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">Hasta 5</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">Hasta 10</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">Ilimitadas</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="px-4 py-3 text-sm font-medium text-foreground">Ofertas en app</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">No</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">No</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">2 al mes</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">Ilimitadas</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="px-4 py-3 text-sm font-medium text-foreground">Notificaciones push</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">No</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">1 bienvenida</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">2 al mes</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">Ilimitadas</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pack Temporada Alta */}
      <section className="pb-16 lg:pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 mb-6">
            <Sun className="w-6 h-6 text-amber-500" />
            <h2 className="text-2xl font-bold text-foreground pb-3 border-b-4 border-primary flex-1">Pack Temporada Alta — De Mayo a Final de Temporada</h2>
          </div>
          <p className="text-muted-foreground mb-8">
            Ideal para negocios de temporada. El precio equivale a 5 meses del plan correspondiente y con un 15% de descuento a aplicar en los precios como promoción de bienvenida.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full bg-card border border-border rounded-xl overflow-hidden">
              <thead className="bg-muted">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Pack</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Total</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">1 pago</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">2 pagos</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">3 pagos</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-muted/30">
                  <td className="px-4 py-3 text-sm font-medium text-foreground">Pack Temporada Plus</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">295€</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">295€</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">148€ + 147€</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">99€ + 98€ + 98€</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="px-4 py-3 text-sm font-medium text-foreground">Pack Temporada Premium</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">445€</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">445€</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">223€ + 222€</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">149€ + 148€ + 148€</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-sky-50 border-l-4 border-primary p-4 rounded-r-lg">
            <p className="text-sm text-primary">El primer pago se realiza el día de la firma. Sin permanencia mínima.</p>
          </div>
        </div>
      </section>

      {/* Alojamientos Turisticos */}
      <section className="pb-16 lg:pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 mb-6">
            <Home className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground pb-3 border-b-4 border-primary flex-1">Alojamientos Turísticos — Viviendas Vacacionales</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            Publicidad digital para propietarios de viviendas vacacionales legalmente registradas.
          </p>

          <div className="bg-sky-50 border-l-4 border-primary p-4 rounded-r-lg mb-8">
            <p className="text-sm text-primary">
              <strong>Documentación obligatoria:</strong> Licencia de alojamiento turístico en vigor emitida por la Junta de Andalucía.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-card border border-border rounded-xl overflow-hidden">
              <thead className="bg-muted">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Modalidad</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Precio</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Qué incluye</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-muted/30">
                  <td className="px-4 py-3 text-sm font-medium text-foreground">Ficha Mensual</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">19€/mes</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">Ficha completa con fotos ilimitadas, descripción, capacidad, servicios. Sin permanencia mínima.</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="px-4 py-3 text-sm font-medium text-foreground">Ficha Anual</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">149€/año</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">Todo lo anterior con presencia los 12 meses + 6 notificaciones push.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Experiencias Unicas */}
      <section className="pb-16 lg:pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 mb-6">
            <Mountain className="w-6 h-6 text-emerald-600" />
            <h2 className="text-2xl font-bold text-foreground pb-3 border-b-4 border-primary flex-1">Experiencias Únicas — Paseos, Aventura y Actividades</h2>
          </div>
          <p className="text-muted-foreground mb-8">
            Amplía tu alcance con experiencias exclusivas.
          </p>

          {/* Experiencias Box */}
          <div className="bg-emerald-50 p-8 rounded-xl border-l-4 border-emerald-600 mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Crea momentos que se recuerdan</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Una experiencia en El Palmar no es solo hacer algo. Es vivir algo. Subirse a un caballo con el mar de fondo, sentir el viento en un parapente, la adrenalina de una carrera — esos son los momentos que la gente cuenta después.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Por eso tus experiencias merecen ser encontradas fácilmente. Con nuestros planes, apareces en el momento exacto en que alguien decide dejar el móvil y vivir. Y cuando publicas una experiencia nueva, tus seguidores lo saben al instante. No es publicidad — es una invitación.
            </p>
          </div>

          {/* Experience Plan Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {experiencePlans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  plan.isPremium 
                    ? "border-2 border-amber-400 shadow-lg shadow-amber-400/10" 
                    : "border border-border"
                }`}
              >
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${plan.isPremium ? "bg-amber-400" : "bg-muted"}`} />
                
                <div className="p-6 lg:p-8">
                  {plan.badge && (
                    <span className={`inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded mb-4 ${
                      plan.isPremium 
                        ? "bg-amber-400 text-amber-950" 
                        : "bg-primary text-primary-foreground"
                    }`}>
                      {plan.badge}
                    </span>
                  )}
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{plan.subtitle}</p>
                  
                  <div className="mb-6 pb-6 border-b border-border">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-primary">{plan.price}€</span>
                      <span className="text-sm text-muted-foreground">/mes</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{plan.pack}</p>
                  </div>

                  <div className="bg-muted/50 rounded-lg px-4 py-3 mb-6">
                    <span className="text-sm font-medium text-foreground">{plan.categories}</span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a 
                    href="#contacto"
                    className={`block w-full text-center py-3 rounded-lg text-sm font-medium transition-all ${
                      plan.isPremium
                        ? "bg-amber-400 text-amber-950 hover:bg-amber-500"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                  >
                    Contratar
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Tabla Experiencias */}
          <div className="overflow-x-auto">
            <table className="w-full bg-card border border-border rounded-xl overflow-hidden">
              <thead className="bg-muted">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Plan</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Mensual</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Pack Temporada</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Descuento</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-muted/30">
                  <td className="px-4 py-3 text-sm font-medium text-foreground">Base Experiencia</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">29€/mes</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">—</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">—</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="px-4 py-3 text-sm font-medium text-foreground">Plus Experiencia</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">49€/mes</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">208€</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">15%</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="px-4 py-3 text-sm font-medium text-foreground">Premium Experiencia</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">69€/mes</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">293€</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">15%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Servicios Puntuales */}
      <section className="pb-16 lg:pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-amber-500" />
            <h2 className="text-2xl font-bold text-foreground pb-3 border-b-4 border-primary flex-1">Servicios Puntuales — Publicidad Extra</h2>
          </div>
          <p className="text-muted-foreground mb-8">
            Para negocios que necesitan visibilidad adicional puntual.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-card border border-border rounded-xl overflow-hidden">
              <thead className="bg-muted">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Servicio</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Precio</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Descripción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {punctualServices.map((service, index) => (
                  <tr key={index} className="hover:bg-muted/30">
                    <td className="px-4 py-3 text-sm font-medium text-foreground">{service.name}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{service.price}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{service.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Condiciones Generales */}
      <section className="pb-16 lg:pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b-4 border-primary">Condiciones Generales</h2>
          <div className="space-y-4">
            {conditions.map((condition, index) => (
              <p key={index} className="text-muted-foreground">
                {index + 1}. {condition}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-16 lg:py-20 bg-gradient-to-br from-[#2B5A7F] via-[#1a3a52] to-[#0f2536] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para impulsar tu negocio?</h2>
          <p className="text-white/80 mb-10">
            Ponte en contacto con nosotros hoy y descubre cómo BM El Palmar puede conectarte con miles de clientes potenciales.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <a href="tel:692974017" className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
              <p className="text-xs uppercase tracking-wider text-white/70 mb-2">Teléfono</p>
              <p className="text-lg font-bold">692 97 40 17</p>
            </a>
            <a href="mailto:info@bmelpalmar.es" className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
              <p className="text-xs uppercase tracking-wider text-white/70 mb-2">Email</p>
              <p className="text-lg font-bold">info@bmelpalmar.es</p>
            </a>
            <a href="https://wa.me/34692974017" className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
              <p className="text-xs uppercase tracking-wider text-white/70 mb-2">WhatsApp</p>
              <p className="text-lg font-bold">Escríbenos</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-sm text-muted-foreground mb-2">BM El Palmar • Directorio Digital de El Palmar, Vejer de la Frontera</p>
          <p className="text-sm text-muted-foreground">© 2026 BM El Palmar. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
