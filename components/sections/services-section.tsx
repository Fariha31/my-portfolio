"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and interactive web applications using modern frameworks like React, Vue.js, and Next.js.",
    icon: "💻",
  },
  {
    title: "UI/UX Implementation",
    description: "Converting designs from Figma and Adobe XD into pixel-perfect, responsive web interfaces.",
    icon: "🎨",
  },
  {
    title: "Dashboard Development",
    description: "Creating complex dashboards and admin panels with data visualization and real-time updates.",
    icon: "📊",
  },
  {
    title: "Multilingual Web Apps",
    description: "Developing internationalized (i18n) applications supporting multiple languages and locales.",
    icon: "🌍",
  },
  {
    title: "Performance Optimization",
    description: "Optimizing web applications for speed, SEO, and better user experience across all devices.",
    icon: "⚡",
  },
  {
    title: "Agile Development",
    description: "Working in agile environments with continuous integration and collaborative development practices.",
    icon: "🔄",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            My Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto px-4">
            Comprehensive frontend development services to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group border-0 bg-white dark:bg-slate-800 shadow-lg rounded-lg">
                <CardHeader className="p-4 sm:p-6">
                  <motion.div
                    className="text-3xl sm:text-4xl mb-3 sm:mb-4 opacity-100 group-hover:opacity-70 transition-opacity duration-300"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                  </motion.div>
                  <CardTitle className="text-lg sm:text-xl text-slate-900 dark:text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <CardDescription className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                    {service.description}
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
