import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  date: string
  link: string
  technologies: string[]
  image: string
}

export function ProjectCard({ title, description, date, link, technologies, image }: ProjectCardProps) {
  return (
    <div className="group bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-purple-500/30 transition-all duration-300 transform hover:scale-105 h-full flex flex-col">
      {/* Terminal Header */}
      <div className="bg-slate-800/50 px-4 py-3 border-b border-slate-700/50">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <div className="ml-4 font-mono text-xs text-slate-400">
            <span className="text-green-400">francis@projects</span>
            <span className="text-white">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-white">$ cat {title.toLowerCase().replace(/\s+/g, "-")}.md</span>
          </div>
        </div>
      </div>

      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
      </div>

      {/* Project Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center text-sm text-gray-400 mb-3">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="font-mono">{date}</span>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">{title}</h3>

        <p className="text-gray-400 mb-4 leading-relaxed flex-1">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-purple-900/30 text-purple-300 border-purple-500/30 text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <Link href={link} target="_blank" rel="noopener noreferrer" className="mt-auto">
          <Button className="w-full bg-gradient-to-r from-purple-600/80 to-cyan-600/80 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold transition-all duration-300">
            View Project
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
