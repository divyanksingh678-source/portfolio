import React from 'react';
import './Media.css';
import skyEyeSetupPhoto from '../video/WhatsApp Image 2026-04-24 at 11.33.59.jpeg';
import skyEyeDemoVideo from '../video/WhatsApp Video 2026-04-24 at 11.33.22.mp4';
import waterSurfaceTurtleBotPhoto from '../video/WhatsApp Image 2026-04-24 at 11.34.41.jpeg';
import waterSurfaceTurtleBotVideo from '../video/WhatsApp Video 2026-04-24 at 11.28.28.mp4';
import projectWalkthroughImage from '../image/Screenshot (136).png';

function Media() {
  const mediaSections = [
    {
      id: 1,
      title: 'Demo Videos',
      type: 'Motion',
      description:
        'Short project demos are often the fastest way to understand what a system actually does, especially for robotics and field-oriented work.',
      items: [
        {
          title: 'Sky Eye drone monitoring demo',
          preview: (
            <video className="media-asset" controls preload="metadata">
              <source src={skyEyeDemoVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )
        },
        {
          title: 'Water Surface TurtleBot navigation run',
          preview: (
            <video className="media-asset" controls preload="metadata">
              <source src={waterSurfaceTurtleBotVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )
        },
        {
          title: 'Arduino project walkthrough',
          preview: <img className="media-asset" src={projectWalkthroughImage} alt="Arduino project walkthrough" />
        }
      ]
    },
    {
      id: 2,
      title: 'Build Snapshots',
      type: 'Visuals',
      description:
        'These images capture setups, system views, and project moments that make the technical work feel more grounded and easier to explain.',
      items: [
        {
          title: 'Drone system setup photo',
          preview: <img className="media-asset" src={skyEyeSetupPhoto} alt="Sky Eye system setup" />
        },
        {
          title: 'Water Surface TurtleBot mapping screenshot',
          preview: <img className="media-asset" src={waterSurfaceTurtleBotPhoto} alt="Water Surface TurtleBot mapping screenshot" />
        },
        {
          title: 'Arduino wiring and sensor image',
          preview: <div className="media-frame">Add next build photo here</div>
        }
      ]
    }
  ];

  const steps = [
    'Store future project files in a dedicated folder so the gallery stays organized.',
    'Replace placeholders with a real image, video, or embedded demo whenever a project improves.',
    'Keep this page practical: enough context to prove the work, without turning it into a giant dump of assets.'
  ];

  return (
    <div className="media-container">
      <header className="media-hero">
        <p className="media-eyebrow">Project Archive</p>
        <h1>Video clips, screenshots, and build visuals from the projects I care about most.</h1>
        <p className="media-intro">
          This page is meant to feel like a working media shelf instead of a polished stock gallery. It gives each
          project a place to show progress, not just describe it.
        </p>
      </header>

      <section className="media-grid">
        {mediaSections.map((section) => (
          <article key={section.id} className="media-card">
            <div className="media-card-top">
              <span className="media-type">{section.type}</span>
              <h2>{section.title}</h2>
            </div>
            <p className="media-description">{section.description}</p>

            <div className="media-placeholder-list">
              {section.items.map((item) => (
                <div key={item.title} className="media-placeholder">
                  {item.preview}
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="media-notes">
        <div className="media-notes-copy">
          <p className="media-eyebrow">Workflow</p>
          <h2>How I want this gallery to grow</h2>
        </div>

        <div className="media-steps">
          {steps.map((step) => (
            <div key={step} className="media-step">
              {step}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Media;
