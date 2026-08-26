import React from 'react';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section className="section-spacing" id="education">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <GraduationCap size={14} />
            Academic Foundation
          </span>
          <h2 className="section-title">Education &amp; Qualifications</h2>
          <p className="section-desc">
            Solid technical engineering backing underpinning data architectures and public sector digital consulting.
          </p>
        </div>

        <div className="education-card">
          <div className="edu-icon-badge">
            🎓
          </div>
          
          <div className="edu-details">
            <h3>{educationData.degree}</h3>
            <div className="edu-college-name">{educationData.college}</div>
            
            <div className="edu-meta-row">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <MapPin size={14} />
                {educationData.location}
              </span>
              <span>•</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <Calendar size={14} />
                {educationData.tenure}
              </span>
              <span>•</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <Award size={14} />
                {educationData.honors}
              </span>
            </div>

            <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginTop: '0.75rem' }}>
              {educationData.description}
            </p>
          </div>

          <div className="edu-grade-badge">
            <div className="edu-grade-num">{educationData.cgpa}</div>
            <div className="edu-grade-label">CGPA / 10.0</div>
          </div>
        </div>
      </div>
    </section>
  );
}
