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
      title: 'Project Videos',
      type: 'Video placeholder',
      description:
        'Add demo videos here for your robotics, AI, and embedded systems projects. You can later replace each placeholder with a local video file or an embedded YouTube link.',
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
      title: 'Project Images',
      type: 'Image placeholder',
      description:
        'Use this section for screenshots, circuit photos, project diagrams, and final results. It gives you one page where visitors can quickly browse your visual work.',
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
          preview: <div className="media-frame">Preview area</div>
        }
      ]
    }
  ];

  const steps = [
    'Put your video or image files inside a folder like src/media.',
    'Import those files into this page.',
    'Replace each placeholder card with a video tag, image tag, or embedded project link.'
  ];

  return (
    <div className="media-container">
      <header className="media-hero">
        <p className="media-eyebrow">Project Showcase</p>
        <h1>Project Videos and Images</h1>
        <p className="media-intro">
          This page is a placeholder gallery for your project demos. As you collect better clips,
          screenshots, and build photos, we can swap these placeholders with the real files.
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
        <h2>How to add your files later</h2>
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
