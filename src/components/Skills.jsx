import React from 'react';
import { 
  Code2, 
  FileText, 
  BarChart3, 
  ShieldCheck, 
  Languages, 
  Sparkles 
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section 
      className="section-spacing" 
      id="skills" 
      style={{ 
        backgroundColor: '#FFFFFF', 
        borderTop: '1px solid var(--border-light)', 
        borderBottom: '1px solid var(--border-light)' 
      }}
    >
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <Code2 size={14} />
            Technical &amp; Advisory Matrix
          </span>
          <h2 className="section-title">Skills, Tools &amp; Governance</h2>
          <p className="section-desc">
            Comprehensive toolkit balancing analytical rigor, procurement mastery, data privacy compliance, and stakeholder leadership.
          </p>
        </div>

        <div className="skills-matrix-grid">
          {/* Consulting */}
          <div className="skill-category-card">
            <div className="skill-cat-header">
              <div className="skill-cat-icon">
                <FileText size={22} />
              </div>
              <div>
                <h3 className="skill-cat-title">{skillsData.consulting.title}</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {skillsData.consulting.subtitle}
                </span>
              </div>
            </div>

            <div className="skill-items-list">
              {skillsData.consulting.skills.map((skill, idx) => (
                <div className="skill-item-bar" key={idx}>
                  <div className="skill-label-row">
                    <span>{skill.name}</span>
                    <span>{skill.pct}%</span>
                  </div>
                  <div className="skill-track">
                    <div className="skill-progress" style={{ width: `${skill.pct}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Data */}
          <div className="skill-category-card">
            <div className="skill-cat-header">
              <div className="skill-cat-icon">
                <BarChart3 size={22} />
              </div>
              <div>
                <h3 className="skill-cat-title">{skillsData.data.title}</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {skillsData.data.subtitle}
                </span>
              </div>
            </div>

            <div className="skill-items-list">
              {skillsData.data.skills.map((skill, idx) => (
                <div className="skill-item-bar" key={idx}>
                  <div className="skill-label-row">
                    <span>{skill.name}</span>
                    <span>{skill.pct}%</span>
                  </div>
                  <div className="skill-track">
                    <div className="skill-progress" style={{ width: `${skill.pct}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance */}
          <div className="skill-category-card">
            <div className="skill-cat-header">
              <div className="skill-cat-icon">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h3 className="skill-cat-title">{skillsData.compliance.title}</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {skillsData.compliance.subtitle}
                </span>
              </div>
            </div>

            <div className="skill-items-list">
              {skillsData.compliance.skills.map((skill, idx) => (
                <div className="skill-item-bar" key={idx}>
                  <div className="skill-label-row">
                    <span>{skill.name}</span>
                    <span>{skill.pct}%</span>
                  </div>
                  <div className="skill-track">
                    <div className="skill-progress" style={{ width: `${skill.pct}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills & Languages Bar */}
        <div 
          style={{ 
            marginTop: '3rem', 
            background: 'var(--surface-light)', 
            border: '1px solid var(--border-light)', 
            borderRadius: 'var(--radius-lg)', 
            padding: '1.75rem 2rem', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            flexWrap: 'wrap', 
            gap: '1.5rem' 
          }}
        >
          <div>
            <h4 style={{ fontSize: '1.05rem', color: 'var(--base-navy)', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Languages size={18} />
              Communication &amp; Languages
            </h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: 0 }}>
              Professional multilingual proficiency and cross-functional leadership:
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            <span className="tag-pill tag-primary">English (Professional)</span>
            <span className="tag-pill tag-primary">Hindi (Native)</span>
            <span className="tag-pill">Analytical Thinking</span>
            <span className="tag-pill">Client Coordination</span>
            <span className="tag-pill">Time Management</span>
            <span className="tag-pill">Cross-Functional Collaboration</span>
          </div>
        </div>
      </div>
    </section>
  );
}
