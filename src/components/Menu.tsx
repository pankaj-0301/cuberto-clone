import { motion } from 'framer-motion';
import { Menu as MenuIcon, X } from 'lucide-react';
import { useState } from 'react';

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Home', 'Projects', 'About', 'Services', 'Contact'].map((item, i) => (
    <motion.div
      key={item}
      custom={i}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ delay: i * 0.1 }}
      className="text-6xl font-bold hover:text-gray-400 transition-colors cursor-pointer"
    >
      {item}
    </motion.div>
  ));

  const sideText = "Contact-Contact-Contact-".split('').map((char, i) => (
    <motion.span
      key={i}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: i * 0.05 }}
      className="inline-block"
    >
      {char}
    </motion.span>
  ));

  return (
    <>
      <motion.button
        className="fixed top-8 right-8 z-50 p-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={32} /> : <MenuIcon size={32} />}
      </motion.button>

      <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        className="fixed inset-0 bg-black z-40 flex"
      >
        <div className="flex-1 flex items-center justify-center">
          <div className="space-y-8">
            {menuItems}
          </div>
        </div>
        
        <div className="fixed -right-4 top-1/2 -rotate-90 flex overflow-hidden whitespace-nowrap text-8xl font-bold text-white/10">
          {sideText}
        </div>
      </motion.div>
    </>
  );
};