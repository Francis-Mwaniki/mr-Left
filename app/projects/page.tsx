import { AnimatedSection } from "@/components/animated-section"
import { ProjectCard } from "@/components/project-card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  date: string
  link: string
  technologies: string[]
  image: string
}

const allProjects: ProjectCardProps[] = [
  {
    title: "Frachat",
    description:
      "Build and deploy AI-powered customer support with embeddable chat widgets. Upload your docs, get instant answers, and track everything in one intelligent dashboard.",
    date: "May 2025",
    link: "https://frachat.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Gemini API"],
    image: "https://res.cloudinary.com/dunssu2gi/image/upload/v1752150925/blog-images/kgficwmrwxdjc2bnu4ao.png",
  },
  {
    title: "AI Events UI App",
    description:
      "An AI‑powered event discovery dashboard showcasing clean card layouts of upcoming events, search/filter capabilities, and immersive hero banners. Designed for efficient browsing with modern typography, accent gradients, and interactive hover effects.",
    date: "June 2025",
    link: "https://ai-powered-events-v1.vercel.app/",
    technologies: ["React", "Tailwind CSS", "TypeScript", "OpenAI API"],
    image: "https://res.cloudinary.com/dunssu2gi/image/upload/v1752150926/blog-images/hywxaxgtyjyx59esmxjt.png",
  },
  {
    title: "Job Board Scrapper",
    description:
      "A scraping dashboard with a list view of job postings, tagged by role, company, and date. Includes filterable tables, pagination controls, and clear call‑to‑action buttons. The UI uses a neutral color palette and well‑spaced layout for readability.",
    date: "July 2025",
    link: "https://auto-job-board-mu.vercel.app/",
    technologies: ["Next.js", "Puppeteer", "Tailwind CSS", "TypeScript"],
    image: "https://res.cloudinary.com/dunssu2gi/image/upload/v1752150926/blog-images/cow5me2g4tobf6ayoags.png",
  },
  {
    title: "Video Paywall",
    description:
      "A premium video player with a clean overlay paywall: users see a blurred preview and a bold subscribe button. Features include a responsive grid of video cards, pricing tiers, and smooth overlay animations for seamless user conversion.",
    date: "June 2025",
    link: "https://videopaywall.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "Stripe", "TypeScript"],
    image: "https://res.cloudinary.com/dunssu2gi/image/upload/v1752150927/blog-images/vpshq1k1rncp0jfyjvre.png",
  },
  {
    title: "Mindfulness App",
    description:
      "A web application designed to promote mindfulness and mental well-being, featuring guided meditations and relaxation techniques.",
    date: "March 2025 - Ongoing",
    link: "https://m-mindfull.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Prisma", "Postgres"],
    image: "https://res.cloudinary.com/dunssu2gi/image/upload/v1746170689/blog-images/iwcey9zb25lxfagnktty.png",
  },
  {
    title: "Modern CV Builder",
    description: "A web application designed to assist job seekers in creating modern and professional resumes.",
    date: "October 2024 - Present",
    link: "https://cv-pro-builders.vercel.app/",
    technologies: ["TailwindCSS", "Next.js", "Postgres", "Gemini API"],
    image: "https://res.cloudinary.com/dfk2wym0e/image/upload/v1733911446/xkdhpswexryjtywle1e3.png",
  },
  {
    title: "Auto invoice API",
    description: "Conceptual web application focused on automating the process of generating invoices for clients.",
    date: "October 2024 - Present",
    link: "https://auto-invoice-api.netlify.app/",
    technologies: ["Next.js", "Prisma", "Postgres", "TailwindCSS"],
    image: "https://res.cloudinary.com/dfk2wym0e/image/upload/v1733911710/osmt0mfc9f8id3hgpb28.png",
  },
  {
    title: "Next.js Transcription App",
    description:
      "A web application focused on converting audio or video recordings into text transcripts using Next.js.",
    date: "December 2023 - January 2024",
    link: "https://next-transcriber.vercel.app/",
    technologies: ["Next.js", "React", "TypeScript", "Speech-to-Text API"],
    image:
      "https://res.cloudinary.com/dzvtkbjhc/image/upload/v1713278340/Screenshot_from_2024-04-16_17-38-41_pgvodk.png",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-cyan-50 pt-16">
      <div className="container mx-auto px-4 py-20">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              <span className="text-green-600">$</span> ls -la projects/
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A collection of applications and solutions I've built
            </p>
          </div>
        </AnimatedSection>

        {/* All Projects */}
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl px-2 md:px-8">
            {allProjects.map((project, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <ProjectCard {...project} />
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Technologies Overview */}
        <AnimatedSection delay={0.3}>
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-8">
              <span className="text-yellow-600">$</span> grep -r "technologies" projects/
            </h2>

            <div className="flex flex-wrap justify-center gap-3">
              {Array.from(new Set(allProjects.flatMap((p) => p.technologies))).map((tech, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="border-purple-300 text-purple-700 bg-purple-100 hover:bg-purple-200 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
