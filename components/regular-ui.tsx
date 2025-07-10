import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Github, Linkedin, User, FolderOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"

export function RegularUI() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-cyan-50 pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/30 to-cyan-100/30" />
        <div className="container mx-auto px-4 py-16 relative">
          <AnimatedSection className="text-center">
            <div className="flex justify-center mb-6">
              <div className="rounded-full overflow-hidden border-4 border-purple-400 shadow-xl h-28 w-28 sm:h-32 sm:w-32">
                <Image
                  src="https://res.cloudinary.com/dunssu2gi/image/upload/v1747039386/blog-images/hzucuuzacmyzkvymr837.jpg"
                  alt="Francis Mwaniki"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-slate-800 to-purple-600 bg-clip-text text-transparent">
              Francis Mwaniki
            </h1>

            <div className="text-base md:text-lg text-slate-600 mb-6 font-mono">
              <span className="text-emerald-600">$</span> whoami
              <br />
              <span className="text-purple-600">Software Engineer</span> &{" "}
              <span className="text-cyan-600">Full Stack Developer</span>
            </div>

            <p className="text-sm text-slate-600 max-w-xl mx-auto mb-8 leading-relaxed">
              Passionate about translating innovative ideas into high-quality, functional code. Building scalable
              solutions and delivering exceptional digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
              <Link href="/projects">
                <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                  View Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-purple-400 text-purple-600 hover:bg-purple-50 px-6 py-2 rounded-full font-medium bg-white/80 backdrop-blur-sm"
                >
                  Contact
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="flex justify-center gap-3">
              <a href="https://github.com/Francis-Mwaniki" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-all duration-200 hover:scale-110"
                >
                  <Github className="h-4 w-4" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/francis-mwaniki-378603220/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-all duration-200 hover:scale-110"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
              </a>
              <a href="mailto:francis@mitsumidistributin.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-all duration-200 hover:scale-110"
                >
                  <Mail className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Role Information Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">
                <span className="text-cyan-600">$</span> cat roles.md
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="bg-white/80 backdrop-blur-sm border border-purple-200 rounded-xl p-6 hover:border-purple-300 transition-all duration-300 transform hover:scale-105 shadow-sm">
                <h3 className="text-lg font-bold text-slate-800 mb-3">Marketing Collaboration</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Collaborating with marketing teams to create and enhance brands for company clients.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white/80 backdrop-blur-sm border border-cyan-200 rounded-xl p-6 hover:border-cyan-300 transition-all duration-300 transform hover:scale-105 shadow-sm">
                <h3 className="text-lg font-bold text-slate-800 mb-3">Code Implementation</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Translating innovative ideas into high-quality, functional code.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl p-6 hover:border-green-300 transition-all duration-300 transform hover:scale-105 shadow-sm">
                <h3 className="text-lg font-bold text-slate-800 mb-3">Web Application Development</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Developing and maintaining web applications to support client strategies.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-white/80 backdrop-blur-sm border border-yellow-200 rounded-xl p-6 hover:border-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-sm">
                <h3 className="text-lg font-bold text-slate-800 mb-3">Technical Optimization</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Ensuring technical feasibility of UI/UX designs and optimizing for maximum performance.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <AnimatedSection delay={0.1}>
              <Link href="/experience">
                <div className="group bg-white/80 backdrop-blur-sm border border-purple-200 rounded-lg p-5 hover:border-purple-300 transition-all duration-300 transform hover:scale-105 shadow-sm">
                  <User className="h-8 w-8 text-purple-500 mb-2 group-hover:text-purple-600" />
                  <h3 className="text-base font-bold text-slate-800 mb-1">Experience</h3>
                  <p className="text-xs text-slate-600">Professional journey and companies I've worked with.</p>
                </div>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Link href="/projects">
                <div className="group bg-white/80 backdrop-blur-sm border border-cyan-200 rounded-lg p-5 hover:border-cyan-300 transition-all duration-300 transform hover:scale-105 shadow-sm">
                  <FolderOpen className="h-8 w-8 text-cyan-500 mb-2 group-hover:text-cyan-600" />
                  <h3 className="text-base font-bold text-slate-800 mb-1">Projects</h3>
                  <p className="text-xs text-slate-600">Applications and solutions I've built.</p>
                </div>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Link href="/contact">
                <div className="group bg-white/80 backdrop-blur-sm border border-green-200 rounded-lg p-5 hover:border-green-300 transition-all duration-300 transform hover:scale-105 shadow-sm">
                  <Mail className="h-8 w-8 text-green-500 mb-2 group-hover:text-green-600" />
                  <h3 className="text-base font-bold text-slate-800 mb-1">Contact</h3>
                  <p className="text-xs text-slate-600">Let's connect and discuss collaborations.</p>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}
