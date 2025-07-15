"use client"
import { motion } from "framer-motion"
import { Github, Linkedin, Download, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import TypewriterEffect from "@/components/typewriter-effect"
import ThemeToggle from "@/components/theme-toggle"

const HeroSection = () => {
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

  const navItems = [] // Removed all navigation items

  const typewriterWords = [
    { text: "Frontend", className: "text-foreground/80" },
    { text: "Developer", className: "text-foreground/80" },
    { text: "Available", className: "text-foreground/60" },
    { text: "for", className: "text-foreground/60" },
    { text: "new", className: "text-foreground/60" },
    { text: "opportunities", className: "text-foreground/60" },
  ]

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-accent-blue to-accent-green bg-clip-text text-transparent"
            >
              FL
            </motion.div>

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
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-foreground/80 hover:text-accent-blue">
                <Linkedin className="w-5 h-5" />
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
              className="md:hidden bg-background/95 backdrop-blur-md border-t border-border py-4"
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
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-foreground/80 hover:text-accent-blue">
                    <Linkedin className="w-5 h-5" />
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

      {/* Hero Content */}
      <div className="relative z-10 flex items-center flex-1 px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-center lg:text-left"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block px-4 py-2 bg-accent-blue/10 border border-accent-blue/20 rounded-full"
                >
                  <span className="text-accent-blue text-sm font-medium">👋 Hello, I'm</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl lg:text-7xl font-bold leading-tight"
                >
                  <span className="bg-gradient-to-r from-accent-blue via-accent-green to-accent-orange bg-clip-text text-transparent">
                    Fariha Liaqat
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-2"
                >
                  <TypewriterEffect words={typewriterWords} className="text-2xl lg:text-3xl font-semibold" />
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-lg text-foreground/70 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              >
                Passionate frontend developer with 3+ years of experience crafting beautiful, responsive web
                applications using modern technologies and best practices.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start"
              >
                <Button
                  onClick={() => scrollToSection("projects")}
                  size="lg"
                  className="bg-gradient-to-r from-accent-blue to-accent-green hover:from-accent-green hover:to-accent-orange text-white border-0 rounded-lg transition-all duration-300"
                >
                  View My Work
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  size="lg"
                  className="border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white bg-transparent rounded-lg transition-all duration-300"
                >
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative flex justify-center lg:justify-end mt-8 lg:mt-0"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-accent-blue/20 to-accent-green/20 rounded-full blur-2xl"
                />
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-accent-blue/30">
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="Fariha Liaqat"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
