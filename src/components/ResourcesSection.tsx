import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const resources = [
  {
    title: "How to Make UI/UX Website",
    subtitle: "HTML and CSS development",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "How to Cook an Emotional Site",
    subtitle: "Web Development",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Making Switch with SVG Distortion",
    subtitle: "Advanced Animation",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=80"
  }
];

export const ResourcesSection = () => {
  return (
    <section className="py-32 px-8 bg-gradient-to-br from-blue-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-16 bg-gradient-to-r from-blue-400 to-cyan-600 text-transparent bg-clip-text"
        >
          Development and Design Resources
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <motion.img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-[300px] object-cover"
                  whileHover={{ 
                    scale: 1.1,
                    filter: "brightness(1.2) contrast(1.1)"
                  }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div
                  className="absolute bottom-8 left-8 right-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                  <p className="text-gray-300">{resource.subtitle}</p>
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="mt-4 flex items-center gap-2 text-blue-400"
                  >
                    <span>Learn More</span>
                    <ArrowUpRight className="w-6 h-6" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};