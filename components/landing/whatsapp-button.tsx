"use client"

export function WhatsAppButton() {
  const phoneNumber = "34692974017"
  const message = "Hola, me interesa saber más sobre los planes de visibilidad de BM El Palmar"
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#2B5A7F] text-white rounded-full shadow-lg hover:bg-[#1a3a52] transition-all hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <svg 
        viewBox="0 0 32 32" 
        className="w-7 h-7 fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.128-1.958C9.714 30.986 12.724 32 16.004 32 24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.316 22.594c-.39 1.1-1.932 2.014-3.178 2.28-.854.182-1.968.326-5.72-1.23-4.802-1.99-7.892-6.876-8.132-7.194-.23-.318-1.932-2.57-1.932-4.902 0-2.332 1.224-3.476 1.658-3.954.39-.432 1.028-.648 1.638-.648.198 0 .376.01.536.018.478.02.716.05 1.03.796.39.93 1.344 3.276 1.462 3.516.12.24.24.554.068.87-.162.326-.302.47-.542.748-.24.278-.468.492-.708.79-.22.26-.468.538-.19 1.01.278.462 1.236 2.038 2.654 3.3 1.822 1.622 3.354 2.126 3.83 2.362.346.17.762.134 1.05-.17.366-.39.82-1.036 1.282-1.672.328-.452.742-.508 1.124-.348.39.15 2.458 1.158 2.88 1.37.422.21.702.318.804.49.1.17.1.988-.29 2.088z"/>
      </svg>
    </a>
  )
}
