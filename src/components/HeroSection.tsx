import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const letterAnimation = {
  initial: { y: 100, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

export const HeroSection = () => {
  const title = "We are a digital design and motion agency".split(" ");

  return (
    <section className="min-h-screen bg-black text-white pt-32 px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto"
      >
        <div className="overflow-hidden">
          <motion.h1 className="text-6xl md:text-8xl font-bold leading-tight flex flex-wrap gap-x-4">
            {title.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterAnimation}
                initial="initial"
                animate="animate"
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
        </div>
        
        <motion.p 
          className="mt-8 text-xl text-gray-400 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Focused on branding, UI/UX design, mobile, and web development.
        </motion.p>

        <motion.button
          className="mt-12 px-8 py-4 bg-white text-black rounded-full flex items-center gap-2 hover:gap-4 transition-all group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Our Work
          <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
        </motion.button>
      </motion.div>
    </section>
  );
};