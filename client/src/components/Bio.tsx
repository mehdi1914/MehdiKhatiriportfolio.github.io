import { motion } from "framer-motion";

export default function Bio() {
  return (
    <section id="bio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-purple-400 text-transparent bg-clip-text inline-block">Bio</h2>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Mehdi Khatiri</h3>
                <p className="text-lg text-primary/80 italic">UI/UX Designer | ALX Pathway Program Learner</p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Passionate about crafting human-centered digital experiences, I blend creativity with technical precision. As an ALX learner, I've honed skills in problem-solving, agile collaboration, and project management to deliver solutions that empower users and businesses alike.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h4 className="text-xl font-semibold bg-gradient-to-r from-primary/80 to-purple-400/80 text-transparent bg-clip-text">What I Do</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <motion.li
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 bg-primary/50 rounded-full" />
                    <span>Design intuitive interfaces using Figma and Adobe Suite</span>
                  </motion.li>
                  <motion.li
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 bg-primary/50 rounded-full" />
                    <span>Conduct user research and prototype testing</span>
                  </motion.li>
                  <motion.li
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 bg-primary/50 rounded-full" />
                    <span>Collaborate with developers using HTML/CSS for seamless handoffs</span>
                  </motion.li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold bg-gradient-to-r from-primary/80 to-purple-400/80 text-transparent bg-clip-text">Beyond Work</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Gym discipline fuels my focus • Storytelling through photography • Theater-inspired empathy for user narratives
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-400/60 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
            <img
              src="https://media-hosting.imagekit.io//501bb468f7024f1e/1735640916007.jpeg?Expires=1834861822&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=gX~Qhq5fCJl0IPmgGjw25o5IVsDNk9yZbDdzogUv40nMTibHanfPpIF59cbYvq2WtM6Ne5K8JeTGFhKSMWcwu3wUkxHlh20~zLFtksorx4c~LY2XYmuzi~0tSIIcGFpyZxdFkKXQdunmzB1n548bdJyL8DZGGB1WsNaD4UVR09hoKKE63SBBeBw9UJdx3NU4gWNHJN82U6iTC3fiF2XcLZrxWyNzixkG96gqTSKypxGxgIkSnj6-sgl~aozAScf6jtEPwAZjp2hk3V~wMHC6DpHzuhf7mU00gd9GFXLHjMHLCm01KdEsSoP~r94i0QOsDnUgimM~JOSE5osvWr1aSA__"
              alt="Profile"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-300 shadow-xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}