import { motion } from "framer-motion";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Build-a-thon 2nd runner up",
      organization: "Google Developer Groups Noida",
      date: "2025",
      description:
        "Secured 2nd Runner-Up position at Built-A-Thon 2025, organized by Google Developer Group Noida (GDG Noida) during DevFest 2025 for developing SentraSec AI — an AI-powered cybersecurity platform that democratizes enterprise-grade security for all.",
      category: "Achievement",
      icon: "🏆",
    },
    {
      id: 2,
      title: "Active Member - GDG",
      organization: "Google Developer Groups, Galgotias University",
      date: "2025",
      description:
        "Active member of GDG oC GU, engaging in developer sessions, collaborative projects, and community-led tech events to enhance technical skills and networking. Along with memeber of GDG Cloud New Delhi and GDG New Delhi",
      category: "Community",
      icon: "💬",
    },
    {
      id: 3,
      title: "GSSOC '25 Open Source Contributor",
      organization: "GirlScript Summer of Code",
      date: "2025",
      description:
        "Contributed to multiple open-source projects under GSSOC 2025, focusing on frontend development, feature enhancement, and UI/UX improvements.",
      category: "Open Source",
      icon: "🌟",
    },
    {
      id: 4,
      title: "Volunteer - NayePankh Foundation",
      organization: "NayePankh Foundation",
      date: "2025",
      description:
        "Volunteered for NayePankh Foundation, supporting social impact initiatives aimed at community welfare and youth development.",
      category: "Social Impact",
      icon: "🌿",
    },
    {
      id: 5,
      title: "Winner - Frontend JuneTh Challenge",
      organization: "Dev Community",
      date: "2025",
      description:
        "Won the Dev Community Frontend JuneTh Challenge by building a visually appealing and responsive interface using modern web technologies.",
      category: "Achievement",
      icon: "🏆",
    },
    {
      id: 6,
      title: "Team Leader - SIH Pre-Qualified Project",
      organization: "Smart India Hackathon",
      date: "2024",
      description:
        "Led a pre-qualified team for Smart India Hackathon 2024, developing innovative solutions to real-world challenges using modern tech stacks.",
      category: "Hackathon",
      icon: "🚀",
    },
    {
      id: 7,
      title: "Secretary - Rotary Club of BMVB ASMA",
      organization: "Rotary International",
      date: "2021",
      description:
        "Served as Secretary, coordinating youth-driven social service events and leading community initiatives under Rotary Club of BMVB ASMA.",
      category: "Leadership",
      icon: "🤝",
    },
  ];

  const stats = [
    { number: "45+", label: "Projects Completed" },
    { number: "5+", label: "Technologies Mastered" },
    { number: "10+", label: "Open Source Contributions" },
    { number: "2", label: "Years of Learning" },
  ];

  return (
    <div className="min-h-screen bg-beige-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        {/* Header */}
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
            className="text-6xl lg:text-8xl font-brogetta text-black mb-8"
          >
            ACHIEVEMENTS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl font-mirage text-gray-600 max-w-3xl mx-auto"
          >
            Milestones and accomplishments that mark my journey in developement
            and design innovation.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
              className="text-center bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="text-4xl lg:text-5xl font-brogetta text-black mb-2">
                {stat.number}
              </div>
              <div className="font-mirage text-gray-600 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:border-gray-300 transition-all duration-300 group"
            >
              {/* Icon and Category */}
              <div className="flex items-center justify-between mb-6">
                <div className="text-4xl">{achievement.icon}</div>
                <div className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-mirage tracking-wider rounded-full">
                  {achievement.category}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-brogetta text-black group-hover:text-gray-700 transition-colors">
                  {achievement.title}
                </h3>

                <div className="flex items-center space-x-4 text-sm font-mirage text-gray-500">
                  <span>{achievement.organization}</span>
                  <span>•</span>
                  <span>{achievement.date}</span>
                </div>

                <p className="font-mirage text-gray-600 leading-relaxed">
                  {achievement.description}
                </p>
              </div>

              {/* Hover indicator */}
              <motion.div
                className="h-1 bg-black mt-6 rounded-full"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{ originX: 0 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-20 bg-white p-12 rounded-lg shadow-sm border border-gray-100"
        >
          <h3 className="text-3xl font-brogetta text-black mb-4">
            LET'S CREATE SOMETHING AMAZING
          </h3>
          <p className="font-mirage text-gray-600 mb-8 max-w-2xl mx-auto">
            These achievements are just the beginning. I'm always looking for
            new challenges and opportunities to grow and create impactful work.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-black text-white font-mirage transition-all duration-300 hover:shadow-lg"
            >
              VIEW MY PROJECTS
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-black text-black font-mirage transition-all duration-300 hover:bg-black hover:text-white"
            >
              GET IN TOUCH
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;
