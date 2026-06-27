import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Download, ArrowRight, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-blue-400 font-medium mb-4 tracking-wide">Hello, Welcome to my portfolio</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {portfolioData.personalInfo.name}
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-lg">
            {portfolioData.personalInfo.role}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2">
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="/THISHARU_DILHARA_CV.pdf"
              download="THISHARU_DILHARA_CV.pdf"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-all duration-300 border border-white/10 flex items-center gap-2"
            >
              <Download size={18} /> Download CV
            </a>
            <a href="#contact" className="px-6 py-3 bg-transparent hover:bg-white/5 text-white rounded-lg font-medium transition-colors border border-white/10 flex items-center gap-2">
              <Mail size={18} /> Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative lg:h-[500px] flex items-center justify-center"
        >
          {/* Decorative developer card */}
          <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl relative">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="font-mono text-sm">
              <p className="text-purple-400">const <span className="text-blue-400">developer</span> <span className="text-white">=</span> {'{'}</p>
              <p className="text-white ml-4">name: <span className="text-green-400">"{portfolioData.personalInfo.name}"</span>,</p>
              <p className="text-white ml-4">role: <span className="text-green-400">"Full Stack Developer"</span>,</p>
              <p className="text-white ml-4">location: <span className="text-green-400">"{portfolioData.personalInfo.location}"</span>,</p>
              <p className="text-white ml-4">skills: [<span className="text-green-400">"React"</span>, <span className="text-green-400">"Spring Boot"</span>, <span className="text-green-400">"Tailwind"</span>]</p>
              <p className="text-white">{'}'};</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
