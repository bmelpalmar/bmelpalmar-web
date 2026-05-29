"use client"

import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"

const slides = [
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/808808cd398f470ad82eae92657d6b04-KZwglq3jNljtuqcrZ7hpHZEQq5N7Yh.jpg",
    titleLine1: "Descubre",
    titleLine2: "El Palmar"
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner_puesta_sol-nqD64RJMWYdBzkQXsN4PCswU2Upp1u.jpg",
    titleLine1: "Vive cada",
    titleLine2: "atardecer"
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/surf-rklPNL1IJ6jjQQVxlEjx9LKQRTtdni.jpg",
    titleLine1: "Siente",
    titleLine2: "las olas"
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/playadelpalmar-PWiqN79D06DUDB0UMp7SkOPJtzrSpR.jpg",
    titleLine1: "Explora",
    titleLine2: "la costa"
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.titleLine1}
            fill
            className="object-cover scale-105"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <div className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="mb-8 text-xs tracking-[0.4em] uppercase opacity-70 font-light">
            Tu guía local de la costa de Vejer
          </p>
          
          <h1 className="relative">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight tracking-tight">
              {slides[currentSlide].titleLine1}
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight italic tracking-tight text-primary mt-2">
              {slides[currentSlide].titleLine2}
            </span>
          </h1>
        </div>

        {/* App Buttons */}
        <div className={`mt-12 flex items-center justify-center gap-3 transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <button className="flex items-center gap-2 border border-white/20 bg-transparent px-4 py-2 text-[10px] tracking-wider uppercase transition-all hover:bg-white/10">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            App Store
          </button>
          
          <button className="flex items-center gap-2 border border-white/20 bg-transparent px-4 py-2 text-[10px] tracking-wider uppercase transition-all hover:bg-white/10">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.807 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
            </svg>
            Google Play
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className={`absolute bottom-32 left-1/2 -translate-x-1/2 z-10 flex gap-4 transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-px transition-all duration-700 ${
              index === currentSlide ? "w-16 bg-white" : "w-8 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToSection}
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 z-10 transition-all duration-1000 delay-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <ChevronDown className="w-6 h-6 animate-bounce opacity-60" />
      </button>
    </section>
  )
}
