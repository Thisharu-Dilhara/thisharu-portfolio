import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Code2, Layout, Database, Shield, Server, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    { title: 'Programming', icon: <Code2 className="text-blue-400" size={24} />, skills: portfolioData.skills.programming },
    { title: 'Frontend', icon: <Layout className="text-purple-400" size={24} />, skills: portfolioData.skills.frontend },
    { title: 'Backend', icon: <Server className="text-green-400" size={24} />, skills: portfolioData.skills.backend },
    { title: 'Databases', icon: <Database className="text-yellow-400" size={24} />, skills: portfolioData.skills.databases },
    { title: 'Security', icon: <Shield className="text-red-400" size={24} />, skills: portfolioData.skills.security },
    { title: 'Cloud & Tools', icon: <Wrench className="text-gray-400" size={24} />, skills: portfolioData.skills.cloudAndTools },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
          Technical <span className="text-purple-400">Skills</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
              {category.icon}
              <h3 className="text-xl font-bold text-white">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 rounded-full text-sm font-medium hover:bg-white/10 hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
