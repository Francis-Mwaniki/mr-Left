'use client';

import { Code, Zap, Users, Rocket, ArrowRight, Sparkles, Clock, Target } from 'lucide-react';

export default function V0ImpactPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="relative overflow-hidden bg-indigo-600">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-yellow-300" />
              <span className="text-sm font-medium text-white">The Future of Development</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              How v0 Builder is
              <span className="block text-yellow-300">
                Revolutionizing
              </span>
              Software Development
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              From concept to code in minutes. Discover how AI-powered development tools are reshaping the way we build software.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Introduction */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12 border border-slate-200">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-indigo-100 rounded-lg p-3">
                <Rocket className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">The Development Revolution</h2>
                <p className="text-base text-slate-700 leading-relaxed mb-4">
                  The software development landscape has undergone a seismic shift with the introduction of AI-powered builders like v0. 
                  These tools are not just changing how we write code—they're fundamentally transforming who can build software and 
                  how quickly ideas can become reality.
                </p>
                <p className="text-base text-slate-700 leading-relaxed">
                  Traditional development cycles that once took weeks or months can now be compressed into hours or days, 
                  democratizing software creation and enabling unprecedented innovation velocity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Transformations */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">Key Transformations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: "Speed Revolution",
                description: "What used to take days now takes minutes. Rapid prototyping has become instant prototyping, enabling faster iteration and validation cycles."
              },
              {
                icon: Users,
                title: "Democratized Development",
                description: "Non-technical stakeholders can now directly participate in the development process, bridging the gap between ideas and implementation."
              },
              {
                icon: Target,
                title: "Precision & Quality",
                description: "AI-generated code follows best practices by default, reducing bugs and improving maintainability from the start."
              },
              {
                icon: Code,
                title: "Modern Standards",
                description: "Automatic adoption of latest frameworks, responsive designs, and accessibility standards without manual configuration."
              },
              {
                icon: Zap,
                title: "Instant Iteration",
                description: "Real-time modifications and A/B testing capabilities allow for immediate feedback and continuous improvement."
              },
              {
                icon: Sparkles,
                title: "Creative Freedom",
                description: "Developers can focus on creative problem-solving rather than repetitive coding tasks and boilerplate generation."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-indigo-50 rounded-lg p-3 w-fit mb-4">
                  <item.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Before vs After */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">Development: Then vs Now</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-red-50 rounded-2xl p-6 sm:p-8 border border-red-200">
              <h3 className="text-xl font-bold text-red-800 mb-6 flex items-center gap-3">
                <div className="bg-red-200 rounded-full w-8 h-8 flex items-center justify-center text-red-800 text-sm font-bold">
                  Before
                </div>
                Traditional Development
              </h3>
              <ul className="space-y-4 text-sm text-red-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Weeks to set up project structure and tooling</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Manual responsive design implementation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Extensive debugging and cross-browser testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>High barrier to entry for non-developers</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Slow iteration cycles and feedback loops</span>
                </li>
              </ul>
            </div>

            {/* After */}
            <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-6 flex items-center gap-3">
                <div className="bg-green-200 rounded-full w-8 h-8 flex items-center justify-center text-green-800 text-sm font-bold">
                  Now
                </div>
                v0-Powered Development
              </h3>
              <ul className="space-y-4 text-sm text-green-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Instant project setup with modern best practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Automatic responsive design and accessibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Production-ready code with minimal bugs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Anyone can build and iterate on ideas</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Real-time modifications and instant previews</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Impact Areas */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">Industry Impact</h2>
          <div className="space-y-6">
            {[
              {
                title: "Startups & Entrepreneurs",
                description: "MVP development time reduced from months to days, enabling faster market validation and investor pitches."
              },
              {
                title: "Enterprise Development",
                description: "Internal tools and prototypes can be built by business users, reducing IT bottlenecks and development backlogs."
              },
              {
                title: "Design-to-Development",
                description: "Seamless transition from design mockups to functional code, bridging the designer-developer gap."
              },
              {
                title: "Education & Learning",
                description: "Students can focus on learning concepts rather than syntax, accelerating programming education."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-indigo-600 flex items-center justify-center">
                    <ArrowRight className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed pl-16">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Future Outlook */}
        <section className="mb-16">
          <div className="bg-indigo-600 rounded-2xl p-6 sm:p-8 lg:p-12 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">The Future of Development</h2>
              <p className="text-lg mb-8 text-indigo-100 leading-relaxed">
                We're witnessing the emergence of a new development paradigm where AI and human creativity collaborate 
                to build better software faster. The future promises even more sophisticated AI assistants, 
                natural language programming, and truly democratized software creation.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-300 mb-2">10x</div>
                  <div className="text-sm text-indigo-100">Faster Development</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-300 mb-2">90%</div>
                  <div className="text-sm text-indigo-100">Less Boilerplate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-300 mb-2">∞</div>
                  <div className="text-sm text-indigo-100">Creative Possibilities</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12 border border-slate-200 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">The Development Renaissance</h2>
            <p className="text-base text-slate-700 leading-relaxed max-w-4xl mx-auto mb-8">
              v0 and similar AI-powered development tools represent more than just technological advancement—they signify 
              a fundamental shift towards more accessible, efficient, and creative software development. As these tools 
              continue to evolve, they promise to unlock human potential and accelerate innovation across all industries.
            </p>
            <div className="inline-flex items-center gap-2 bg-indigo-500 text-white px-6 py-3 rounded-full text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              The future is being built today
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
