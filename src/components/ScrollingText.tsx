import { motion, useScroll, useTransform } from 'framer-motion';

export const ScrollingText = () => {
  const { scrollYProgress } = useScroll();
  const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
  const x2 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div className="relative py-20 overflow-hidden bg-black">
      <motion.div 
        className="whitespace-nowrap text-[150px] font-bold text-white/10"
        style={{ x: x1 }}
      >
        Digital Experience Innovation Development Design
      </motion.div>
      <motion.div 
        className="whitespace-nowrap text-[150px] font-bold text-white/10 mt-8"
        style={{ x: x2 }}
      >
        Creative Solutions Technology Future Forward
      </motion.div>
    </div>
  );
};