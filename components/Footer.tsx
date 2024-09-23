"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Github, Linkedin, Mail, Twitter, ChevronUp } from 'lucide-react'

export default function Footer() {
  const [showDetails, setShowDetails] = useState(true)
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Github size={20} />, url: "https://github.com/Francis-Mwaniki", label: "GitHub" },
    { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/francis-mwaniki-378603220/", label: "LinkedIn" },
    { icon: <Twitter size={20} />, url: "https://twitter.com/FRANCIS90776084", label: "Twitter" },
    { icon: <Mail size={20} />, url: "mailto:francis@mitsumidistribution.com", label: "Email" },
  ]

  return (
    <footer className="bg-black text-white py-4 relative text-lg">
      <div className="mx-auto px-1 text-lg">
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
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold mb-2">Site Status</h3>
                <a
                  href="https://stats.uptimerobot.com/Osc0NtZ2dp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <svg width="120" height="40" viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
                    <rect width="120" height="40" rx="3" fill="#1a1a1a" />
                    <text x="10" y="25" fontFamily="Arial, sans-serif" fontSize="14" fill="white">
                      UPTIME
                    </text>
                    <svg x="70" y="10" width="40" height="20">
                      <path
                        d="M0 10 Q5 0, 10 10 T20 10"
                        fill="none"
                        stroke="#ff69b4"
                        strokeWidth="2"
                      >
                        <animate
                          attributeName="d"
                          values="M0 10 Q5 0, 10 10 T20 10;M0 10 Q5 20, 10 10 T20 10;M0 10 Q5 0, 10 10 T20 10"
                          dur="1.5s"
                          repeatCount="indefinite"
                        />
                      </path>
                    </svg>
                  </svg>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </footer>
  )
}