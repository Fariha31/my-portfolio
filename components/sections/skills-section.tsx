"use client"
import { motion } from "framer-motion"

const skills = [
  {
    name: "React",
    icon: (
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8" fill="white">
          <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.85-1.87 1.85-1.87-.82-1.87-1.85.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m2.95-5.33c-.85-.77-1.7-1.21-2.28-.9-.6.33-.78 1.79-.29 3.78.25-.11.52-.2.81-.29.25-.26.52-.5.81-.72.65-.5 1.32-.93 2.05-1.3-.03-.04-.06-.07-.1-.11-.25-.23-.51-.45-.78-.65-.03-.01-.08-.02-.12-.02-.05.01-.1.04-.1.11M8.8 14.26c-.68 1.21-1.24 2.32-1.65 3.27-.14.33-.22.65-.26.94-.01.06.06.12.17.12.47 0 1.33-.42 2.4-1.22-.24-.24-.46-.5-.66-.78-.24-.28-.46-.58-.66-.89-.11-.16-.21-.32-.31-.48-.01-.02-.02-.04-.03-.06z" />
        </svg>
      </div>
    ),
  },
  {
    name: "Vue.js",
    icon: (
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8" fill="white">
          <path d="M2,3L12,17L22,3H18.5L12,12.5L5.5,3H2Z" />
        </svg>
      </div>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-slate-700 to-slate-900 dark:from-slate-300 dark:to-slate-100 rounded-lg flex items-center justify-center shadow-lg">
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 fill-white dark:fill-slate-900">
          <path d="M11.572,0C5.184,0,0,5.184,0,11.572s5.184,11.572,11.572,11.572c2.308,0,4.339-.677,6.079-1.823L9.099,11.139v6.133c0,.3-.244.544-.544.544s-.544-.244-.544-.544V6.228c0-.3.244-.544.544-.544s.544.244.544.544v3.821l6.83,6.83c1.146-1.74,1.823-3.771,1.823-6.079C23.144,5.184,17.96,0,11.572,0z" />
        </svg>
      </div>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg">
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8" fill="white">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
        </svg>
      </div>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8" fill="white">
          <path d="M1.125,0C0.502,0,0,0.502,0,1.125v21.75C0,23.498,0.502,24,1.125,24h21.75c0.623,0,1.125-0.502,1.125-1.125V1.125C24,0.502,23.498,0,22.875,0H1.125z M9.75,8.625h4.5v1.5h-1.5v9h-1.5v-9h-1.5V8.625z M16.5,8.625c0.621,0,1.125,0.504,1.125,1.125s-0.504,1.125-1.125,1.125s-1.125-0.504-1.125-1.125S15.879,8.625,16.5,8.625z M15.75,12h1.5v7.5h-1.5V12z" />
        </svg>
      </div>
    ),
  },
  {
    name: "HTML5",
    icon: (
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8" fill="white">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
        </svg>
      </div>
    ),
  },
  {
    name: "CSS3",
    icon: (
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8" fill="white">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
        </svg>
      </div>
    ),
  },
  {
    name: "SCSS",
    icon: (
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg flex items-center justify-center shadow-lg">
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8" fill="white">
          <path d="M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M10.6,15.6c-0.3,1.1-0.7,2-1.2,2.3 c-0.3,0.2-0.7,0.1-0.8-0.2c-0.1-0.4,0.1-1,0.4-1.6c0.4-0.8,1-1.4,1-1.4S10.7,14.9,10.6,15.6z M12.1,15.4c-0.1,0.2-0.2,0.4-0.3,0.6 c0,0,0,0.1-0.1,0.1c-0.1,0.2-0.2,0.3-0.3,0.5c-0.1,0.1-0.1,0.2-0.2,0.2c0,0-0.1,0.1-0.1,0.1c-0.1,0.1-0.2,0.2-0.3,0.2 c-0.2,0.1-0.4,0.1-0.5,0c-0.1-0.1-0.1-0.3,0-0.6c0.1-0.5,0.4-1.2,0.4-1.2s0.2-0.4,0.5-0.9c0.2-0.3,0.4-0.6,0.5-0.8 c0.1-0.2,0.1-0.3,0.1-0.4c0-0.1,0-0.2,0-0.2c0-0.1,0-0.2,0.1-0.3c0.1-0.2,0.3-0.3,0.4-0.2c0.2,0.1,0.2,0.4,0.1,0.8 C12.3,14.8,12.2,15.1,12.1,15.4z" />
        </svg>
      </div>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg">
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8" fill="white">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
        </svg>
      </div>
    ),
  },
  {
    name: "jQuery",
    icon: (
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg">
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8" fill="white">
          <path d="M1.534 5.874c-2.123 3.05-1.86 6.017-1.86 6.017s.021-.154.021-.154c.853-2.707 2.332-4.62 4.143-6.078l.004-.003c1.553-1.252 3.294-2.096 5.124-2.665C12.016 1.873 15.32 2.5 17.94 4.139c-.573-.543-1.222-.994-1.934-1.343-3.155-1.547-6.96-1.547-10.115 0-1.906.936-3.254 2.45-4.357 4.078z" />
        </svg>
      </div>
    ),
  },
  {
    name: "Figma",
    icon: (
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8">
          <path fill="white" d="M8.5 12a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
          <path fill="white" d="M8.5 5.5A3.5 3.5 0 0 1 12 2h3.5a3.5 3.5 0 1 1 0 7H12V5.5z" />
          <path fill="white" d="M8.5 18.5A3.5 3.5 0 0 1 12 15v3.5a3.5 3.5 0 1 1-3.5-3.5z" />
          <path fill="white" d="M8.5 12A3.5 3.5 0 0 1 12 8.5V15.5A3.5 3.5 0 0 1 8.5 12z" />
          <path fill="white" d="M8.5 5.5A3.5 3.5 0 0 1 12 2V9H8.5a3.5 3.5 0 0 1 0-7z" />
        </svg>
      </div>
    ),
  },
  {
    name: "Adobe XD",
    icon: (
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-500 to-pink-700 rounded-lg flex items-center justify-center shadow-lg">
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8" fill="white">
          <path d="M0 0v24h24V0H0zm9.196 9.6l2.304 4.8h-2.4L7.596 12l1.504-2.4h2.096zm7.2-4.8v9.6h-2.4V7.2h-1.2V4.8h3.6z" />
        </svg>
      </div>
    ),
  },
  {
    name: "Framer Motion",
    icon: (
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-slate-600 to-slate-800 rounded-lg flex items-center justify-center shadow-lg">
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 fill-white">
          <path d="M4 0h16v8h-8zm0 8h8l8 8H4zm0 8h8v8z" />
        </svg>
      </div>
    ),
  },
  {
    name: "Git",
    icon: (
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center shadow-lg">
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8" fill="white">
          <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
        </svg>
      </div>
    ),
  },
  {
    name: "npm",
    icon: (
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center shadow-lg">
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8" fill="white">
          <path d="M0 7v10h6.5v1.5h5V17H24V7H0zm6.5 6H5V9.5h1.5V13zm5 0H10V9.5h1.5V13zm7.5 0h-1.5V9.5H19V13h-1.5V9.5h1.5V13z" />
        </svg>
      </div>
    ),
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-slate-100/50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto px-4">
            Technologies and tools I use to create amazing web experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center space-y-2 sm:space-y-3 p-3 sm:p-4 rounded-lg bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <motion.div
                className="group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {skill.icon}
              </motion.div>
              <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
