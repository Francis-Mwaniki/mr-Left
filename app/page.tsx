"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';
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
        {/* Profile image with rounded styling */}
        <motion.div
          className="mb-6 flex justify-center"
          variants={itemVariants}
        >
          <div className="rounded-full overflow-hidden border-4 border-purple-500 shadow-lg h-32 w-32 sm:h-40 sm:w-40">
            <Image
              src="https://res.cloudinary.com/dunssu2gi/image/upload/v1747039386/blog-images/hzucuuzacmyzkvymr837.jpg"
              alt="Francis Mwaniki"
              width={160}
              height={160}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </motion.div>
        
        <motion.h1
          className="text-3xl sm:text-6xl font-extrabold mb-4 text-gray-800 dark:text-white"
          variants={itemVariants}
        >
          Francis Mwaniki.
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl mb-6 text-gray-600 dark:text-gray-300"
          variants={itemVariants}
        >
          Software Engineer
        </motion.p>
        <motion.p
          className="text-xl mb-8 text-gray-600 dark:text-gray-400"
          variants={itemVariants}
        >
          Passionate about creating efficient, scalable, and user-friendly software solutions.
        </motion.p>
        <motion.div className="flex flex-wrap justify-center gap-4 mb-8" variants={containerVariants}>
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              className="px-3 py-1 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-900 dark:to-pink-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium"
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
              <Link href="https://github.com/Francis-Mwaniki" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Button asChild variant="outline" size="icon">
              <Link href="https://www.linkedin.com/in/francis-mwaniki-378603220/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Button asChild variant="outline" size="icon">
              <Link href="mailto:francis@mitsumidistribution.com">
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