"use client"
import { motion } from "framer-motion"
import { Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experience = [
  {
    year: "2024 - Present",
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    description:
      "Leading frontend development for enterprise web applications, mentoring junior developers, and implementing modern development practices.",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Git"],
  },
  {
    year: "2022 - 2024",
    title: "Frontend Developer",
    company: "Digital Agency Pro",
    description:
      "Developed responsive websites and web applications for various clients, specializing in React and Vue.js implementations.",
    tools: ["Vue.js", "React", "SCSS", "JavaScript", "Figma"],
  },
  {
    year: "2021 - 2022",
    title: "Junior Frontend Developer",
    company: "StartUp Innovations",
    description:
      "Started career building user interfaces, learning modern frameworks, and contributing to agile development teams.",
    tools: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 lg:px-12 bg-slate-100/50 dark:bg-slate-800/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">Experience</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            My professional journey in frontend development
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600" />

          {experience.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{
                scale: 1.02,
                x: 10,
                transition: { duration: 0.2 },
              }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative flex items-start space-x-8 pb-12 cursor-pointer"
            >
              <motion.div
                className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 },
                }}
              >
                <Calendar className="w-6 h-6 text-white" />
              </motion.div>
              <div className="flex-1 min-w-0">
                <Card className="border-0 bg-white dark:bg-slate-800 shadow-lg rounded-none relative overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <CardHeader className="relative">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <CardTitle className="text-xl text-slate-900 dark:text-white">{exp.title}</CardTitle>
                      <Badge variant="outline" className="w-fit mt-2 sm:mt-0 rounded-lg">
                        {exp.year}
                      </Badge>
                    </div>
                    <CardDescription className="text-blue-600 dark:text-blue-400 font-medium">
                      {exp.company}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <p className="text-slate-600 dark:text-slate-300 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tools.map((tool) => (
                        <Badge
                          key={tool}
                          variant="secondary"
                          className="text-xs bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 border-0 rounded-lg"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
