import React, { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { Github, Instagram, Linkedin, Download, ChevronRight } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { motion, AnimatePresence } from 'framer-motion';

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
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.939 5.939 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.956-.207a1.384 1.384 0 0 0-.207-1.953l-3.5-2.831c-2.206-1.784-5.405-1.504-7.517.653L2.43 11.854a3.003 3.003 0 0 0-.246.331l4.897-5.244L12.51 1.545c.196-.196.467-.294.737-.294.271 0 .542.098.738.294.407.408.407 1.069 0 1.477L8.601 8.41a1.386 1.386 0 0 0 0 1.957 1.383 1.383 0 0 0 1.955 0l5.385-5.388c.408-.407 1.069-.407 1.477 0 .408.408.408 1.07 0 1.478l-5.385 5.387a3.14 3.14 0 0 1-4.438 0 3.134 3.134 0 0 1 0-4.435L12.98 2.02A2.36 2.36 0 0 0 13.483 0zm4.197 12.396a1.373 1.373 0 0 0-.961.439l-2.4 2.39c-.54.54-.54 1.414-.002 1.955.54.54 1.414.54 1.954.002l2.4-2.391a1.384 1.384 0 0 0 0-1.956 1.373 1.373 0 0 0-.991-.439z" />
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

        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">Hi, I'm</p>
            <h1 className="hero-name" ref={nameRef}>
              {renderAnimatedName('NAVEEN KUMAR K M')}
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
