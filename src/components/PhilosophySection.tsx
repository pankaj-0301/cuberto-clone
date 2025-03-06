import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const PhilosophySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-32 px-8 bg-gradient-to-br from-purple-900 to-black" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-7xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
        >
          Our Philosophy
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 backdrop-blur-lg bg-white/5 p-8 rounded-2xl"
          >
            <p className="text-xl text-gray-300">
              In our team, developers work alongside designers, strategists and analysts. 
              We don't do cookie-cutter solutions and we build products exactly as they 
              were during the design phase, no short cuts or simplifications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 backdrop-blur-lg bg-white/5 p-8 rounded-2xl"
          >
            <p className="text-xl text-gray-300">
              We're driven by user‑centered design that drives productivity and 
              increases revenue. Our expertise and ingenuity are remarkable, yet 
              we always strive to outdo and outperform our previous achievements.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};