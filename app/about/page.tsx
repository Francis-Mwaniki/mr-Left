"use client";
import React from 'react';
import { User, Briefcase, GraduationCap, Code } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const SkillBadge = ({ skill, index }: { skill: string, index: number }) => (
  <motion.span 
    className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-800"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
  >
    {skill}
  </motion.span>
);

const CardWrapper = ({ children, delay }: { children: React.ReactNode, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

const About = () => {
  const skills = [
    "Vue.js (Nuxt.js)", "React (Next.js)", "Express", "Supabase", "MongoDB",
    "Prisma", "Git & GitHub", "Postgres", "Python (Flask and Django)"
  ];

  return (
    <motion.div 
      className="container mx-auto px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="text-3xl font-bold mb-8 text-center"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        About Me
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CardWrapper delay={0.2}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="mr-2" /> Profile
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                I am a skilled software developer with a knack for crafting user-friendly applications. 
                Leveraging frameworks like Vue.js and React, I build beautiful interfaces, while 
                ensuring smooth backend functionality with Node.js and databases like Supabase. 
                As a fast learner, I stay up-to-date with the latest technologies to tackle any project 
                efficiently and effectively.
              </p>
            </CardContent>
          </Card>
        </CardWrapper>

        <CardWrapper delay={0.3}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Briefcase className="mr-2" /> Current Position
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Currently, I&apos;m working as a Software Developer at Mitsumi Distribution, where I continue 
                to expand my skills and contribute to innovative projects.
              </p>
            </CardContent>
          </Card>
        </CardWrapper>

        <CardWrapper delay={0.4}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="mr-2" /> Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                I completed my Bachelor&apos;s Degree in Information Technology at Kabarak University 
                (September 2020 - April 2024). Kabarak University is known for integrating academic 
                excellence with a strong Biblical perspective, helping me develop not only technical 
                skills but also emphasizing ethical values and leadership qualities.
              </p>
            </CardContent>
          </Card>
        </CardWrapper>

        <CardWrapper delay={0.5}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="mr-2" /> Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap">
                {skills.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} index={index} />
                ))}
              </div>
            </CardContent>
          </Card>
        </CardWrapper>
      </div>
    </motion.div>
  );
};

export default About;