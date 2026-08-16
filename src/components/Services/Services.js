import React from 'react';
import { services } from '../../data/resumeData';
import './Services.css';

function Services() {
  return (
    <section id="services">
      <div className="section-wrapper">
        <div className="reveal">
          <div className="section-title">Services</div>
          <div className="section-sub"> WHAT I OFFER</div>
        </div>

        <div className="svc-grid reveal">
          {services.map((s, i) => (
            <div className="svc-card" key={i}>
              <div className="svc-icon">{s.icon}</div>
              <div className="svc-title">{s.title}</div>
              <p className="svc-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
