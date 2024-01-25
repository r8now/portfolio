import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const App = () => {
  // Separate animation controls for each section
  const controlsSkills = useAnimation();
  const [refSkills, inViewSkills] = useInView({ triggerOnce: false });

  const controlsAbout = useAnimation();
  const [refAbout, inViewAbout] = useInView({ triggerOnce: false });

  const controlsProjects = useAnimation();
  const [refProjects, inViewProjects] = useInView({ triggerOnce: false });

  const controlsContactForm = useAnimation();
  const [refContactForm, inViewContactForm] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inViewSkills) {
      controlsSkills.start("visible");
    } else {
      controlsSkills.start("hidden");
    }
    if (inViewAbout) {
      controlsAbout.start("visible");
    } else {
      controlsAbout.start("hidden");
    }
    if (inViewProjects) {
      controlsProjects.start("visible");
    } else {
      controlsProjects.start("hidden");
    }
    if (inViewContactForm) {
      controlsContactForm.start("visible");
    } else {
      controlsContactForm.start("hidden");
    }
  }, [
    controlsSkills,
    inViewSkills,
    controlsAbout,
    inViewAbout,
    controlsProjects,
    inViewProjects,
    controlsContactForm,
    inViewContactForm,
  ]);

  return (
    <>
      <Navbar />
      <Hero />
      <motion.div
        ref={refSkills}
        animate={controlsSkills}
        initial="hidden"
        variants={sectionVariants}
        transition={{ duration: 1.2 }}
      >
        <Skills />
      </motion.div>
      <motion.div
        ref={refAbout}
        animate={controlsAbout}
        initial="hidden"
        variants={sectionVariants}
        transition={{ duration: 1.2 }}
      >
        <About />
      </motion.div>
      <motion.div
        ref={refProjects}
        animate={controlsProjects}
        initial="hidden"
        variants={sectionVariants}
        transition={{ duration: 1.2 }}
      >
        <Projects />
      </motion.div>
      <motion.div
        ref={refContactForm}
        animate={controlsContactForm}
        initial="hidden"
        variants={sectionVariants}
        transition={{ duration: 1.2 }}
      >
        <ContactForm />
      </motion.div>
    </>
  );
};

export default App;
