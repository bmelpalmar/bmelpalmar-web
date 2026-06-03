"use client"

import { useState } from "react"
import { CheckCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formType, setFormType] = useState<"turista" | "negocio">("turista")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      business: formData.get("business") || "",
      message: formData.get("message"),
      type: formType
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
      
      if (response.ok) {
        setIsSubmitted(true)
      }
    } catch (error) {
      console.error("Error sending message:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contacto" className="py-16 lg:py-20 px-6 bg-[#f8f8f8]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-xs tracking-[0.3em] uppercase mb-6 font-light">
            Contacto
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-secondary tracking-tight mb-6">
            Hablemos
          </h2>
          <p className="text-secondary/60 text-base md:text-lg font-light max-w-lg mx-auto">
            Tienes una consulta, quieres anunciar tu negocio o simplemente saludarnos
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-12 mb-16 text-center">
          <div>
            <p className="text-secondary/40 text-xs tracking-[0.2em] uppercase mb-2 font-light">Email</p>
            <a href="mailto:info@bmelpalmar.es" className="text-secondary hover:text-primary transition-colors font-light">
              info@bmelpalmar.es
            </a>
          </div>
          <div>
            <p className="text-secondary/40 text-xs tracking-[0.2em] uppercase mb-2 font-light">Teléfono</p>
            <a href="tel:+34692974017" className="text-secondary hover:text-primary transition-colors font-light">
              692 974 017
            </a>
          </div>
          <div>
            <p className="text-secondary/40 text-xs tracking-[0.2em] uppercase mb-2 font-light">Ubicación</p>
            <p className="text-secondary font-light">El Palmar, Cádiz</p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-8 md:p-12">
          {isSubmitted ? (
            <div className="text-center py-12">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-extralight text-secondary mb-3">
                Mensaje enviado
              </h3>
              <p className="text-secondary/60 font-light">
                Gracias por contactar con nosotros. Te responderemos pronto.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form Type Selector */}
              <div className="flex justify-center gap-4 mb-8">
                <button
                  type="button"
                  onClick={() => setFormType("turista")}
                  className={`relative px-6 py-3 rounded-xl text-xs tracking-[0.15em] uppercase font-medium transition-all duration-300 ${
                    formType === "turista"
                      ? "bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg shadow-primary/25"
                      : "bg-secondary/5 text-secondary/60 hover:bg-secondary/10 hover:text-secondary"
                  }`}
                >
                  <span className="relative z-10">Soy turista</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFormType("negocio")}
                  className={`relative px-6 py-3 rounded-xl text-xs tracking-[0.15em] uppercase font-medium transition-all duration-300 ${
                    formType === "negocio"
                      ? "bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/25"
                      : "bg-secondary/5 text-secondary/60 hover:bg-secondary/10 hover:text-secondary"
                  }`}
                >
                  <span className="relative z-10">Tengo un negocio</span>
                </button>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs tracking-[0.15em] uppercase text-secondary/60 mb-3 font-light">
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-secondary/20 text-secondary focus:border-primary focus:outline-none transition-colors font-light"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs tracking-[0.15em] uppercase text-secondary/60 mb-3 font-light">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-secondary/20 text-secondary focus:border-primary focus:outline-none transition-colors font-light"
                  />
                </div>
              </div>

              {formType === "negocio" && (
                <div>
                  <label htmlFor="business" className="block text-xs tracking-[0.15em] uppercase text-secondary/60 mb-3 font-light">
                    Nombre del negocio
                  </label>
                  <input
                    id="business"
                    name="business"
                    type="text"
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-secondary/20 text-secondary focus:border-primary focus:outline-none transition-colors font-light"
                  />
                </div>
              )}

              <div>
                <label htmlFor="message" className="block text-xs tracking-[0.15em] uppercase text-secondary/60 mb-3 font-light">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-secondary/20 text-secondary focus:border-primary focus:outline-none transition-colors resize-none font-light"
                />
              </div>

              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-block border border-secondary text-secondary px-12 py-4 text-xs tracking-[0.2em] uppercase font-light transition-all hover:bg-secondary hover:text-white disabled:opacity-50"
                >
                  {isLoading ? "Enviando..." : "Enviar mensaje"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
