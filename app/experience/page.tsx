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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-cyan-50 pt-16">
      <div className="container mx-auto px-4 py-20">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              <span className="text-green-600">$</span> cat experience.log
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">My professional journey in software development</p>
          </div>
        </AnimatedSection>

        {/* Experience Timeline */}
        <div className="w-full flex justify-center">
          <div className="flex flex-col gap-10 w-full max-w-4xl px-2 md:px-8">
            {experiences.map((exp, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <TerminalCard className="max-w-3xl mx-auto my-2">
                  <div className="font-mono text-sm mb-4">
                    <span className="text-green-600">francis@career</span>
                    <span className="text-slate-700">:</span>
                    <span className="text-blue-600">~</span>
                    <span className="text-slate-700">
                      $ git log --oneline {exp.company.toLowerCase().replace(/\s+/g, "-")}
                    </span>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-purple-700 mb-1">{exp.title}</h3>
                        <p className="text-xl text-purple-500 font-semibold">{exp.company}</p>
                      </div>
                      <div className="flex items-center text-slate-500 mt-2 md:mt-0">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="font-mono">{exp.date}</span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      {exp.description.map((desc, i) => (
                        <p key={i} className="text-slate-700 leading-relaxed">
                          <span className="text-green-600">•</span> {desc}
                        </p>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-2">
                      {exp.skills.map((skill, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-purple-100 text-purple-700 border-purple-300"
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
    </div>
  )
}
