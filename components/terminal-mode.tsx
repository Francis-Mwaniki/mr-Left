"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { StreamingText } from "@/components/streaming-text"

interface TerminalEntry {
  id: string
  command: string
  output: string | React.ReactNode
  timestamp: Date
}

const COMMANDS = {
  help: "help",
  about: "about",
  experience: "experience",
  projects: "projects",
  contact: "contact",
  skills: "skills",
  clear: "clear",
  ui: "ui",
} as const

export function TerminalMode() {
  const [entries, setEntries] = useState<TerminalEntry[]>([])
  const [currentCommand, setCurrentCommand] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const welcomeEntry: TerminalEntry = {
      id: "welcome",
      command: "",
      output: (
        <div className="mb-4">
          <div className="text-green-400 mb-2">
            ╭─────────────────────────────────────────────────────────╮
          </div>
          <div className="text-green-400 mb-2">
            │  Welcome to Francis Mwaniki's Interactive Portfolio     │
          </div>
          <div className="text-green-400 mb-2">
            ╰─────────────────────────────────────────────────────────╯
          </div>
          <div className="text-gray-300 mt-4">
            Type <span className="text-cyan-400">'help'</span> to see available commands.
          </div>
        </div>
      ),
      timestamp: new Date(),
    }
    setEntries([welcomeEntry])
  }, [])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [entries])

  const executeCommand = async (command: string) => {
    const cmd = command.toLowerCase().trim()
    setIsProcessing(true)

    const newEntry: TerminalEntry = {
      id: Date.now().toString(),
      command,
      output: "",
      timestamp: new Date(),
    }

    switch (cmd) {
      case COMMANDS.help:
        newEntry.output = (
          <div className="text-gray-300">
            <div className="text-cyan-400 mb-2">Available Commands:</div>
            <div className="ml-4 space-y-1">
              <div><span className="text-green-400">about</span> - Learn about me</div>
              <div><span className="text-green-400">experience</span> - View my work history</div>
              <div><span className="text-green-400">projects</span> - See my projects</div>
              <div><span className="text-green-400">skills</span> - List my technical skills</div>
              <div><span className="text-green-400">contact</span> - Get my contact information</div>
              <div><span className="text-green-400">clear</span> - Clear the terminal</div>
              <div><span className="text-green-400">ui</span> - Switch to UI mode</div>
            </div>
          </div>
        )
        break

      case COMMANDS.about:
        newEntry.output = (
          <StreamingText
            text={`Hi! I'm Francis Mwaniki, a passionate Software Engineer and Full Stack Developer.

I specialize in translating innovative ideas into high-quality, functional code. Currently working at Mitsumi Distribution, I collaborate with cross-functional teams to deliver exceptional digital experiences.

My expertise spans across modern web technologies including React, Next.js, Vue.js, and various backend frameworks. I'm passionate about creating scalable solutions and staying up-to-date with the latest technologies.

Key Areas:
• Marketing Collaboration - Working with marketing teams to enhance client brands
• Code Implementation - Turning ideas into functional applications  
• Web Application Development - Building robust web solutions
• Technical Optimization - Ensuring optimal performance and scalability
• Code Review - Maintaining high code quality standards`}
          />
        )
        break

      case COMMANDS.experience:
        newEntry.output = (
          <StreamingText
            text={`Professional Experience:\n\n- Software Engineer @ Mitsumi Distribution\n- Full Stack Developer | React, Next.js, Vue.js, Node.js\n- Technical Consultant | Scalable App Architectures`}
          />
        )
        break

      case COMMANDS.clear:
        setEntries([])
        setCurrentCommand("")
        setIsProcessing(false)
        return

      default:
        newEntry.output = (
          <div className="text-red-400">Unknown command: {command}</div>
        )
        break
    }

    setEntries((prev) => [...prev, newEntry])
    setCurrentCommand("")
    setIsProcessing(false)
  }

  return (
    <div
      ref={terminalRef}
      className="bg-black text-white p-4 h-[500px] overflow-y-auto font-mono text-sm"
    >
      {entries.map((entry) => (
        <div key={entry.id} className="mb-4">
          {entry.command && (
            <div className="text-green-400">
              ➜ ~ {entry.command}
            </div>
          )}
          <div>{entry.output}</div>
        </div>
      ))}
      <div className="flex items-center space-x-2">
        <span className="text-green-400">➜ ~</span>
        <input
          ref={inputRef}
          value={currentCommand}
          onChange={(e) => setCurrentCommand(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !isProcessing) {
              executeCommand(currentCommand)
            }
          }}
          className="bg-transparent outline-none text-white flex-1"
          disabled={isProcessing}
        />
      </div>
    </div>
  )
}
