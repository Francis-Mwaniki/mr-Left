"use client";
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../../components/SectionTitle';
import ExperienceCard from '../../components/ExperienceCard';

const experiences = [
  {
    title: "Software Developer",
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
      "Developed and maintained user interfaces and components.",
      "Quickly adapted to new technologies and delivered optimal results within a month.",
      "Gained valuable experience and skills that prepared me for future challenges in the tech industry."
    ],
    skills: ["Vue.js", "JavaScript", "CSS", "Git", "Agile Methodologies"]
  },
  {
    title: "Fullstack Developer (Volunteer)",
    company: "Acewears",
    date: "July 2023 - Dec 2023",
    description: [
      "Built the backend using NestJS, implementing server-side logic and APIs.",
      "Developed the frontend using NuxtJS, creating a user-friendly shop layout.",
      "Utilized Prisma for effective database management with Postgres."
    ],
    skills: ["NestJS", "NuxtJS", "Prisma", "PostgreSQL", "TypeScript"]
  }
];

const Experience: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle title="Work Experience" />
        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-1 bg-purple-300 dark:bg-purple-700 transform -translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              className={`mb-12 md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="md:w-1/2"></div>
              <div className="md:w-1/2 relative">
                {/* Timeline dot */}
                <div className="absolute top-0 left-0 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                <ExperienceCard {...exp} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;