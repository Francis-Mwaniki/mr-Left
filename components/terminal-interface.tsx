"use client"

import { useState, useEffect, useRef, type KeyboardEvent } from "react"
import { TerminalSystem } from "@/lib/terminal-system"

interface TerminalEntry {
  id: string
  command: string
  output: string
  timestamp: Date
}

export function TerminalInterface() {
  const [entries, setEntries] = useState<TerminalEntry[]>([])
  const [currentCommand, setCurrentCommand] = useState("")
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [currentPath, setCurrentPath] = useState("/")
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalSystem = useRef(new TerminalSystem())

  useEffect(() => {
    // Welcome message
    const welcomeEntry: TerminalEntry = {
      id: "welcome",
      command: "",
      output: `╭─────────────────────────────────────────────────────────╮
│  ✨ Francis Mwaniki's Portfolio Terminal                │
╰─────────────────────────────────────────────────────────╯

Type 'help' for commands • 'ui' for graphical mode • Tab for suggestions
`,
      timestamp: new Date(),
    }
    setEntries([welcomeEntry])

    // Focus input
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  useEffect(() => {
    // Auto-scroll to bottom
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [entries])

  // Update suggestions based on current command
  useEffect(() => {
    if (currentCommand.trim()) {
      const suggestions = terminalSystem.current.getSuggestions(currentCommand, currentPath)
      setSuggestions(suggestions)
      setShowSuggestions(suggestions.length > 0)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }, [currentCommand, currentPath])

  const executeCommand = async (command: string) => {
    if (!command.trim()) return

    // Add to history
    setCommandHistory((prev) => [...prev, command])
    setHistoryIndex(-1)
    setShowSuggestions(false)

    // Execute command
    const result = terminalSystem.current.executeCommand(command.trim(), currentPath)

    // Update current path if changed
    if (result.newPath) {
      setCurrentPath(result.newPath)
    }

    // Add entry
    const newEntry: TerminalEntry = {
      id: Date.now().toString(),
      command,
      output: result.output,
      timestamp: new Date(),
    }

    setEntries((prev) => [...prev, newEntry])
    setCurrentCommand("")

    // Handle special commands
    if (command.trim() === "clear") {
      setEntries([])
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(currentCommand)
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setCurrentCommand(commandHistory[newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1)
          setCurrentCommand("")
        } else {
          setHistoryIndex(newIndex)
          setCurrentCommand(commandHistory[newIndex])
        }
      }
    } else if (e.key === "Tab") {
      e.preventDefault()
      if (suggestions.length > 0) {
        setCurrentCommand(suggestions[0])
        setShowSuggestions(false)
      }
    } else if (e.key === "Escape") {
      setShowSuggestions(false)
    }
  }

  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div
      className="h-screen min-h-[60vh] bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 text-slate-100 font-mono overflow-hidden cursor-text relative w-full max-w-full"
      onClick={handleTerminalClick}
    >
      <div ref={terminalRef} className="h-full overflow-y-auto p-4 sm:p-8 pb-24 space-y-4 sm:space-y-6 w-full max-w-full">
        {entries.map((entry) => (
          <div key={entry.id} className="space-y-2 sm:space-y-3">
            {entry.command && (
              <div className="flex flex-wrap items-center space-x-2 sm:space-x-3 text-xs sm:text-sm">
                <span className="text-emerald-400 font-medium">francis@portfolio</span>
                <span className="text-slate-500">:</span>
                <span className="text-sky-400 font-medium">{currentPath}</span>
                <span className="text-slate-400">$</span>
                <span className="text-slate-100 break-all">{entry.command}</span>
              </div>
            )}
            {entry.output && (
              <div className="ml-2 sm:ml-6 pl-2 sm:pl-4 border-l-2 border-slate-700/50 overflow-x-auto">
                <pre className="whitespace-pre-wrap text-slate-300 leading-relaxed text-xs sm:text-sm break-words">{entry.output}</pre>
              </div>
            )}
          </div>
        ))}

        {/* Current input line */}
        <div className="flex flex-wrap items-center space-x-2 sm:space-x-3 text-xs sm:text-sm relative">
          <span className="text-emerald-400 font-medium">francis@portfolio</span>
          <span className="text-slate-500">:</span>
          <span className="text-sky-400 font-medium">{currentPath}</span>
          <span className="text-slate-400">$</span>
          <div className="flex-1 relative min-w-[120px]">
            <input
              ref={inputRef}
              type="text"
              value={currentCommand}
              onChange={(e) => setCurrentCommand(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full bg-transparent outline-none text-slate-100 caret-emerald-400 placeholder-slate-500 py-2 sm:py-1 text-xs sm:text-sm"
              placeholder="Type a command..."
              autoComplete="off"
              spellCheck={false}
            />

            {/* Suggestions dropdown */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-6 left-0 bg-slate-800/95 backdrop-blur-sm border border-slate-600/50 rounded-md shadow-lg z-10 min-w-48">
                {suggestions.slice(0, 8).map((suggestion, index) => (
                  <div
                    key={suggestion}
                    className="px-3 py-2 text-xs sm:text-sm text-slate-300 hover:bg-slate-700/50 cursor-pointer first:rounded-t-md last:rounded-b-md"
                    onClick={() => {
                      setCurrentCommand(suggestion)
                      setShowSuggestions(false)
                      if (inputRef.current) inputRef.current.focus()
                    }}
                  >
                    {suggestion}
                  </div>
                ))}
                <div className="px-3 py-1 text-xs text-slate-500 border-t border-slate-600/50">
                  Press Tab to complete
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
