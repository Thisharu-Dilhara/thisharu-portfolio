import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
          Education & <span className="text-blue-400">Background</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
      </motion.div>

      <div className="relative border-l-2 border-white/10 ml-3 md:ml-6 space-y-12">
        {portfolioData.education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-[#050505] border-2 border-blue-500 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-blue-400" />
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:border-white/20 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <GraduationCap className="text-blue-400" size={24} />
                  {edu.degree}
                </h3>
                <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-sm font-medium rounded-full whitespace-nowrap w-fit">
                  {edu.duration}
                </span>
              </div>
              
              <h4 className="text-lg text-gray-300 font-medium mb-2">{edu.institution}</h4>
              <p className="text-gray-400 text-sm mb-4">{edu.location}</p>
              
              {edu.description && (
                <p className="text-gray-300 bg-white/5 p-4 rounded-xl border border-white/5">
                  {edu.description}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
