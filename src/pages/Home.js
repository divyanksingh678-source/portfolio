import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';
import profilePhoto from '../image/ChatGPT Image Apr 24, 2026, 11_19_03 AM.png';

function Home() {
  const interests = [
    { label: 'Robotics', title: 'Robotics & Autonomous Systems' },
    { label: 'AI', title: 'Artificial Intelligence & Machine Learning' },
    { label: 'Drone Tech', title: 'Drone Technology & Surveillance' },
    { label: 'SLAM', title: 'SLAM & Navigation' },
    { label: 'Automation', title: 'Industrial Automation' }
  ];

  const skills = [
    {
      title: 'Programming Languages',
      tags: ['C', 'Java', 'Python', 'JavaScript']
    },
    {
      title: 'Web Technologies',
      tags: ['HTML', 'CSS', 'React', 'React Router']
    },
    {
      title: 'Tools & Technologies',
      tags: ['ROS', 'Mission Planner', 'GitHub', 'Arduino', 'Computer Vision']
    }
  ];

  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-glow hero-glow-left" />
        <div className="hero-glow hero-glow-right" />

        <div className="hero-content">
          <div className="hero-copy">
            <p className="hero-kicker">Student builder focused on robotics, AI, and real-world systems</p>
            <h1 className="hero-title">I like turning technical ideas into working things people can actually see and use.</h1>
            <p className="hero-subtitle">
              I am Divyank Singh, a Computer Science Engineering student at Mahindra University working across
              robotics, autonomous systems, drones, and applied AI.
            </p>

            <div className="hero-actions">
              <NavLink to="/projects" className="hero-button hero-button-primary">
                Explore Projects
              </NavLink>
              <NavLink to="/media" className="hero-button hero-button-secondary">
                View Media
              </NavLink>
            </div>

            <div className="hero-notes">
              <div className="hero-note">
                <span className="hero-note-label">Location</span>
                <strong>Hyderabad, India</strong>
              </div>
              <div className="hero-note">
                <span className="hero-note-label">Current Focus</span>
                <strong>Robotics, AI, drones, automation</strong>
              </div>
            </div>
          </div>

          <aside className="profile-panel">
            <div className="profile-card">
              <div className="profile-picture">
                <img src={profilePhoto} alt="Divyank Singh" />
              </div>
              <div className="profile-card-copy">
                <p className="profile-caption">Divyank Singh</p>
                <p className="profile-role">CSE Student | Roboticist | AI Enthusiast</p>
              </div>
            </div>

            <div className="profile-status">
              <span className="status-dot" />
              Building practical systems for robotics and field projects
            </div>
          </aside>
        </div>
      </section>

      <section className="about-section section-card">
        <div className="section-heading">
          <p className="section-kicker">About Me</p>
          <h2>Tech feels most exciting to me when it leaves the screen and starts interacting with the real world.</h2>
        </div>
        <p className="about-text">
          I enjoy building projects that combine software and hardware, especially in areas like autonomous systems,
          drone technology, and intelligent monitoring. I am drawn to work that feels hands-on, slightly messy, and
          rewarding to iterate on, whether that means testing navigation logic, tuning a system, or improving how a
          project behaves outside a controlled demo.
        </p>
      </section>

      <section className="interests-section">
        <div className="section-heading section-heading-inline">
          <div>
            <p className="section-kicker">Research Interests</p>
            <h2>Areas I keep coming back to</h2>
          </div>
          <p className="section-side-note">A mix of software depth and real-world engineering problems.</p>
        </div>

        <div className="interests-grid">
          {interests.map((interest) => (
            <article key={interest.title} className="interest-card">
              <span className="interest-icon">{interest.label}</span>
              <h3>{interest.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="details-section section-card">
        <div className="section-heading">
          <p className="section-kicker">Personal Details</p>
          <h2>The practical side</h2>
        </div>

        <div className="details-content">
          <div className="details-column">
            <div className="detail-item">
              <span className="detail-label">Name</span>
              <span className="detail-value">Divyank Singh</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Location</span>
              <span className="detail-value">Hyderabad, India</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Education</span>
              <span className="detail-value">B.Tech (CSE), Mahindra University (2023-Present)</span>
            </div>
          </div>

          <div className="details-column details-column-offset">
            <div className="detail-item">
              <span className="detail-label">College Email</span>
              <span className="detail-value">
                <a href="mailto:se23ucse056@mahindrauniversity.edu.in">
                  se23ucse056@mahindrauniversity.edu.in
                </a>
              </span>
            </div>
            <div className="detail-item">
              <span className="detail-label">LinkedIn</span>
              <span className="detail-value">
                <a href="https://www.linkedin.com/in/divyank-singh-151335281" target="_blank" rel="noopener noreferrer">
                  divyank-singh-151335281
                </a>
              </span>
            </div>
            <div className="detail-item">
              <span className="detail-label">GitHub</span>
              <span className="detail-value">
                <a href="https://github.com/divyanksingh678-source" target="_blank" rel="noopener noreferrer">
                  divyanksingh678-source
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="section-heading section-heading-inline">
          <div>
            <p className="section-kicker">Skills</p>
            <h2>Tools I reach for often</h2>
          </div>
        </div>

        <div className="skills-container">
          {skills.map((category) => (
            <article key={category.title} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.tags.map((tag) => (
                  <span key={tag} className="skill-tag">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
