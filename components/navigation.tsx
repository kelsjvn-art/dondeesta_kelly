"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { key: "nav.home", href: "#home" },
  { key: "nav.about", href: "#about" },
  { key: "nav.destinations", href: "#destinations" },
  { key: "nav.upcoming", href: "#upcoming" },
  { key: "nav.collaborations", href: "#collaborations" },
  { key: "nav.brands", href: "#brands" },
  { key: "nav.work", href: "#work" },
  { key: "nav.contact", href: "#contact" },
]

export function Navigation() {
  const { language, setLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("#home")
              }}
              className={cn(
                "font-serif text-xl md:text-2xl font-medium tracking-tight transition-colors",
                isScrolled ? "text-foreground" : "text-white"
              )}
            >
              Kelly Vega
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className={cn(
                    "text-sm tracking-wide transition-colors hover:opacity-70",
                    isScrolled ? "text-foreground" : "text-white/90"
                  )}
                >
                  {t(item.key)}
                </a>
              ))}
            </div>

            {/* Language Toggle & Mobile Menu */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setLanguage(language === "en" ? "es" : "en")}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors px-3 py-1.5 rounded-full border",
                  isScrolled
                    ? "border-border text-foreground hover:bg-secondary"
                    : "border-white/30 text-white hover:bg-white/10"
                )}
              >
                {language === "en" ? "EN" : "ES"} | {language === "en" ? "ES" : "EN"}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  "lg:hidden p-2 rounded-lg transition-colors",
                  isScrolled
                    ? "text-foreground hover:bg-secondary"
                    : "text-white hover:bg-white/10"
                )}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          isMobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <div
          className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={cn(
            "absolute top-16 right-0 w-full max-w-sm bg-background border-l border-border shadow-xl transition-transform duration-300 h-[calc(100vh-4rem)] overflow-y-auto",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="p-6 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className="text-foreground text-lg py-3 px-4 rounded-lg hover:bg-secondary transition-colors"
              >
                {t(item.key)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
