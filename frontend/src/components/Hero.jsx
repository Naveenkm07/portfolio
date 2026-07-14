import React, { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { Github, Instagram, Linkedin, Download, ChevronRight } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { motion, AnimatePresence } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';
import '../styles/hero.css';

const LeetCodeIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.112-.662 1.824-.662s1.357.195 1.824.662l2.706 2.589c.516.516.534 1.356.02 1.872-.515.515-1.356.533-1.872.02l-2.332-2.24c-.163-.163-.38-.258-.61-.258-.228 0-.446.095-.61.258l-4.323 4.38c-.163.163-.258.38-.258.61s.095.447.258.61l4.333 4.363c.163.163.38.258.61.258.228 0 .446-.095.61-.258l2.323-2.24c.516-.516 1.356-.534 1.872-.02.516.515.534 1.357.02 1.872z" />
    <path d="M20.811 13.01H10.666c-.74 0-1.336-.595-1.336-1.336s.596-1.336 1.336-1.336h10.145c.74 0 1.336.596 1.336 1.336s-.596 1.336-1.336 1.336z" />
  </svg>
);

const titles = [
  "Software Engineer",
  "AI-ML Enthusiast",
  "Full Stack Developer",
  "Tech Innovator"
];

const Hero = ({ isVisible }) => {
  const nameRef = useRef(null);
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    if (isVisible && nameRef.current) {
      const letters = nameRef.current.querySelectorAll('.letter');
      letters.forEach((letter, index) => {
        letter.style.animation = `letterSlideIn 0.6s ease-out ${index * 0.1}s forwards`;
      });
    }
  }, [isVisible]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderAnimatedName = (name) => {
    return name.split('').map((char, index) => (
      <span key={index} className="letter" style={{ display: 'inline-block' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section id="hero" className={`hero ${isVisible ? 'visible' : ''}`}>
      <div className="hero-background">
        <ParticlesBackground />
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">Hi, I'm</p>
            <h1 className="hero-name" ref={nameRef}>
              {renderAnimatedName('NAVEEN KUMAR KM')}
            </h1>
            <div className="hero-title-container">
              <span className="hero-title-static">Computer Science Engineering Student</span>
              <br />
              <div style={{ height: '32px', position: 'relative', overflow: 'hidden', marginTop: '8px' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={titleIndex}
                    initial={{ y: 30, opacity: 0, rotateX: -90 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: -30, opacity: 0, rotateX: 90 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    style={{ position: 'absolute', transformOrigin: 'center' }}
                  >
                    <span className="gradient-text text-xl font-bold">{titles[titleIndex]}</span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            <p className="hero-description mt-6">
              Building scalable software solutions and intelligent systems.
              Passionate about solving real-world problems through code and innovation.
            </p>

            <div className="hero-buttons">
              <a
                href="https://drive.google.com/drive/folders/1XSkdAaQa5doJbSOJBw-uU4fQ80bWRU0L"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-gradient-to-r from-[#4B2D7F] to-[#B2368A] text-white hover:from-[#3A1E66] hover:to-[#9B2D76] h-12 px-6 py-2 primary-btn"
              >
                <Download size={20} className="mr-2" />
                View Resume
              </a>
              <Button
                size="lg"
                variant="outline"
                className="secondary-btn"
                onClick={scrollToProjects}
              >
                View Projects
                <ChevronRight size={20} />
              </Button>
            </div>

            <div className="hero-social">
              <a
                href="https://github.com/Naveenkm07"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Github size={24} />
              </a>
              <a
                href="https://instagram.com/naveen.techie"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/naveenkm07/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://leetcode.com/u/Naveenkm07/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <LeetCodeIcon size={24} />
              </a>
            </div>
          </div>

          <div className="hero-image">
            <Tilt 
              tiltMaxAngleX={12} 
              tiltMaxAngleY={12} 
              perspective={1000} 
              scale={1.05} 
              transitionSpeed={2000} 
              gyroscope={true}
              className="image-wrapper"
            >
              <img
                src="/phot.jpg"
                alt="Naveen Kumar K M"
                className="profile-image"
              />
              <div className="image-border"></div>
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
