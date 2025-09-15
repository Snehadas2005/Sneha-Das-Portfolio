// src/components/About.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import myPhoto from "../assets/photos/image3.png";

const About = () => {
  const [hoveredLetter, setHoveredLetter] = useState(null);

  const letterMeanings = [
    {
      letter: "S",
      title: "Smart & Strategic",
      description:
        "I approach every project with analytical thinking and strategic planning, ensuring solutions that are both innovative and practical.",
    },
    {
      letter: "N",
      title: "Nurturing Innovator",
      description:
        "I believe in fostering creativity and innovation while nurturing ideas from conception to completion with care and attention.",
    },
    {
      letter: "E",
      title: "Evolving Engineer",
      description:
        "Constantly learning and adapting to new technologies, I engineer solutions that evolve with the changing digital landscape.",
    },
    {
      letter: "H",
      title: "High-Achiever",
      description:
        "Driven by excellence, I set high standards for myself and consistently deliver work that exceeds expectations.",
    },
    {
      letter: "A",
      title: "Ambitious Architect",
      description:
        "I architect digital experiences with ambition and vision, building foundations for lasting impact in the digital world.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-px h-1/2 bg-white transform rotate-12" />
        <div className="absolute bottom-1/4 right-1/4 w-1/2 h-px bg-white transform -rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="text-sm font-mirage text-gray-400">2/5</div>
            <div className="text-lg font-mirage text-gray-400">FOR ME</div>
            <div className="text-sm font-mirage text-gray-400">DSGN/2</div>
          </div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl lg:text-8xl font-brogetta mb-8"
          >
            ABOUT ME
          </motion.h2>
        </motion.div>

        {/* Philosophy Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h3
              className="text-4xl lg:text-6xl font-brogetta leading-tight mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              DESIGN
            </motion.h3>
            <motion.h3
              className="text-4xl lg:text-6xl font-brogetta leading-tight text-gray-400 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              IS NOT JUST
            </motion.h3>
            <motion.h3
              className="text-4xl lg:text-6xl font-brogetta leading-tight mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              DECORATION, BUT
            </motion.h3>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Profile Image */}
              <div className="w-full h-96 lg:h-[500px] bg-gray-800 mb-8 relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={myPhoto}
                  alt="Sneha Das"
                  className="w-full h-full object-cover"
                />

                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500"
                />

                {/* Decorative overlay */}
                <div className="absolute inset-0 border-4 border-white/10" />
              </div>

              <div className="text-center">
                <motion.h4
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-2xl font-brogetta mb-2"
                >
                  HELLO!
                </motion.h4>
                <motion.h5
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-xl font-brogetta mb-8"
                >
                  I'M SNEHA
                </motion.h5>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 font-mirage"
                >
                  <span>MY EXPERIENCE</span>
                  <span>↓</span>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Description Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg lg:text-xl font-brogetta leading-relaxed text-gray-300 sm:mb-8"
            >
              I’m a{" "}
              <span className="text-white font-bold">Frontend Developer</span>{" "}
              and AI & Data Science student, passionate about crafting clean,
              responsive, and user-focused digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="prose prose-invert max-w-none"
            >
              <p className="font-mirage text-gray-400 leading-relaxed mb-6">
                My toolkit includes{" "}
                <span className="text-white">
                  React, Tailwind CSS, Firebase, and javsascript
                </span>{" "}
                — combining performance with creativity to bring designs to
                life.
              </p>

              <p className="font-mirage text-gray-400 leading-relaxed mb-6">
                Outside of code, I love{" "}
                <span className="text-white">
                  UI designing, sketching, and video editing
                </span>
                , which fuel my creativity and influence my work.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Name Expansion Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-gray-800 pt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-brogetta mb-4">WHAT MY NAME MEANS</h3>
            <p className="font-mirage text-gray-400">
              Each letter represents a core value that drives my work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {letterMeanings.map((item, index) => (
              <motion.div
                key={item.letter}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onMouseEnter={() => setHoveredLetter(item.letter)}
                onMouseLeave={() => setHoveredLetter(null)}
                className="text-center group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-6xl lg:text-8xl font-brogetta mb-4 transition-colors duration-300 group-hover:text-gray-300"
                >
                  {item.letter}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: hoveredLetter === item.letter ? 1 : 0,
                    height: hoveredLetter === item.letter ? "auto" : 0,
                  }}
                  className="overflow-hidden"
                >
                  <h4 className="font-brogetta text-lg mb-2 text-white">
                    {item.title}
                  </h4>
                  <p className="font-mirage text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
