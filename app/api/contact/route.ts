import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // Enviar email usando Resend (necesitas crear cuenta gratis en resend.com)
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "BM El Palmar <onboarding@resend.dev>",
        to: "info@bmelpalmar.es",
        subject: `Nuevo mensaje de ${data.type === "negocio" ? "negocio" : "turista"}: ${data.name}`,
        html: `
          <h2>Nuevo mensaje desde la web</h2>
          <p><strong>Tipo:</strong> ${data.type === "negocio" ? "Negocio" : "Turista"}</p>
          <p><strong>Nombre:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          ${data.business ? `<p><strong>Negocio:</strong> ${data.business}</p>` : ""}
          <p><strong>Mensaje:</strong></p>
          <p>${data.message}</p>
        `
      })
    })

    if (response.ok) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ error: "Error sending email" }, { status: 500 })
    }
  } catch (error) {
    return NextResponse.json({ error: "Error processing request" }, { status: 500 })
  }
}
