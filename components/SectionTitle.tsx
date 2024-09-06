// components/SectionTitle.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => (
  <motion.h2
    className="text-3xl font-bold mb-8 text-purple-600"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {title}
  </motion.h2>
);

export default SectionTitle;