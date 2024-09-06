"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/experience', label: 'Experience' },
    { href: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
    open: { opacity: 1, scale: 1, transition: { duration: 0.2 } }
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0  right-0 z-50 ${scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md' : 'bg-transparent'} transition-all duration-300`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div variants={itemVariants}>
            <Link href="/" className="text-2xl font-bold text-purple-500 hover:text-purple-600 transition-colors">
              Francis Mwaniki
            </Link>
          </motion.div>
          
          {/* Mobile menu button */}
          <motion.div className="md:hidden" variants={itemVariants}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isOpen ? 'close' : 'open'}
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.div>
              </AnimatePresence>
            </Button>
          </motion.div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.div key={item.href} variants={itemVariants}>
                <Link href={item.href} className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-purple-500 hover:bg-purple-50 dark:text-gray-300 dark:hover:text-purple-400 dark:hover:bg-gray-800 transition-all duration-300">
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div variants={itemVariants}>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="bg-purple-100 dark:bg-purple-900 text-purple-500 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800 transition-all duration-300"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={theme === 'dark' ? 'dark' : 'light'}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === 'dark' ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
                  </motion.div>
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="md:hidden bg-white dark:bg-gray-900 rounded-b-lg shadow-lg"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <motion.div
                    key={item.href}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-500 hover:bg-purple-50 dark:text-gray-300 dark:hover:text-purple-400 dark:hover:bg-gray-800 transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={itemVariants}>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setTheme(theme === 'dark' ? 'light' : 'dark');
                      setIsOpen(false);
                    }}
                    className="w-full mt-2 bg-purple-100 dark:bg-purple-900 text-purple-500 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800 transition-all duration-300"
                  >
                    {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;