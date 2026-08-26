import React from 'react';
import { Phone, Mail, MapPin, FileText } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export default function Footer({ onNavClick, onOpenResume }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand">
            <h4>ROBINS</h4>
            <p>
              IVA &amp; Government Advisory Consultant delivering excellence across multilateral programs, IT RFP architectures, and national mission frameworks.
            </p>
          </div>

          {/* Quick Nav */}
          <div>
            <div className="footer-heading">Navigation</div>
            <div className="footer-links">
              <button className="footer-link" onClick={() => onNavClick('hero')} style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer' }}>Home</button>
              <button className="footer-link" onClick={() => onNavClick('domains')} style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer' }}>Core Domains</button>
              <button className="footer-link" onClick={() => onNavClick('experience')} style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer' }}>Experience</button>
              <button className="footer-link" onClick={() => onNavClick('projects')} style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer' }}>Projects &amp; Research</button>
              <button className="footer-link" onClick={() => onNavClick('skills')} style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer' }}>Skills Matrix</button>
            </div>
          </div>

          {/* Focus Areas */}
          <div>
            <div className="footer-heading">Focus Areas</div>
            <div className="footer-links">
              <span className="footer-link">World Bank IVA Projects</span>
              <span className="footer-link">100 Smart Cities IMAF 2.0</span>
              <span className="footer-link">MHA 500K Data Profiling</span>
              <span className="footer-link">IT RFP / EOI Methodologies</span>
              <span className="footer-link">MoHUA RRR Initiative</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="footer-heading">Direct Contact</div>
            <div className="footer-links">
              <a href={`tel:${profileData.phone}`} className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Phone size={14} /> {profileData.phone}
              </a>
              <a href={`mailto:${profileData.email}`} className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Mail size={14} /> {profileData.email}
              </a>
              <span className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <MapPin size={14} /> {profileData.location}
              </span>
              <button 
                className="btn btn-white-outline btn-sm" 
                style={{ marginTop: '0.75rem', width: 'fit-content' }} 
                onClick={onOpenResume}
              >
                <FileText size={14} />
                <span>Open Official CV</span>
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; 2025–2026 Robins. All rights reserved. React Portfolio inspired by Rezon Bio.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <button 
              className="footer-link" 
              onClick={() => onNavClick('hero')} 
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
