"use client"
import { motion } from "framer-motion"
import { Monitor, Smartphone, Database, Globe, Rocket, Settings } from "lucide-react"

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    description: "Building responsive, modern web applications using React, Vue.js, and Next.js",
    features: ["React & Vue.js", "Next.js", "TypeScript", "Responsive Design"],
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Creating mobile-optimized experiences that work seamlessly across all devices",
    features: ["Mobile Optimization", "Cross-browser Testing", "Progressive Web Apps", "Touch Interfaces"],
  },
  {
    icon: Database,
    title: "Frontend Architecture",
    description: "Designing scalable frontend architectures with modern state management",
    features: ["State Management", "Component Libraries", "Code Splitting", "Performance Optimization"],
  },
  {
    icon: Globe,
    title: "Internationalization",
    description: "Developing multilingual applications with proper localization support",
    features: ["Multi-language Support", "RTL Support","Dynamic Content"],
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description: "Optimizing applications for speed, SEO, and better user experience",
    features: ["Core Web Vitals", "SEO Optimization", "Lazy Loading"],
  },
  {
    icon: Settings,
    title: "Development Workflow",
    description: "Implementing modern development practices and CI/CD workflows",
    features: ["Git Workflows", "Testing", "Code Reviews", "Deployment"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">What I Do</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Comprehensive frontend development services to bring your digital vision to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-card border border-border rounded-2xl p-8 hover:border-accent-blue/50 transition-all duration-300 h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-accent-blue/20 to-accent-green/20 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-accent-blue" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-foreground/60">
                      <div className="w-1.5 h-1.5 bg-accent-green rounded-full mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
