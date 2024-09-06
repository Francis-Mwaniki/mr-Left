import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExperienceCardProps {
  title: string;
  company: string;
  date: string;
  description: string[];
  skills: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, company, date, description, skills }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <Card className="mb-6 overflow-hidden bg-gradient-to-br from-purple-50 to-white dark:from-gray-800 dark:to-gray-900 border-2 border-purple-200 dark:border-purple-800 hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="bg-purple-100 dark:bg-gray-700">
          <CardTitle className="text-2xl font-bold text-purple-700 dark:text-purple-300">{title}</CardTitle>
          <CardDescription className="text-lg text-gray-600 dark:text-gray-300">{company} • {date}</CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <ul className="list-none space-y-2">
            {description.map((item, index) => (
              <motion.li 
                key={index}
                variants={listItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                className="flex items-start"
              >
                <span className="mr-2 text-purple-500">•</span>
                {item}
              </motion.li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={badgeVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.05 }}
              >
                <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ExperienceCard;