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
  Shield,
  Figma,
  GitBranch,
  Type,
  LayoutDashboard,
  Globe2,
  Sparkles,
  Bug,
  Github,
} from "lucide-react"

const skills = [
  { name: "HTML", icon: <Code className="w-8 h-8 text-accent-blue" /> },
  { name: "CSS", icon: <Palette className="w-8 h-8 text-accent-green" /> },
  { name: "JavaScript", icon: <Zap className="w-8 h-8 text-accent-orange" /> },
  { name: "TypeScript", icon: <Type className="w-8 h-8 text-accent-blue" /> },
  { name: "React", icon: <Code className="w-8 h-8 text-accent-blue" /> },
  { name: "Vue.js", icon: <Palette className="w-8 h-8 text-accent-green" /> },
  { name: "Next.js", icon: <Zap className="w-8 h-8 text-accent-orange" /> },
  { name: "Tailwind CSS", icon: <LayoutDashboard className="w-8 h-8 text-accent-green" /> },
  { name: "Sass", icon: <Palette className="w-8 h-8 text-accent-orange" /> },
  { name: "Bootstrap", icon: <LayoutDashboard className="w-8 h-8 text-accent-blue" /> },
  { name: "Material UI", icon: <LayoutDashboard className="w-8 h-8 text-accent-green" /> },
  { name: "jQuery", icon: <Code className="w-8 h-8 text-accent-orange" /> },
  { name: "Framer Motion", icon: <Sparkles className="w-8 h-8 text-accent-orange" /> },
  { name: "Git", icon: <GitBranch className="w-8 h-8 text-accent-blue" /> },
  { name: "GitHub", icon: <Github className="w-8 h-8 text-accent-green" /> },
  { name: "Bitbucket", icon: <GitBranch className="w-8 h-8 text-accent-orange" /> },
  { name: "Figma", icon: <Figma className="w-8 h-8 text-accent-green" /> },
  { name: "Adobe XD", icon: <Figma className="w-8 h-8 text-accent-blue" /> }, // Using Figma icon for Adobe XD
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
    title: "Development Efficiency",
    description: "Reduced development time by 30% through streamlined processes and effective collaboration.",
    metric: "30%",
    color: "from-accent-blue to-accent-green",
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description:
      "Optimized website performance, achieving a 30% improvement in page load times and 25% increase in site speed.",
    metric: "30%",
    color: "from-accent-green to-accent-orange",
  },
  {
    icon: Globe,
    title: "SEO & Organic Growth",
    description:
      "Enhanced search engine rankings by applying best SEO practices, leading to a 40% increase in organic traffic.",
    metric: "40%",
    color: "from-accent-orange to-accent-blue",
  },
  {
    icon: Code,
    title: "Code Quality Improvement",
    description: "Improved code quality by 15% through active participation in 100+ code reviews and bug resolution.",
    metric: "15%",
    color: "from-accent-blue to-accent-green",
  },
  {
    icon: Users,
    title: "User & Client Satisfaction",
    description:
      "Boosted user satisfaction by 30% and achieved 80% client satisfaction through enhanced UX and high-quality UI.",
    metric: "30%",
    color: "from-accent-green to-accent-orange",
  },
  {
    icon: Shield,
    title: "Robust Testing Strategies",
    description:
      "Developed and implemented comprehensive unit, integration, and end-to-end testing strategies ensuring high reliability.",
    metric: "99%", // Retaining 99% uptime from previous context for impact
    color: "from-accent-orange to-accent-blue",
  },
  {
    icon: Bug,
    title: "Browser Compatibility & Privacy",
    description:
      "Resolved critical bugs related to Brave browser's cookie blocking, ensuring seamless user experience across privacy-focused browsers.",
    metric: "100%",
    color: "from-accent-blue to-accent-green",
  },
  {
    icon: Settings,
    title: "Agile Workflow & Milestones",
    description:
      "Consistently met project milestones and deadlines by actively engaging in Agile development frameworks.",
    metric: "100%", // Changed from "On-time" to "100%"
    color: "from-accent-green to-accent-orange",
  },
]

const experience = [
  {
    year: "Oct 2021 - Present",
    title: "Frontend Engineer",
    company: "NextBridge Ltd.",
    location: "Pakistan",
    description:
      "As a Frontend Engineer at NextBridge Ltd., I collaborated closely with cross-functional teams including project managers, marketing, and backend developers to align front-end objectives with overall business goals. My role involved implementing robust testing strategies, conducting thorough code reviews, and adhering to best practices to ensure high-quality, clean, and maintainable code. I focused on optimizing web performance and improving search engine rankings by applying best SEO practices. I consistently stayed updated with industry trends and emerging technologies, incorporating innovative solutions to enhance user experience and project outcomes. Operating within an Agile development framework, I actively participated in daily stand-ups, sprint planning sessions, and retrospectives, consistently meeting project milestones and deadlines.",
    achievements: [
      "Reduced development time by 30% through effective collaboration and streamlined front-end objectives.",
      "Developed and implemented robust unit, integration, and end-to-end testing strategies to ensure UI reliability.",
      "Ensured high-quality, clean, and maintainable code through rigorous code reviews and adherence to best practices.",
      "Improved search engine rankings by applying best SEO practices in frontend development.",
      "Incorporated innovative solutions by staying updated with industry trends and emerging technologies, enhancing UX.",
      "Consistently met project milestones and deadlines by actively engaging in Agile development frameworks.",
    ],
    tools: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Git", "JIRA"],
  },
  {
    year: "March 2022 - Aug 2024",
    title: "Frontend Engineer",
    company: "Vteams - NextBridge Ltd.",
    location: "Pakistan",
    description:
      "At Vteams, I was responsible for implementing responsive, user-friendly interfaces and significantly optimizing website performance. I enhanced search engine rankings by applying best SEO practices and seamlessly integrated front-end solutions with RESTful APIs and various backend services to ensure full functionality. A key part of my role involved actively participating in over 100 code reviews, which allowed me to identify and resolve bugs and inconsistencies, thereby improving overall code quality. I also expanded features and refined existing codebases to boost user satisfaction and improve the overall user experience of websites.",
    achievements: [
      "Improved page load times by 25% and enhanced overall performance by implementing responsive, user-friendly interfaces.",
      "Optimized website performance by refining code, optimizing images, and using PageSpeed Insights, resulting in a 30% improvement in page load times and a 25% increase in overall site speed.",
      "Enhanced search engine rankings by applying best SEO practices, leading to a 40% increase in organic traffic and improved visibility.",
      "Integrated front-end solutions with RESTful APIs and backend services to ensure seamless functionality.",
      "Actively participated in 100+ code reviews, improving code quality by 15% through identifying and resolving bugs and inconsistencies.",
      "Expanded features and refined code, boosting user satisfaction by 30% and improving overall user experience.",
    ],
    tools: ["React", "Vue.js", "JavaScript", "HTML", "CSS", "REST API", "PageSpeed Insights", "Webpack"],
  },
  {
    year: "Jan 2021 - March 2022",
    title: "Freelance Frontend Engineer",
    company: "Shadow Rock Ltd.",
    location: "Pakistan",
    description:
      "As a Freelance Frontend Engineer at Shadow Rock Ltd., I led the development of the ZenBench internal user portal from scratch using Vue.js. My focus was on creating pixel-perfect, responsive, and visually engaging websites that significantly enhanced user experience and functionality. I ensured high-quality UI and effective implementation through clean and reusable components, which boosted client satisfaction. I also collaborated effectively in an agile manner with cross-functional teams, actively participating in sprint planning sessions.",
    achievements: [
      "Led the development of the ZenBench internal user portal from scratch using Vue.js.",
      "Created pixel-perfect, responsive, and visually engaging websites, enhancing user experience and functionality.",
      "Boosted client satisfaction to 80% through high-quality UI and effective implementation with clean and reusable components.",
      "Collaborated in an agile manner with cross-functional teams and actively participated in sprint planning.",
    ],
    tools: ["Vue.js", "HTML", "CSS", "JavaScript", "Figma", "JIRA", "Slack", "Trello"],
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
