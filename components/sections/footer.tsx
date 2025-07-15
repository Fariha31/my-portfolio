"use client"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-foreground/70 leading-relaxed">
              Frontend Developer passionate about creating beautiful, functional web experiences that make a difference.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Services", "Projects", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const section = document.getElementById(link.toLowerCase())
                    if (section) section.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="block text-foreground/70 hover:text-accent-blue transition-colors duration-300"
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-secondary hover:bg-accent-blue rounded-full flex items-center justify-center transition-colors duration-300 group"
              >
                <Github className="w-5 h-5 text-foreground/70 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary hover:bg-accent-blue rounded-full flex items-center justify-center transition-colors duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-foreground/70 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary hover:bg-accent-blue rounded-full flex items-center justify-center transition-colors duration-300 group"
              >
                <Twitter className="w-5 h-5 text-foreground/70 group-hover:text-white" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border text-center"
        >
          <p className="text-foreground/70 flex items-center justify-center space-x-2">
            <span>© 2025 Fariha Liaqat. Made with</span>
            <Heart className="w-4 h-4 text-accent-green fill-current" />
            <span>using Next.js & Tailwind CSS</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
