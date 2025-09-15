import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    { id: 1, label: "DEV.TO", url: "https://dev.to/sneha_2004", icon: "(1)" },
    {
      id: 2,
      label: "LINKEDIN",
      url: "https://www.linkedin.com/in/sneha-das-61302227a/",
      icon: "(2)",
    },
    {
      id: 3,
      label: "GITHUB",
      url: "https://github.com/Snehadas2005",
      icon: "(3)",
    },
    {
      id: 4,
      label: "RESUME",
      url: "https://drive.google.com/drive/folders/1CYN2bZre-t4SKTt_3CF3yXz4EkHofuMi?usp=drive_link",
      icon: "(4)",
    },
  ];

  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transform rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="text-center mb-12">
          {/* Large Email CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center space-x-4 text-6xl lg:text-8xl font-brogetta mb-4">
              <span>LET'S</span>
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center"
              >
                <span className="text-black text-2xl lg:text-3xl">✉</span>
              </motion.div>
              <span>CONNECT</span>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-gray-300 font-mirage text-lg lg:text-xl max-w-2xl mx-auto"
            >
              READY TO TURN YOUR VISION INTO REALITY?
              <br />
              LET'S CREATE SOMETHING EXTRAORDINARY TOGETHER.
            </motion.p>
          </motion.div>

          {/* Email Address */}
          <motion.a
            href="mailto:sn2005eha26das@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block text-2xl lg:text-4xl font-brogetta text-white hover:text-gray-300 transition-colors duration-300 mb-12 group"
          >
            sn2005eha26das@gmail.com
            <motion.div
              className="h-0.5 bg-white group-hover:bg-gray-300 mt-2"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.a>

          {/* Contact Form CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-16"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#ffffff",
                color: "#000000",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white text-white font-mirage text-lg transition-all duration-300"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              SEND A PROJECT INQUIRY
            </motion.button>
          </motion.div>
        </div>

        {/* Social Links Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12 ml-[300px]"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#ffffff",
                color: "#000000",
              }}
              whileTap={{ scale: 0.95 }}
              className="text-center py-4 px-2 border border-gray-600 hover:border-white transition-all duration-300 group"
            >
              <div className="font-brogetta text-lg mb-1">{link.icon}</div>
              <div className="font-mirage text-sm">{link.label}</div>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-gray-400 font-mirage text-sm"
            >
              © {currentYear} SNEHA. ALL RIGHTS RESERVED.
              <span className="mx-2">•</span>
              DESIGNED & DEVELOPED WITH 🤍 & WATER
            </motion.div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
              whileHover={{ scale: 1.1, rotate: -90 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 font-mirage text-sm group"
            >
              <span>SCROLL BACK TO TOP</span>
              <motion.div
                className="w-8 h-8 rounded-full border border-gray-600 group-hover:border-white flex items-center justify-center transition-colors duration-300"
                whileHover={{ backgroundColor: "#ffffff" }}
              >
                <span className="text-lg group-hover:text-black">↑</span>
              </motion.div>
            </motion.button>
          </div>

          {/* Logo at Bottom */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center mt-10 mb-4"
          >
            <motion.img
              src="/logo-white.png"
              alt="Sneha Logo"
              className="mx-auto w-[120px] lg:w-[160px]  opacity-80 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
