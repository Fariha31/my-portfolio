"use client"
import { AnimatedCursor } from "@/components/animated-cursor" // Re-added import
import HeroSection from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ServicesSection } from "@/components/sections/services-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { AchievementsSection } from "@/components/sections/achievements-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/sections/footer"
import { projects } from "@/data/projects"
import {
  Code,
  Palette,
  Zap,
  Users,
  Monitor,
  Smartphone,
  Database,
  Globe,
  Rocket,
  Settings,
  TrendingUp,
  Award,
  Target,
  Shield,
  Figma,
  GitBranch,
  Type,
  LayoutDashboard,
  Globe2,
  Sparkles,
  Bug,
} from "lucide-react"

const skills = [
  { name: "React", icon: <Code className="w-8 h-8 text-accent-blue" /> },
  { name: "Vue.js", icon: <Palette className="w-8 h-8 text-accent-green" /> },
  { name: "Next.js", icon: <Zap className="w-8 h-8 text-accent-orange" /> },
  { name: "TypeScript", icon: <Type className="w-8 h-8 text-accent-blue" /> },
  { name: "Tailwind CSS", icon: <LayoutDashboard className="w-8 h-8 text-accent-green" /> },
  { name: "Framer Motion", icon: <Sparkles className="w-8 h-8 text-accent-orange" /> },
  { name: "Git", icon: <GitBranch className="w-8 h-8 text-accent-blue" /> },
  { name: "Figma", icon: <Figma className="w-8 h-8 text-accent-green" /> },
  { name: "i18n", icon: <Globe2 className="w-8 h-8 text-accent-orange" /> },
  { name: "Debugging", icon: <Bug className="w-8 h-8 text-accent-blue" /> },
]

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    description: "Building responsive, modern web applications using React, Vue.js, and Next.js",
    features: ["React & Vue.js", "Next.js", "TypeScript", "Responsive Design"],
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Creating mobile-optimized experiences that work seamlessly across all devices",
    features: ["Mobile Optimization", "Cross-browser Testing", "Progressive Web Apps", "Touch Interfaces"],
  },
  {
    icon: Database,
    title: "Frontend Architecture",
    description: "Designing scalable frontend architectures with modern state management",
    features: ["State Management", "Component Libraries", "Code Splitting", "Performance Optimization"],
  },
  {
    icon: Globe,
    title: "Internationalization",
    description: "Developing multilingual applications with proper localization support",
    features: ["Multi-language Support", "RTL Support", "Cultural Adaptation", "Dynamic Content"],
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description: "Optimizing applications for speed, SEO, and better user experience",
    features: ["Core Web Vitals", "SEO Optimization", "Bundle Optimization", "Lazy Loading"],
  },
  {
    icon: Settings,
    title: "Development Workflow",
    description: "Implementing modern development practices and CI/CD workflows",
    features: ["Git Workflows", "Testing", "Code Reviews", "Deployment Automation"],
  },
]

const achievements = [
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description: "Reduced page load time by 40% through image optimization and code splitting",
    metric: "40%",
    color: "from-accent-blue to-accent-green",
  },
  {
    icon: Shield,
    title: "Cross-browser Compatibility",
    description: "Resolved 95% of browser compatibility issues across Chrome, Firefox, Safari, and Edge",
    metric: "95%",
    color: "from-accent-green to-accent-orange",
  },
  {
    icon: Award,
    title: "Code Quality Improvement",
    description: "Improved code maintainability by implementing TypeScript and modern development practices",
    metric: "60%",
    color: "from-accent-orange to-accent-blue",
  },
  {
    icon: Users,
    title: "User Experience Enhancement",
    description: "Increased user engagement by 35% through responsive design and accessibility improvements",
    metric: "35%",
    color: "from-accent-blue to-accent-green",
  },
  {
    icon: Zap,
    title: "Development Efficiency",
    description: "Accelerated development process by 50% using component libraries and automated workflows",
    metric: "50%",
    color: "from-accent-green to-accent-orange",
  },
  {
    icon: Target,
    title: "Bug Resolution",
    description: "Maintained 99% uptime by proactive bug fixing and comprehensive testing strategies",
    metric: "99%",
    color: "from-accent-orange to-accent-blue",
  },
  {
    icon: Bug,
    title: "Browser Compatibility & Privacy",
    description:
      "Resolved critical bugs related to Brave browser's cookie blocking, ensuring seamless user experience across privacy-focused browsers.",
    metric: "100%", // Assuming full resolution
    color: "from-accent-blue to-accent-green",
  },
  {
    icon: Code,
    title: "Codebase Refinement",
    description:
      "Identified and replaced conflicting CSS classes, enhancing cross-browser consistency and reducing rendering issues.",
    metric: "70%", // Changed from "Improved Stability" to "70%"
    color: "from-accent-green to-accent-orange",
  },
]

const experience = [
  {
    year: "2024 - Present",
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    location: "Remote",
    description:
      "Leading frontend development for enterprise web applications, mentoring junior developers, and implementing modern development practices.",
    achievements: [
      "Led a team of 4 developers in rebuilding the main product dashboard",
      "Implemented micro-frontend architecture reducing bundle size by 30%",
      "Established code review processes and testing standards",
    ],
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Git"],
  },
  {
    year: "2022 - 2024",
    title: "Frontend Developer",
    company: "Digital Agency Pro",
    location: "Hybrid",
    description:
      "Developed responsive websites and web applications for various clients, specializing in React and Vue.js implementations.",
    achievements: [
      "Delivered 15+ client projects with 100% on-time completion rate",
      "Improved client satisfaction scores by 25% through better UX design",
      "Reduced development time by 40% through component library creation",
    ],
    tools: ["Vue.js", "React", "SCSS", "JavaScript", "Figma"],
  },
  {
    year: "2021 - 2022",
    title: "Junior Frontend Developer",
    company: "StartUp Innovations",
    location: "On-site",
    description:
      "Started career building user interfaces, learning modern frameworks, and contributing to agile development teams.",
    achievements: [
      "Contributed to 3 major product releases",
      "Improved page load speeds by 35% through optimization",
      "Collaborated with design team to implement pixel-perfect UIs",
    ],
    tools: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"],
  },
]

export default function Portfolio() {
  return (
    <>
      <AnimatedCursor /> {/* Re-added component */}
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
        <div className="absolute inset-0 z-0 animate-background-gradient bg-[length:200%_200%] bg-gradient-to-br from-primary-light-bg via-secondary-light-bg to-primary-light-bg dark:from-primary-dark-bg dark:via-secondary-dark-bg dark:to-primary-dark-bg" />
        <div className="relative z-10">
          <HeroSection />
          <AboutSection />
          <ServicesSection services={services} />
          <SkillsSection skills={skills} />
          <ProjectsSection projects={projects} />
          <AchievementsSection achievements={achievements} />
          <ExperienceSection experience={experience} />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </>
  )
}
