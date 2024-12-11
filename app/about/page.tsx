'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Briefcase, GraduationCap, Code, ChevronRight, CheckCircle, Grid, List, GitBranch } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

type ViewMode = 'grid' | 'list' | 'tree'

const SkillBadge = ({ skill, index }: { skill: string; index: number }) => (
  <motion.span 
    className="inline-block bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-900 dark:to-pink-900 text-purple-800 dark:text-purple-200 text-xs sm:text-sm font-semibold mr-2 mb-2 px-2 sm:px-3 py-1 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
    animate={{ opacity: 1, scale: 1, rotate: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
    whileHover={{ scale: 1.1, rotate: 5 }}
  >
    {skill}
  </motion.span>
)

interface RoleInfoProps {
  title: string
  description: string
}

const RoleInfo: React.FC<RoleInfoProps> = ({ title, description }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="flex items-start space-x-3 mb-4"
  >
    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-1" />
    <div>
      <h3 className="font-semibold text-base sm:text-lg text-purple-700 dark:text-purple-300">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  </motion.div>
)

export default function Component() {
  const [isOpen, setIsOpen] = useState(false)
  const [viewMode, setViewMode] = useState<ViewMode>('grid')

  const skills = [
    "Vue.js (Nuxt.js)", "React (Next.js)", "Express", "Supabase", "MongoDB",
    "Prisma", "Git & GitHub", "Postgres", "Python (Flask and Django)"
  ]

  const roleInfos = [
    {
      title: "Marketing Collaboration",
      description: "Collaborating with the marketing team to create and enhance marketing brands for the company's clients."
    },
    {
      title: "Code Implementation",
      description: "Translating innovative ideas into high-quality, functional code."
    },
    {
      title: "Web Application Development",
      description: "Developing and maintaining web applications to support client marketing strategies."
    },
    {
      title: "Technical Optimization",
      description: "Ensuring the technical feasibility of UI/UX designs and optimizing applications for maximum speed and scalability."
    },
    {
      title: "Code Review",
      description: "Participating in code reviews and providing constructive feedback to peers."
    }
  ]

  const aboutSections = [
    {
      title: "Profile",
      icon: <User className="mr-2" />,
      content: "I am a skilled software Engineerwith a knack for crafting user-friendly applications. Leveraging frameworks like Vue.js and React, I build beautiful interfaces, while ensuring smooth backend functionality with Node.js and databases like Supabase. As a fast learner, I stay up-to-date with the latest technologies to tackle any project efficiently and effectively.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Current Position",
      icon: <Briefcase className="mr-2" />,
      content: "Currently, I'm working as a Software Engineerat Mitsumi Distribution, where I continue to expand my skills and contribute to innovative projects.",
      gradient: "from-blue-500 to-cyan-500",
      action: (
        <Button
          onClick={() => setIsOpen(true)}
          className="mt-4 bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
        >
          Learn more about my role <ChevronRight className="ml-1 w-4 h-4" />
        </Button>
      ),
    },
    {
      title: "Education",
      icon: <GraduationCap className="mr-2" />,
      content: "I completed my Bachelor's Degree in Information Technology at Kabarak University (September 2020 - April 2024). Kabarak University is known for integrating academic excellence with a strong Biblical perspective, helping me develop not only technical skills but also emphasizing ethical values and leadership qualities.",
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Skills",
      icon: <Code className="mr-2" />,
      content: (
        <div className="flex flex-wrap">
          {skills.map((skill, index) => (
            <SkillBadge key={index} skill={skill} index={index} />
          ))}
        </div>
      ),
      gradient: "from-yellow-400 to-orange-500",
    },
  ]

  const GridView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
      {aboutSections.map((section, index) => (
        <motion.div
          key={section.title}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <CardHeader className={`bg-gradient-to-r ${section.gradient} text-white`}>
              <CardTitle className="flex items-center text-lg sm:text-2xl">
                {section.icon} {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {section.content}
              </div>
              {section.action && (
                <div className="mt-4">
                  {section.action}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )

  const ListView = () => (
    <div className="space-y-4 sm:space-y-8">
      {aboutSections.map((section, index) => (
        <motion.div
          key={section.title}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row">
              <CardHeader className={`bg-gradient-to-r ${section.gradient} text-white md:w-1/3`}>
                <CardTitle className="flex items-center text-lg sm:text-2xl">
                  {section.icon} {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 md:w-2/3">
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {section.content}
                </div>
                {section.action && (
                  <div className="mt-4">
                    {section.action}
                  </div>
                )}
              </CardContent>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  )

  const TreeView = () => (
    <div className="space-y-4">
      {aboutSections.map((section, index) => (
        <React.Fragment key={section.title}>
          {index > 0 && <div className="w-0.5 h-8 bg-gray-300 dark:bg-gray-700 mx-auto"></div>}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start p-4 sm:p-6">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-gradient-to-r ${section.gradient} text-white mr-4`}>
                  {section.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">{section.title}</h3>
                  <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {section.content}
                  </div>
                  {section.action && (
                    <div className="mt-4">
                      {section.action}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        </React.Fragment>
      ))}
    </div>
  )

  return (
    <motion.div 
      className="container mx-auto px-4 py-8 sm:py-16 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1 
        className="text-3xl sm:text-5xl font-extrabold mb-8 sm:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        initial={{ y: -50, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
      >
        About Me
      </motion.h1>
      
      <div className="flex justify-end mb-6 sm:mb-8 space-x-2">
        <Button onClick={() => setViewMode('grid')} variant={viewMode === 'grid' ? 'default' : 'outline'} size="sm">
          <Grid className="mr-2 h-4 w-4" /> Grid
        </Button>
        <Button onClick={() => setViewMode('list')} variant={viewMode === 'list' ? 'default' : 'outline'} size="sm">
          <List className="mr-2 h-4 w-4" /> List
        </Button>
        <Button onClick={() => setViewMode('tree')} variant={viewMode === 'tree' ? 'default' : 'outline'} size="sm">
          <GitBranch className="mr-2 h-4 w-4" /> Tree
        </Button>
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div 
          key={viewMode}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {viewMode === 'grid' && <GridView />}
          {viewMode === 'list' && <ListView />}
          {viewMode === 'tree' && <TreeView />}
        </motion.div>
      </AnimatePresence>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px] md:max-w-[600px] lg:max-w-[800px] bg-white dark:bg-gray-800 w-[90vw] max-h-[90vh] overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: -15 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.9, rotateX: 15 }}
            transition={{ duration: 0.3 }}
          >
            <DialogHeader>
              <DialogTitle className="text-xl sm:text-2xl font-bold text-purple-700 dark:text-purple-300">My Role at Mitsumi Distribution</DialogTitle>
              <DialogDescription className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                As a Software Developer, I contribute to various aspects of our projects. Here&apos;s an overview of my responsibilities:
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-6">
              {roleInfos.map((info, index) => (
                <RoleInfo key={index} title={info.title} description={info.description} />
              ))}
            </div>
            <div className="mt-6 sm:mt-8 flex justify-end">
              <Button onClick={() => setIsOpen(false)} className="bg-purple-500 text-white hover:bg-purple-600 transition-colors duration-300">
                Close
              </Button>
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </motion.div>
  )
}