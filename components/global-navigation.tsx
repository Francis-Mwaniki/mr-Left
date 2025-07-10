"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Terminal, Layout, Home, User, Code, Mail, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Experience", href: "/experience", icon: User },
  { name: "Projects", href: "/projects", icon: Code },
  { name: "Contact", href: "/contact", icon: Mail },
]

export function GlobalNavigation() {
  const [isTerminalMode, setIsTerminalMode] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Check if we're on the home page to determine mode
  const isHomePage = pathname === "/"

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Listen for mode changes from home page
  useEffect(() => {
    const handleModeToggle = (event: CustomEvent) => {
      setIsTerminalMode(event.detail.isTerminalMode)
    }

    window.addEventListener("modeToggle", handleModeToggle as EventListener)
    return () => window.removeEventListener("modeToggle", handleModeToggle as EventListener)
  }, [])

  if (!isHomePage) {
    // Show full navigation for other pages
    return (
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className={`text-xl font-bold transition-colors ${
                isScrolled ? "text-slate-800 hover:text-purple-600" : "text-white hover:text-purple-300"
              }`}
            >
              <span className={isScrolled ? "text-emerald-600" : "text-emerald-400"}>$</span> francis.dev
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              {navigation.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href

                return (
                  <Link key={item.name} href={item.href}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`transition-all ${
                        isScrolled
                          ? `text-slate-600 hover:text-slate-800 hover:bg-slate-100 ${
                              isActive ? "text-purple-600 bg-purple-50" : ""
                            }`
                          : `text-slate-300 hover:text-white hover:bg-white/10 ${
                              isActive ? "text-purple-300 bg-purple-500/10" : ""
                            }`
                      }`}
                    >
                      <Icon className="h-4 w-4 mr-2" />
                      {item.name}
                    </Button>
                  </Link>
                )
              })}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden transition-colors ${
                isScrolled ? "text-slate-800 hover:bg-slate-100" : "text-white hover:bg-white/10"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden transition-all duration-300 ${
              isScrolled
                ? "bg-white/95 backdrop-blur-md border-b border-slate-200/50"
                : "bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50"
            }`}
          >
            <div className="container mx-auto px-4 py-4">
              <div className="space-y-2">
                {navigation.map((item) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href

                  return (
                    <Link key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                      <Button
                        variant="ghost"
                        className={`w-full justify-start transition-all ${
                          isScrolled
                            ? `text-slate-600 hover:text-slate-800 hover:bg-slate-100 ${
                                isActive ? "text-purple-600 bg-purple-50" : ""
                              }`
                            : `text-slate-300 hover:text-white hover:bg-white/10 ${
                                isActive ? "text-purple-300 bg-purple-500/10" : ""
                              }`
                        }`}
                      >
                        <Icon className="h-4 w-4 mr-2" />
                        {item.name}
                      </Button>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </nav>
    )
  }

  // Simple mode toggle for home page
  return (
    <div className="fixed top-6 right-6 z-50">
      <Button
        onClick={() => {
          setIsTerminalMode(!isTerminalMode)
          // Dispatch custom event to notify the home page
          window.dispatchEvent(new CustomEvent("modeToggle", { detail: { isTerminalMode: !isTerminalMode } }))
        }}
        className="bg-slate-800/90 backdrop-blur-md border border-slate-600/50 hover:bg-slate-700/90 text-white shadow-lg transition-all duration-200 hover:scale-105"
        size="sm"
      >
        {isTerminalMode ? (
          <>
            <Layout className="h-4 w-4 mr-2" />
            UI Mode
          </>
        ) : (
          <>
            <Terminal className="h-4 w-4 mr-2" />
            Terminal
          </>
        )}
      </Button>
    </div>
  )
}
