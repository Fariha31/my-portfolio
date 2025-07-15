"use client"
import { motion } from "framer-motion"
import { Code, Palette, Zap, Users } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices",
    },
    {
      icon: Palette,
      title: "UI/UX Focus",
      description: "Creating beautiful, intuitive user interfaces",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in agile development teams",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card rounded-xl mx-auto max-w-7xl my-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">About Me</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate frontend developer who loves creating digital experiences that make a difference. With a
            strong foundation in modern web technologies, I bring ideas to life through clean, efficient code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group p-6 rounded-lg border border-border hover:border-accent-blue/50 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-accent-blue/20 to-accent-green/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-accent-blue" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-foreground/70">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
