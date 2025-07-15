"use client"
import { motion } from "framer-motion"
import { Code, Palette, Zap, Users } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: "Crafting Robust Code",
      description:
        "Building maintainable and scalable solutions with a focus on code quality and best practices, ensuring long-term stability.",
    },
    {
      icon: Palette,
      title: "Intuitive User Experiences",
      description:
        "Designing and implementing visually appealing interfaces that prioritize user delight and accessibility across devices.",
    },
    {
      icon: Zap,
      title: "Optimized Performance",
      description:
        "Delivering fast, responsive applications by optimizing load times and overall site speed for a seamless user journey.",
    },
    {
      icon: Users,
      title: "Collaborative Development",
      description:
        "Seamlessly integrating with cross-functional teams in agile environments to drive project success and foster innovation.",
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
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">A Passion for Frontend Excellence</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            My journey as a Frontend Engineer is driven by a deep passion for transforming complex ideas into elegant,
            user-centric web applications. With every project, I am committed to delivering not just functional code,
            but exceptional digital experiences that are intuitive, high-performing, and built to last.
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
