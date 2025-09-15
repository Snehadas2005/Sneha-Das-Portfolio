import { motion } from "framer-motion";
import { useState } from "react";

const Works = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Firebase Chat App",
      category: "FULL STACK • OPEN SOURCE",
      year: "2025",
      description:
        "Real-time chat app with AI-based chatroom responses, profile management (bio, theme, profile image), chat history with Firestore, searchable dashboards, and persistent dark mode preferences.",
      tags: ["React", "Firebase", "Firestore", "AI Chatroom"],
      image: "/images/firebase-chat-app.png",
      github: "https://github.com/Snehadas2005/firebase-chat-app",
    },
    {
      id: 2,
      title: "Queer Station",
      category: "WEB PLATFORM",
      year: "2025",
      description:
        "A safe, inclusive platform built for the queer community with forums, resources, and a vibrant space for sharing and connection.",
      tags: ["React", "Tailwind", "Firebase"],
      image: "/images/queer-station.png",
      live: "https://queerstationdev.netlify.app/",
      github: "https://github.com/Snehadas2005/QueerStation",
    },
    {
      id: 3,
      title: "ShopVerse",
      category: "E-COMMERCE",
      year: "2024",
      description:
        "Modern, responsive e-commerce platform with advanced product filters, cart management, and a seamless checkout experience.",
      tags: ["HTML5", "JavaScript", "Three.js"],
      image: "/images/shopverse.png",
      live: "https://shopverse-444vs.netlify.app/",
      github: "https://github.com/your-username/shopverse",
    },
    {
      id: 4,
      title: "Beyond Career Landing Page",
      category: "LANDING PAGE",
      year: "2024",
      description:
        "Responsive landing page for a career guidance startup featuring animated hero section, success stories carousel, and functional contact form.",
      tags: ["HTML", "CSS", "JS", "Three.js"],
      image: "/images/beyond-career.png",
      live: "https://beyondcareerpage.netlify.app/",
      github: "https://github.com/Snehadas2005/beyond-career-project",
    },
    {
      id: 5,
      title: "AgriTech Web Application",
      category: "OPEN SOURCE • UI/UX REVAMP",
      year: "2024",
      description:
        "Redesigned the AgriTech dashboard with a modular card-based layout, consistent typography and colors, improved responsive navigation, added feature icons, and optimized layout for both desktop and mobile users.",
      tags: ["HTML", "CSS", "JavaScript", "Flask/Node.js", "AI/ML"],
      image: "/images/agritech.png",
      live: "https://agri-tech-lime.vercel.app/",
      github: "https://github.com/Snehadas2005/AgriTech",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-20 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
            <div>
              <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-6xl lg:text-8xl font-brogetta text-black mb-4"
              >
                PROJECTS
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="font-mirage text-gray-600 max-w-md text-right"
            >
              A selection of work that reflects my skills in React, Firebase,
              and modern web development.
            </motion.p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-24 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Image */}
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

              {/* Info */}
              <div
                className={`space-y-6 ${
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                <div className="space-y-2">
                  <motion.div
                    className="flex items-center space-x-4 text-sm font-mirage text-gray-500"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <span>{project.category}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </motion.div>

                  <motion.h3
                    className="text-3xl lg:text-4xl font-brogetta text-black leading-tight"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    {project.title}
                  </motion.h3>
                </div>

                <motion.p
                  className="font-mirage text-gray-600 text-lg leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  {project.description}
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-mirage bg-gray-100 text-gray-700 tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  className="flex space-x-6 pt-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
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
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <a
            href="https://github.com/Snehadas2005"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
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
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Works;