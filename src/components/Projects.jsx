import React, { useState } from 'react';
import { 
  FolderGit2, 
  BookOpen, 
  Building, 
  Globe2, 
  ChevronRight, 
  Check, 
  Award,
  Sparkles
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects({ onSelectProject, onOpenResume }) {
  const [filter, setFilter] = useState('all');

  const filteredProjects = projectsData.filter((proj) => {
    if (filter === 'all') return true;
    return proj.filterCat.includes(filter);
  });

  return (
    <section className="section-spacing" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <FolderGit2 size={14} />
            Featured Engagements
          </span>
          <h2 className="section-title">Projects &amp; Research Portfolio</h2>
          <p className="section-desc">
            Key national government assignments, published IEEE research, and multilateral verification mandates.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="projects-filter-bar">
          <button 
            className={`project-filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`project-filter-btn ${filter === 'ieee' ? 'active' : ''}`}
            onClick={() => setFilter('ieee')}
          >
            Academic &amp; IEEE
          </button>
          <button 
            className={`project-filter-btn ${filter === 'government' ? 'active' : ''}`}
            onClick={() => setFilter('government')}
          >
            National Government
          </button>
          <button 
            className={`project-filter-btn ${filter === 'multilateral' ? 'active' : ''}`}
            onClick={() => setFilter('multilateral')}
          >
            IVA &amp; Multilateral
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-card-header">
                <div>
                  <div className="project-category-badge">
                    {project.filterCat.includes('ieee') ? (
                      <BookOpen size={14} />
                    ) : project.filterCat.includes('government') ? (
                      <Building size={14} />
                    ) : (
                      <Globe2 size={14} />
                    )}
                    <span>{project.category}</span>
                  </div>
                  <h3 className="project-card-title">{project.title}</h3>
                </div>
                <span className="tag-pill tag-primary">{project.badge}</span>
              </div>

              <div className="project-card-body">
                <p className="project-card-desc">{project.desc}</p>
                
                <div className="project-highlights-box">
                  {project.highlights.slice(0, 3).map((h, hIdx) => (
                    <div className="project-highlight-item" key={hIdx}>
                      <Check size={16} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="project-card-footer">
                <div className="project-tech-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span className="tag-pill" key={tIdx}>
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button 
                  className="project-action-link"
                  onClick={() => onSelectProject(project)}
                >
                  <span>Deep Dive</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* IEEE Spotlight Banner */}
        <div className="spotlight-banner">
          <div className="spotlight-inner">
            <div className="spotlight-content">
              <span className="section-badge badge-white">
                <Award size={14} />
                Published Academic Research
              </span>
              <h3>IEEE Research Publication</h3>
              <p>
                Published peer-reviewed research paper titled <strong>"Reusefy: pre-owned items for resale and manages donations of usable goods"</strong> in IEEE, exploring digital mechanisms for circular economy acceleration and orphanage welfare support.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button 
                  className="btn btn-white btn-sm"
                  onClick={() => onSelectProject(projectsData.find(p => p.id === 'reusefy'))}
                >
                  View Research Scope
                </button>
                <button className="btn btn-white-outline btn-sm" onClick={onOpenResume}>
                  View All Publications
                </button>
              </div>
            </div>

            <div className="spotlight-card-preview">
              <div className="preview-badge-row">
                <span className="preview-ieee-badge">IEEE XPLORE</span>
                <span style={{ fontSize: '0.75rem', color: '#A5B4FC', fontWeight: 700 }}>
                  PEER-REVIEWED
                </span>
              </div>
              <div className="preview-title">
                "Reusefy: Pre-Owned Items for Resale and Manages Donations of Usable Goods"
              </div>
              <div className="preview-authors">Author: Robins | ITS Engineering College (CSE)</div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-inverse-muted)', lineHeight: 1.55, margin: 0 }}>
                Investigates software architectures for circular goods refurbishment, automated quality grading protocols, and transparent philanthropic distribution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
