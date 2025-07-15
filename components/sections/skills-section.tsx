"use client"
import { motion } from "framer-motion"
import type { JSX } from "react"

export function SkillsSection({ skills }: { skills: { name: string; icon: JSX.Element }[] }) {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card rounded-xl mx-auto max-w-7xl my-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Skills & Expertise</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Technologies and tools I use to create exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
              className="flex flex-col items-center space-y-3 p-6 rounded-xl bg-background border border-border transition-all duration-300 group"
            >
              <motion.div
                className="group-hover:scale-110 transition-transform duration-300"
                transition={{ duration: 0.3 }}
              >
                {skill.icon}
              </motion.div>
              <span className="text-sm sm:text-base font-medium text-foreground/90 text-center">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
