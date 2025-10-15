import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import myPhoto from "../assets/photos/image3.png";

const Home = () => {
  const [hoveredLetter, setHoveredLetter] = useState(null);
  const navigate = useNavigate();

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

  const projects = [
    {
      id: 1,
      title: "AI Prescription Analyzer",
      category: "AI • MACHINE LEARNING • HEALTHCARE",
      year: "2025",
      description:
        "An AI-powered web application that extracts and interprets data from handwritten medical prescriptions using OCR and NLP models. The system analyzes prescriptions, identifies medicines, and provides instant insights for safer and faster ordering.",
      tags: ["React", "Python", "TensorFlow", "OCR", "NLP"],
      image: "/images/PresAnaAI.png",
      github: "https://github.com/Snehadas2005/SwasthyaSetu",
    },
    {
      id: 2,
      title: "Queer Station",
      category: "WEB PLATFORM",
      year: "2025",
      description:
        "A safe, inclusive platform built for the queer community with forums, resources, and a vibrant space for sharing and connection. One of the winning projects for DEV community JuneTh celebration 2025.",
      tags: ["React", "Tailwind", "Firebase"],
      image: "/images/queer-station.png",
      live: "https://queerstationdev.netlify.app/",
      github: "https://github.com/Snehadas2005/QueerStation",
    },
    {
      id: 3,
      title: "Mental Health Awareness Post",
      category: "SOCIAL MEDIA DESIGN",
      year: "2024",
      description:
        "Instagram post created for Kafila, focusing on mental health awareness and self-care. Contributed as part of the creative team—collaborated on content and design to promote support and reduce stigma.",
      tags: ["Canva", "Content Design", "Social Media", "Mental Health"],
      image: "/images/Kafilawork1.png",
      live: "https://www.instagram.com/p/DErOxC0yU_D/?img_index=1",
      github:
        "https://www.canva.com/design/DAGbz9TBpd0/VuXH5Lnd-A7FS3BehWTfqQ/watch?utm_content=DAGbz9TBpd0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h801b82ea81",
    },
  ];

  const focusAreas = [
    {
      id: 1,
      number: "01",
      title: "FULL STACK DEVELOPMENT",
      subtitle: "Building Scalable Web Apps",
      description:
        "Developing responsive and high-performing web applications using React, Node.js, Express, and MongoDB.",
    },
    {
      id: 2,
      number: "02",
      title: "UI/UX DESIGN",
      subtitle: "Creating Intuitive Experiences",
      description:
        "Designing seamless digital experiences with a focus on usability, visual storytelling, and accessibility.",
    },
    {
      id: 3,
      number: "03",
      title: "AI & MACHINE LEARNING",
      subtitle: "Bringing Intelligence to the Web",
      description:
        "Integrating AI features like OCR, Chatbots, and OpenAI APIs to make web apps smarter and more interactive.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="min-h-screen bg-black text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-px h-1/2 bg-white transform rotate-12" />
          <div className="absolute bottom-1/4 right-1/4 w-1/2 h-px bg-white transform -rotate-12" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl lg:text-8xl font-brogetta mb-8"
            >
              HELLO, I'M SNEHA DAS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl lg:text-2xl font-mirage text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              A Developer & AI Data Science Student passionate about creating
              beautiful, functional digital experiences that make a difference.
            </motion.p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button
                onClick={() => navigate("/projects")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white font-mirage transition-all duration-300 hover:bg-white hover:text-black"
              >
                VIEW MY WORK
              </motion.button>

              <motion.button
                onClick={() => navigate("/contact")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-black font-mirage transition-all duration-300 hover:shadow-lg"
              >
                GET IN TOUCH
              </motion.button>
            </div>
          </motion.div>

          {/* Brief About Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-full h-96 lg:h-[500px] bg-gray-800 mb-8 relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={myPhoto}
                  alt="Sneha Das"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 border-4 border-white/10" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-brogetta mb-4">ABOUT ME</h3>
              <p className="text-lg font-mirage text-gray-300 leading-relaxed">
                I'm a passionate Developer and AI & Data Science student who
                loves crafting clean, responsive, and user-focused digital
                experiences.
              </p>
              <p className="font-mirage text-gray-400 leading-relaxed">
                My toolkit includes React, OCR,Firebase, JavaScript and Java —
                combining performance with creativity to bring designs to life.
              </p>
              <motion.button
                onClick={() => navigate("/about")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 font-mirage border border-gray-600 hover:border-white px-6 py-3"
              >
                <span>LEARN MORE ABOUT ME</span>
                <span>→</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl lg:text-8xl font-brogetta text-black mb-6">
              WHAT I DO
            </h2>
            <p className="text-xl font-mirage text-gray-600 max-w-3xl mx-auto">
              I’m a passionate Computer Science student, building my portfolio
              to showcase my projects, achievements, and learning journey across
              development, design, and innovation.
            </p>
          </motion.div>

          <div className="space-y-24">
            {projects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div
                  className={`relative ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden bg-gray-100 aspect-[4/3] group cursor-pointer"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </motion.div>
                </div>

                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center space-x-4 text-sm font-mirage text-gray-500">
                      <span>{project.category}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-brogetta text-black leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  <p className="font-mirage text-gray-600 text-lg leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-mirage bg-gray-100 text-gray-700 tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-6 pt-4">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center space-x-2 text-black hover:text-gray-600 font-mirage text-sm transition-colors"
                        >
                          <span>VIEW LIVE</span>
                          <span>↗</span>
                        </motion.button>
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 text-black hover:text-gray-600 font-mirage text-sm transition-colors"
                      >
                        <span>GITHUB</span>
                        <span>→</span>
                      </motion.button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-16"
          >
            <motion.button
              onClick={() => navigate("/projects")}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#000000",
                color: "#ffffff",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 border-2 border-black text-black font-mirage text-lg transition-all duration-300 hover:shadow-lg"
            >
              VIEW ALL PROJECTS
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-beige-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl lg:text-8xl font-brogetta text-black mb-6">
              AREAS I WORK IN
            </h2>
            <p className="text-xl font-mirage text-gray-600 max-w-3xl mx-auto">
              Exploring the intersection of web development, design, and AI —
              building projects that blend creativity with technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {focusAreas.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="bg-white p-8 border border-gray-200 hover:border-black transition-all duration-500 relative group cursor-pointer"
              >
                <motion.div
                  className="text-6xl font-brogetta text-gray-200 absolute top-4 right-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {service.number}
                </motion.div>

                <div className="relative z-10">
                  <div className="mb-6">
                    <h3 className="text-2xl font-brogetta text-black mb-2">
                      {service.title}
                    </h3>
                    <p className="text-lg font-mirage text-gray-500 italic">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="font-mirage text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-12"
          >
            <p className="font-mirage text-gray-600 mb-6">
              Ready to bring your vision to life?
            </p>
            <motion.button
              onClick={() => navigate("/contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-black text-white font-mirage transition-all duration-300 hover:shadow-lg"
            >
              LET'S WORK TOGETHER
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Name Meaning Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-brogetta text-black mb-6">
              WHAT MY NAME MEANS
            </h2>
            <p className="text-xl font-mirage text-gray-600">
              Each letter represents a core value that drives my work
            </p>
          </motion.div>

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
                  className="text-6xl lg:text-8xl font-brogetta mb-4 transition-colors duration-300 group-hover:text-gray-600"
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
                  <h4 className="font-brogetta text-lg mb-2 text-black">
                    {item.title}
                  </h4>
                  <p className="font-mirage text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
