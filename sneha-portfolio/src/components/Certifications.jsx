import React from "react";
import { motion } from "framer-motion";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Full Stack Web Development",
      issuer: "Udemy",
      date: "2025",
      credentialId: "UC-50171242-03ca-4570-98fc-2048f3043e31",
      description:
        "Comprehensive course covering frontend and backend development using HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.",
      skills: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JavaScript",
        "Full Stack Development",
      ],
      verified: true,
      link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-50171242-03ca-4570-98fc-2048f3043e31.pdf",
    },
    {
      id: 2,
      title: "AICTE Virtual Internship - AI & ML",
      issuer: "Google & AICTE",
      date: "2025",
      credentialId: "AICTE-GOOGLE-AIML-2025",
      description:
        "Completed a virtual internship focusing on artificial intelligence and machine learning fundamentals, supervised by Google and AICTE.",
      skills: [
        "Python",
        "AI",
        "Machine Learning",
        "Data Analysis",
        "TensorFlow",
        "Scikit-learn",
      ],
      verified: true,
      link: "https://www.linkedin.com/in/sneha-das-61302227a/details/certifications/1760475309634/single-media-viewer/?profileId=ACoAAEP9ku8BoXWGLLpmBVYBllIaKM_ao1SsTDk",
    },
    {
      id: 3,
      title: "Google Play Store Academy Certification",
      issuer: "Google Play Academy",
      date: "2025",
      credentialId: "GPA-2025",
      description:
        "Earned certification for understanding Google Play Console, app monetization strategies, and policies for Android app publishing.",
      skills: [
        "Android",
        "App Monetization",
        "Google Play Console",
        "App Publishing",
      ],
      verified: true,
      link: "https://www.credential.net/e477f7fb-0d70-46cd-bdc9-1529d5d6570d#acc.2kMD98RL",
    },
    {
      id: 4,
      title: "Postman API Fundamentals Expert",
      issuer: "Postman",
      date: "2025",
      credentialId: "POSTMAN-FUNDAMENTALS-2025",
      description:
        "Certified in Postman API testing, collection management, environment setup, and collaboration workflows for efficient API development.",
      skills: [
        "API Testing",
        "Postman",
        "REST APIs",
        "Automation",
        "Collaboration",
      ],
      verified: true,
      link: "https://badgr.com/public/assertions/Awy-B1R0REyhcERiMOSk7Q",
    },
    {
      id: 5,
      title: "Google Android Developer Virtual Internship",
      issuer: "Google & AICTE",
      date: "2025",
      credentialId: "0023a298aa14bb542ecee9e07c5bfe9c",
      description:
        "Completed an Android development virtual internship focused on building, testing, and deploying mobile applications using modern tools.",
      skills: [
        "Android Development",
        "Kotlin",
        "Java",
        "UI/UX for Mobile",
        "Firebase Integration",
      ],
      verified: true,
      link: "https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=0023a298aa14bb542ecee9e07c5bfe9c",
    },
    {
      id: 6,
      title: "Pinnacle Labs Internship",
      issuer: "Pinnacle Labs",
      date: "2024",
      credentialId: "PINNACLE-INTERNSHIP-2024",
      description:
        "Completed a one-month internship at Pinnacle Labs, developing three web projects — portfolio, e-commerce, and event organizer websites.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Firebase",
        "Full Stack Development",
      ],
      verified: true,
      link: "https://www.linkedin.com/in/sneha-das-61302227a/overlay/1748706713237/single-media-viewer/?profileId=ACoAAEP9ku8BoXWGLLpmBVYBllIaKM_ao1SsTDk",
    },
  ];

  const learningPaths = [
    {
      title: "Frontend Development",
      progress: 95,
      completedCerts: 5,
      totalCerts: 5,
    },
    {
      title: "Backend & Database",
      progress: 70,
      completedCerts: 3,
      totalCerts: 4,
    },
    {
      title: "UI/UX Design",
      progress: 54,
      completedCerts: 3,
      totalCerts: 3,
    },
    {
      title: "Development Tools",
      progress: 82,
      completedCerts: 4,
      totalCerts: 4,
    },
  ];

  return (
    <div className="min-h-screen bg-white py-20">
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
            CERTIFICATIONS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl font-mirage text-gray-600 max-w-3xl mx-auto"
          >
            Continuous learning and skill validation through recognized
            certifications and professional development programs.
          </motion.p>
        </motion.div>

        {/* Learning Progress */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-brogetta text-black mb-8 text-center">
            LEARNING PROGRESS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningPaths.map((path, index) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="bg-gray-50 p-6 rounded-lg border border-gray-100"
              >
                <h3 className="font-brogetta text-lg text-black mb-4">
                  {path.title}
                </h3>
                <div className="mb-4">
                  <div className="flex justify-between text-sm font-mirage text-gray-600 mb-2">
                    <span>Progress</span>
                    <span>{path.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <motion.div
                      className="bg-black h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${path.progress}%` }}
                      transition={{ delay: 1 + index * 0.1, duration: 1 }}
                    />
                  </div>
                </div>
                <div className="text-sm font-mirage text-gray-600">
                  {path.completedCerts}/{path.totalCerts} Certifications
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:border-gray-300 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-brogetta text-black mb-2 group-hover:text-gray-700 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm font-mirage text-gray-500 mb-2">
                    <span>{cert.issuer}</span>
                    <span>•</span>
                    <span>{cert.date}</span>
                  </div>
                  {cert.credentialId && (
                    <div className="text-xs font-mirage text-gray-400 mb-4">
                      ID: {cert.credentialId}
                    </div>
                  )}
                </div>
                {cert.verified && (
                  <div className="flex-shrink-0 ml-4">
                    <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-xs font-mirage rounded-full">
                      ✓ Verified
                    </div>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="font-mirage text-gray-600 leading-relaxed mb-6">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-white text-gray-700 text-xs font-mirage border border-gray-200 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Link */}
              <div className="flex justify-between items-center">
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 text-black hover:text-gray-600 font-mirage text-sm transition-colors"
                >
                  <span>VIEW CREDENTIAL</span>
                  <span>↗</span>
                </motion.a>

                {/* Certificate icon */}
                <div className="text-2xl">🏆</div>
              </div>

              {/* Hover effect line */}
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
          className="text-center bg-black text-white p-12 rounded-lg"
        >
          <h3 className="text-3xl font-brogetta mb-4">
            CONTINUOUS LEARNING JOURNEY
          </h3>
          <p className="font-mirage text-gray-300 mb-8 max-w-2xl mx-auto">
            I believe in lifelong learning and staying up-to-date with the
            latest technologies and best practices in web development and
            design.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black font-mirage transition-all duration-300 hover:shadow-lg"
            >
              WORK WITH ME
            </motion.a>
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white text-white font-mirage transition-all duration-300 hover:bg-white hover:text-black"
            >
              VIEW MY PROJECTS
            </motion.a>
          </div>
        </motion.div>

        {/* Learning Resources */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-brogetta text-black mb-6">
            LEARNING PLATFORMS
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Udemy",
              "Google",
              "AICTE",
              "Postman",
              "Google Play Academy",
              "Pinnacle Labs"
            ].map((platform, index) => (
              <motion.div
                key={platform}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 + index * 0.1, duration: 0.4 }}
                className="px-6 py-3 bg-gray-100 text-gray-700 font-mirage text-sm rounded-full border border-gray-200"
              >
                {platform}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;
