import { motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Firebase Chat App",
      category: "CHATBOT • OPEN SOURCE",
      year: "2025",
      description:
        "Real-time chat app with AI-based chatroom responses, profile management (bio, theme, profile image), chat history with Firestore, searchable dashboards, and persistent dark mode preferences.",
      tags: ["React", "GenAI", "AI Chatroom"],
      image: "/images/firebase-chat-app.png",
      github: "https://github.com/Snehadas2005/firebase-chat-app",
    },
    {
      id: 2,
      title: "NotesVault",
      category: "WEB APPLICATION",
      year: "2025",
      description:
        "Developed a secure note management system with a Flask backend structured inside the root repository. Implemented standardized configuration, .gitignore, and requirements.txt for maintainability and local setup. Ensured best backend practices without using any AI-assisted code or automation. The backend enables future-ready API integrations for scalable performance and collaboration.",
      tags: ["Flask", "Python", "Frontend Integration"],
      image: "/images/notesvault.png",
      live: "https://opensource-society.github.io/notesvault/main/pages/",
      github: "https://github.com/Snehadas2005/notesvault",
    },
    {
      id: 3,
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
      id: 4,
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

    {
      id: 5,
      title: "AI Symptoms Checker",
      category: "AI • MACHINE LEARNING • HEALTHCARE",
      year: "2025",
      description:
        "An intelligent medical assistant built using Flask and machine learning that predicts possible diseases based on user-reported symptoms. The system utilizes trained models for pattern recognition, offering quick, data-driven health insights with a simple and clean UI.",
      tags: [
        "Flask",
        "Python",
        "Pandas",
        "Scikit-learn",
        "Numpy",
        "Joblib",
        "AI/ML",
      ],
      image: "/images/Symptoms.png",
      github: "https://github.com/Snehadas2005/SwasthyaSetu",
    },

    {
      id: 6,
      title: "Mental Health Myths & Facts Post",
      category: "SOCIAL MEDIA DESIGN • AWARENESS CAMPAIGN",
      year: "2025",
      description:
        "Created an Instagram post for Kafila focused on debunking mental health myths and spreading awareness. Collaborated on content design and captions to promote inclusivity and a supportive mental health culture.",
      tags: ["Canva", "Content Design", "Mental Health", "Awareness Campaign"],
      image: "/images/myths.png",
      live: "https://www.instagram.com/p/DEuy3u3Sxq9/",
    },

    {
      id: 7,
      title: "Portfolio Prototype",
      category: "UI/UX • DESIGN SYSTEM",
      year: "2025",
      description:
        "Developed an interactive portfolio prototype in Figma featuring a rotating showcase effect and clean, minimal layout. Designed for fluid navigation, consistent typography, and modern visual hierarchy.",
      tags: ["Figma", "Prototyping", "UI/UX Design", "Animation"],
      image: "/images/figma.png",
      live: "https://www.figma.com/proto/jWOIKtoTmXwDMXliZmNucc/Portfolio?page-id=0%3A1&node-id=44-498&m=draw",
    },

    {
      id: 8,
      title: "Self-Love Poetry Reel",
      category: "VIDEO EDITING • SOCIAL MEDIA",
      year: "2025",
      description:
        "Edited and produced Kafila’s Self-Love Poetry reel using Canva, enhancing the visual flow, typography, and pacing to align with the emotional tone of the poetry and campaign theme.",
      tags: ["Canva", "Video Editing", "Social Media", "Storytelling"],
      image: "/images/poetry.png",
      live: "https://www.canva.com/design/DAGdA4v-2Jk/_sYxBwrT5KCwEA65M8K65w/edit",
    },
    {
      id: 9,
      title: "Kafila Farewell Video",
      category: "VIDEO EDITING • EVENT PRODUCTION",
      year: "2025",
      description:
        "Fully edited and designed Kafila’s farewell video, combining event highlights, transitions, and emotional storytelling to celebrate the journey of members and the organization’s milestones.",
      tags: ["Canva", "Video Editing", "Storytelling", "Event Media"],
      image: "/images/video1pic.png",
      live: "https://www.canva.com/design/DAGoaXogMU8/dMK5Jx2m5gqrAq_38SMcrw/watch",
    },
  {
      id: 10,
      title: "SentraSec AI",
      category: "AI • CYBERSECURITY • WEB DEVELOPMENT",
      year: "2025",
      description:
        "An AI-powered cybersecurity platform built to democratise enterprise-grade protection. Developed using Gemini AI and Firebase, the platform enables real-time threat detection, risk classification, and security automation for developers and small businesses. Secured 2nd Runner-Up position at Built-A-Thon 2025 by GDG Noida.",
      tags: ["AI", "Cybersecurity", "Firebase", "Next.js", "Gemini API"],
      image: "/images/SentraSec.png",
      live: "https://sec-sentra-ai-frontend.vercel.app/",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-20 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
            <div>
              <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-6xl lg:text-8xl font-brogetta text-black mb-4"
              >
                MY PROJECTS
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="font-mirage text-gray-600 max-w-md lg:text-right"
            >
              A blend of design thinking and modern development — from AI apps
              to creative digital media.
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
              VIEW MORE ON GITHUB
            </motion.button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
