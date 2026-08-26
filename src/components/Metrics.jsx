import React, { useState, useEffect, useRef } from 'react';
import { metricsData } from '../data/portfolioData';

export default function Metrics() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState(metricsData.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          metricsData.forEach((item, index) => {
            const duration = 1800;
            const steps = 60;
            const stepTime = duration / steps;
            const increment = item.target / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= item.target) {
                current = item.target;
                clearInterval(timer);
              }
              setCounts((prev) => {
                const next = [...prev];
                next[index] = Math.floor(current);
                return next;
              });
            }, stepTime);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const formatDisplay = (num, original) => {
    if (!hasAnimated) return original;
    if (num >= 1000) {
      return num.toLocaleString() + '+';
    }
    return num + '+';
  };

  return (
    <section className="metrics-section" ref={sectionRef}>
      <div className="container">
        <div className="metrics-grid">
          {metricsData.map((metric, idx) => (
            <div className="metric-card" key={idx}>
              <div className="metric-card-number">
                {hasAnimated ? formatDisplay(counts[idx], metric.value) : metric.value}
              </div>
              <div className="metric-card-title">{metric.title}</div>
              <div className="metric-card-desc">{metric.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
