import React from 'react';
import { Card } from './ui/card';
import { Calendar, ArrowRight } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import '../styles/certifications.css';

const Certifications = ({ isVisible }) => {
  const certifications = [
    {
      title: 'NPTEL - Fundaments of Algorithm:design and Analysis',
      organization: 'Indian Institute of Technology Kharagpur',
      date: 'Jan 2024 - Feb 2024',
      description: 'Learned core algorithmic techniques including time complexity, sorting, searching, greedy methods, and divide-and-conquer strategies.',
      imageUrl: '/nptel-cert.jpg',
      link: '#',
    },
    {
      title: 'IBM - Enterprise Design Thinking Practitioner',
      organization: 'IBM',
      date: 'Feb 2024',
      description: 'Certified in applying IBM\'s Enterprise Design Thinking framework for user-centered problem solving and solution design.',
      imageUrl: '/ibm-cert.jpg',
      link: '#',
    },
    {
      title: 'Internship Complition Certificate',
      organization: 'Hindustan Aeronautics Limited',
      date: '2023',
      description: 'Completed hands-on internship at HAL gaining practical exposure to aerospace systems and industrial engineering workflows.',
      imageUrl: '/hal-cert.jpg',
      link: '#',
    },
  ];

  return (
    <section id="certifications" className={`certifications ${isVisible ? 'visible' : ''}`}>
      <div className="certifications-container">
        <div className="section-header">
          <h2 className="section-title">Certifications</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Professional certifications and achievements (More to be added)
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <Tilt 
              key={index}
              glareEnable={true}
              glareMaxOpacity={0.15}
              glareColor="#ffffff"
              glarePosition="all"
              scale={1.02}
              transitionSpeed={1500}
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              style={{ animationDelay: `${index * 0.2}s` }}
              className="cert-tilt-wrapper"
            >
              <Card className="cert-card h-full">
                <div className="cert-image-container">
                  <img src={cert.imageUrl} alt={cert.title} className="cert-image" />
                </div>
                
                <div className="cert-content">
                  <h3 className="cert-title">{cert.title}</h3>
                  <div className="cert-org">{cert.organization}</div>
                  
                  <div className="cert-date">
                    <Calendar size={16} />
                    <span>{cert.date}</span>
                  </div>
                  
                  <p className="cert-description">{cert.description}</p>
                  
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cert-link"
                  >
                    View Certificate <ArrowRight size={16} />
                  </a>
                </div>
              </Card>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
