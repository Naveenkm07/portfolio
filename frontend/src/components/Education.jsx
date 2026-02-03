import React from 'react';
import { Card } from './ui/card';
import { GraduationCap } from 'lucide-react';
import '../styles/education.css';

const Education = ({ isVisible }) => {
  const education = [
    {
      degree: 'Bachelor of Engineering in Computer Science and Engineering',
      institution: 'New Horizon College of Engineering',
      location: 'Bengaluru',
      duration: '2024 – 2027',
      score: 'CGPA: 8.56',
      sgpa: 'SGPA: 9.05',
      marksheetUrl:
        'https://drive.google.com/file/d/19PsjwjQY1R1p0RHGV2FwbSC8ZkKmxHaG/view?usp=drive_link',
      type: 'Undergraduate',
    },
    {
      degree: 'Diploma in Computer Science and Engineering',
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
                  <div className="education-score-group">
                    <span className="education-score">{edu.score}</span>
                    {edu.sgpa && <span className="education-score">{edu.sgpa}</span>}
                    {edu.marksheetUrl && (
                      <a
                        href={edu.marksheetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="education-score-link"
                      >
                        View
                      </a>
                    )}
                  </div>
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
