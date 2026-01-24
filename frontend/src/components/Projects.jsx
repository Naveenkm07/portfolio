import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Github, ExternalLink } from 'lucide-react';
import '../styles/projects.css';

const Projects = ({ isVisible }) => {
  const projects = [
    {
      title: 'Personal Data Manager',
      subtitle: 'Secure Data Management System',
      description:
        'A comprehensive personal data management system featuring authentication, role-based access control, AES encryption, and cloud backup capabilities. Optimized database queries achieving 40% improvement in data retrieval efficiency.',
      techStack: ['Python', 'SQLite/MySQL', 'AES Encryption', 'Tkinter', 'Flask'],
      features: [
        'Authentication & role-based access control',
        'CRUD operations with AES encryption',
        'Cloud backup integration',
        '40% faster query performance',
      ],
      github: 'https://github.com/Naveenkm07/PersonalDataManager-ADV.git',
      demo: null,
    },
    {
      title: 'Soil Fertility Analysis',
      subtitle: 'ML Classification Model',
      description:
        'Machine learning classification model that predicts soil fertility using NPK (Nitrogen, Phosphorus, Potassium) and pH values. Provides actionable crop and fertilizer recommendations based on prediction results.',
      techStack: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'matplotlib'],
      features: [
        'ML-based soil fertility prediction',
        'NPK & pH value analysis',
        'Model evaluation with confusion matrix',
        'Crop & fertilizer recommendations',
      ],
      github: 'https://github.com/Naveenkm07/Soil-Fertilisation-Analyzer-07.git',
      demo: null,
    },
    {
      title: 'Kerala Krishi Sahayak',
      subtitle: 'AI-Based Farming Assistant',
      description:
        'Mobile application integrating 8 government agricultural schemes into a unified platform. Features state management patterns and local data persistence for offline functionality, improving farmer adoption rate by 12%.',
      techStack: ['Flutter', 'Dart', 'State Management', 'Local Storage'],
      features: [
        'Unified platform for 8 govt schemes',
        '12% improvement in adoption rate',
        'Offline functionality support',
        'User-friendly interface',
      ],
      github: 'https://github.com/Naveenkm07/kerala-krishi-sahayak-flutter.git',
      demo: null,
    },
  ];

  return (
    <section id="projects" className={`projects ${isVisible ? 'visible' : ''}`}>
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Innovative solutions built with modern technologies
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="project-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="project-header">
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-features">
                <h4 className="features-title">Key Features:</h4>
                <ul className="features-list">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-links">
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github size={16} />
                  View Code
                </Button>
                {project.demo && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
