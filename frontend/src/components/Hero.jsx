import React from 'react';
import { Button } from './ui/button';
import { Github, Linkedin, Download, ChevronRight } from 'lucide-react';
import '../styles/hero.css';

const Hero = ({ isVisible }) => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = 'https://customer-assets.emergentagent.com/job_02d2c9ba-1a61-4d45-a956-567df353c4d3/artifacts/roamwpwl_Resume%20Final%20%282%29.docx';
    link.download = 'Naveen_Kumar_Resume.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
            <h1 className="hero-name">Naveen Kumar K M</h1>
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
              <Button
                size="lg"
                className="primary-btn"
                onClick={handleDownloadResume}
              >
                <Download size={20} />
                Download Resume
              </Button>
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
            <div className="image-wrapper">
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
