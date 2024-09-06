"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const [showDetails, setShowDetails] = useState(true);
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, url: "https://github.com/yourusername", label: "GitHub" },
    { icon: <Linkedin size={20} />, url: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: <Twitter size={20} />, url: "https://twitter.com/yourusername", label: "Twitter" },
    { icon: <Mail size={20} />, url: "mailto:your.email@example.com", label: "Email" },
  ];

  return (
    <footer className="bg-black text-white py-4 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm">&copy; {currentYear} Francis Mwaniki</p>
          <motion.button
            onClick={() => setShowDetails(!showDetails)}
            className="text-white focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp 
              size={24} 
              className={`transform transition-transform duration-300 ${showDetails ? 'rotate-180' : ''}`} 
            />
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">About Me</h3>
                  <p className="text-sm text-gray-400">Crafting digital experiences with code and creativity.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                  <ul className="text-sm space-y-1">
                    {['Home', 'Projects', 'Experience', 'Contact'].map((item) => (
                      <li key={item}>
                        <Link href={`/${item.toLowerCase()}`} className="hover:text-purple-400 transition-colors">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Connect</h3>
                  <div className="flex space-x-3">
                    {socialLinks.map((link) => (
                      <motion.a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-400 transition-colors"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        title={link.label}
                      >
                        {link.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </footer>
  );
};

export default Footer;