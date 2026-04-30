import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Sky Eye - Drone Vision Based Monitoring System',
      duration: 'Dec 2023 - Present',
      type: 'Independent Project',
      description:
        'A drone-based surveillance system designed to monitor security threats in crowded environments using vision-based analysis and real-time observation.',
      technologies: ['Drone Systems', 'Computer Vision', 'AI Concepts', 'Python'],
      link: '#/media',
      icon: 'Drone'
    },
    {
      id: 2,
      title: 'Water Surface TurtleBot',
      duration: 'June 2023 - July 2023',
      type: 'Independent Project',
      description:
        'A ROS-based autonomous robot project focused on SLAM, path planning, and practical navigation behaviour in changing environments.',
      technologies: ['ROS', 'SLAM', 'Navigation Stack', 'Python', 'C++'],
      link: '#/media',
      icon: 'Robot'
    },
    {
      id: 3,
      title: 'Arduino Uno Projects',
      duration: 'Ongoing',
      type: 'Independent Project',
      description:
        'A growing collection of embedded system experiments involving sensors, automation workflows, and low-level hardware integration.',
      technologies: ['Arduino Uno', 'Embedded C', 'Sensors', 'Electronics'],
      link: '#/media',
      icon: 'Circuit'
    }
  ];

  const contactCards = [
    {
      title: 'Get in Touch',
      copy: 'If you want to discuss a project, collaboration, or internship opportunity, email is the easiest way to reach me.',
      link: 'mailto:se23ucse056@mahindrauniversity.edu.in',
      label: 'Email Me'
    },
    {
      title: 'LinkedIn',
      copy: 'I share my academic and project background here, and it is the best place for a professional introduction.',
      link: 'https://www.linkedin.com/in/divyank-singh-151335281',
      label: 'Visit Profile',
      external: true
    },
    {
      title: 'Project Media',
      copy: 'This page collects working demos, screenshots, and project visuals instead of leaving everything buried in code.',
      link: '#/media',
      label: 'Open Media Page'
    }
  ];

  return (
    <div className="projects-container">
      <header className="projects-header">
        <p className="projects-kicker">Selected Work</p>
        <h1>Projects that sit somewhere between coursework, curiosity, and real engineering effort.</h1>
        <p className="projects-intro">
          Most of these started from genuine technical interest and then became opportunities to learn by building,
          testing, and improving something tangible.
        </p>
      </header>

      <section className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-topline">
              <span className="project-icon">{project.icon}</span>
              <span className="project-badge">{project.type}</span>
            </div>

            <h2 className="project-title">{project.title}</h2>

            <div className="project-meta">
              <span className="project-duration">Timeline: {project.duration}</span>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-technologies">
              <h4>Technologies Used</h4>
              <div className="tech-list">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>

            <a href={project.link} className="project-link">
              Open project media
            </a>
          </article>
        ))}
      </section>

      <section className="additional-info">
        <div className="additional-copy">
          <p className="projects-kicker">More Context</p>
          <h2>There is usually a build story behind every polished screenshot.</h2>
        </div>

        <div className="info-cards">
          {contactCards.map((card) => (
            <article key={card.title} className="info-card">
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
              <a
                href={card.link}
                className="info-link"
                target={card.external ? '_blank' : undefined}
                rel={card.external ? 'noopener noreferrer' : undefined}
              >
                {card.label}
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
