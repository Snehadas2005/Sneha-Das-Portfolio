import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../config/firebase";
import { getIdToken } from "firebase/auth";

const Contact = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    budget: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const budgetOptions = ["Under ₹200", "₹200 - ₹500", "₹500+"];
  const projectTypes = [
    "Web Design",
    "Web Development",
    "Personalized Websites",
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sneha-das-61302227a/",
    },
    { name: "GitHub", url: "https://github.com/Snehadas2005" },
    { name: "Dev.to", url: "https://dev.to/sneha_2004" },
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const userToken = await getIdToken(auth.currentUser, true);
      const contactData = {
        ...formData,
        timestamp: new Date(),
        status: "new",
        userToken,
      };

      await addDoc(collection(db, "contacts"), contactData);

      const emailParams = {
        name: formData.name,
        email: formData.email,
        company: formData.company || "N/A",
        project: formData.project || "N/A",
        budget: formData.budget || "N/A",
        message: formData.message,
        time: new Date().toLocaleString(),
        to_email: "sn2005eha26das@gmail.com",
      };

      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        emailParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setTimeout(() => {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          project: "",
          budget: "",
          message: "",
        });
        setIsSubmitting(false);
        onSubmit && onSubmit();
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    focus: { scale: 1.02, transition: { duration: 0.2 } },
  };

  return (
    <div className="min-h-screen bg-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-black rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-black opacity-10 rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl lg:text-8xl font-brogetta text-black mb-8"
          >
            LET'S CREATE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-mirage text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Ready to bring your vision to life? Let's discuss your project and
            explore how we can create something extraordinary together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center justify-center space-x-4 text-sm font-mirage text-gray-400"
          >
            <span>AVAILABLE FOR PROJECTS</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>RESPONSE WITHIN 24H</span>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-brogetta text-black mb-4">
                  GET IN TOUCH
                </h3>
                <div className="space-y-4">
                  <motion.a
                    href="mailto:sn2005eha26das@gmail.com"
                    whileHover={{ scale: 1.05, color: "#6b7280" }}
                    className="block text-xl font-brogetta text-black transition-colors duration-300"
                  >
                    sn2005eha26das@gmail.com
                  </motion.a>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-brogetta text-black mb-4">
                  LOCATION
                </h3>
                <p className="font-mirage text-gray-600 leading-relaxed">
                  Based in India
                  <br />
                  Working globally with clients
                  <br />
                  Available for project collaboration
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-brogetta text-black mb-4">
                  SOCIAL
                </h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((platform) => (
                    <motion.a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 border border-gray-300 hover:border-black text-sm font-mirage transition-all duration-300"
                    >
                      {platform.name}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 font-mirage text-sm"
              >
                Thank you! Your message has been sent successfully. I'll get
                back to you within 24 hours.
              </motion.div>
            )}
            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 font-mirage text-sm"
              >
                Sorry, there was an error sending your message. Please try again
                or contact me directly via email.
              </motion.div>
            )}

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  variants={inputVariants}
                  initial="initial"
                  animate="animate"
                  whileFocus="focus"
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-sm font-mirage text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300 font-mirage"
                    placeholder="Your full name"
                  />
                </motion.div>
                <motion.div
                  variants={inputVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm font-mirage text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300 font-mirage"
                    placeholder="your.email@domain.com"
                  />
                </motion.div>
              </div>
              <motion.div
                variants={inputVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-mirage text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("company")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300 font-mirage"
                  placeholder="Your company name"
                />
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  variants={inputVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-sm font-mirage text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("project")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300 font-mirage appearance-none bg-white"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </motion.div>
                <motion.div
                  variants={inputVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 0.5 }}
                >
                  <label className="block text-sm font-mirage text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("budget")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300 font-mirage appearance-none bg-white"
                  >
                    <option value="">Select budget range</option>
                    {budgetOptions.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </motion.div>
              </div>
              <motion.div
                variants={inputVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.6 }}
              >
                <label className="block text-sm font-mirage text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300 font-mirage resize-vertical"
                  placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                />
              </motion.div>
              <motion.div
                variants={inputVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.7 }}
                className="pt-4"
              >
                <motion.button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  className={`w-full px-8 py-4 font-mirage text-lg transition-all duration-300 ${
                    isSubmitting
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>SENDING...</span>
                    </div>
                  ) : (
                    "SEND PROJECT INQUIRY"
                  )}
                </motion.button>
                <p className="text-xs font-mirage text-gray-500 mt-3 text-center">
                  By submitting this form, you agree to our privacy policy and
                  terms of service.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
