import React from 'react';
import { Phone, Mail, MapPin, ArrowRight, Copy, MessageCircle, Sparkles } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export default function CtaSection({ onCopyText }) {
  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <div className="cta-box">
          <div className="cta-inner">
            <span className="section-badge badge-white">
              <Sparkles size={14} />
              Ready for High-Stakes Engagements
            </span>
            
            <h2 className="cta-title">Let’s Drive Measurable Impact Together</h2>
            <p className="cta-desc">
              Available for Independent Validation Agency (IVA) mandates, government consulting, IT RFP/EOI authoring, and public sector advisory partnerships.
            </p>

            {/* Contact Pills */}
            <div className="cta-contact-cards">
              <a href={`tel:${profileData.phone}`} className="contact-pill-card">
                <div className="contact-pill-icon">
                  <Phone size={18} />
                </div>
                <div className="contact-pill-title">Direct Telephone</div>
                <div className="contact-pill-value">{profileData.phone}</div>
              </a>

              <a href={`mailto:${profileData.email}`} className="contact-pill-card">
                <div className="contact-pill-icon">
                  <Mail size={18} />
                </div>
                <div className="contact-pill-title">Official Email</div>
                <div className="contact-pill-value">{profileData.email}</div>
              </a>

              <div className="contact-pill-card">
                <div className="contact-pill-icon">
                  <MapPin size={18} />
                </div>
                <div className="contact-pill-title">Base Location</div>
                <div className="contact-pill-value">{profileData.location}</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="cta-buttons">
              <a href={`mailto:${profileData.email}`} className="btn btn-white">
                <span>Send Direct Email</span>
                <span className="btn-icon-circle" style={{ background: 'rgba(26,18,110,0.1)', color: 'var(--base-navy)' }}>
                  <ArrowRight size={12} />
                </span>
              </a>

              <a 
                href="https://wa.me/919718049705" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-white-outline"
              >
                <MessageCircle size={16} />
                <span>Chat on WhatsApp</span>
              </a>

              <button 
                className="btn btn-white-outline"
                onClick={() => onCopyText(profileData.email, 'Email address')}
              >
                <Copy size={15} />
                <span>Copy Email Address</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
