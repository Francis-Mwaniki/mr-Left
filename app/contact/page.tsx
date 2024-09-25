"use client";

import React from 'react';
import EnhancedContactForm from '@/components/AnimatedContactForm';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <motion.h1 
        className="text-3xl font-bold mb-8 text-center text-pink-600 dark:text-pink-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <EnhancedContactForm />
        <motion.div 
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-pink-600 dark:text-pink-400">My Contact Information</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <strong>Email:</strong> francis@mitsumidistribution.com
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <strong>Phone:</strong> +254 769 982 944
            </motion.p>
            <motion.address 
              className="not-italic"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <strong>Address:</strong><br />
              P.O.Box: 32735<br />
              12th Floor, Mitsumi Business Park<br />
              Muthithi Road<br />
              Westlands, Nairobi<br />
              Kenya
            </motion.address>
          </div>
        </motion.div>
      </div>
    </div>
  );
}