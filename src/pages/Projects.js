import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Sky Eye – Drone Vision Based Monitoring System',
      duration: 'Dec 2023 – Present',
      type: 'Independent Project',
      description: 'A drone-based surveillance system designed to monitor security threats in crowded environments using vision-based analysis. The system aims to improve safety and real-time monitoring using intelligent detection.',
      technologies: ['Drone Systems', 'Computer Vision', 'AI Concepts', 'Python'],
      link: 'https://github.com/divyanksingh678-source',
      icon: '🚁'
    },
    {
      id: 2,
      title: 'Autonomous TurtleBot',
      duration: 'June 2023 – July 2023',
      type: 'Independent Project',
      description: 'Developed an autonomous mobile robot using ROS. Implemented SLAM for mapping unknown environments and navigation algorithms for path planning. The project involved real-world robotics and autonomous navigation challenges.',
      technologies: ['ROS', 'SLAM', 'Navigation Stack', 'Python', 'C++'],
      link: 'https://github.com/divyanksingh678-source',
      icon: '🤖'
    },
    {
      id: 3,
      title: 'Arduino Uno Projects',
      duration: 'Ongoing',
      type: 'Independent Project',
      description: 'A collection of embedded system projects using Arduino Uno, including sensor-based automation and basic robotics experiments. These projects explore embedded C programming and microcontroller applications.',
      technologies: ['Arduino Uno', 'Embedded C', 'Sensors', 'Electronics'],
      link: 'https://github.com/divyanksingh678-source',
      icon: '⚡'
    }
  ];

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>My Projects</h1>
        <p>Explore my work in robotics, AI, and embedded systems</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-icon">{project.icon}</div>
            <h2 className="project-title">{project.title}</h2>
            
            <div className="project-meta">
              <span className="project-duration">⏱️ {project.duration}</span>
              <span className="project-type">📌 {project.type}</span>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-technologies">
              <h4>Technologies Used:</h4>
              <div className="tech-list">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>

            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <section className="additional-info">
        <h2>Want to know more?</h2>
        <div className="info-cards">
          <div className="info-card">
            <span className="info-icon">📧</span>
            <h3>Get in Touch</h3>
            <p>Feel free to reach out via email</p>
            <a href="mailto:se23ucse056@mahindrauniversity.edu.in" className="info-link">
              Email Me
            </a>
          </div>
          <div className="info-card">
            <span className="info-icon">💼</span>
            <h3>LinkedIn</h3>
            <p>Connect with me on LinkedIn</p>
            <a href="https://www.linkedin.com/in/divyank-singh-151335281" target="_blank" rel="noopener noreferrer" className="info-link">
              Visit Profile
            </a>
          </div>
          <div className="info-card">
            <span className="info-icon">🔗</span>
            <h3>GitHub</h3>
            <p>Check out my repositories</p>
            <a href="https://github.com/divyanksingh678-source" target="_blank" rel="noopener noreferrer" className="info-link">
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
