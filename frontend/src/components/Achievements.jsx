import React from 'react';
import { Card } from './ui/card';
import { Trophy, Code, Users, Award } from 'lucide-react';
import '../styles/achievements.css';

const Achievements = ({ isVisible }) => {
  const achievements = [
    {
      icon: <Trophy size={32} />,
      title: '2nd Place - Srujana Hackathon 2025',
      description:
        'Awarded by Dr. S. Somasekhar (Former ISRO Chairman) at Chanakya University, Bengaluru',
      color: 'gold',
    },
    {
      icon: <Trophy size={32} />,
      title: '2nd Place – Mini Project Competition',
      description:
        'Awarded at New Horizon College of Engineering for the project "Personal Data Manager"',
      color: 'yellow',
    },
    {
      icon: <Code size={32} />,
      title: 'Code4EDTech Hackathon 2025',
      description:
        'Participated in 24-hour national-level AI-EdTech challenge by Innomatics Research Labs, developing ML-powered education solutions',
      color: 'blue',
    },
    {
      icon: <Users size={32} />,
      title: 'TEDx NHCE Board Member',
      description:
        '2025-2026 Board Member, actively contributing to organization and execution of TEDx events',
      color: 'red',
    },
    {
      icon: <Award size={32} />,
      title: '5+ National Hackathons',
      description:
        'Successfully participated in multiple national-level hackathons, demonstrating problem-solving and development skills',
      color: 'purple',
    },
    {
      icon: <Code size={32} />,
      title: 'GeeksforGeeks DSA Certificate',
      description:
        'Completed comprehensive Data Structures and Algorithms course, mastering advanced problem-solving techniques',
      color: 'green',
    },
  ];

  return (
    <section
      id="achievements"
      className={`achievements ${isVisible ? 'visible' : ''}`}
    >
      <div className="achievements-container">
        <div className="section-header">
          <h2 className="section-title">Achievements & Recognition</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Milestones and accomplishments in my journey
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className={`achievement-card ${achievement.color}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="achievement-icon">{achievement.icon}</div>
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
