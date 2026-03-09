import { motion } from "framer-motion";
import { useState } from "react";
import myPhoto from "../assets/photos/image3.png";

const About = () => {
  const [hoveredLetter, setHoveredLetter] = useState(null);
  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      category: "Backend",
      items: ["Node.js", "Firebase", "Go", "MongoDB", "MySQL"],
    },
    {
      category: "AI / ML",
      items: [
        "Python",
        "OpenAI API",
        "OCR (Tesseract, EasyOCR)",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
      ],
    },
    {
      category: "Tools & Others",
      items: [
        "Git",
        "GitHub",
        "Figma",
        "Canva",
        "Three.js",
        "VS Code",
        "Postman",
        "UI/UX Design",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-px h-1/2 bg-white transform rotate-12" />
        <div className="absolute bottom-1/4 right-1/4 w-1/2 h-px bg-white transform -rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 pt-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="text-sm font-mirage text-gray-400">2/5</div>
            <div className="text-lg font-mirage text-gray-400">FOR ME</div>
            <div className="text-sm font-mirage text-gray-400">DSGN/2</div>
          </div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-brogetta mb-8 px-4"
          >
            ABOUT ME
          </motion.h1>
        </motion.div>

        {/* Philosophy Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="max-w-4xl mx-auto px-4">
            <motion.h2
              className="text-section-title leading-tight mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              DESIGN
            </motion.h2>
            <motion.h2
              className="text-section-title leading-tight text-gray-400 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              IS NOT JUST
            </motion.h2>
            <motion.h2
              className="text-section-title leading-tight mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              DECORATION, BUT
            </motion.h2>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Profile Image */}
              <div className="about-image-container">
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
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-2xl font-brogetta mb-2"
                >
                  HELLO!
                </motion.h4>
                <motion.h5
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-xl sm:text-2xl font-brogetta mb-8"
                >
                  I'M SNEHA
                </motion.h5>
              </div>
            </div>
          </motion.div>

          {/* Description Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg lg:text-xl font-brogetta leading-relaxed text-gray-300 mb-8"
            >
              I'm a{" "}
              <span className="text-white font-bold">
                AI/ML & Web Developer
              </span>{" "}
              and AI & Data Science student, passionate about crafting clean,
              responsive, and user-focused digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="prose prose-invert max-w-none"
            >
              <p className="font-mirage text-gray-400 leading-relaxed mb-6">
                My toolkit spans{" "}
                <span className="text-white">
                  React, Tailwind CSS, Firebase, JavaScript, and Go
                </span>{" "}
                — along with a growing expertise in{" "}
                <span className="text-white">
                  AI & Machine Learning, OpenAI APIs, and OCR-based systems
                </span>{" "}
                — blending creativity with data-driven intelligence to bring
                ideas to life.
              </p>

              <p className="font-mirage text-gray-400 leading-relaxed mb-6">
                Outside of code, I love{" "}
                <span className="text-white">
                  UI designing, sketching, and video editing
                </span>
                , which fuel my creativity and influence my work.
              </p>

              <p className="font-mirage text-gray-400 leading-relaxed mb-8">
                I believe in creating digital solutions that are not just
                functional, but also meaningful and accessible to everyone.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="border-t border-gray-800 pt-20 mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-brogetta mb-4">MY SKILLS</h3>
            <p className="font-mirage text-gray-400">
              Technologies and tools I work with
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <h4 className="font-brogetta text-xl mb-6 text-white">
                  {skillGroup.category}
                </h4>
                <div className="space-y-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: index * 0.1 + skillIndex * 0.05,
                        duration: 0.4,
                      }}
                      className="font-mirage text-gray-400 hover:text-white transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Resume Button */}
        <motion.div className="flex justify-center">
          <motion.button
            onClick={() =>
              window.open("https://sneha-das-resume.netlify.app/", "_blank")
            }
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-12 py-4 bg-white text-black font-brogetta text-lg tracking-wider overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
            
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">
              VIEW MY RESUME
            </span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
