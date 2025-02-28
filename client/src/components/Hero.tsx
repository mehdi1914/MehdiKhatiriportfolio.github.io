import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { SiGithub, SiLinkedin, SiBehance, SiDribbble } from "react-icons/si";
import { FileDown } from "lucide-react";

const roles = ["Frontend Development", "UI/UX Designer", "Problem Solver"];

const socialLinks = [
  { icon: SiGithub, href: "https://github.com/mehdi1914", label: "GitHub" },
  { icon: SiLinkedin, href: "https://www.linkedin.com/in/mehdi-khatiri/", label: "LinkedIn" },
  { icon: SiBehance, href: "https://www.behance.net/mehdikhatiri1", label: "Behance" },
  { icon: SiDribbble, href: "https://dribbble.com/MEHDI_UXUI", label: "Dribbble" }
];

export default function Hero() {
  const [currentText, setCurrentText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentRole = roles[roleIndex];

      if (!isDeleting && charIndex <= currentRole.length) {
        setCurrentText(currentRole.substring(0, charIndex));
        charIndex++;
        timeout = setTimeout(type, 75);
      } else if (isDeleting && charIndex >= 0) {
        setCurrentText(currentRole.substring(0, charIndex));
        charIndex--;
        timeout = setTimeout(type, 35);
      } else if (charIndex < 0) {
        isDeleting = false;
        charIndex = 0;
        setRoleIndex((prev) => (prev + 1) % roles.length);
        timeout = setTimeout(type, 300);
      } else {
        isDeleting = true;
        timeout = setTimeout(type, 1500);
      }
    };

    timeout = setTimeout(type, 100);
    return () => clearTimeout(timeout);
  }, [roleIndex]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-background to-primary/5">
      {/* Enhanced animated background circles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 backdrop-blur-3xl"
          initial={{ 
            width: `${(i + 1) * 200}px`,
            height: `${(i + 1) * 200}px`,
            x: -100,
            y: -100,
            opacity: 0.1
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            left: `${i * 15}%`,
            top: `${i * 20}%`,
            filter: 'blur(40px)',
            zIndex: 0
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl mb-4 bg-gradient-to-r from-primary to-purple-400 text-transparent bg-clip-text font-semibold"
          >
            Mehdi Khatiri
          </motion.p>

          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Hi, I'm a <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
              {currentText}
            </span>
            <span className="animate-blink">|</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Crafting intuitive digital experiences through thoughtful design and clean code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-purple-400 text-white hover:opacity-90 px-8 py-6 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Talk
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/20 hover:border-primary/40 px-8 py-6 rounded-full backdrop-blur-sm hover:bg-primary/5 transition-all duration-300"
              onClick={() => window.open("https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:8288764d-fc17-4854-a9ba-d03b462af49f", "_blank")}
            >
              <FileDown className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-12 flex items-center justify-center gap-6"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}