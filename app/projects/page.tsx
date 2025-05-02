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
      link: "hhttps://elevateminds-ns.netlify.app/",
      technologies: ["React", "Node.js", "MongoDB", "Gemini API"],
      image: "https://res.cloudinary.com/dzvtkbjhc/image/upload/v1713277433/Screenshot_from_2024-04-16_17-15-00_q0kpzk.png"
    },
    {
      title: "Next.js Transcription App",
      description: "A web application focused on converting audio or video recordings into text transcripts using Next.js.",
      date: "December 2023 - January 2024",
      link: "https://next-transcriber.vercel.app/",
      technologies: ["Next.js", "React", "TypeScript", "Speech-to-Text API"],
      image: "https://res.cloudinary.com/dzvtkbjhc/image/upload/v1713278340/Screenshot_from_2024-04-16_17-38-41_pgvodk.png"
    },
  ]

  const mitsumiProjects: ProjectCardProps[] = [
    {
      title: "Mindfulness App",
      description: "A web application designed to promote mindfulness and mental well-being, featuring guided meditations and relaxation techniques.",
      date: "March 2025 - Ongoing",
      link: "https://m-mindfull.vercel.app/",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Prisma", "Postgres"],
      image: "https://res.cloudinary.com/dunssu2gi/image/upload/v1746170689/blog-images/iwcey9zb25lxfagnktty.png"
    },
    {
      title: "Mitsumi E-commerce",
      description: "A full-fledged e-commerce platform built with modern web technologies, offering a wide range of products and services.",
      date: "Oct 2024 - February 2025",
      link: "https://prev-mitsumi-ecommerce.vercel.app/",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Prisma", "Postgres"],
      image: "https://res.cloudinary.com/dunssu2gi/image/upload/v1740719203/blog-images/n4ylhv2learwmfd8lufn.png"
    },
    {
      title: "Kabarak Project Management",
      description: "A comprehensive project management web application designed to streamline the process of managing and tracking projects.",
      date: "Jan 2024 - Feb 2024",
      link: "https://pm-kabu.vercel.app/",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Prisma", "Postgres"],
      image: "https://res.cloudinary.com/dunssu2gi/image/upload/v1740719605/blog-images/emgo3qabae5fb2uh0ted.png"
    },
    {
      title: "Bookings App",
      description: "A web application designed to simplify the process of booking appointments and managing schedules for various services.",
      date: "Jan 2024 - Feb 2024",
      link: "https://g-cfm.vercel.app/",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Prisma", "Postgres"],
      image: "https://res.cloudinary.com/dunssu2gi/image/upload/v1740719708/blog-images/fznxgxi0tdcgjrswxq6u.png"
    },
    {
      title: "Repair Junction",
      description: "A comprehensive web application offering various enterprise-level services, built with modern web technologies for optimal performance.",
      date: "August 2024 - April 2025",
      link: "https://repair-junction.com/",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Prisma", "Postgres"],
      image: "https://res.cloudinary.com/di70f7sli/image/upload/v1727180823/user_uploads/gxz9crhtxhuxyiil3a0r.png"
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
      <h2 className="text-2xl font-extrabold mb-6 text-purple-700 dark:text-purple-300">{title}</h2>
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
        className="text-3xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
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
      
      <ProjectSection title="New Projects" projects={mitsumiProjects} />
      <ProjectSection title="Previous Projects" projects={previousProjects} />
    </div>
  )
}
