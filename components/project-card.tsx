import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar } from "lucide-react"
import { useMemo } from "react"

interface ProjectCardProps {
  title: string
  description: string
  date: string
  link: string
  technologies: string[]
  image: string
}

const GRADIENTS = [
  "from-amber-500/90 via-indigo-500/80 to-purple-500/70",
  "from-emerald-500/90 via-teal-500/80 to-cyan-500/70",
  "from-orange-500/90 via-red-500/80 to-pink-500/70",
  "from-red-500/90 via-rose-500/80 to-pink-500/70",
  "from-green-500/90 via-emerald-500/80 to-teal-500/70",
  "from-purple-500/90 via-violet-500/80 to-fuchsia-500/70",
  "from-cyan-500/90 via-amber-500/80 to-indigo-500/70",
  "from-amber-500/90 via-orange-500/80 to-red-500/70",
  "from-slate-500/90 via-gray-500/80 to-zinc-500/70",
]

function getRandomGradient(key: string) {
  let hash = 0
  for (let i = 0; i < key.length; i++) hash = key.charCodeAt(i) + ((hash << 5) - hash)
  return GRADIENTS[Math.abs(hash) % GRADIENTS.length]
}

export function ProjectCard({ title, description, date, link, technologies, image }: ProjectCardProps) {
  const gradient = useMemo(() => getRandomGradient(title), [title])
  return (
    <div className="group bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl overflow-hidden h-full flex flex-col text-slate-800 max-w-md mx-auto my-4 shadow-md">
      {/* Terminal Header */}
      <div className="bg-white/70 px-4 py-2 border-b border-slate-200">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <div className="ml-4 font-mono text-xs text-slate-500">
            <span className="text-green-600">francis@projects</span>
            <span className="text-slate-700">:</span>
            <span className="text-blue-600">~</span>
            <span className="text-slate-700">$ cat {title.toLowerCase().replace(/\s+/g, "-")}.md</span>
          </div>
        </div>
      </div>

      {/* Project Image */}
      <div className="relative h-36 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${gradient}`} />
      </div>

      {/* Project Content */}
      <div className="px-4 pt-3 pb-2 flex-1 flex flex-col items-center text-center">
        <div className="flex items-center text-sm text-slate-500 mb-1">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="font-mono">{date}</span>
        </div>

        <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-purple-600 transition-colors">{title}</h3>

        <p className="text-slate-600 mb-2 leading-relaxed flex-1 text-sm">{description}</p>

        <div className="flex flex-wrap gap-2 mb-3 justify-center">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-purple-100 text-purple-700 border-purple-300 text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <Link href={link} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button className="w-full px-8 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold shadow-md text-center flex items-center gap-2 transition-all duration-300">
            View Project
            <ExternalLink className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
