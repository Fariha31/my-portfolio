"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const achievements = [
  {
    title: "Performance Optimization",
    description: "Reduced page load time by 40% through image optimization and code splitting",
    icon: "⚡",
    metric: "40%",
  },
  {
    title: "Cross-browser Compatibility",
    description: "Resolved 95% of browser compatibility issues across Chrome, Firefox, Safari, and Edge",
    icon: "🌐",
    metric: "95%",
  },
  {
    title: "Code Quality Improvement",
    description: "Improved code maintainability by implementing TypeScript and modern development practices",
    icon: "🔧",
    metric: "60%",
  },
  {
    title: "User Experience Enhancement",
    description: "Increased user engagement by 35% through responsive design and accessibility improvements",
    icon: "👥",
    metric: "35%",
  },
  {
    title: "Development Efficiency",
    description: "Accelerated development process by 50% using component libraries and automated workflows",
    icon: "🚀",
    metric: "50%",
  },
  {
    title: "Bug Resolution",
    description: "Maintained 99% uptime by proactive bug fixing and comprehensive testing strategies",
    icon: "🐛",
    metric: "99%",
  },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">Key Achievements</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Measurable results and improvements I've delivered in my projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group border-0 bg-white dark:bg-slate-800 shadow-lg rounded-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-full" />
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{achievement.icon}</div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {achievement.metric}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-slate-900 dark:text-white">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 dark:text-slate-300">
                    {achievement.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
