interface CommandResult {
  output: string
  newPath?: string
}

interface FileSystemNode {
  type: "file" | "directory"
  content?: string
  children?: { [key: string]: FileSystemNode }
}

export class TerminalSystem {
  private fileSystem: { [key: string]: FileSystemNode }

  constructor() {
    this.fileSystem = {
      "/": {
        type: "directory",
        children: {
          "about.txt": {
            type: "file",
            content: `Francis Mwaniki - Software Engineer & Full Stack Developer

Hi! I'm Francis Mwaniki, a passionate Software Engineer and Full Stack Developer 
based in Nairobi, Kenya. I specialize in translating innovative ideas into 
high-quality, functional code.

Currently working at Mitsumi Distribution, I collaborate with cross-functional 
teams to deliver exceptional digital experiences. My expertise spans across 
modern web technologies including React, Next.js, Vue.js, and various backend 
frameworks.

Key Areas:
• Marketing Collaboration - Working with marketing teams to enhance client brands
• Code Implementation - Turning ideas into functional applications  
• Web Application Development - Building robust web solutions
• Technical Optimization - Ensuring optimal performance and scalability
• Code Review - Maintaining high code quality standards

I'm passionate about creating scalable solutions and staying up-to-date with 
the latest technologies in the ever-evolving world of software development.`,
          },
          "contact.txt": {
            type: "file",
            content: `Contact Information:

📧 Email: francis@mitsumidistribution.com
📱 Phone: +254 769 982 944

📍 Address:
   P.O.Box: 32735
   12th Floor, Mitsumi Business Park
   Muthithi Road, Westlands
   Nairobi, Kenya

🔗 Social Links:
   GitHub: github.com/francis-mwaniki
   LinkedIn: linkedin.com/in/francis-mwaniki
   Portfolio: francis-portfolio.vercel.app

Feel free to reach out for collaborations, opportunities, or just to say hello!`,
          },
          "skills.json": {
            type: "file",
            content: `{
  "frontend": [
    "Vue.js (Nuxt.js)",
    "React (Next.js)", 
    "TailwindCSS",
    "TypeScript",
    "JavaScript"
  ],
  "backend": [
    "Express.js",
    "NestJS",
    "Python (Flask, Django)",
    "Node.js"
  ],
  "database": [
    "MongoDB",
    "PostgreSQL",
    "Supabase",
    "Prisma ORM"
  ],
  "tools": [
    "Git & GitHub",
    "Docker",
    "AWS",
    "CI/CD",
    "Vercel"
  ],
  "currently_learning": [
    "Rust",
    "GraphQL",
    "Microservices Architecture"
  ]
}`,
          },
          experience: {
            type: "directory",
            children: {
              "current.txt": {
                type: "file",
                content: `🏢 Software Engineer - Mitsumi Distribution (Present)

Currently working on developing and maintaining software solutions for 
enterprise clients. Key responsibilities include:

• Collaborating with cross-functional teams to deliver high-quality products
• Implementing marketing collaboration tools for client brand enhancement
• Developing and maintaining web applications to support client strategies
• Ensuring technical feasibility of UI/UX designs
• Optimizing applications for maximum speed and scalability
• Participating in code reviews and providing constructive feedback
• Staying up-to-date with latest technologies and best practices

🛠️ Technologies: React, Next.js, Node.js, AWS, Docker, CI/CD`,
              },
              "beannsoft.txt": {
                type: "file",
                content: `🏢 Software Developer - Beannsoft Limited (May 2023 - Dec 2023)

Worked as a software developer focusing on frontend development and 
user interface engineering.

Key Achievements:
• Engineered and maintained user interfaces and components
• Quickly adapted to new technologies and delivered optimal results within a month
• Gained valuable experience in agile development methodologies
• Collaborated with design teams to implement pixel-perfect interfaces
• Contributed to improving development workflows and best practices

🛠️ Technologies: Vue.js, JavaScript, CSS, Git, Agile Methodologies

This role prepared me for future challenges in the tech industry and 
strengthened my foundation in modern web development.`,
              },
              "acewears.txt": {
                type: "file",
                content: `🏢 Fullstack Developer - Acewears (July 2023 - Dec 2023)

Developed a complete e-commerce solution from backend to frontend.

Key Responsibilities:
• Built robust backend using NestJS with comprehensive API development
• Implemented server-side logic and RESTful APIs for e-commerce functionality
• Engineered responsive frontend using NuxtJS with modern shop layout
• Created user-friendly interfaces for product browsing and purchasing
• Utilized Prisma ORM for effective database management with PostgreSQL
• Implemented authentication, payment processing, and order management
• Optimized database queries and application performance

🛠️ Technologies: NestJS, NuxtJS, Prisma, PostgreSQL, TypeScript

This project showcased my ability to handle full-stack development 
and deliver complete solutions from concept to deployment.`,
              },
            },
          },
          projects: {
            type: "directory",
            children: {
              "frachat.md": {
                type: "file",
                content: `🤖 Frachat

📅 Status: May 2025  
🔗 URL: https://frachat.vercel.app/

## Description
Build and deploy AI-powered customer support with embeddable chat widgets. 
Upload your docs, get instant answers, and track everything in one intelligent dashboard.

## Technologies
• Next.js - React framework for production
• Tailwind CSS - Utility-first CSS framework
• TypeScript - Type-safe JavaScript
• Gemini API - AI-powered responses

## Impact
Revolutionizing customer support with AI-powered chat widgets that provide 
instant, accurate responses based on uploaded documentation.`,
              },
              "ai-events.md": {
                type: "file",
                content: `🎉 AI Events UI App

📅 Status: June 2025  
🔗 URL: https://ai-powered-events-v1.vercel.app/

## Description
An AI‑powered event discovery dashboard showcasing clean card layouts of upcoming events, 
search/filter capabilities, and immersive hero banners.

## Technologies
• React - JavaScript library for building user interfaces
• Tailwind CSS - Utility-first CSS framework
• TypeScript - Type-safe JavaScript
• OpenAI API - AI-powered event recommendations

## Impact
Enhancing event discovery with AI-powered recommendations and intuitive 
user interface design for efficient browsing.`,
              },
              "job-scraper.md": {
                type: "file",
                content: `💼 Job Board Scrapper

📅 Status: July 2025  
🔗 URL: https://auto-job-board-mu.vercel.app/

## Description
A scraping dashboard with a list view of job postings, tagged by role, company, and date. 
Includes filterable tables, pagination controls, and clear call‑to‑action buttons.

## Technologies
• Next.js - Full-stack React framework
• Puppeteer - Web scraping automation
• Tailwind CSS - Styling framework
• TypeScript - Type-safe JavaScript

## Impact
Streamlining job search with automated scraping and intelligent filtering 
for better job discovery experience.`,
              },
              "video-paywall.md": {
                type: "file",
                content: `🎬 Video Paywall

📅 Status: August 2025  
🔗 URL: https://videopaywall.vercel.app/

## Description
A premium video player with a clean overlay paywall: users see a blurred preview 
and a bold subscribe button. Features responsive grid and smooth animations.

## Technologies
• Next.js - Full-stack React framework
• Tailwind CSS - Styling framework
• Stripe - Payment processing
• TypeScript - Type-safe JavaScript

## Impact
Enabling content creators to monetize video content with seamless 
paywall integration and smooth user conversion flows.`,
              },
              "mindfulness-app.md": {
                type: "file",
                content: `🧘 Mindfulness App

📅 Status: March 2025 - Ongoing  
🔗 URL: https://m-mindfull.vercel.app/

## Description
A web application designed to promote mindfulness and mental well-being, 
featuring guided meditations and relaxation techniques.

## Features
• Guided meditation sessions
• Relaxation techniques and breathing exercises
• Progress tracking and personal insights
• Responsive design for all devices
• Smooth animations and calming UI

## Technologies
• Next.js - React framework for production
• Tailwind CSS - Utility-first CSS framework
• Framer Motion - Animation library
• TypeScript - Type-safe JavaScript
• Prisma - Database ORM
• PostgreSQL - Relational database

## Impact
Helping users develop mindfulness practices and improve mental well-being 
through technology-assisted meditation and relaxation techniques.`,
              },
              "cv-builder.md": {
                type: "file",
                content: `📄 Modern CV Builder

📅 Status: October 2024 - Present  
🔗 URL: https://cv-pro-builders.vercel.app/

## Description
A web application designed to assist job seekers in creating modern and 
professional resumes with AI-powered suggestions.

## Features
• Modern resume templates
• AI-powered content suggestions using Gemini API
• Real-time preview and editing
• Export to PDF functionality
• Responsive design for all devices

## Technologies
• Next.js - React framework
• TailwindCSS - Styling
• PostgreSQL - Database
• Gemini API - AI content generation

## Impact
Helping job seekers create professional resumes that stand out in 
today's competitive job market.`,
              },
              "auto-invoice.md": {
                type: "file",
                content: `🧾 Auto Invoice API

📅 Status: October 2024 - Present  
🔗 URL: https://auto-invoice-api.netlify.app/

## Description
Conceptual web application focused on automating the process of generating 
invoices for clients with smart templates and automation features.

## Features
• Automated invoice generation
• Client management system
• Template customization
• Payment tracking
• Email notifications

## Technologies
• Next.js - Full-stack React framework
• Prisma - Database ORM
• PostgreSQL - Database
• TailwindCSS - Styling

## Impact
Streamlining invoice management for small businesses and freelancers, 
reducing manual work and improving cash flow tracking.`,
              },
              "transcription-app.md": {
                type: "file",
                content: `🎙️ Next.js Transcription App

📅 Status: December 2023 - January 2024  
🔗 URL: https://next-transcriber.vercel.app/

## Description
A web application focused on converting audio or video recordings into 
text transcripts using Next.js and speech-to-text APIs.

## Features
• Audio/video file upload
• Real-time transcription
• Text editing capabilities
• Export transcripts
• Multiple format support

## Technologies
• Next.js - React framework
• React - JavaScript library
• TypeScript - Type-safe JavaScript
• Speech-to-Text API - Audio transcription

## Impact
Simplifying the transcription process for content creators, journalists, 
and professionals who need accurate text from audio/video content.`,
              },
            },
          },
        },
      },
    }
  }

  // Get all available paths for autocomplete
  getAllPaths(currentPath: string): string[] {
    const paths: string[] = []
    const node = this.getNode(currentPath)

    if (node && node.type === "directory" && node.children) {
      Object.keys(node.children).forEach((name) => {
        paths.push(name)
        if (node.children![name].type === "directory") {
          paths.push(name + "/")
        }
      })
    }

    return paths
  }

  // Get suggestions for autocomplete
  getSuggestions(input: string, currentPath: string): string[] {
    const parts = input.trim().split(" ")
    const command = parts[0].toLowerCase()
    const args = parts.slice(1)

    // Base commands
    const baseCommands = ["help", "ls", "cd", "cat", "tree", "pwd", "whoami", "clear", "head", "tail", "ui"]

    if (parts.length === 1) {
      // Suggest commands
      return baseCommands.filter((cmd) => cmd.startsWith(command))
    } else if (
      parts.length === 2 &&
      (command === "cd" || command === "ls" || command === "cat" || command === "head" || command === "tail")
    ) {
      // Suggest files/directories for file operations
      const availablePaths = this.getAllPaths(currentPath)
      const currentArg = args[0] || ""
      return availablePaths
        .filter((path) => path.toLowerCase().startsWith(currentArg.toLowerCase()))
        .map((path) => `${command} ${path}`)
    }

    return []
  }

  executeCommand(command: string, currentPath: string): CommandResult {
    const parts = command.split(" ")
    const cmd = parts[0].toLowerCase()
    const args = parts.slice(1)

    switch (cmd) {
      case "help":
        return {
          output: `📋 Available Commands:

Navigation:
  ls [path]     - List files and directories
  cd <path>     - Change directory
  pwd           - Show current directory
  tree          - Show directory structure

File Operations:
  cat <file>    - Display file contents
  head <file>   - Show first 10 lines
  tail <file>   - Show last 10 lines

System:
  help          - Show this help message
  clear         - Clear terminal screen
  whoami        - Display user information
  ui            - Switch to graphical UI mode

💡 Quick Start:
  ls            - See available files
  cd projects   - Go to projects folder
  cat about.txt - Learn about me
  
Try: cd projects → ls → cat frachat.md`,
        }

      case "ls":
        return this.listDirectory(args[0] || currentPath, currentPath)

      case "cd":
        return this.changeDirectory(args[0] || "/", currentPath)

      case "pwd":
        return { output: currentPath }

      case "cat":
        return this.displayFile(args[0], currentPath)

      case "tree":
        return { output: this.generateTree(currentPath) }

      case "whoami":
        return { output: "👨‍💻 Francis Mwaniki - Software Engineer & Full Stack Developer" }

      case "clear":
        return { output: "" }

      case "head":
        return this.headFile(args[0], currentPath)

      case "tail":
        return this.tailFile(args[0], currentPath)

      case "ui":
        return { output: "🎨 Switching to UI mode... Click the 'UI Mode' button in the top right corner." }

      default:
        return { output: `❌ Command not found: '${cmd}'\nType 'help' for available commands.` }
    }
  }

  private getNode(path: string): FileSystemNode | null {
    const parts = path.split("/").filter((p) => p)
    let current = this.fileSystem["/"]

    for (const part of parts) {
      if (current.children && current.children[part]) {
        current = current.children[part]
      } else {
        return null
      }
    }

    return current
  }

  private resolvePath(path: string, currentPath: string): string {
    if (path.startsWith("/")) {
      return path
    }

    if (path === "..") {
      const parts = currentPath.split("/").filter((p) => p)
      parts.pop()
      return "/" + parts.join("/")
    }

    if (path === "." || path === "") {
      return currentPath
    }

    return currentPath === "/" ? `/${path}` : `${currentPath}/${path}`
  }

  private listDirectory(path: string, currentPath: string): CommandResult {
    const resolvedPath = this.resolvePath(path, currentPath)
    const node = this.getNode(resolvedPath)

    if (!node) {
      return { output: `❌ ls: cannot access '${path}': No such file or directory` }
    }

    if (node.type !== "directory") {
      return { output: path }
    }

    if (!node.children) {
      return { output: "📁 Empty directory" }
    }

    const items = Object.entries(node.children)
      .map(([name, child]) => {
        if (child.type === "directory") {
          return `📁 ${name}/`
        }
        return `📄 ${name}`
      })
      .sort()

    return { output: items.join("\n") }
  }

  private changeDirectory(path: string, currentPath: string): CommandResult {
    const resolvedPath = this.resolvePath(path, currentPath)
    const node = this.getNode(resolvedPath)

    if (!node) {
      return { output: `❌ cd: no such file or directory: ${path}` }
    }

    if (node.type !== "directory") {
      return { output: `❌ cd: not a directory: ${path}` }
    }

    return { output: `📁 Changed to: ${resolvedPath}`, newPath: resolvedPath || "/" }
  }

  private displayFile(filename: string, currentPath: string): CommandResult {
    if (!filename) {
      return { output: "❌ cat: missing file operand" }
    }

    const resolvedPath = this.resolvePath(filename, currentPath)
    const node = this.getNode(resolvedPath)

    if (!node) {
      return { output: `❌ cat: ${filename}: No such file or directory` }
    }

    if (node.type !== "file") {
      return { output: `❌ cat: ${filename}: Is a directory` }
    }

    return { output: node.content || "" }
  }

  private generateTree(path: string, prefix = "", isLast = true): string {
    const node = this.getNode(path)
    if (!node || node.type !== "directory" || !node.children) {
      return ""
    }

    let result = ""
    const entries = Object.entries(node.children)

    entries.forEach(([name, child], index) => {
      const isLastItem = index === entries.length - 1
      const currentPrefix = prefix + (isLast ? "    " : "│   ")
      const connector = isLastItem ? "└── " : "├── "

      if (child.type === "directory") {
        result += `${prefix}${connector}📁 ${name}/\n`
        result += this.generateTree(path === "/" ? `/${name}` : `${path}/${name}`, currentPrefix, isLastItem)
      } else {
        result += `${prefix}${connector}📄 ${name}\n`
      }
    })

    return result
  }

  private headFile(filename: string, currentPath: string): CommandResult {
    const fileResult = this.displayFile(filename, currentPath)
    if (fileResult.output.startsWith("❌")) {
      return { output: fileResult.output.replace("cat:", "head:") }
    }

    const lines = fileResult.output.split("\n").slice(0, 10)
    return { output: lines.join("\n") }
  }

  private tailFile(filename: string, currentPath: string): CommandResult {
    const fileResult = this.displayFile(filename, currentPath)
    if (fileResult.output.startsWith("❌")) {
      return { output: fileResult.output.replace("cat:", "tail:") }
    }

    const lines = fileResult.output.split("\n").slice(-10)
    return { output: lines.join("\n") }
  }
}
