"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'
import { ExternalLink, Github, Grid, List, GitBranch } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  date: string
  link: string
  githubLink?: string
  technologies: string[]
  image?: string
}

type ViewMode = 'grid' | 'list' | 'tree'

export default function Component() {
  const [viewMode, setViewMode] = useState<ViewMode>('tree')

  const previousProjects: ProjectCardProps[] = [
    {
      title: "Modern CV Builder",
      description: "A web application designed to assist job seekers in creating modern and professional resumes.",
      date: "October 2024 - Present",
      link: "https://cv-pro-builders.vercel.app/",
      technologies: ["TailwindCSS", "Next.js", "Postgres", "Gemini API"],
      image: "https://res.cloudinary.com/dfk2wym0e/image/upload/v1733911446/xkdhpswexryjtywle1e3.png"
    },
    {
      title: "Auto invoice  API",
      description: "Conceptual web application focused on automating the process of generating invoices for clients.",
      date: "October 2024 - Present",
      link: "https://auto-invoice-api.netlify.app/",
      technologies: ["Next.js", "Prisma", "Postgres", "TailwindCSS"],
      image: "https://res.cloudinary.com/dfk2wym0e/image/upload/v1733911710/osmt0mfc9f8id3hgpb28.png"
    },
    {
      title: "Mental Health App",
      description: "A web application aimed at providing assistance to those in need of mental health support, featuring a chatbot and counselor booking system.",
      date: "February 2024 - Present",
      link: "https://elevateminds-ns.vercel.app/",
      technologies: ["React", "Node.js", "MongoDB", "Gemini API"],
      image: "https://res.cloudinary.com/dzvtkbjhc/image/upload/v1713277433/Screenshot_from_2024-04-16_17-15-00_q0kpzk.png"
    },
    {
      title: "AI GPT Detector",
      description: "A tool designed to distinguish between actual creative content and GPT-generated text, currently in development.",
      date: "February 2024 - September 2024",
      link: "https://ai-detector-v2.vercel.app/",
      technologies: ["Python", "Machine Learning", "NLP", "React"],
      image: "https://res.cloudinary.com/di70f7sli/image/upload/v1727357477/user_uploads/oq6lpl1jqy3gdnggpb22.png"
    },
    {
      title: "Next.js Transcription App",
      description: "A web application focused on converting audio or video recordings into text transcripts using Next.js.",
      date: "December 2023 - January 2024",
      link: "https://next-transcriber.vercel.app/",
      technologies: ["Next.js", "React", "TypeScript", "Speech-to-Text API"],
      image: "https://res.cloudinary.com/dzvtkbjhc/image/upload/v1713278340/Screenshot_from_2024-04-16_17-38-41_pgvodk.png"
    },
    {
      title: "Patient Reminder App",
      description: "An application allowing doctors to input medication details and send timely alerts to patients.",
      date: "March 2024",
      link: "https://patient-puce.vercel.app/",
      technologies: ["Nextjs", "Postgres", "Prisma","Tailwindcss"],
      image: "https://res.cloudinary.com/dzvtkbjhc/image/upload/v1713277987/Screenshot_from_2024-04-16_17-31-07_atgewr.png"
    },
    {
      title: "Personality Prediction",
      description: "An app that predicts a person's personality (Introvert or Extrovert) based on text input, using machine learning algorithms.",
      date: "February 2024 - Present",
      link: "https://francis-mwaniki-personality-predictor-app2-e3qqds.streamlit.app/",
      technologies: ["Python", "Streamlit", "Machine Learning", "NLP"],
      image: "https://res.cloudinary.com/di70f7sli/image/upload/v1727181842/user_uploads/jqx15r5xws1djrvcvu0f.png"
    }
  ]

  const mitsumiProjects: ProjectCardProps[] = [
    {
      title: "Credit Risk Dashboard",
      description: "A web application for assessing and visualizing credit risks, featuring AI-powered analytics and risk assessment tools.",
      date: "July 2024 - August 2024",
      link: "https://credit-risks.vercel.app/",
      technologies: ["AI", "Next.js", "MongoDB", "REST API"],
      image: "https://res.cloudinary.com/di70f7sli/image/upload/v1727180186/user_uploads/ewyuyddqfzfg4v37c1is.png"
    },
    {
      title: "Product Recommendation",
      description: "An intelligent system for suggesting products to customers, utilizing machine learning algorithms for personalized recommendations.",
      date: "August 2024 - Sept 2024",
      link: "https://dashboard-bk.vercel.app/",
      technologies: ["Python", "Machine Learning", "Next.js", "Tailwind CSS"],
      image: "https://res.cloudinary.com/di70f7sli/image/upload/v1727180306/user_uploads/zab9y1zzjfzy39b7rawh.png"
    },
    {
      title: "Enterprise Services",
      description: "A comprehensive web application offering various enterprise-level services, built with modern web technologies for optimal performance.",
      date: "August 2024 - Ongoing",
      link: "https://enterprise-services.vercel.app/Enterprise",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Prisma", "Postgres"],
      image: "https://res.cloudinary.com/di70f7sli/image/upload/v1727180823/user_uploads/gxz9crhtxhuxyiil3a0r.png"
    },
    {
      title: "Repair Junction",
      description: "An online platform connecting users with repair services, streamlining the process of finding and booking repair professionals.",
      date: "Sept 2024 - Ongoing",
      link: "https://mitsumi-repair-garage.vercel.app/",
      technologies: ["Nextjs", "Postgres", "Prisma","Tailwindcss"],
      image: "https://res.cloudinary.com/di70f7sli/image/upload/v1727180771/user_uploads/h8gfc8tbb5pilbvuhcxy.png"
    },
    {
      title: "Repair Junction Admin",
      description: "An administrative dashboard for managing the Repair Junction platform, providing tools for overseeing repairs, user management, and analytics.",
      date: "Sept 2024 - Ongoing",
      link: "https://admin-repair-junction.vercel.app/",
      technologies: ["Next.js", "Shadcn", "Framer Motion", "Tailwind CSS", "Postgres"],
      image: "https://res.cloudinary.com/di70f7sli/image/upload/v1727180911/user_uploads/bjhhfmpbggogefplwiyz.png"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  const GridCard: React.FC<ProjectCardProps> = ({ 
    title, 
    description, 
    date, 
    link, 
    githubLink, 
    technologies,
    image
  }) => {
    return (
      <Card className="h-full flex flex-col overflow-hidden relative bg-gradient-to-br from-purple-50 to-white dark:from-gray-800 dark:to-gray-900 border-2 border-purple-200 dark:border-purple-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
       {/* if date starts has present add new badge */}
        {date.toLowerCase().includes('present') && (
          <Badge variant="secondary" className="absolute top-2 right-2 bg-green-500 text-white">
            New
          </Badge>
        )}

        {image && (
          <div className="w-full h-48 overflow-hidden">
            <motion.img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        )}
        <CardHeader className="bg-purple-100 dark:bg-gray-700">
          <CardTitle className="text-xl font-bold text-purple-700 dark:text-purple-300">{title}</CardTitle>
          <CardDescription className="text-sm text-gray-600 dark:text-gray-300">{date}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow pt-4">
          <p className="text-gray-700 dark:text-gray-300">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-900 dark:to-pink-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button asChild variant="default" className="bg-purple-500 hover:bg-purple-600 text-white">
            <Link href={link} target="_blank" rel="noopener noreferrer" className="flex items-center">
              View Project <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          {githubLink && (
            <Button asChild variant="outline" className="border-purple-500 text-purple-700 hover:bg-purple-100 dark:border-purple-400 dark:text-purple-300 dark:hover:bg-purple-900">
              <Link href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    )
  }

  const ListItem: React.FC<ProjectCardProps> = ({ 
    title, 
    description, 
    date, 
    link, 
    githubLink, 
    technologies,
    image
  }) => {
    return (
      <div className="flex flex-col relative md:flex-row gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
         {/* if date starts has present add new badge */}
         {date.toLowerCase().includes('present') && (
          <Badge variant="secondary" className="absolute top-2 right-2 bg-green-500 text-white">
            New
          </Badge>
        )}
        {image && (
          <div className="w-full md:w-1/4 h-48 md:h-auto overflow-hidden rounded-md">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{date}</p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-900 dark:to-pink-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <Button asChild variant="default" className="bg-purple-500 hover:bg-purple-600 text-white">
              <Link href={link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                View Project <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            {githubLink && (
              <Button asChild variant="outline" className="border-purple-500 text-purple-700 hover:bg-purple-100 dark:border-purple-400 dark:text-purple-300 dark:hover:bg-purple-900">
                <Link href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    )
  }

  const TreeItem: React.FC<ProjectCardProps> = ({ 
    title, 
    description, 
    date, 
    link, 
    githubLink, 
    technologies,
  
  }) => {
    return (
      <div className="flex items-start space-x-3 relative gap-4">
         {/* if date starts has present add new badge */}
         {date.toLowerCase().includes('present') && (
          <Badge variant="secondary" className="absolute top-2 right-2 bg-green-500 text-white">
            New
          </Badge>
        )}
        <div className="mt-2 w-4 h-4 rounded-full bg-purple-500 flex-shrink-0"></div>
        <div className="flex-1">
          <h3 className="text-md font-bold text-purple-700 dark:text-purple-300">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{date}</p>
          <p className="text-gray-700 dark:text-gray-300 mb-2">{description}</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-900 dark:to-pink-900 text-purple-800 dark:text-purple-200 rounded-full text-xs font-medium">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <Button asChild variant="default" size="sm" className="bg-purple-500 hover:bg-purple-600 text-white">
              <Link href={link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                View <ExternalLink className="ml-1 h-3 w-3" />
              </Link>
            </Button>
            {githubLink && (
              <Button asChild variant="outline" size="sm" className="border-purple-500 text-purple-700 hover:bg-purple-100 dark:border-purple-400 dark:text-purple-300 dark:hover:bg-purple-900">
                <Link href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Github className="mr-1 h-3 w-3" /> GitHub
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    )
  }

  const ProjectSection: React.FC<{ title: string, projects: ProjectCardProps[] }> = ({ title, projects }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-3xl font-bold mb-6 text-purple-700 dark:text-purple-300">{title}</h2>
      <AnimatePresence mode="wait">
        <motion.div 
          key={viewMode}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className={`
            ${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : ''}
            ${viewMode === 'list' ? 'space-y-8' : ''}
            ${viewMode === 'tree' ? 'space-y-8' : ''}
          `}
        >
          {projects.map((project, index) => (
            <motion.div key={project.title} variants={itemVariants}>
              {viewMode === 'grid' && <GridCard {...project} />}
              {viewMode === 'list' && <ListItem {...project} />}
              {viewMode === 'tree' && (
                <>
                  {index > 0 && <div className="w-0.5 h-8 bg-gray-300 dark:bg-gray-700 ml-2"></div>}
                  <TreeItem {...project} />
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1 
        className="text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Project Showcase
      </motion.h1>
      <div className="flex justify-end mb-8 space-x-2">
        <Button onClick={() => setViewMode('grid')} variant={viewMode === 'grid' ? 'default' : 'outline'}>
          <Grid className="mr-2 h-4 w-4" /> Grid
        </Button>
        <Button onClick={() => setViewMode('list')} variant={viewMode === 'list' ? 'default' : 'outline'}>
          <List className="mr-2 h-4 w-4" /> List
        </Button>
        <Button onClick={() => setViewMode('tree')} variant={viewMode === 'tree' ? 'default' : 'outline'}>
          <GitBranch className="mr-2 h-4 w-4" /> Tree
        </Button>
      </div>
      
      <ProjectSection title="Mitsumi Distribution" projects={mitsumiProjects} />
      <ProjectSection title="Previous Projects" projects={previousProjects} />
    </div>
  )
}
