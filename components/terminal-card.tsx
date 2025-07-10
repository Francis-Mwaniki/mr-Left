import type { ReactNode } from "react"

interface TerminalCardProps {
  children: ReactNode
  className?: string
}

export function TerminalCard({ children, className = "" }: TerminalCardProps) {
  return (
    <div
      className={`bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden ${className}`}
    >
      {/* Terminal Header */}
      <div className="bg-slate-800/50 px-4 py-3 border-b border-slate-700/50">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-6">{children}</div>
    </div>
  )
}
