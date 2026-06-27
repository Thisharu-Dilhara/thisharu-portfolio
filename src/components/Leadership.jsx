import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Users, Trophy } from 'lucide-react';

const Leadership = () => {
  return (
    <section id="leadership" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
          Leadership & <span className="text-green-400">Extracurriculars</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-teal-500 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioData.leadership.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white/5 border border-white/10 p-8 rounded-2xl overflow-hidden hover:border-green-500/50 transition-colors duration-300"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
              {index === 0 ? <Users size={120} /> : <Trophy size={120} />}
            </div>

            <div className="relative z-10">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                  {item.duration || 'Leadership Role'}
                </span>
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors">
                  {item.role}
                </h3>
                <p className="text-gray-400 font-medium">{item.organization}</p>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Leadership;
