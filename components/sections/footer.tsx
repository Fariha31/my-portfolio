"use client"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className=" text-center"
        >
          <p className="text-foreground/70 flex items-center justify-center space-x-2">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-accent-green fill-current" />
            <span>using Next.js & Tailwind CSS</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
