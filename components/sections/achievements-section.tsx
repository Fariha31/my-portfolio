"use client"
import { motion } from "framer-motion"

export function AchievementsSection({
  achievements,
}: { achievements: { icon: any; title: string; description: string; metric: string; color: string }[] }) {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-card rounded-xl mx-auto max-w-7xl my-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Key Achievements</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Measurable results and improvements I've delivered across various projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-background border border-border rounded-2xl p-8 hover:border-accent-blue/50 transition-all duration-300 h-full">
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-xl`}
                  >
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div
                    className={`text-3xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}
                  >
                    {achievement.metric}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4">{achievement.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
