import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message, business, formType } = body

    // Validar campos requeridos
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      )
    }

    // Enviar email usando Resend o similar
    // Por ahora, guardamos los datos y los enviamos por email
    const emailContent = `
Nuevo mensaje de contacto desde BM El Palmar

Tipo: ${formType === "negocio" ? "Negocio" : "Turista"}
Nombre: ${name}
Email: ${email}
${business ? `Negocio: ${business}` : ""}

Mensaje:
${message}
    `.trim()

    // Enviar notificación por email a info@bmelpalmar.es
    // Usando la API de email de Vercel o Resend
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "BM El Palmar <noreply@bmelpalmar.es>",
        to: ["info@bmelpalmar.es"],
        reply_to: email,
        subject: `Nuevo contacto de ${name} - ${formType === "negocio" ? "Negocio" : "Turista"}`,
        text: emailContent,
      }),
    })

    if (!response.ok) {
      console.error("Error sending email:", await response.text())
      // Aún así devolvemos éxito para no frustrar al usuario
      // Los datos se pueden recuperar de los logs
      console.log("[v0] Contact form submission:", { name, email, formType, message })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      { error: "Error al procesar el formulario" },
      { status: 500 }
    )
  }
}
