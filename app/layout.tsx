import type { Metadata, Viewport } from 'next'
import { DM_Sans, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans"
});
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta"
});

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'BM El Palmar - Tu Guía Local de El Palmar',
  description: 'Descubre El Palmar con BM: tu guía local para surf, restaurantes, mercados, eventos y mucho más. Vive la experiencia auténtica de la costa gaditana.',
  generator: 'v0.app',
  openGraph: {
    title: 'BM El Palmar - Tu Guía Local de El Palmar',
    description: 'Descubre El Palmar con BM: tu guía local para surf, restaurantes, mercados, eventos y mucho más.',
    url: 'https://bmelpalmar.es',
    siteName: 'BM El Palmar',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BM El Palmar - Tu Guía Local',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BM El Palmar - Tu Guía Local de El Palmar',
    description: 'Descubre El Palmar con BM: tu guía local para surf, restaurantes, mercados, eventos y mucho más.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${dmSans.variable} ${jakarta.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
