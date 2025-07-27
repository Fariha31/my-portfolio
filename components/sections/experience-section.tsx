"use client"
import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

export function ExperienceSection({
  experience,
}: {
  experience: {
    year: string
    title: string
    company: string
    location: string
    description: string
    achievements: string[]
    tools: string[]
  }[]
}) {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Experience</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            My professional journey in frontend development and the impact I've made
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue via-accent-green to-accent-orange" />

          {experience.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative flex items-start space-x-8 pb-16 group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-accent-blue to-accent-green rounded-full flex items-center justify-center"
              >
                <Calendar className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex-1 bg-card border border-border rounded-2xl p-8 hover:border-accent-blue/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                    <div className="flex items-center space-x-4 text-accent-blue">
                      <span className="font-semibold">{exp.company}</span>
                      <div className="flex items-center space-x-1 text-foreground/60">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 lg:mt-0">
                    <span className="inline-block px-3 py-1 bg-accent-blue/10 border border-accent-blue/20 rounded-full text-accent-blue text-sm font-medium">
                      {exp.year}
                    </span>
                  </div>
                </div>

                <p className="text-foreground/70 mb-6 leading-relaxed">{exp.description}</p>

                {/* <div className="space-y-3 mb-6">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-accent-green rounded-full mt-2 flex-shrink-0" />
                      <span className="text-foreground/80 text-sm">{achievement}</span>
                    </div>
                  ))}
                </div> */}

                <div className="flex flex-wrap gap-2">
                  {exp.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-gradient-to-r from-accent-blue/10 to-accent-green/10 border border-accent-blue/20 text-accent-blue rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
