import React from 'react';
import { Card } from './ui/card';
import { Code, Brain, Cloud, Lightbulb } from 'lucide-react';
import '../styles/about.css';

const About = ({ isVisible }) => {
  const highlights = [
    {
      icon: <Code size={32} />,
      title: 'Software Development',
      description: 'Building secure, scalable applications with modern technologies',
    },
    {
      icon: <Brain size={32} />,
      title: 'AI & Machine Learning',
      description: 'Developing intelligent solutions using ML algorithms and data analysis',
    },
    {
      icon: <Cloud size={32} />,
      title: 'Cloud & DevOps',
      description: 'Experienced with AWS, Azure, Docker, Kubernetes, and CI/CD pipelines',
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'Problem Solving',
      description: 'Strong foundation in DSA, algorithms, and system design',
    },
  ];

  return (
    <section id="about" className={`about ${isVisible ? 'visible' : ''}`}>
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
              I'm a Computer Science Engineering student at{' '}
              <span className="highlight">New Horizon College of Engineering</span>,
              passionate about crafting innovative software solutions that make a real impact.
            </p>
            <p className="about-paragraph">
              My journey in tech has been driven by a deep curiosity for both{' '}
              <span className="highlight">software development</span> and{' '}
              <span className="highlight">artificial intelligence</span>. I specialize in
              building secure, cloud-enabled applications and developing intelligent systems
              that solve real-world problems.
            </p>
            <p className="about-paragraph">
              With hands-on experience in backend systems, machine learning, and DevOps,
              I'm constantly exploring new technologies and best practices. I thrive in
              collaborative environments and enjoy the challenge of turning complex problems
              into elegant, efficient solutions.
            </p>
          </div>

          <div className="about-highlights">
            {highlights.map((item, index) => (
              <Card key={index} className="highlight-card">
                <div className="highlight-icon">{item.icon}</div>
                <h3 className="highlight-title">{item.title}</h3>
                <p className="highlight-description">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
