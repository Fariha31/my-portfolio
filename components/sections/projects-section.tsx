"use client"
import { motion } from "framer-motion"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ProjectsSection({
  projects,
}: {
  projects: {
    title: string
    description: string
    image: string
    tech: string[]
    github: string
    live: string
    featured: boolean
  }[]
}) {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Featured Projects</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            A showcase of my recent work and the technologies I've used to bring ideas to life
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                {project.featured && (
                  <div className="inline-block px-3 py-1 bg-accent-blue/10 border border-accent-blue/20 rounded-full">
                    <span className="text-accent-blue text-sm font-medium">Featured Project</span>
                  </div>
                )}

                <h3 className="text-3xl font-bold text-foreground">{project.title}</h3>
                <p className="text-foreground/70 text-lg leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white bg-transparent rounded-lg"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-accent-blue to-accent-green hover:from-accent-green hover:to-accent-orange text-white border-0 rounded-lg"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>

              <div className={`relative group ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/20 to-accent-green/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-card border border-border rounded-2xl overflow-hidden group-hover:border-accent-blue/50 transition-all duration-300">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/projects" passHref>
            <Button
              variant="outline"
              size="lg"
              className="border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white bg-transparent rounded-lg"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
