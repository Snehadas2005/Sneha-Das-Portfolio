import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import LandingScreen from "./components/LandingScreen";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ErrorPage from "./pages/ErrorPage";
import ThankYou from "./components/ThankYou";
import ScrollToTop from "./components/ScrollToTop";

import { Analytics } from "@vercel/analytics/react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    console.log("Firebase API Key:", process.env.REACT_APP_FIREBASE_API_KEY);
    const timeout = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const handleContactSubmit = () => setShowThankYou(true);

  const handleBackToHome = () => {
    setShowThankYou(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Router>
        <ScrollToTop />
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loading" />
          ) : showThankYou ? (
            <ThankYou key="thankyou" onBackToHome={handleBackToHome} />
          ) : (
            <motion.div
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Navbar />
              <main>
                <Routes>
                  <Route path="/" element={<LandingScreen />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/achievements" element={<Achievements />} />
                  <Route path="/certifications" element={<Certifications />} />
                  <Route
                    path="/contact"
                    element={<Contact onSubmit={handleContactSubmit} />}
                  />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:postId" element={<BlogPost />} />
                  <Route path="*" element={<ErrorPage />} />
                </Routes>
              </main>
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </Router>
      <Analytics />
    </>
  );
}

export default App;
