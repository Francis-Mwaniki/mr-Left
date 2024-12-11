"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ChevronRightIcon, BriefcaseIcon, CalendarIcon } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    title: "Software Engineer",
    company: "Mitsumi Distribution",
    date: "Present",
    description: [
      "Currently working on developing and maintaining software solutions.",
      "Collaborating with cross-functional teams to deliver high-quality products.",
      "Staying up-to-date with the latest technologies and best practices in software development."
    ],
    skills: ["React", "Node.js", "AWS", "Docker", "CI/CD"]
  },
  {
    title: "Software Developer",
    company: "Beannsoft Limited",
    date: "May 2023 - Dec 2023",
    description: [
      "Engineered and maintained user interfaces and components.",
      "Quickly adapted to new technologies and delivered optimal results within a month.",
      "Gained valuable experience and skills that prepared me for future challenges in the tech industry."
    ],
    skills: ["Vue.js", "JavaScript", "CSS", "Git", "Agile Methodologies"]
  },
  {
    title: "Fullstack Developer",
    company: "Acewears",
    date: "July 2023 - Dec 2023",
    description: [
      "Built the backend using NestJS, implementing server-side logic and APIs.",
      "Engineered the frontend using NuxtJS, creating a user-friendly shop layout.",
      "Utilized Prisma for effective database management with Postgres."
    ],
    skills: ["NestJS", "NuxtJS", "Prisma", "PostgreSQL", "TypeScript"]
  }
]

const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
  <motion.h2
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
    className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
  >
    {title}
  </motion.h2>
)

interface ParallaxProps {
  children: React.ReactNode
  offset?: number
}

const Parallax: React.FC<ParallaxProps> = ({ children, offset = 50 }: ParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset])

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  )
}

const ExperienceCard: React.FC<typeof experiences[0] & { index: number }> = ({ title, company, date, description, skills, index }) => {
  const isEven = index % 2 === 0
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])
  const x = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [isEven ? 50 : -50, 0, 0, isEven ? 50 : -50])

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, scale, x }}
      className={`mb-16 ${isEven ? 'md:ml-[5%]' : 'md:mr-[5%] md:ml-auto'} w-full md:w-[90%]`}
    >
      <Parallax offset={20}>
        <Card className="relative overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-6">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
              className="absolute -left-6 -top-6 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center transform rotate-12"
            >
              <BriefcaseIcon className="w-8 h-8 text-white" />
            </motion.div>
            <div className="ml-8">
              <h3 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">{title}</h3>
              <p className="text-xl text-purple-600 dark:text-purple-400 mb-2">{company}</p>
              <div className="flex items-center text-lg text-gray-600 dark:text-gray-400 mb-4">
                <CalendarIcon className="w-5 h-5 mr-2" />
                {date}
              </div>
              <ul className="mb-6 space-y-2">
                {description.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start"
                  >
                    <ChevronRightIcon className="h-6 w-6 text-purple-500 mr-2 flex-shrink-0" />
                    <span className="text-lg text-gray-700 dark:text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="px-3 py-1 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-900 dark:to-pink-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </Parallax>
    </motion.div>
  )
}

export default function Experience() {
  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 opacity-20" />
      <motion.div
        className="absolute left-[5%] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500"
        style={{ scaleY, originY: 0 }}
      />
      <div className="container mx-auto px-4 relative">
        <SectionTitle title="Work Experience" />
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}