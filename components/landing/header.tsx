"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Home, Compass, Users, Store, CreditCard, Mail } from "lucide-react"

const navLinks = [
  { name: "Inicio", href: "/", icon: Home },
  { name: "Explorar", href: "/#explorar", icon: Compass },
  { name: "Visitantes", href: "/#visitantes", icon: Users },
  { name: "Negocios", href: "/#negocios", icon: Store },
  { name: "Planes", href: "/planes", icon: CreditCard },
  { name: "Contacto", href: "/#contacto", icon: Mail },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 print:hidden ${
          isScrolled
            ? "bg-white shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center z-50">
              <span className={`text-lg font-medium tracking-wide transition-colors duration-300 ${
                isMobileMenuOpen ? "text-white" : isScrolled ? "text-secondary" : "text-white"
              }`}>
                BM <span className="font-light">El Palmar</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs tracking-[0.15em] uppercase font-light transition-colors duration-300 ${
                    isScrolled 
                      ? "text-secondary/70 hover:text-secondary" 
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden z-50 transition-colors duration-300 ${
                isMobileMenuOpen ? "text-white" : isScrolled ? "text-secondary" : "text-white"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-[#2B5A7F]" />
        
        {/* Shimmer Effect */}
        <div 
          className="absolute inset-0 animate-shimmer pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
            width: '50%'
          }}
        />
        
        {/* Navigation Links */}
        <nav className="relative h-full flex flex-col items-center justify-center gap-2">
          {navLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`group flex items-center gap-4 py-4 px-8 transition-all duration-500 ${
                  isMobileMenuOpen 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-4"
                }`}
                style={{ 
                  transitionDelay: isMobileMenuOpen ? `${index * 80}ms` : '0ms'
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Icon className="w-5 h-5 text-white/80" />
                </div>
                <span 
                  className="text-2xl font-light text-white tracking-wide group-hover:text-white/80 transition-colors"
                  style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
                >
                  {link.name}
                </span>
              </Link>
            )
          })}
        </nav>
        
        {/* Footer text */}
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-white/40 text-xs tracking-widest uppercase">
            Tu guía local en El Palmar
          </p>
        </div>
      </div>
    </>
  )
}
