"use client"

import React from 'react'
import { User, Briefcase, GraduationCap, Code, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion, useScroll, useTransform } from 'framer-motion'

const SkillBadge = ({ skill, index }: { skill: string; index: number }) => (
  <motion.span 
    className="inline-block bg-gradient-to-r from-purple-400 to-pink-500 text-white text-sm font-semibold mr-2 mb-2 px-3 py-1 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.05 }}
  >
    {skill}
  </motion.span>
)

const CardWrapper = ({ children, delay }: { children: React.ReactNode; delay: number }) => {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      initial={{ y: 50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay, type: "spring", bounce: 0.4 }}
    >
      {children}
    </motion.div>
  )
}

const About = () => {
  const skills = [
    "Vue.js (Nuxt.js)", "React (Next.js)", "Express", "Supabase", "MongoDB",
    "Prisma", "Git & GitHub", "Postgres", "Python (Flask and Django)"
  ]

  return (
    <motion.div 
      className="container mx-auto px-4 py-16 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1 
        className="text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
      >
        About Me
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CardWrapper delay={0.3}>
          <Card className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              <CardTitle className="flex items-center text-2xl">
                <User className="mr-2" /> Profile
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <motion.p 
                className="text-gray-600 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                I am a skilled software developer with a knack for crafting user-friendly applications. 
                Leveraging frameworks like Vue.js and React, I build beautiful interfaces, while 
                ensuring smooth backend functionality with Node.js and databases like Supabase. 
                As a fast learner, I stay up-to-date with the latest technologies to tackle any project 
                efficiently and effectively.
              </motion.p>
            </CardContent>
          </Card>
        </CardWrapper>

        <CardWrapper delay={0.4}>
          <Card className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
              <CardTitle className="flex items-center text-2xl">
                <Briefcase className="mr-2" /> Current Position
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <motion.p 
                className="text-gray-600 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Currently, I&apos;m working as a Software Developer at Mitsumi Distribution, where I continue 
                to expand my skills and contribute to innovative projects.
              </motion.p>
              <motion.a
                href="#"
                className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800 transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ x: 5 }}
              >
                Learn more about my role <ChevronRight className="ml-1 w-4 h-4" />
              </motion.a>
            </CardContent>
          </Card>
        </CardWrapper>

        <CardWrapper delay={0.5}>
          <Card className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white">
              <CardTitle className="flex items-center text-2xl">
                <GraduationCap className="mr-2" /> Education
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <motion.p 
                className="text-gray-600 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                I completed my Bachelor&apos;s Degree in Information Technology at Kabarak University 
                (September 2020 - April 2024). Kabarak University is known for integrating academic 
                excellence with a strong Biblical perspective, helping me develop not only technical 
                skills but also emphasizing ethical values and leadership qualities.
              </motion.p>
            </CardContent>
          </Card>
        </CardWrapper>

        <CardWrapper delay={0.6}>
          <Card className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
              <CardTitle className="flex items-center text-2xl">
                <Code className="mr-2" /> Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <motion.div 
                className="flex flex-wrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                {skills.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} index={index} />
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </CardWrapper>
      </div>
    </motion.div>
  )
}

export default About