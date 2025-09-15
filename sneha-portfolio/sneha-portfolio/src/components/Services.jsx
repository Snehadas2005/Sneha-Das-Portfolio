import { motion } from 'framer-motion';
import { useState } from 'react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      number: '01',
      title: 'PERSONALIZED WEBSITES',
      subtitle: 'Tailored for You',
      description:
        'I design and build customized websites that truly reflect your personality, brand, or business — clean, modern, and functional.',
      features: [
        'Portfolio Websites',
        'Business Landing Pages',
        'Personal Blogs',
        'Responsive & Mobile-Friendly Layouts',
        'Smooth Animations & Microinteractions',
      ],
    },
    {
      id: 2,
      number: '02',
      title: 'WEB DESIGN',
      subtitle: 'User-Centered UI/UX',
      description:
        'Crafting beautiful, intuitive interfaces with a focus on usability, accessibility, and a memorable experience.',
      features: [
        'UI/UX Wireframes & Prototypes',
        'Color, Typography & Style Systems',
        'Interactive Layouts with Framer Motion',
        'User-Friendly Navigation',
        'Dark/Light Theme Support',
      ],
    },
    {
      id: 3,
      number: '03',
      title: 'DEVELOPMENT',
      subtitle: 'Full-Stack Solutions',
      description:
        'Bringing ideas to life with clean code and scalable architecture using modern tech stacks.',
      features: [
        'Frontend Development (React, Tailwind)',
        'Backend APIs (Node.js, Express)',
        'Database Integration (MongoDB, Firebase)',
        'Authentication & User Management',
        'Performance Optimization',
      ],
    },
  ];

  const process = [
    { step: '01', title: 'DISCOVERY', description: 'Understand your vision and requirements clearly.' },
    { step: '02', title: 'STRATEGY', description: 'Plan site structure, design style, and features.' },
    { step: '03', title: 'DESIGN', description: 'Create mockups and prototypes that fit your needs.' },
    { step: '04', title: 'DEVELOPMENT', description: 'Turn designs into a working, responsive website.' },
    { step: '05', title: 'LAUNCH', description: 'Deploy and make your project live on the web.' },
    { step: '06', title: 'SUPPORT', description: 'Provide updates, fixes, and improvements when needed.' },
  ];

  return (
    <div className="min-h-screen bg-beige-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl lg:text-8xl font-brogetta text-black mb-8"
          >
            WHAT I DO
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-mirage text-xl text-gray-600 max-w-3xl mx-auto"
          >
            I help people and businesses build beautiful, functional websites — from
            concept to launch — with a focus on clean design and smooth user experience.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              className="group cursor-pointer"
            >
              <div className="bg-white p-8 lg:p-12 border border-gray-200 hover:border-black transition-all duration-500 relative">
                {/* Service Number */}
                <motion.div
                  className="text-6xl lg:text-8xl font-brogetta text-gray-200 absolute top-4 right-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {service.number}
                </motion.div>

                <div className="relative z-10">
                  <div className="mb-6">
                    <h3 className="text-3xl lg:text-4xl font-brogetta text-black mb-2">
                      {service.title}
                    </h3>
                    <p className="text-lg font-mirage text-gray-500 italic">{service.subtitle}</p>
                  </div>

                  <p className="font-mirage text-gray-600 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Features */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: hoveredService === service.id ? 1 : 0,
                      height: hoveredService === service.id ? 'auto' : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mb-6"
                  >
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <span className="w-1.5 h-1.5 bg-black rounded-full" />
                          <span className="font-mirage text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-gray-200 pt-20 mb-20"
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl lg:text-6xl font-brogetta text-black mb-4">MY PROCESS</h3>
            <p className="font-mirage text-gray-600 text-lg max-w-2xl mx-auto">
              A simple, clear process from idea to launch so you know exactly what to expect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-white border border-gray-100 hover:border-gray-200 transition-all duration-300"
              >
                <div className="text-4xl font-brogetta text-black mb-4">{step.step}</div>
                <h4 className="text-xl font-brogetta text-black mb-3">{step.title}</h4>
                <p className="font-mirage text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
