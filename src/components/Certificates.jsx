import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Award } from 'lucide-react';

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
          Licenses & <span className="text-yellow-400">Certifications</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gradient-to-br from-white/5 to-white/10 p-[1px] rounded-2xl overflow-hidden"
          >
            <div className="bg-[#050505] p-6 rounded-2xl h-full flex flex-col justify-between">
              <div>
                <Award className="text-yellow-400 mb-4" size={32} />
                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-gray-400 font-medium">{cert.issuer}</p>
              </div>
              {cert.date && (
                <p className="text-gray-500 text-sm mt-4">{cert.date}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
