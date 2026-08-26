import React from 'react';
import { X, Building2, Calendar, Sparkles } from 'lucide-react';

export default function ProjectModal({ project, onClose, onContactClick }) {
  if (!project) return null;

  return (
    <div 
      className="modal-backdrop"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="modal-container">
        <div className="modal-header">
          <h3 style={{ fontSize: '1.35rem', color: 'var(--base-navy)', margin: 0 }}>
            {project.title}
          </h3>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
            <span className="tag-pill tag-primary">{project.category}</span>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Building2 size={14} /> {project.org}
            </span>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--violet-500)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Calendar size={14} /> {project.tenure}
            </span>
          </div>

          <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
            Executive Overview
          </h4>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            {project.desc}
          </p>

          <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
            Key Outcomes &amp; Responsibilities
          </h4>
          <div style={{ background: 'var(--surface-alt)', borderRadius: '12px', padding: '1.25rem', marginBottom: '1.5rem' }}>
            {project.highlights.map((h, idx) => (
              <div 
                key={idx} 
                style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.65rem', fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}
              >
                <span style={{ color: 'var(--violet-500)', fontWeight: 'bold', marginTop: '2px' }}>✦</span>
                <span>{h}</span>
              </div>
            ))}
          </div>

          <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
            Domain &amp; Technologies
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {project.tags.map((tag, idx) => (
              <span className="tag-pill" key={idx}>
                {tag}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
            <button className="btn btn-outline btn-sm" onClick={onClose}>
              Close Preview
            </button>
            <button 
              className="btn btn-primary btn-sm" 
              onClick={() => { onClose(); onContactClick(); }}
            >
              <span>Discuss Similar Scope</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
