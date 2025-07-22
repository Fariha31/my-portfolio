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
    // {
    //   icon: Palette,
    //   title: "Intuitive User Experiences",
    //   description:
    //     "Designing and implementing visually appealing interfaces that prioritize user delight and accessibility across devices.",
    // },
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
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">About Me</h2>
          <p className="text-xl text-foreground/70 max-w-5xl mx-auto leading-relaxed">
          My journey as a Frontend Engineer is fueled by a passion for turning complex ideas into clean, user-focused digital experiences. I specialize in building scalable, high-performance web applications that prioritize usability and maintainability. 
          <br/>Beyond writing efficient code, I thrive in cross-functional teams and aim to create meaningful products that deliver long-term value.  From code quality to performance, here’s what drives my work
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
