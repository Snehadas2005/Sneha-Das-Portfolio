import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'HOME', path: '/home' },
    { id: 'about', label: 'ABOUT', path: '/about' },
    { id: 'projects', label: 'PROJECTS', path: '/projects' },
    { id: 'achievements', label: 'ACHIEVEMENTS', path: '/achievements' },
    { id: 'certifications', label: 'CERTIFICATIONS', path: '/certifications' },
    { id: 'contact', label: 'CONTACT', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToPage = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const isActivePage = (path) => {
    return location.pathname === path;
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Name */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer flex items-center space-x-3"
            onClick={() => navigateToPage('/')}
          >
            <img
              src="/logo.png"
              alt="Sneha Logo"
              className="w-[52px] h-[52px] lg:w-[60px] lg:h-[60px] object-contain"
            />
            <h1 className="text-2xl lg:text-3xl font-brogetta text-black tracking-tight">
              SNEHA
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => navigateToPage(item.path)}
                className={`relative px-4 py-2 text-sm font-mirage transition-colors duration-300 ${
                  isActivePage(item.path)
                    ? 'text-black'
                    : 'text-gray-600 hover:text-black'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                [ {item.label} ]
                {isActivePage(item.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-8 h-8 flex flex-col justify-center items-center space-y-1"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 6 : 0
              }}
              className="w-6 h-0.5 bg-black transition-all"
            />
            <motion.div
              animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              className="w-6 h-0.5 bg-black transition-all"
            />
            <motion.div
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -6 : 0
              }}
              className="w-6 h-0.5 bg-black transition-all"
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 overflow-hidden"
            >
              <div className="py-6 px-4 space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => navigateToPage(item.path)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`block w-full text-left py-3 px-4 text-lg font-mirage transition-colors ${
                      isActivePage(item.path)
                        ? 'text-black bg-gray-50'
                        : 'text-gray-600 hover:text-black hover:bg-gray-50'
                    }`}
                  >
                    [ {item.label} ]
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;