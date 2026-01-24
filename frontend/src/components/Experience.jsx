import React from 'react';
import { Card } from './ui/card';
import { Briefcase, Award, ExternalLink } from 'lucide-react';
import '../styles/experience.css';

const Experience = ({ isVisible }) => {
  const experiences = [
    {
      role: 'AI/ML Intern',
      company: 'Ember Quest',
      duration: '4 Months',
      type: 'Internship',
      certificateLink: 'https://www.linkedin.com/posts/naveenkm07_ai-artificialintelligence-machinelearning-activity-7334888242959261696-1jju?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADxXAKQBuxdej-hWcN1MR2E4zBAfjZ1XBGI',
      achievements: [
        'Applied machine learning algorithms for real-world problem-solving and data analysis',
        'Gained hands-on experience in model development, training, and deployment workflows',
        'Collaborated using Git-based version control and Agile development practices',
      ],
      icon: <Award size={24} />,
    },
    {
      role: 'AI/ML Trainee',
      company: 'Crystallize Technologies',
      duration: '3 Months',
      type: 'Industry Training',
      achievements: [
        'Completed comprehensive AI/ML training covering advanced ML and deep learning concepts',
        'Worked on industry-relevant projects and best practices in software development',
        'Learned SDLC methodologies and professional development workflows',
      ],
      icon: <Award size={24} />,
    },
  ];

  return (
    <section
      id="experience"
      className={`experience ${isVisible ? 'visible' : ''}`}
    >
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">Experience & Training</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Professional journey and industry exposure
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="timeline-item"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-marker">
                <div className="marker-icon">
                  <Briefcase size={20} />
                </div>
                <div className="marker-line"></div>
              </div>

              <Card className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <p className="timeline-company">{exp.company}</p>
                  </div>
                  <div className="timeline-badge">
                    {exp.icon}
                    <span className="timeline-duration">{exp.duration}</span>
                    {exp.certificateLink && (
                      <a
                        href={exp.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="certificate-link"
                        title="View Certificate"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <span className="timeline-type">{exp.type}</span>

                <ul className="timeline-achievements">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
