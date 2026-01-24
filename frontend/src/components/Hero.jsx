import React, { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { Github, Linkedin, Download, ChevronRight } from 'lucide-react';
import '../styles/hero.css';

const Hero = ({ isVisible }) => {
  const nameRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isVisible && nameRef.current) {
      const letters = nameRef.current.querySelectorAll('.letter');
      letters.forEach((letter, index) => {
        letter.style.animation = `letterSlideIn 0.6s ease-out ${index * 0.1}s forwards`;
      });
    }
  }, [isVisible]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
              {renderAnimatedName('NAVEEN KUMAR KM')}
            </h1>
            <h2 className="hero-title">
              Computer Science Engineering Student |
              <span className="gradient-text"> Software Engineer</span> |
              <span className="gradient-text"> AI-ML Enthusiast</span>
            </h2>
            <p className="hero-description">
              Building scalable software solutions and intelligent systems.
              Passionate about solving real-world problems through code and innovation.
            </p>

            <div className="hero-buttons">
              <a
                href="https://drive.google.com/drive/folders/1XSkdAaQa5doJbSOJBw-uU4fQ80bWRU0L"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-gradient-to-r from-blue-500 to-green-500 text-white hover:from-blue-600 hover:to-green-600 h-12 px-6 py-2 primary-btn"
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
                href="https://www.linkedin.com/in/naveenkm07/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div 
              className="image-wrapper"
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x * 10}deg) rotateX(${-mousePosition.y * 10}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <img
                src="https://customer-assets.emergentagent.com/job_naveen-portfolio-1/artifacts/pwt8ktzx_photo.jpg"
                alt="Naveen Kumar K M"
                className="profile-image"
              />
              <div className="image-border"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
