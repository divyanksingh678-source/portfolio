import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="profile-section">
            <div className="profile-picture-container">
              <div className="profile-picture">
                <span className="profile-placeholder">📸</span>
              </div>
              <p className="profile-caption">Your Photo Here</p>
            </div>
            <h1 className="hero-title">Divyank Singh</h1>
            <p className="hero-subtitle">CSE Student | Roboticist | AI Enthusiast</p>
            <p className="hero-location">📍 Hyderabad, India</p>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="about-section">
        <h2>About Me</h2>
        <p className="about-text">
          I am Divyank Singh, a Computer Science Engineering student at Mahindra University with a strong interest in 
          robotics, artificial intelligence, and automation. I enjoy building real-world projects that combine software and 
          hardware, especially in areas like autonomous systems and drone technology. I am passionate about innovation and 
          continuously learning new technologies to create impactful solutions.
        </p>
      </section>

      {/* Research Interests Section */}
      <section className="interests-section">
        <h2>Research Interests</h2>
        <div className="interests-grid">
          <div className="interest-card">
            <span className="interest-icon">🤖</span>
            <h3>Robotics & Autonomous Systems</h3>
          </div>
          <div className="interest-card">
            <span className="interest-icon">🧠</span>
            <h3>Artificial Intelligence & Machine Learning</h3>
          </div>
          <div className="interest-card">
            <span className="interest-icon">🚁</span>
            <h3>Drone Technology & Surveillance</h3>
          </div>
          <div className="interest-card">
            <span className="interest-icon">🗺️</span>
            <h3>SLAM & Navigation</h3>
          </div>
          <div className="interest-card">
            <span className="interest-icon">⚙️</span>
            <h3>Industrial Automation</h3>
          </div>
        </div>
      </section>

      {/* Personal Details Section */}
      <section className="details-section">
        <h2>Personal Details</h2>
        <div className="details-content">
          <div className="details-column">
            <div className="detail-item">
              <span className="detail-label">👤 Name:</span>
              <span className="detail-value">Divyank Singh</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">📍 Location:</span>
              <span className="detail-value">Hyderabad, India</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">🎓 Education:</span>
              <span className="detail-value">B.Tech (CSE), Mahindra University (2023–Present)</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">📊 CGPA:</span>
              <span className="detail-value">6.46 / 10</span>
            </div>
          </div>

          <div className="details-column">
            <div className="detail-item">
              <span className="detail-label">📧 College Email:</span>
              <span className="detail-value">
                <a href="mailto:se23ucse056@mahindrauniversity.edu.in">
                  se23ucse056@mahindrauniversity.edu.in
                </a>
              </span>
            </div>
            <div className="detail-item">
              <span className="detail-label">🔗 LinkedIn:</span>
              <span className="detail-value">
                <a href="https://www.linkedin.com/in/divyank-singh-151335281" target="_blank" rel="noopener noreferrer">
                  divyank-singh-151335281
                </a>
              </span>
            </div>
            <div className="detail-item">
              <span className="detail-label">💻 GitHub:</span>
              <span className="detail-value">
                <a href="https://github.com/divyanksingh678-source" target="_blank" rel="noopener noreferrer">
                  divyanksingh678-source
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Programming Languages</h3>
            <div className="skills-list">
              <span className="skill-tag">C</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">JavaScript</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Web Technologies</h3>
            <div className="skills-list">
              <span className="skill-tag">HTML</span>
              <span className="skill-tag">CSS</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">React Router</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Tools & Technologies</h3>
            <div className="skills-list">
              <span className="skill-tag">ROS</span>
              <span className="skill-tag">Mission Planner</span>
              <span className="skill-tag">GitHub</span>
              <span className="skill-tag">Arduino</span>
              <span className="skill-tag">Computer Vision</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
