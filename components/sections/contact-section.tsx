"use client"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card rounded-xl mx-auto max-w-7xl my-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Let's Work Together</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with amazing
            people.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-accent-blue to-accent-green rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Email</h3>
                  <p className="text-foreground/70">farihaliaqat31@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-accent-blue to-accent-green rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Phone</h3>
                  <p className="text-foreground/70">+92 321-7517360</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-accent-blue to-accent-green rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">LinkedIn</h3>
                  <p className="text-foreground/70">linkedin.com/in/fariha-liaqat-998054193/</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-accent-blue to-accent-green rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Location</h3>
                  <p className="text-foreground/70">Pakistan</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Let's Connect</h3>
              <p className="text-foreground/70 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about
                frontend development. Feel free to reach out!
              </p>
            </div>
          </motion.div>

          {/* <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="bg-background border border-border rounded-2xl p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-foreground/50 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-foreground/50 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-foreground/50 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-colors"
                    placeholder="Project inquiry"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-foreground/50 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-accent-blue to-accent-green hover:from-accent-green hover:to-accent-orange text-white border-0 rounded-lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  )
}
