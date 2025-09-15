import { motion } from 'framer-motion';
import { useRouteError, useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  const goBlog = () => {
    navigate('/blog');
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
          {[...Array(400)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: (i % 20) * 0.05,
                ease: "easeInOut"
              }}
              className="border-r border-b border-gray-200"
            />
          ))}
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
        {/* Error Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="text-8xl lg:text-9xl font-brogetta text-black mb-4">
            404
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-3xl lg:text-4xl font-brogetta text-black mb-4">
            PAGE NOT FOUND
          </h1>
          
          <p className="text-lg font-mirage text-gray-600 leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
            {error && (
              <span className="block mt-2 text-sm text-gray-500">
                {error.statusText || error.message}
              </span>
            )}
          </p>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <motion.button
            onClick={goHome}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-black text-white font-mirage transition-all duration-300 hover:bg-gray-800"
          >
            GO HOME
          </motion.button>
          
          <motion.button
            onClick={goBlog}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-black text-black font-mirage transition-all duration-300 hover:bg-black hover:text-white"
          >
            VISIT BLOG
          </motion.button>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-4 h-4 border border-gray-300 opacity-30"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-6 h-6 border border-gray-300 opacity-20"
        />
      </div>
    </div>
  );
};

export default ErrorPage;