import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: "Digital Product Design",
    description: "Creating seamless user experiences through innovative design solutions",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Motion Design",
    description: "Bringing brands to life with captivating animations and interactions",
    imageUrl: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Web Development",
    description: "Building powerful and scalable web applications",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
  }
];

export const ProjectsSection = () => {
  return (
    <section className="py-32 px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-5xl font-bold mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};