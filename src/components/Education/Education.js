import React from 'react';
import { educationTimeline } from '../../data/resumeData';
import './Education.css';

function Education() {
  return (
    <section id="education">
      <div className="section-wrapper">
        <div className="reveal">
          <div className="section-title">Education &amp; Certs</div>
          <div className="section-sub"> KNOWLEDGE BASE</div>
        </div>

        <div className="timeline reveal">
          {educationTimeline.map((item, i) => (
            <div className="tl-item" key={i}>
              <div className={`tl-dot ${item.type === 'cert' ? 'cyan' : ''}`} />
              <div className={`tl-card ${item.type === 'cert' ? 'cert' : ''}`}>
                <div className="tl-date">{item.period}</div>
                <div className="tl-title">{item.title}</div>
                <div className="tl-sub">{item.sub}</div>
                <p className="tl-text">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
