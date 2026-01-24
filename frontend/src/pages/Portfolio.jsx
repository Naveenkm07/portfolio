import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import '../styles/portfolio.css';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio">
      <Header />
      <Hero isVisible={isVisible.hero} />
      <About isVisible={isVisible.about} />
      <Skills isVisible={isVisible.skills} />
      <Projects isVisible={isVisible.projects} />
      <Experience isVisible={isVisible.experience} />
      <Education isVisible={isVisible.education} />
      <Achievements isVisible={isVisible.achievements} />
      <Contact isVisible={isVisible.contact} />
      <Footer />
    </div>
  );
};

export default Portfolio;
