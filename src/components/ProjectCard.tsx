import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const ProjectCard = ({ title, description, imageUrl }: ProjectCardProps) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-3xl"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      
      <img 
        src={imageUrl} 
        alt={title}
        className="w-full h-[500px] object-cover"
      />

      <div className="absolute bottom-0 left-0 p-8 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          {description}
        </p>
        <motion.button
          className="flex items-center gap-2 text-white"
          whileHover={{ gap: '1rem' }}
        >
          View Project <ArrowUpRight className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.div>
  );
};