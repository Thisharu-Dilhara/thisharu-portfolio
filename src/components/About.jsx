import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
          About <span className="text-blue-400">Me</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-300 text-lg leading-relaxed space-y-6"
        >
          <p>{portfolioData.personalInfo.summary}</p>
          <p>
            I am currently pursuing my Bachelor of Computer Science at the{' '}
            <span className="text-white font-medium">University of Ruhuna</span>. My core focus lies in building scalable, 
            full-stack applications, specializing in creating secure REST APIs, implementing robust authentication systems, 
            and designing efficient database architectures with PostgreSQL and MongoDB.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
            <h3 className="text-4xl font-bold text-blue-400 mb-2">3+</h3>
            <p className="text-gray-400 font-medium">Full Stack Projects</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
            <h3 className="text-4xl font-bold text-purple-400 mb-2">10+</h3>
            <p className="text-gray-400 font-medium">Technologies Mastered</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
            <h3 className="text-4xl font-bold text-green-400 mb-2">1st</h3>
            <p className="text-gray-400 font-medium">Hackathon Led</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
            <h3 className="text-4xl font-bold text-yellow-400 mb-2">2nd</h3>
            <p className="text-gray-400 font-medium">Runner-Up VolleyBall</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
