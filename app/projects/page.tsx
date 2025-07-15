"use client"
import { motion } from "framer-motion"
import { ExternalLink, Github, Linkedin, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/projects"
import Link from "next/link"
import { AnimatedCursor } from "@/components/animated-cursor" // Re-added import
import { Footer } from "@/components/sections/footer"
import ThemeToggle from "@/components/theme-toggle"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function ProjectsPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = ["About", "Services", "Skills", "Projects", "Achievements", "Experience", "Contact"]

  return (
    <>
      <AnimatedCursor /> {/* Re-added component */}
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
        <div className="absolute inset-0 z-0 animate-background-gradient bg-[length:200%_200%] bg-gradient-to-br from-primary-light-bg via-secondary-light-bg to-primary-light-bg dark:from-primary-dark-bg dark:via-secondary-dark-bg dark:to-primary-dark-bg" />
        <div className="relative z-10">
          {/* Navigation */}
          <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
              isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <Link href="/" passHref>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-bold bg-gradient-to-r from-accent-blue to-accent-green bg-clip-text text-transparent cursor-pointer"
                  >
                    FL
                  </motion.div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-foreground/80 hover:text-accent-blue transition-colors duration-300 relative group"
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-blue to-accent-green group-hover:w-full transition-all duration-300" />
                    </motion.button>
                  ))}
                </div>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center space-x-4">
                  <Button variant="ghost" size="sm" className="text-foreground/80 hover:text-accent-blue">
                    <a
                      href="https://github.com/Fariha31"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Profile"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" className="text-foreground/80 hover:text-accent-blue">
                    <a
                      href="https://www.linkedin.com/in/fariha-liaqat-998054193/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white bg-transparent"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Resume
                  </Button>
                  <ThemeToggle />
                </div>

                {/* Mobile Menu Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="md:hidden text-foreground/80"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </Button>
              </div>

              {/* Mobile Menu */}
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-background/95 backdrop-blur-md border-t border-border py-4 overflow-y-auto z-40"
                >
                  <div className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <button
                        key={item}
                        onClick={() => scrollToSection(item.toLowerCase())}
                        className="text-foreground/80 hover:text-accent-blue transition-colors duration-300 text-left px-4 py-2"
                      >
                        {item}
                      </button>
                    ))}
                    <div className="flex items-center space-x-4 px-4 pt-4 border-t border-border">
                      <Button variant="ghost" size="sm" className="text-foreground/80 hover:text-accent-blue">
                        <a
                          href="https://github.com/Fariha31"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub Profile"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" className="text-foreground/80 hover:text-accent-blue">
                        <a
                          href="https://www.linkedin.com/in/fariha-liaqat-998054193/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn Profile"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white bg-transparent"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Resume
                      </Button>
                      <ThemeToggle />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </nav>

          <section className="py-20 px-4 sm:px-6 lg:px-8 pt-32">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">All My Projects</h1>
                <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                  Explore a comprehensive collection of my work, showcasing diverse technologies and solutions.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((project) => project.featured) // This line filters for featured projects
                  .map((project, index) => (
                    <motion.div
                      key={project.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="bg-card border border-border rounded-2xl p-6 hover:border-accent-blue/50 transition-all duration-300 h-full flex flex-col">
                        <div className="relative rounded-lg overflow-hidden mb-6">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                        <p className="text-foreground/70 text-base leading-relaxed flex-grow mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm border border-border"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center space-x-4 mt-auto">
                          <Link href={`/projects/${project.slug}`} passHref>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white bg-transparent rounded-lg"
                            >
                              View Details
                            </Button>
                          </Link>
                          <a
                            href={project.github || "https://github.com/Fariha31"}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-foreground/80 hover:text-accent-blue"
                              aria-label={`GitHub repository for ${project.title}`}
                            >
                              <Github className="w-5 h-5" />
                            </Button>
                          </a>
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-foreground/80 hover:text-accent-blue"
                              aria-label={`Live demo for ${project.title}`}
                            >
                              <ExternalLink className="w-5 h-5" />
                            </Button>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </>
  )
}
