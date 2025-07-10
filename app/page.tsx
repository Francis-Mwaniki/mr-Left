"use client"

import { useState, useEffect } from "react"
import { TerminalInterface } from "@/components/terminal-interface"
import { RegularUI } from "@/components/regular-ui"

export default function HomePage() {
  const [isTerminalMode, setIsTerminalMode] = useState(true)

  useEffect(() => {
    const handleModeToggle = (event: CustomEvent) => {
      setIsTerminalMode(event.detail.isTerminalMode)
      localStorage.setItem("portfolioMode", event.detail.isTerminalMode ? "terminal" : "ui")
    }

    window.addEventListener("modeToggle", handleModeToggle as EventListener)
    return () => window.removeEventListener("modeToggle", handleModeToggle as EventListener)
  }, [])

  // On mount, check if the user has toggled before
  useEffect(() => {
    const savedMode = localStorage.getItem("portfolioMode")
    if (savedMode) {
      setIsTerminalMode(savedMode === "terminal")
    }
  }, [])

  return <div className="min-h-screen">{isTerminalMode ? <TerminalInterface /> : <RegularUI />}</div>
}
