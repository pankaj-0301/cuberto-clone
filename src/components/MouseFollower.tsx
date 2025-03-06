import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const MouseFollower = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const scale = useMotionValue(1);
  
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const scaleSpring = useSpring(scale, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseEnter = () => scale.set(2);
    const handleMouseLeave = () => scale.set(1);

    window.addEventListener('mousemove', moveCursor);
    
    document.querySelectorAll('button, a').forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.querySelectorAll('button, a').forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 w-8 h-8 bg-white rounded-full mix-blend-difference z-50"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        scale: scaleSpring,
      }}
    />
  );
};