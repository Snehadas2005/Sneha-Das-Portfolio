// src/components/LoadingScreen.jsx
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
          {[...Array(400)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: (i % 20) * 0.1,
                ease: "easeInOut"
              }}
              className="border-r border-b border-gray-200"
            />
          ))}
        </div>
      </div>

      <div className="text-center relative z-10">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.h1
            className="text-4xl lg:text-6xl font-brogetta text-black"
            animate={{ 
              textShadow: [
                "0 0 0 rgba(0,0,0,0)",
                "2px 2px 4px rgba(0,0,0,0.1)",
                "0 0 0 rgba(0,0,0,0)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            SNEHA
          </motion.h1>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-12"
        >
          <div className="font-mirage text-lg text-gray-600 mb-4">
            CRAFTING DIGITAL EXPERIENCES
          </div>
          
          <motion.div
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="font-mirage text-sm text-gray-400"
          >
            PLEASE WAIT...
          </motion.div>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="font-mirage text-xs text-gray-500">LOADING</span>
            <span className="font-mirage text-xs text-gray-500">{progress}%</span>
          </div>
          
          <div className="h-px bg-gray-300 relative overflow-hidden">
            <motion.div
              className="h-full bg-black absolute left-0 top-0"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Rotating Elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="w-96 h-96 border border-gray-200 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute inset-16 border border-gray-100 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;