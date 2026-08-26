import React from 'react';
import { ArrowRight, Download, Phone, Mail, MapPin } from 'lucide-react';
import { profileData, trustBadges } from '../data/portfolioData';

export default function Hero({ onOpenResume, onNavClick }) {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg-grid"></div>
      <div className="container hero-content">
        {/* Status Pill */}
        <div className="hero-badge-pill">
          <span className="hero-badge-dot"></span>
          <span>Management Consultancy</span>
        </div>

        {/* Master Heading */}
        <h1 className="hero-title">
          Bridging Strategy, Data Validation &amp; <br />
          <span className="text-gradient">Measurable Public Sector Impact</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-description">
          Consultant with <strong>3+ years of specialized experience</strong> in Independent Validation Agency (IVA) projects, government consulting, and high-stakes IT RFPs/EOIs. Partnering with global institutions including the <strong>World Bank, UNICEF, UNICC, AFDB</strong> and core GOI ministries (<strong>MHA, MoHUA, MOEFCC</strong>).
        </p>

        {/* CTA Actions */}
        <div className="hero-cta-group">
          <button 
            className="btn btn-primary"
            onClick={() => onNavClick('experience')}
          >
            <span>Explore Experience &amp; Impact</span>
            <span className="btn-icon-circle">
              <ArrowRight size={12} />
            </span>
          </button>
          
          <button className="btn btn-outline" onClick={onOpenResume}>
            <Download size={16} />
            <span>Curriculum Vitae</span>
          </button>
          
          <button 
            className="btn btn-outline"
            onClick={() => onNavClick('contact')}
          >
            <span>Contact Robins</span>
          </button>
        </div>

        {/* Quick Meta Info */}
        <div className="hero-quick-meta">
          <div className="meta-item">
            <div className="meta-item-icon">
              <MapPin size={16} />
            </div>
            <span>{profileData.location}</span>
          </div>

          <div className="meta-item">
            <div className="meta-item-icon">
              <Phone size={16} />
            </div>
            <a href={`tel:${profileData.phone}`} style={{ color: 'inherit' }}>
              {profileData.phone}
            </a>
          </div>

          <div className="meta-item">
            <div className="meta-item-icon">
              <Mail size={16} />
            </div>
            <a href={`mailto:${profileData.email}`} style={{ color: 'inherit' }}>
              {profileData.email}
            </a>
          </div>
        </div>

        {/* Trust Badges Strip */}
        <div className="trust-strip">
          <span className="trust-strip-label">
            Engaged with Multilateral Organizations &amp; Government Bodies
          </span>
          <div className="trust-badges-grid">
            {trustBadges.map((badge, idx) => (
              <div className="trust-badge-pill" key={idx}>
                <span className="trust-pill-icon">{badge.icon}</span>
                <div>
                  <div className="trust-pill-text">{badge.name}</div>
                  <div className="trust-pill-tag">{badge.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
