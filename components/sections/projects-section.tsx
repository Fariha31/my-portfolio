"use client"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-0 bg-white dark:bg-slate-800 shadow-lg rounded-lg">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 space-x-4">
                    <Button size="sm" variant="secondary" className="opacity-90 rounded-lg">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" variant="secondary" className="opacity-90 rounded-lg">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900 dark:text-white">{project.title}</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs rounded-lg">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
