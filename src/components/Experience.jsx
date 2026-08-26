import React, { useState } from 'react';
import { Briefcase, MapPin, Check, Clock, ShieldCheck, Building2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredExperience = experienceData.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category.includes(activeFilter);
  });

  return (
    <section 
      className="section-spacing" 
      id="experience" 
      style={{ 
        backgroundColor: '#FFFFFF', 
        borderTop: '1px solid var(--border-light)', 
        borderBottom: '1px solid var(--border-light)' 
      }}
    >
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <Briefcase size={14} />
            Career Track Record
          </span>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-desc">
            Progressive track record in international advisory, government coordination, and mission-oriented consulting across top organizations.
          </p>
        </div>

        <div className="experience-layout">
          {/* Sticky Sidebar */}
          <aside className="experience-sidebar">
            <h4 style={{ fontSize: '1.15rem', color: 'var(--base-navy)', marginBottom: '0.75rem' }}>
              Experience Filter
            </h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              Select category to focus on specific mandates:
            </p>

            <div className="exp-filter-tabs">
              <button 
                className={`exp-tab-btn ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveFilter('all')}
              >
                <span>All Experience</span>
                <span className="exp-tab-count">{experienceData.length}</span>
              </button>

              <button 
                className={`exp-tab-btn ${activeFilter === 'corporate' ? 'active' : ''}`}
                onClick={() => setActiveFilter('corporate')}
              >
                <span>Consulting &amp; Advisory</span>
                <span className="exp-tab-count">
                  {experienceData.filter(e => e.category.includes('corporate')).length}
                </span>
              </button>

              <button 
                className={`exp-tab-btn ${activeFilter === 'government' ? 'active' : ''}`}
                onClick={() => setActiveFilter('government')}
              >
                <span>Government Missions (QCI/MHA)</span>
                <span className="exp-tab-count">
                  {experienceData.filter(e => e.category.includes('government')).length}
                </span>
              </button>

              <button 
                className={`exp-tab-btn ${activeFilter === 'internship' ? 'active' : ''}`}
                onClick={() => setActiveFilter('internship')}
              >
                <span>Public Sector Internships</span>
                <span className="exp-tab-count">
                  {experienceData.filter(e => e.category.includes('internship')).length}
                </span>
              </button>
            </div>

            <div className="sidebar-summary-box">
              <div className="sidebar-summary-title">
                <Clock size={18} />
                <span>Total Engagement</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
                3+ Years of continuous delivery across multilateral organizations &amp; national government ministries.
              </p>
            </div>
          </aside>

          {/* Timeline Feed */}
          <div className="timeline-feed">
            {filteredExperience.map((exp) => (
              <div className="timeline-card" key={exp.id}>
                <div className="timeline-header">
                  <div className="timeline-role-meta">
                    <h3>{exp.role}</h3>
                    <div className="timeline-company-row">
                      <span className="company-name">{exp.company}</span>
                      <span className="timeline-location">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <span className="timeline-badge-tenure">{exp.tenure}</span>
                </div>

                {exp.desc && (
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                    {exp.desc}
                  </p>
                )}

                {/* Sub-projects (for QCI Senior Coordinator) */}
                {exp.subProjects ? (
                  exp.subProjects.map((sub, sIdx) => (
                    <div className="timeline-sub-project" key={sIdx}>
                      <div className="timeline-sub-title">
                        {sIdx === 0 ? <ShieldCheck size={18} /> : <Building2 size={18} />}
                        <span>{sub.title}</span>
                      </div>
                      <div className="timeline-bullets" style={{ marginTop: '0.5rem' }}>
                        {sub.bullets.map((b, bIdx) => (
                          <div className="timeline-bullet" key={bIdx}>
                            <div className="bullet-icon">
                              <Check size={11} />
                            </div>
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="timeline-bullets">
                    {exp.bullets.map((bullet, idx) => (
                      <div className="timeline-bullet" key={idx}>
                        <div className="bullet-icon">
                          <Check size={11} />
                        </div>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="timeline-tags-footer">
                  <span className="timeline-tags-label">Key Areas:</span>
                  {exp.tags.map((tag, tIdx) => (
                    <span 
                      className={`tag-pill ${tIdx === 0 ? 'tag-primary' : ''}`} 
                      key={tIdx}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
