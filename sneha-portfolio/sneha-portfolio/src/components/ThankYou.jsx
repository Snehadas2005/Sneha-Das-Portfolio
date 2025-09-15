import { motion } from 'framer-motion';

const ThankYou = ({ onBackToHome }) => {
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

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10 sm:mb-20 mb-10">
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="w-24 h-24 mx-auto bg-black rounded-full flex items-center justify-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-white text-4xl"
            >
              ✓
            </motion.div>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-6xl lg:text-8xl font-brogetta text-black mb-4 leading-none">
            BIG
          </h1>
          <h1 className="text-6xl lg:text-8xl font-brogetta text-black leading-none">
            THANKS
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg font-mirage text-gray-600 mt-4"
          >
            FOR TRUSTING ME WITH YOUR PROJECT
          </motion.p>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mb-12 space-y-6"
        >
          <p className="text-xl font-mirage text-black leading-relaxed max-w-2xl mx-auto">
            EVERY BRAND IS A LITTLE UNIVERSE — CAN'T WAIT TO DESIGN YOURS!
          </p>
          
          <p className="font-mirage text-gray-600 max-w-xl mx-auto">
            I'LL PING YOU SHORTLY WITH THE NEXT STEPS.
          </p>
        </motion.div>

        {/* Return Home Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mb-16"
        >
          <motion.button
            onClick={onBackToHome}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-black text-black font-mirage hover:bg-black hover:text-white transition-all duration-300"
          >
            [ RETURN HOME ]
          </motion.button>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="border-t border-gray-200 pt-8"
        >
          <p className="font-mirage text-gray-500 text-sm mb-4">
            Questions? Feel free to reach out anytime
          </p>
          <p className="font-brogetta text-xl text-black">
            sn2005eha26das@gmail.com
          </p>
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

export default ThankYou;