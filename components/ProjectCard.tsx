import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  date: string;
  link: string;
  githubLink?: string;
  technologies: string[];
  image?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  date, 
  link, 
  githubLink, 
  technologies,
  image
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      } 
    },
  };

  const techBadgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="h-full flex flex-col overflow-hidden bg-gradient-to-br from-purple-50 to-white dark:from-gray-800 dark:to-gray-900 border-2 border-purple-200 dark:border-purple-800">
        {image && (
          <div className="w-full h-48 overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
          </div>
        )}
        <CardHeader className="bg-purple-100 dark:bg-gray-700">
          <CardTitle className="text-2xl font-bold text-purple-700 dark:text-purple-300">{title}</CardTitle>
          <CardDescription className="text-sm text-gray-600 dark:text-gray-300">{date}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow pt-4">
          <p className="text-gray-700 dark:text-gray-300">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={techBadgeVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
              >
                <Badge variant="secondary" className="bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-900 dark:to-pink-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                  {tech}
                </Badge>
              </motion.div>
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
    </motion.div>
  );
};

export default ProjectCard;