import React from 'react';
import { 
  ShieldCheck, 
  FileSpreadsheet, 
  Building2, 
  Database, 
  Lock, 
  MapPin,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { domainsData } from '../data/portfolioData';

const iconMap = {
  iva: ShieldCheck,
  rfp: FileSpreadsheet,
  smartcities: Building2,
  'data-profiling': Database,
  compliance: Lock,
  'gis-circular': MapPin
};

export default function Domains() {
  return (
    <section className="section-spacing" id="domains">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <Sparkles size={14} />
            Core Advisory Domains
          </span>
          <h2 className="section-title">Strategic Consulting Capabilities</h2>
          <p className="section-desc">
            Delivering end-to-end expertise spanning international independent validation, government procurement frameworks, big data profiling, and digital governance.
          </p>
        </div>

        <div className="domains-grid">
          {domainsData.map((domain) => {
            const Icon = iconMap[domain.id] || Sparkles;
            return (
              <div 
                className={`domain-card ${domain.featured ? 'featured' : ''}`} 
                key={domain.id}
              >
                <div>
                  <div className="domain-icon-box">
                    <Icon size={26} />
                  </div>
                  <h3 className="domain-title">{domain.title}</h3>
                  <p className="domain-text">{domain.desc}</p>
                  
                  <div className="domain-bullets">
                    {domain.bullets.map((bullet, bIdx) => (
                      <div className="domain-bullet-item" key={bIdx}>
                        <CheckCircle2 size={16} />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="domain-tags">
                  {domain.tags.map((tag, tIdx) => (
                    <span 
                      className={`tag-pill ${tIdx === 0 ? 'tag-primary' : ''}`} 
                      key={tIdx}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
