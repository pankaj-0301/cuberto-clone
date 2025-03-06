import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section className="py-32 px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-7xl md:text-9xl font-bold mb-16">
            Let's Talk
          </h2>
          
          <div className="flex flex-col items-center gap-8">
            <motion.a
              href="mailto:info@example.com"
              className="flex items-center gap-4 text-2xl hover:text-gray-400 transition-colors"
              whileHover={{ x: 10 }}
            >
              <Mail className="w-6 h-6" />
              pankajpaliwal2211@gmail.com
              <ArrowUpRight className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              href="tel:+1234567890"
              className="flex items-center gap-4 text-2xl hover:text-gray-400 transition-colors"
              whileHover={{ x: 10 }}
            >
              <Phone className="w-6 h-6" />
              +91 9636707696
              <ArrowUpRight className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};