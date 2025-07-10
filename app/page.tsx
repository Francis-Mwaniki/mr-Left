"use client"

import { useState, useEffect } from "react"
import { TerminalInterface } from "@/components/terminal-interface"
import { RegularUI } from "@/components/regular-ui"

export default function HomePage() {
  const [isTerminalMode, setIsTerminalMode] = useState(true)

  useEffect(() => {
    const handleModeToggle = (event: CustomEvent) => {
      setIsTerminalMode(event.detail.isTerminalMode)
    }

    window.addEventListener("modeToggle", handleModeToggle as EventListener)
    return () => window.removeEventListener("modeToggle", handleModeToggle as EventListener)
  }, [])

  // Store the current mode in localStorage to persist across navigation
  useEffect(() => {
    const savedMode = localStorage.getItem("portfolioMode")
    if (savedMode) {
      setIsTerminalMode(savedMode === "terminal")
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("portfolioMode", isTerminalMode ? "terminal" : "ui")
  }, [isTerminalMode])

  return <div className="min-h-screen">{isTerminalMode ? <TerminalInterface /> : <RegularUI />}</div>
}
