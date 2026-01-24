import React from 'react';
import { Card } from './ui/card';
import { GraduationCap } from 'lucide-react';
import '../styles/education.css';

const Education = ({ isVisible }) => {
  const education = [
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'New Horizon College of Engineering',
      location: 'Bengaluru',
      duration: '2024 – 2027',
      score: 'CGPA: 8.32',
      type: 'Undergraduate',
    },
    {
      degree: 'Diploma in Computer Science',
      institution: 'SJM Polytechnic',
      location: 'Chitradurga',
      duration: '2021 – 2024',
      score: '82.12%',
      type: 'Diploma',
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'SJM Residential School',
      location: 'Chitradurga',
      duration: '2020 – 2021',
      score: '93.12%',
      type: 'Secondary',
    },
  ];

  return (
    <section
      id="education"
      className={`education ${isVisible ? 'visible' : ''}`}
    >
      <div className="education-container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Academic background and achievements</p>
        </div>

        <div className="education-timeline">
          {education.map((edu, index) => (
            <div
              key={index}
              className="education-item"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="education-marker">
                <div className="edu-marker-icon">
                  <GraduationCap size={20} />
                </div>
                {index < education.length - 1 && <div className="edu-marker-line"></div>}
              </div>

              <Card className="education-card">
                <div className="education-type">{edu.type}</div>
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-institution">
                  {edu.institution}, {edu.location}
                </p>
                <div className="education-details">
                  <span className="education-duration">{edu.duration}</span>
                  <span className="education-score">{edu.score}</span>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
