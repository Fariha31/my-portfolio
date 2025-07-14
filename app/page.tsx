"use client"
import { useScroll, useTransform } from "framer-motion"
import { AnimatedCursor } from "@/components/animated-cursor"
import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { AchievementsSection } from "@/components/sections/achievements-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/sections/footer"

const skills = [
  { name: "React", icon: "⚛️" },
  { name: "Vue.js", icon: "💚" },
  { name: "Next.js", icon: "▲" },
  { name: "JavaScript", icon: "🟨" },
  { name: "TypeScript", icon: "🔷" },
  { name: "HTML5", icon: "🧡" },
  { name: "CSS3", icon: "🔵" },
  { name: "SCSS", icon: "🌸" },
  { name: "Tailwind", icon: "💨" },
  { name: "jQuery", icon: "💙" },
  { name: "Figma", icon: "🎨" },
  { name: "Adobe XD", icon: "🟣" },
  { name: "Framer Motion", icon: "🎭" },
  { name: "Git", icon: "📝" },
  { name: "npm", icon: "📦" },
]

const services = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and interactive web applications using modern frameworks like React, Vue.js, and Next.js.",
    icon: "💻",
  },
  {
    title: "UI/UX Implementation",
    description: "Converting designs from Figma and Adobe XD into pixel-perfect, responsive web interfaces.",
    icon: "🎨",
  },
  {
    title: "Dashboard Development",
    description: "Creating complex dashboards and admin panels with data visualization and real-time updates.",
    icon: "📊",
  },
  {
    title: "Multilingual Web Apps",
    description: "Developing internationalized (i18n) applications supporting multiple languages and locales.",
    icon: "🌍",
  },
  {
    title: "Performance Optimization",
    description: "Optimizing web applications for speed, SEO, and better user experience across all devices.",
    icon: "⚡",
  },
  {
    title: "Agile Development",
    description: "Working in agile environments with continuous integration and collaborative development practices.",
    icon: "🔄",
  },
]

const projects = [
  {
    title: "E-commerce Dashboard",
    description:
      "A comprehensive admin dashboard for managing products, orders, and analytics with real-time data visualization.",
    tech: ["React", "Next.js", "Tailwind CSS", "Chart.js"],
    github: "#",
    live: "#",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Multilingual Travel App",
    description: "A travel booking platform supporting 12 languages with dynamic content and currency conversion.",
    tech: ["Vue.js", "i18n", "SCSS", "REST API"],
    github: "#",
    live: "#",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Corporate Website",
    description: "A modern corporate website with smooth animations, contact forms, and CMS integration.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "Strapi"],
    github: "#",
    live: "#",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Real-time Chat App",
    description: "A real-time messaging application with file sharing, emoji support, and user presence indicators.",
    tech: ["React", "Socket.io", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
    image: "/placeholder.svg?height=200&width=300",
  },
]

const experience = [
  {
    year: "2024 - Present",
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    description:
      "Leading frontend development for enterprise web applications, mentoring junior developers, and implementing modern development practices.",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Git"],
  },
  {
    year: "2022 - 2024",
    title: "Frontend Developer",
    company: "Digital Agency Pro",
    description:
      "Developed responsive websites and web applications for various clients, specializing in React and Vue.js implementations.",
    tools: ["Vue.js", "React", "SCSS", "JavaScript", "Figma"],
  },
  {
    year: "2021 - 2022",
    title: "Junior Frontend Developer",
    company: "StartUp Innovations",
    description:
      "Started career building user interfaces, learning modern frameworks, and contributing to agile development teams.",
    tools: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"],
  },
]

const achievements = [
  {
    title: "Performance Optimization",
    description: "Reduced page load time by 40% through image optimization and code splitting",
    icon: "⚡",
    metric: "40%",
  },
  {
    title: "Cross-browser Compatibility",
    description: "Resolved 95% of browser compatibility issues across Chrome, Firefox, Safari, and Edge",
    icon: "🌐",
    metric: "95%",
  },
  {
    title: "Code Quality Improvement",
    description: "Improved code maintainability by implementing TypeScript and modern development practices",
    icon: "🔧",
    metric: "60%",
  },
  {
    title: "User Experience Enhancement",
    description: "Increased user engagement by 35% through responsive design and accessibility improvements",
    icon: "👥",
    metric: "35%",
  },
  {
    title: "Development Efficiency",
    description: "Accelerated development process by 50% using component libraries and automated workflows",
    icon: "🚀",
    metric: "50%",
  },
  {
    title: "Bug Resolution",
    description: "Maintained 99% uptime by proactive bug fixing and comprehensive testing strategies",
    icon: "🐛",
    metric: "99%",
  },
]

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <>
      <AnimatedCursor />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-500">
        <HeroSection />
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 via-blue-100/20 to-pink-100/30 dark:from-purple-900/20 dark:via-blue-900/10 dark:to-pink-900/20" />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl" />
          <ServicesSection services={services} />
        </div>
        <SkillsSection skills={skills} />
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/30 via-purple-100/20 to-blue-100/30 dark:from-indigo-900/20 dark:via-purple-900/10 dark:to-blue-900/20" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-pink-400/10 to-orange-600/10 rounded-full blur-3xl" />
          <ProjectsSection projects={projects} />
        </div>
        <AchievementsSection achievements={achievements} />
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/30 via-teal-100/20 to-blue-100/30 dark:from-cyan-900/20 dark:via-teal-900/10 dark:to-blue-900/20" />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-bl from-teal-400/10 to-cyan-600/10 rounded-full blur-3xl" />
          <ExperienceSection experience={experience} />
        </div>
        <ContactSection />
        <Footer />
      </div>
    </>
  )
}
