
import { motion } from "framer-motion";
import { 
  SiReact, SiTypescript, SiTailwindcss, SiFigma, 
  SiAdobexd, SiJavascript, SiHtml5, SiCss3,
  SiNodedotjs, SiPython, SiGit,
  SiNextdotjs, SiVite, SiPrisma, SiPostgresql
} from "react-icons/si";

const technologies = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiVite, name: "Vite", color: "#646CFF" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#38B2AC" },
  { icon: SiPrisma, name: "Prisma", color: "#2D3748" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
  { icon: SiFigma, name: "Figma", color: "#F24E1E" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiPython, name: "Python", color: "#3776AB" },
  { icon: SiGit, name: "Git", color: "#F05032" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-background/50 backdrop-blur-sm overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-400 text-transparent bg-clip-text inline-block">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            A curated stack of modern technologies I use to bring ideas to life
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: {
                    delay: index * 0.1,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100
                  }
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="p-6 rounded-xl bg-background/30 backdrop-blur-md border border-primary/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="flex flex-col items-center gap-4">
                  <tech.icon 
                    className="w-12 h-12 transition-transform duration-300 group-hover:scale-110" 
                    style={{ color: tech.color }}
                  />
                  <span className="font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
