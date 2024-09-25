"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useToast } from "@/hooks/use-toast"

const EnhancedContactForm = () => {
  const [formData, setFormData] = useState({ username: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your message has been sent.",
        })
        setFormData({ username: '', email: '', message: '' })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative  flex items-center justify-center  p-1 overflow-hidden">
      <div className="wave-container">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="relative z-10 space-y-4 w-full max-w-md mx-auto p-2 bg-white bg-opacity-80 backdrop-blur-md rounded-lg shadow-xl dark:bg-gray-800 dark:bg-opacity-80 dark:text-gray-100 overflow-hidden"
      >
        <h2 className="text-2xl font-bold text-center text-pink-600 dark:text-pink-400 mb-1">Contact Me</h2>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            required
            className="w-full border-pink-300 focus:border-pink-500 focus:ring-pink-500 dark:border-pink-700 dark:focus:border-pink-500 dark:focus:ring-pink-500"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full border-pink-300 focus:border-pink-500 focus:ring-pink-500 dark:border-pink-700 dark:focus:border-pink-500 dark:focus:ring-pink-500"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            required
            rows={4}
            className="w-full border-pink-300 focus:border-pink-500 focus:ring-pink-500 dark:border-pink-700 dark:focus:border-pink-500 dark:focus:ring-pink-500"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-pink-600 hover:bg-pink-700 text-white dark:bg-pink-700 dark:hover:bg-pink-600"
          >
            {isSubmitting ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : null}
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </motion.div>
      </motion.form>
     
    </div>
  )
}

export default EnhancedContactForm