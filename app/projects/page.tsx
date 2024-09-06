"use client";
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../../components/SectionTitle';
import ProjectCard from '../../components/ProjectCard';

const projects = [
  {
    title: "Mental Health App",
    description: "A web application aimed at providing assistance to those in need of mental health support, featuring a chatbot and counselor booking system.",
    date: "February 2024 - Present",
    link: "https://elevateminds-ns.netlify.app/",
    technologies: ["React", "Node.js", "MongoDB", "ChatGPT API"],
    image: "https://res.cloudinary.com/dzvtkbjhc/image/upload/v1713277433/Screenshot_from_2024-04-16_17-15-00_q0kpzk.png"
  },
  {
    title: "AI GPT Detector",
    description: "A tool designed to distinguish between actual creative content and GPT-generated text, currently in development.",
    date: "February 2024 - Ongoing",
    link: "https://gpt-detector-beta.vercel.app/",
    technologies: ["Python", "Machine Learning", "NLP", "React"],
    image: "https://res.cloudinary.com/dzvtkbjhc/image/upload/v1713277987/Screenshot_from_2024-04-16_17-30-50_mob8g0.png"
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
    technologies: ["React Native", "Firebase", "Push Notifications"],
    image: "https://res.cloudinary.com/dzvtkbjhc/image/upload/v1713277987/Screenshot_from_2024-04-16_17-31-07_atgewr.png"
  },
  {
    title: "Personality Prediction",
    description: "An app that predicts a person's personality (Introvert or Extrovert) based on text input, using machine learning algorithms.",
    date: "February 2024 - Present",
    link: "https://francis-mwaniki-personality-predictor-app2-e3qqds.streamlit.app/",
    technologies: ["Python", "Streamlit", "Machine Learning", "NLP"],
    image: "https://res.cloudinary.com/dzvtkbjhc/image/upload/v1713277988/Screenshot_from_2024-04-16_17-26-50_yanzfc.png"
  }
];

const Projects: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle title="My Projects" />
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;