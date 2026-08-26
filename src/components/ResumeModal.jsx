import React from 'react';
import { X, Printer, Download } from 'lucide-react';
import { profileData, experienceData, educationData, skillsData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="modal-backdrop"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="modal-container">
        <div className="modal-header">
          <h3 style={{ fontSize: '1.35rem', color: 'var(--base-navy)', margin: 0 }}>
            Robins — Official Curriculum Vitae
          </h3>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <button 
              onClick={() => window.print()} 
              className="btn btn-primary btn-sm"
              style={{ display: 'inline-flex', gap: '0.4rem', alignItems: 'center' }}
            >
              <Printer size={15} />
              <span>Print / Save PDF</span>
            </button>
            <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="modal-body" style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
          {/* Header */}
          <div style={{ borderBottom: '2px solid var(--base-navy)', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '2rem', color: 'var(--base-navy)', marginBottom: '0.25rem' }}>
              ROBINS
            </h2>
            <p style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--violet-500)', margin: 0 }}>
              {profileData.title}
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
              {profileData.location} • {profileData.phone} • {profileData.email}
            </p>
          </div>

          {/* Professional Summary */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ color: 'var(--base-navy)', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.35rem', marginBottom: '0.75rem', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
              Professional Summary
            </h4>
            <p style={{ lineHeight: 1.65, fontSize: '0.925rem' }}>
              {profileData.summary}
            </p>
          </div>

          {/* Experience */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ color: 'var(--base-navy)', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.35rem', marginBottom: '0.75rem', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
              Work Experience
            </h4>

            {experienceData.map((exp) => (
              <div style={{ marginBottom: '1.25rem' }} key={exp.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, flexWrap: 'wrap' }}>
                  <span style={{ color: 'var(--text-primary)' }}>{exp.company} — {exp.role}</span>
                  <span style={{ color: 'var(--violet-500)' }}>{exp.tenure} | {exp.location}</span>
                </div>

                {exp.subProjects ? (
                  exp.subProjects.map((sub, sIdx) => (
                    <div key={sIdx} style={{ marginTop: '0.4rem' }}>
                      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--base-navy)' }}>• {sub.title}</span>
                      <ul style={{ listStyle: 'circle', marginLeft: '1.5rem', marginTop: '0.2rem', fontSize: '0.875rem', lineHeight: 1.55 }}>
                        {sub.bullets.map((b, bIdx) => (
                          <li key={bIdx}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))
                ) : (
                  <ul style={{ listStyle: 'disc', marginLeft: '1.25rem', marginTop: '0.35rem', fontSize: '0.875rem', lineHeight: 1.55 }}>
                    {exp.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Academic & Research Projects */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ color: 'var(--base-navy)', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.35rem', marginBottom: '0.75rem', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
              Academic &amp; Research Highlights
            </h4>
            <ul style={{ listStyle: 'disc', marginLeft: '1.25rem', fontSize: '0.875rem', lineHeight: 1.55 }}>
              <li><strong>Reusefy (IEEE Published Paper):</strong> Developed circular economy web platform for pre-owned items refurbishment, tracking, and orphan children donation management.</li>
              <li><strong>Scalable GIS Workflow System:</strong> Designed spatial coordinate verification system under MHA supervision, reducing verification cycle time by 25%.</li>
            </ul>
          </div>

          {/* Education */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ color: 'var(--base-navy)', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.35rem', marginBottom: '0.75rem', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
              Education
            </h4>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.9rem', flexWrap: 'wrap' }}>
              <span>{educationData.college} — {educationData.degree}</span>
              <span style={{ color: 'var(--violet-500)' }}>CGPA: {educationData.cgpa} | {educationData.tenure}</span>
            </div>
          </div>

          {/* Competencies */}
          <div>
            <h4 style={{ color: 'var(--base-navy)', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.35rem', marginBottom: '0.75rem', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
              Core Competencies &amp; Tools
            </h4>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
              <strong>Advisory &amp; Proposals:</strong> IVA Audits, RFP/EOI Drafting, Technical Workplans, Bid Management, JV Structuring, SLA Protocol.<br />
              <strong>Data &amp; Analytics:</strong> MS Office Suite, Advanced Excel (Sampling, Modeling), Power BI, SQL, GIS-based Workflow Systems.<br />
              <strong>Governance &amp; Privacy:</strong> Data Privacy Monitoring Tools, DLP Solutions, Privacy by Design Methodology, CTO &amp; CTE Compliance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
