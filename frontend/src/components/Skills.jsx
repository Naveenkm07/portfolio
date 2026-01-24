import React from 'react';
import { Card } from './ui/card';
import {
  Code2,
  Database,
  Cloud,
  Wrench,
  TestTube,
  BookOpen,
} from 'lucide-react';
import '../styles/skills.css';

const Skills = ({ isVisible }) => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      icon: <Code2 size={28} />,
      skills: ['C', 'C++', 'Python', 'SQL'],
    },
    {
      category: 'Web & Backend',
      icon: <Code2 size={28} />,
      skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'REST APIs'],
    },
    {
      category: 'Databases',
      icon: <Database size={28} />,
      skills: ['MySQL', 'MongoDB', 'SQLite'],
    },
    {
      category: 'DevOps & Tools',
      icon: <Wrench size={28} />,
      skills: [
        'Git',
        'GitHub',
        'Jenkins',
        'Docker',
        'Kubernetes',
        'CI/CD',
        'Vercel',
      ],
    },
    {
      category: 'Testing',
      icon: <TestTube size={28} />,
      skills: ['Postman', 'Selenium WebDriver', 'pytest', 'REST API Testing'],
    },
    {
      category: 'Cloud & OS',
      icon: <Cloud size={28} />,
      skills: ['AWS', 'Azure', 'GCP', 'Linux', 'Windows'],
    },
    {
      category: 'Core Competencies',
      icon: <BookOpen size={28} />,
      skills: [
        'Data Structures',
        'OOP',
        'DBMS',
        'Operating Systems',
        'Computer Networks',
        'SDLC',
        'Agile',
        'Machine Learning',
      ],
    },
  ];

  return (
    <section id="skills" className={`skills ${isVisible ? 'visible' : ''}`}>
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            A comprehensive toolkit for building modern software solutions
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="skill-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-header">
                <div className="skill-icon">{category.icon}</div>
                <h3 className="skill-category">{category.category}</h3>
              </div>
              <div className="skill-list">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
