"use client"

import Image from "next/image"
import { Check, Star, Zap, Crown, Building2, Bell, Calendar, Send } from "lucide-react"

export function DossierTarifas() {
  return (
    <>
      {/* Intro Section */}
      <section id="intro" className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-8">Dossier de Tarifas 2026</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight mb-12">
            Sabemos cómo es <span className="italic text-primary">El Palmar</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
Un chiringuito no es sólo un restaurante. Un bar no es sólo un bar. En El Palmar los negocios tienen 
                múltiples facetas - dan de comer, ponen música, organizan noches y reciben a surfistas y turistas a la vez.
              </p>
              <p>
                Por eso en BM El Palmar hemos diseñado los planes para que, <strong className="text-foreground">cuanto más crece tu visibilidad, 
                más categorías puedes ocupar.</strong>
              </p>
              <p>
                Con el Plan Base estás donde más te importa. Con el Plus llegas a tres frentes a la vez. Con el Premium tu 
                negocio está en todas partes dentro de la app.
              </p>
              <p className="text-primary font-medium">
                Cada paso hacia arriba es más visibilidad, más categorías y más visitantes encontrándote.
              </p>
            </div>
            
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file_000000006e0071f5b9030bbf91d8f705-NDIlcozv1gfkW4NNXIyuata1H7Maj5.png"
                alt="Torre de El Palmar"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Presencia Basica Gratuita */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-6">Para todos los negocios</p>
          <h2 className="text-3xl md:text-4xl font-extralight mb-8">
            Presencia Básica <span className="italic">Gratuita</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Todos los negocios de El Palmar tienen presencia automática y gratuita en BM El Palmar
          </p>
          
          <div className="inline-flex flex-col sm:flex-row gap-8 items-center justify-center bg-white p-8 border border-border">
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-primary" />
              <span>Nombre comercial visible en su categoría principal</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-border" />
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-primary" />
              <span>Botón &quot;Cómo llegar&quot;</span>
            </div>
          </div>
        </div>
      </section>

      {/* Planes de Visibilidad */}
      <section id="planes" className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-6">Mensual y Anual</p>
            <h2 className="text-4xl md:text-5xl font-extralight mb-6">
              Planes de <span className="italic text-primary">Visibilidad</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Cuántas categorías ocupas y cómo de visible eres dentro de cada una depende del plan que elijas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Plan Base */}
            <div className="border border-border p-8 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <Star className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-light">Plan Base</h3>
              </div>
              
              <p className="text-muted-foreground mb-6">Empieza a destacar en tu categoría principal</p>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-light">29</span>
                  <span className="text-xl text-muted-foreground">euro/mes</span>
                </div>
                <p className="text-primary text-sm mt-2">249 euro/año (2 meses gratis)</p>
              </div>
              
              <div className="border-t border-border pt-6 mb-6">
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">1 categoría</p>
              </div>
              
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Aparición en tu categoría principal</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Posicionamiento por encima de fichas gratuitas</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Logo visible en la ficha</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Hasta 5 fotografías</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Ficha estándar con descripción personalizada</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Botón directo a llamada o WhatsApp</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Enlace a Instagram o web</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>1 notificación push de bienvenida</span>
                </li>
              </ul>
            </div>

            {/* Plan Plus */}
            <div className="border-2 border-primary p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 text-xs tracking-wider uppercase">
                Popular
              </div>
              
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-light">Plan Plus</h3>
              </div>
              
              <p className="text-muted-foreground mb-6">Llega a tres frentes a la vez</p>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-light">59</span>
                  <span className="text-xl text-muted-foreground">euro/mes</span>
                </div>
                <p className="text-primary text-sm mt-2">499 euro/año (2 meses gratis)</p>
              </div>
              
              <div className="border-t border-border pt-6 mb-6">
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Hasta 3 categorías</p>
              </div>
              
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Aparición en hasta 3 categorías</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Posición destacada en cada una</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Aparición en &quot;Recomendados por BM&quot;</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Presencia en sección Ofertas</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Todo lo del Plan Base</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Hasta 10 fotografías</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Ficha ampliada con horarios y servicios</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>2 ofertas activas al mes</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>2 notificaciones push al mes</span>
                </li>
              </ul>
            </div>

            {/* Plan Premium */}
            <div className="border border-border p-8 bg-secondary text-secondary-foreground">
              <div className="flex items-center gap-3 mb-6">
                <Crown className="w-6 h-6" />
                <h3 className="text-2xl font-light">Plan Premium</h3>
              </div>
              
              <p className="text-secondary-foreground/70 mb-6">Tu negocio en todas partes dentro de la app</p>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-light">89</span>
                  <span className="text-xl text-secondary-foreground/70">euro/mes</span>
                </div>
                <p className="text-primary-foreground/80 text-sm mt-2">849 euro/año (2 meses gratis)</p>
              </div>
              
              <div className="border-t border-secondary-foreground/20 pt-6 mb-6">
                <p className="text-xs tracking-[0.2em] uppercase text-secondary-foreground/70 mb-4">Todas tus categorías</p>
              </div>
              
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Aparición en todas tus categorías</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Posición número 1 en cada una</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Aparición en sección Destacados</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Todo lo del Plan Plus</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Fotografías ilimitadas</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Ficha completa + Insignia Premium</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Ofertas ilimitadas</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Notificaciones push ilimitadas y segmentadas</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Publicación de eventos en la Agenda</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Estadísticas mensuales de visibilidad</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-12">
            Ningún plan tiene permanencia mínima. La baja puede solicitarse en cualquier momento con 15 días de preaviso.
          </p>
        </div>
      </section>

      {/* Imagen divisoria */}
      <section className="relative h-[50vh]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner_puesta_sol-nqD64RJMWYdBzkQXsN4PCswU2Upp1u.jpg"
          alt="Atardecer El Palmar"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </section>

      {/* Pack Temporada Alta */}
      <section id="temporada" className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-6">De Mayo a Final de Temporada</p>
            <h2 className="text-4xl md:text-5xl font-extralight mb-6">
              Pack <span className="italic text-primary">Temporada Alta</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ideal para negocios de temporada. El precio equivale a 5 meses del plan correspondiente y con un 15% de descuento a aplicar en los precios como promocion de bienvenida.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Pack Plus */}
            <div className="border border-border p-8">
              <h3 className="text-xl font-light mb-4">Pack Temporada Plus</h3>
              <div className="text-3xl font-light mb-6">295 <span className="text-lg text-muted-foreground">euro</span></div>
              
              <div className="space-y-4 text-sm border-t border-border pt-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">1 pago (día firma)</span>
                  <span>295 euro</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">2 pagos</span>
                  <span>148 euro + 147 euro</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">3 pagos mensuales</span>
                  <span>99 euro + 98 euro + 98 euro</span>
                </div>
              </div>
            </div>

            {/* Pack Premium */}
            <div className="border-2 border-primary p-8">
              <h3 className="text-xl font-light mb-4">Pack Temporada Premium</h3>
              <div className="text-3xl font-light mb-6">445 <span className="text-lg text-muted-foreground">euro</span></div>
              
              <div className="space-y-4 text-sm border-t border-border pt-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">1 pago (día firma)</span>
                  <span>445 euro</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">2 pagos</span>
                  <span>223 euro + 222 euro</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">3 pagos mensuales</span>
                  <span>149 euro + 148 euro + 148 euro</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
            El precio total del pack es el mismo independientemente de la opción de pago elegida. 
            El primer pago se realiza siempre el día de la firma.
          </p>
        </div>
      </section>

      {/* Alojamientos Turisticos */}
      <section id="alojamientos" className="py-32 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alojamientoss-kE9SqrK47b21hzhZmUsa2tGAOzEGXj.jpg"
                alt="Alojamientos El Palmar"
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-6 h-6 text-primary" />
                <p className="text-xs tracking-[0.3em] uppercase text-primary">Viviendas Vacacionales</p>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-extralight mb-6">
                Alojamientos <span className="italic text-primary">Turísticos</span>
              </h2>
              
              <p className="text-muted-foreground mb-8">
                Publicidad digital para propietarios de viviendas vacacionales legalmente registradas. 
                BM El Palmar ofrece exclusivamente visibilidad publicitaria dentro de su plataforma.
              </p>

              <div className="space-y-6">
                <div className="border border-border p-6 bg-white">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-medium">Ficha Mensual</h4>
                    <span className="text-xl">19 <span className="text-sm text-muted-foreground">euro/mes</span></span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Ficha completa con fotos ilimitadas, descripción, capacidad, servicios, precio orientativo, 
                    políticas de reserva, contacto directo y número de licencia. Sin permanencia mínima.
                  </p>
                </div>

                <div className="border-2 border-primary p-6 bg-white">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-medium">Ficha Anual</h4>
                    <span className="text-xl">149 <span className="text-sm text-muted-foreground">euro/año</span></span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Todo lo anterior con presencia los 12 meses del año + 6 notificaciones push.
                  </p>
                </div>
              </div>

              <blockquote className="mt-8 pl-6 border-l-2 border-primary italic text-muted-foreground">
                &quot;Tu alojamiento no solo existe en verano. Con la ficha anual estás visible todo el año para los 
                visitantes que vienen en otoño, invierno y primavera - cuando la competencia ha desaparecido de 
                la pantalla y tú sigues ahí.&quot;
              </blockquote>

              <p className="mt-6 text-xs text-muted-foreground">
                Documentación obligatoria: Licencia de alojamiento turístico en vigor emitida por la Junta de Andalucía.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Puntuales */}
      <section id="servicios" className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-6">Publicidad Extra</p>
            <h2 className="text-4xl md:text-5xl font-extralight mb-6">
              Servicios <span className="italic text-primary">Puntuales</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Para negocios que necesitan visibilidad adicional puntual, han agotado los servicios de su plan 
              o quieren dar un impulso concreto a un momento específico.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-border p-6 hover:border-primary/50 transition-colors">
              <Bell className="w-5 h-5 text-primary mb-4" />
              <div className="flex justify-between items-baseline mb-3">
                <h4 className="font-medium">Notificación push puntual</h4>
                <span className="text-lg">9 <span className="text-sm text-muted-foreground">euro</span></span>
              </div>
              <p className="text-sm text-muted-foreground">
                1 notificación push enviada a todos los usuarios con texto e imagen.
              </p>
            </div>

            <div className="border border-border p-6 hover:border-primary/50 transition-colors">
              <Bell className="w-5 h-5 text-primary mb-4" />
              <div className="flex justify-between items-baseline mb-3">
                <h4 className="font-medium">Bono 5 notificaciones</h4>
                <span className="text-lg">35 <span className="text-sm text-muted-foreground">euro</span></span>
              </div>
              <p className="text-sm text-muted-foreground">
                5 notificaciones push sin caducidad. (7 euro/unidad)
              </p>
            </div>

            <div className="border border-border p-6 hover:border-primary/50 transition-colors">
              <Bell className="w-5 h-5 text-primary mb-4" />
              <div className="flex justify-between items-baseline mb-3">
                <h4 className="font-medium">Bono 10 notificaciones</h4>
                <span className="text-lg">59 <span className="text-sm text-muted-foreground">euro</span></span>
              </div>
              <p className="text-sm text-muted-foreground">
                10 notificaciones push sin caducidad. (5,90 euro/unidad)
              </p>
            </div>

            <div className="border border-border p-6 hover:border-primary/50 transition-colors">
              <Zap className="w-5 h-5 text-primary mb-4" />
              <div className="flex justify-between items-baseline mb-3">
                <h4 className="font-medium">Oferta extra puntual</h4>
                <span className="text-lg">5 <span className="text-sm text-muted-foreground">euro</span></span>
              </div>
              <p className="text-sm text-muted-foreground">
                1 oferta activa adicional para quien ha agotado las ofertas mensuales.
              </p>
            </div>

            <div className="border border-border p-6 hover:border-primary/50 transition-colors sm:col-span-2 lg:col-span-2">
              <Calendar className="w-5 h-5 text-primary mb-4" />
              <div className="flex justify-between items-baseline mb-3">
                <h4 className="font-medium">Publicación de evento</h4>
                <span className="text-lg">15 <span className="text-sm text-muted-foreground">euro</span></span>
              </div>
              <p className="text-sm text-muted-foreground">
                Publicación en la Agenda de la app con nombre, fecha, hora, lugar, descripción e imagen. 
                Visible en la sección Eventos y Planes para todos los usuarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Imagen divisoria 2 */}
      <section className="relative h-[50vh]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/surf-rklPNL1IJ6jjQQVxlEjx9LKQRTtdni.jpg"
          alt="Surf El Palmar"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </section>

      {/* Promocion de Lanzamiento */}
      <section className="py-24 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase opacity-70 mb-6">Oferta Limitada</p>
          <h2 className="text-3xl md:text-4xl font-extralight mb-6">
            Promoción de <span className="italic">Lanzamiento</span>
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Los primeros negocios que se sumen a BM El Palmar mantendrán el precio contratado durante el primer año completo, 
            sin revisiones ni subidas. Oferta limitada a las plazas iniciales de lanzamiento.
          </p>
        </div>
      </section>

      {/* Condiciones Generales */}
      <section id="condiciones" className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extralight">
              Condiciones <span className="italic text-primary">Generales</span>
            </h2>
          </div>

          <ol className="space-y-4 text-muted-foreground">
            <li className="flex gap-4">
              <span className="text-primary font-medium shrink-0">1.</span>
              <span>Todos los precios indicados son sin IVA (21%).</span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-medium shrink-0">2.</span>
              <span>Los contratos se formalizan por escrito entre BM El Palmar y el cliente.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-medium shrink-0">3.</span>
              <span>El pago se realiza por transferencia bancaria o en efectivo con justificante.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-medium shrink-0">4.</span>
              <span>Ningún plan tiene permanencia mínima. La baja se solicita con 15 días de preaviso por escrito.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-medium shrink-0">5.</span>
              <span>Los packs de temporada permiten fraccionar el pago en 1, 2 o 3 plazos mensuales sin recargo. El primer pago siempre se realiza el día de la firma.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-medium shrink-0">6.</span>
              <span>El impago de cualquier plazo del pack de temporada dará lugar a la suspensión inmediata del servicio.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-medium shrink-0">7.</span>
              <span>Los servicios puntuales se pagan en el momento de la solicitud y no son reembolsables una vez activados.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-medium shrink-0">8.</span>
              <span>BM El Palmar se reserva el derecho a modificar tarifas con 30 días de preaviso. Los clientes activos mantienen su precio durante el período contratado.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-medium shrink-0">9.</span>
              <span>Para el alta de alojamientos turísticos es obligatorio aportar la licencia turística en vigor emitida por la Junta de Andalucía.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-medium shrink-0">10.</span>
              <span>Las categorías donde aparece cada negocio dentro de cada plan las asigna BM El Palmar en función de la actividad real del negocio.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-medium shrink-0">11.</span>
              <span>La información sobre políticas de reserva de alojamientos es facilitada por el propietario y es de su exclusiva responsabilidad.</span>
            </li>
          </ol>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-32 px-6 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <Send className="w-10 h-10 mx-auto mb-8 opacity-70" />
          <h2 className="text-3xl md:text-4xl font-extralight mb-8">
            Contacta con <span className="italic">nosotros</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
            <a href="mailto:bmelpalmar@gmail.com" className="text-lg hover:opacity-70 transition-opacity">
              bmelpalmar@gmail.com
            </a>
            <span className="hidden sm:block opacity-30">|</span>
            <a href="tel:692974017" className="text-lg hover:opacity-70 transition-opacity">
              692 97 40 17
            </a>
            <span className="hidden sm:block opacity-30">|</span>
            <a href="https://instagram.com/bmelpalmar" target="_blank" rel="noopener noreferrer" className="text-lg hover:opacity-70 transition-opacity">
              @bmelpalmar
            </a>
          </div>

          <div className="text-sm opacity-50">
            <p>BM El Palmar</p>
          </div>
        </div>
      </section>
    </>
  )
}
