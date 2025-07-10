import type { ReactNode } from "react"

interface TerminalCardProps {
  children: ReactNode
  className?: string
}

export function TerminalCard({ children, className = "" }: TerminalCardProps) {
  return (
    <div
      className={`bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl overflow-hidden text-slate-800 ${className}`}
    >
      {/* Terminal Header */}
      <div className="bg-white/70 px-4 py-3 border-b border-slate-200">
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
