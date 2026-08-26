import React, { useState, useEffect } from 'react';
import { FileText, ArrowRight, Menu, X } from 'lucide-react';

export default function Header({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'domains', 'experience', 'projects', 'skills', 'education'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveNav(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  };

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    document.body.classList.remove('no-scroll');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="container header-inner">
          {/* Brand Logo */}
          <a 
            href="#hero" 
            className="brand-logo"
            onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}
          >
            <div className="brand-icon-symbol">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H14C17.3137 4 20 6.68629 20 10C20 13.3137 17.3137 16 14 16H9V20H4V4Z" fill="#6554DE"/>
                <path d="M13 14L20 21H15L9 15H13Z" fill="#FB9660"/>
                <rect x="4" y="4" width="4" height="16" rx="2" fill="#FFFFFF"/>
              </svg>
            </div>
            <div>
              <span>ROBINS</span>
              <span className="brand-title-sub">Consultant & Advisory</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="nav-menu" aria-label="Main Navigation">
            <button 
              className={`nav-link ${activeNav === 'hero' ? 'active' : ''}`}
              onClick={() => handleNavClick('hero')}
            >
              Home
            </button>
            <button 
              className={`nav-link ${activeNav === 'domains' ? 'active' : ''}`}
              onClick={() => handleNavClick('domains')}
            >
              Domains
            </button>
            <button 
              className={`nav-link ${activeNav === 'experience' ? 'active' : ''}`}
              onClick={() => handleNavClick('experience')}
            >
              Experience
            </button>
            <button 
              className={`nav-link ${activeNav === 'projects' ? 'active' : ''}`}
              onClick={() => handleNavClick('projects')}
            >
              Projects & Research
            </button>
            <button 
              className={`nav-link ${activeNav === 'skills' ? 'active' : ''}`}
              onClick={() => handleNavClick('skills')}
            >
              Skills
            </button>
            <button 
              className={`nav-link ${activeNav === 'education' ? 'active' : ''}`}
              onClick={() => handleNavClick('education')}
            >
              Education
            </button>
          </nav>

          {/* Header Action Buttons */}
          <div className="header-actions">
            <button className="btn btn-outline btn-sm" onClick={onOpenResume}>
              <FileText size={15} />
              <span>View CV</span>
            </button>
            <a 
              href="#contact" 
              className="btn btn-primary btn-sm"
              onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
            >
              <span>Contact</span>
              <span className="btn-icon-circle">
                <ArrowRight size={12} />
              </span>
            </a>
            <button 
              className={`nav-toggler ${mobileMenuOpen ? 'active' : ''}`} 
              aria-label="Toggle navigation"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div 
        className={`mobile-overlay ${mobileMenuOpen ? 'is-active' : ''}`}
        onClick={(e) => { if (e.target === e.currentTarget) toggleMobileMenu(); }}
      >
        <div className="mobile-menu-drawer">
          <div className="mobile-nav-list">
            <button className={`mobile-nav-link ${activeNav === 'hero' ? 'active' : ''}`} onClick={() => handleNavClick('hero')}>
              Home
            </button>
            <button className={`mobile-nav-link ${activeNav === 'domains' ? 'active' : ''}`} onClick={() => handleNavClick('domains')}>
              Core Domains
            </button>
            <button className={`mobile-nav-link ${activeNav === 'experience' ? 'active' : ''}`} onClick={() => handleNavClick('experience')}>
              Work Experience
            </button>
            <button className={`mobile-nav-link ${activeNav === 'projects' ? 'active' : ''}`} onClick={() => handleNavClick('projects')}>
              Projects & Research
            </button>
            <button className={`mobile-nav-link ${activeNav === 'skills' ? 'active' : ''}`} onClick={() => handleNavClick('skills')}>
              Skills & Frameworks
            </button>
            <button className={`mobile-nav-link ${activeNav === 'education' ? 'active' : ''}`} onClick={() => handleNavClick('education')}>
              Education
            </button>
            <button className={`mobile-nav-link ${activeNav === 'contact' ? 'active' : ''}`} onClick={() => handleNavClick('contact')}>
              Get in Touch
            </button>
          </div>
          <div className="mobile-drawer-footer">
            <button className="btn btn-outline" style={{ width: '100%' }} onClick={() => { toggleMobileMenu(); onOpenResume(); }}>
              View Full Resume
            </button>
            <a href="tel:+919718049705" className="btn btn-primary" style={{ width: '100%' }}>
              Call +91-9718049705
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
