import { motion, useScroll, useTransform } from 'framer-motion';
import { Instagram, Instagram as Telegram, Twitter, Github, Linkedin } from 'lucide-react';

const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    color: 'bg-gradient-to-br from-purple-600 to-pink-500',
    link: '#'
  },
  {
    name: 'Telegram',
    icon: Telegram,
    color: 'bg-blue-500',
    link: '#'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    color: 'bg-sky-500',
    link: '#'
  },
  {
    name: 'Github',
    icon: Github,
    color: 'bg-gray-800',
    link: '#'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    color: 'bg-blue-700',
    link: '#'
  }
];

export const SocialSection = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

  return (
    <section className="py-32 bg-gradient-to-b from-black to-gray-900">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-7xl font-bold text-center mb-24"
      >
        Connect With Us
      </motion.h2>

      <div className="relative overflow-hidden">
        <motion.div 
          className="flex space-x-8 whitespace-nowrap py-12"
          style={{ x }}
        >
          {[...socialLinks, ...socialLinks].map((social, index) => (
            <motion.a
              key={`${social.name}-${index}`}
              href={social.link}
              className={`inline-flex items-center ${social.color} p-8 rounded-2xl group transform transition-all duration-300 hover:scale-105`}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <social.icon size={40} className="mr-4 group-hover:rotate-12 transition-transform" />
              <span className="text-3xl font-bold">{social.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div 
        className="mt-24 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-2xl text-gray-400">Follow us for updates and insights</p>
      </motion.div>
    </section>
  );
};