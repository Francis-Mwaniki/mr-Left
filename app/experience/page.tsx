import { AnimatedSection } from "@/components/animated-section"
import { TerminalCard } from "@/components/terminal-card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

const experiences = [
  {
    title: "Software Engineer",
    company: "Mitsumi Distribution",
    date: "Present",
    description: [
      "Currently working on developing and maintaining software solutions.",
      "Collaborating with cross-functional teams to deliver high-quality products.",
      "Staying up-to-date with the latest technologies and best practices in software development.",
    ],
    skills: ["React", "Node.js", "AWS", "Docker", "CI/CD"],
  },
  {
    title: "Software Developer",
    company: "Beannsoft Limited",
    date: "May 2023 - Dec 2023",
    description: [
      "Engineered and maintained user interfaces and components.",
      "Quickly adapted to new technologies and delivered optimal results within a month.",
      "Gained valuable experience and skills that prepared me for future challenges in the tech industry.",
    ],
    skills: ["Vue.js", "JavaScript", "CSS", "Git", "Agile Methodologies"],
  },
  {
    title: "Fullstack Developer",
    company: "Acewears",
    date: "July 2023 - Dec 2023",
    description: [
      "Built the backend using NestJS, implementing server-side logic and APIs.",
      "Engineered the frontend using NuxtJS, creating a user-friendly shop layout.",
      "Utilized Prisma for effective database management with Postgres.",
    ],
    skills: ["NestJS", "NuxtJS", "Prisma", "PostgreSQL", "TypeScript"],
  },
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
      <div className="container mx-auto px-4 py-20">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-green-400">$</span> cat experience.log
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">My professional journey in software development</p>
          </div>
        </AnimatedSection>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <TerminalCard>
                <div className="font-mono text-sm mb-4">
                  <span className="text-green-400">francis@career</span>
                  <span className="text-white">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white">
                    $ git log --oneline {exp.company.toLowerCase().replace(/\s+/g, "-")}
                  </span>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-xl text-purple-400 font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex items-center text-gray-400 mt-2 md:mt-0">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="font-mono">{exp.date}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {exp.description.map((desc, i) => (
                      <p key={i} className="text-gray-300 leading-relaxed">
                        <span className="text-green-400">•</span> {desc}
                      </p>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-purple-900/50 text-purple-300 border-purple-500/30"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </TerminalCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  )
}
