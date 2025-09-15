import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import ThankYou from "./components/ThankYou";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    console.log("Firebase API Key:", process.env.REACT_APP_FIREBASE_API_KEY);
    // Simulate a small loading delay
    const timeout = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const handleContactSubmit = () => setShowThankYou(true);
  const handleBackToHome = () => {
    setShowThankYou(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Router>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {showThankYou ? (
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
                <Route
                  path="/"
                  element={
                    <>
                      <section id="home">
                        <Hero />
                      </section>
                      <section id="about">
                        <About />
                      </section>
                      <section id="works">
                        <Works />
                      </section>
                      <section id="services">
                        <Services />
                      </section>
                      <section id="contact">
                        <Contact onSubmit={handleContactSubmit} />
                      </section>
                    </>
                  }
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
  );
}

export default App;
