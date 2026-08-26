import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Domains from './components/Domains';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import Toast from './components/Toast';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyText = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`Copied ${label || 'text'} to clipboard!`);
    }).catch(() => {
      showToast(`Selected: ${text}`);
    });
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3500);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="app-root">
      <Header 
        onOpenResume={() => setResumeOpen(true)} 
        onNavClick={handleNavClick} 
      />

      <main>
        <Hero 
          onOpenResume={() => setResumeOpen(true)} 
          onNavClick={handleNavClick} 
        />
        <Metrics />
        <Domains />
        <Experience />
        <Projects 
          onSelectProject={(proj) => setSelectedProject(proj)} 
          onOpenResume={() => setResumeOpen(true)} 
        />
        <Skills />
        <Education />
        <CtaSection onCopyText={handleCopyText} />
      </main>

      <Footer 
        onNavClick={handleNavClick} 
        onOpenResume={() => setResumeOpen(true)} 
      />

      {/* Modals & Overlay Alerts */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
        onContactClick={() => handleNavClick('contact')} 
      />

      <ResumeModal 
        isOpen={resumeOpen} 
        onClose={() => setResumeOpen(false)} 
      />

      <Toast 
        message={toastMessage} 
        isVisible={toastVisible} 
      />

      {/* Back to top button */}
      {showBackToTop && (
        <button 
          className="back-to-top-btn" 
          onClick={scrollToTop} 
          aria-label="Back to top"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </div>
  );
}
