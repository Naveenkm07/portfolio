import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import '../styles/contact.css';

const Contact = ({ isVisible }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. We use FormData for Web3Forms
      const submissionData = new FormData();
      
      // 2. Replace this with your actual Web3Forms access key
      submissionData.append("access_key", "606da72a-a792-4035-a9af-8b7b7a9deb84");
      
      submissionData.append("name", formData.name);
      submissionData.append("email", formData.email);
      submissionData.append("message", formData.message);

      // 3. Send directly to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: 'Message Sent!',
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        // Clear the form
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (err) {
      toast({
        title: 'Message Failed',
        description: err?.message || 'Something went wrong while sending your message.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'kmnaveenkm85@gmail.com',
      link: 'mailto:kmnaveenkm85@gmail.com',
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'naveenkm07',
      link: 'https://www.linkedin.com/in/naveenkm07/',
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: 'Naveenkm07',
      link: 'https://github.com/Naveenkm07',
    },
  ];

  return (
    <section id="contact" className={`contact ${isVisible ? 'visible' : ''}`}>
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Let's connect and discuss opportunities
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-description">
              Feel free to reach out for internships, collaborations, or just to say hello!
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.label === 'Email' ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="contact-item"
                >
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-text">
                    <span className="contact-label">{info.label}</span>
                    <span className="contact-value">{info.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <Card className="contact-form-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="form-textarea"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="submit-btn"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
