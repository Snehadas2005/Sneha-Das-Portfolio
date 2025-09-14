import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import myPhoto from "../assets/photos/image1.png";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const letterVariants = {
    initial: { opacity: 0, y: 50, rotateX: -90 },
    animate: { opacity: 1, y: 0, rotateX: 0 },
    hover: {
      scale: 1.1,
      color: "#6b7280",
      transition: { duration: 0.2 },
    },
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-beige-100">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.1) 0%, transparent 50%)`,
        }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-20 w-4 h-4 border border-gray-300"
      />

      <motion.div
        animate={{ y: [0, 30, 0], rotate: [0, -180, -360] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-20 right-20 w-6 h-6 bg-black opacity-20"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        {/* Year Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-block mb-8 px-4 py-2 border border-gray-300 text-sm font-mirage tracking-wider"
        >
          2025
        </motion.div>

        {/* Main Heading with Staggered Animation */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="mb-8"
        >
          <div className="text-8xl lg:text-[12rem] xl:text-[15rem] font-brogetta leading-none tracking-tight">
            {["C", "R", "E", "A", "T", "I", "V", "E"].map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                whileHover="hover"
                className="inline-block cursor-default"
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          <div className="text-8xl lg:text-[12rem] xl:text-[15rem] font-brogetta leading-none tracking-tight -mt-4">
            {["D", "E", "S", "I", "G", "N", "E", "R"].map((letter, index) => (
              <motion.span
                key={index + 8}
                variants={letterVariants}
                whileHover="hover"
                className="inline-block cursor-default"
                transition={{ delay: (index + 8) * 0.1, duration: 0.8 }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Profile Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="w-64 h-70 mx-auto mb-8 relative"
        >
          <div className="w-full h-full rounded-lg overflow-hidden shadow-lg relative">
            {/* Image with slight parallax effect */}
            <motion.img
              src={myPhoto}
              alt="Sneha Das"
              className="w-full h-full object-cover"
              style={{
                transform: `translate(${mousePosition.x * 0.02}px, ${
                  mousePosition.y * 0.02
                }px)`,
              }}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            />

            {/* Overlay effect */}
            <motion.div
              className="absolute inset-0 bg-black opacity-0 flex items-center justify-center"
              whileHover={{ opacity: 0.1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Decorative frame */}
            <div className="absolute -inset-4 border border-gray-300 -z-10" />
          </div>
        </motion.div>

        {/* Subtitle and Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mb-8"
        >
          <div className="text-lg lg:text-xl font-mirage text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
            BASED IN INDIA
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center space-y-2 lg:space-y-0 lg:space-x-8 text-base font-mirage">
            <span> WEB DESIGN (UX/UI)</span>
            <span> WEB DEVELOPMENT</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-20"
        >
          <motion.button
            onClick={scrollToAbout}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#000000",
              color: "#ffffff",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-black text-black font-mirage transition-all duration-300 hover:shadow-lg"
          >
            EXPLORE MY WORK
          </motion.button>

          <motion.button
            onClick={() => {
              window.location.href = '/blog';
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-black text-white font-mirage transition-all duration-300 hover:shadow-lg border-2 border-black"
          >
            CREATIVE JOURNAL
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="absolute bottom-3 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center space-y-2 cursor-pointer"
            onClick={scrollToAbout}
          >
            <span className="text-sm font-mirage text-gray-500 tracking-wider">
              SCROLL
            </span>
            <div className="w-px h-8 bg-gray-400" />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-2 h-2 bg-gray-400 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
