"use client";
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

const technologies = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Python'];

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex flex-col justify-center items-center text-center px-4">
      <motion.div
        className="max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl sm:text-6xl font-bold mb-4 text-gray-800 dark:text-white"
          variants={itemVariants}
        >
          Francis Mwaniki
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl mb-6 text-gray-600 dark:text-gray-300"
          variants={itemVariants}
        >
          Software Developer at Mitsumi Distribution
        </motion.p>
        <motion.p
          className="text-lg mb-8 text-gray-600 dark:text-gray-400"
          variants={itemVariants}
        >
          Passionate about creating efficient, scalable, and user-friendly software solutions.
        </motion.p>
        <motion.div className="flex flex-wrap justify-center gap-4 mb-8" variants={containerVariants}>
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold dark:bg-purple-900 dark:text-purple-200"
              variants={itemVariants}
              transition={{ delay: index * 0.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
        <motion.div className="flex justify-center space-x-4 mb-8" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <Button asChild variant="outline" size="icon">
              <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Button asChild variant="outline" size="icon">
              <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Button asChild variant="outline" size="icon">
              <Link href="mailto:your.email@example.com">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
            <Link href="/projects">View My Work</Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;