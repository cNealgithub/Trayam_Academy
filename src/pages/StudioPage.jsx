import React, { useEffect } from 'react';
import { Mic, Headphones, Sliders, Music, Speaker, CheckCircle, Settings, Layers } from 'lucide-react';

const StudioPage = () => {
  // Reuse scroll animation hook
  const useScrollAnimation = () => {
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, { threshold: 0.1 });

      const elements = document.querySelectorAll('.reveal');
      elements.forEach(el => observer.observe(el));

      return () => elements.forEach(el => observer.unobserve(el));
    }, []);
  };

  useScrollAnimation();

  // Reusable Section Heading
  const SectionHeading = ({ subtitle, title, centered = false, dark = false }) => (
    <div className={`section-heading reveal ${centered ? 'centered' : ''}`}>
      <span className="heading-subtitle" style={{ color: dark ? '#fb923c' : 'var(--color-saffron)' }}>
        {subtitle}
      </span>
      <h2 className="heading-lg" style={{ color: dark ? 'white' : 'var(--color-text-main)' }}>
        {title}
      </h2>
      <div className="heading-divider"></div>
    </div>
  );

  const studioServices = [
    { 
      title: "Vocal Recording", 
      icon: <Mic size={24} />, 
      desc: "Pristine capture for classical vocals, playback singing, and voice-overs using industry-standard microphones." 
    },
    { 
      title: "Instrument Tracking", 
      icon: <Music size={24} />, 
      desc: "Specialized miking techniques for Indian instruments like Tabla, Harmonium, and Sitar to capture their natural resonance." 
    },
    { 
      title: "Mixing & Mastering", 
      icon: <Sliders size={24} />, 
      desc: "Professional post-production to balance levels, EQ, and dynamics, giving your track a broadcast-ready polish." 
    },
    { 
      title: "Music Production", 
      icon: <Layers size={24} />, 
      desc: "Full-scale arrangement and programming services to turn your raw melody into a complete musical composition." 
    }
  ];

  return (
    <div className="bg-texture">
      {/* Hero */}
      <header className="hero" style={{ minHeight: '50vh', height: 'auto', padding: '8rem 0 4rem' }}>
         <div className="hero-overlay"></div>
         <div className="hero-content reveal active" style={{ marginTop: 0 }}>
            <h1 className="heading-xl" style={{ marginBottom: '1rem', background: '-webkit-linear-gradient(#fff, #fdba74)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Trayam Studios
            </h1>
            <p style={{ fontSize: '1.25rem', fontWeight: 300, opacity: 0.9 }}>
              Where technology meets tradition to immortalize your sound.
            </p>
         </div>
      </header>

      {/* Intro */}
      <section className="section" style={{ backgroundColor: 'white' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
           <SectionHeading subtitle="The Facility" title="Professional Sound in Ranchi" centered />
           <p className="reveal" style={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '2rem', color: 'var(--color-text-muted)' }}>
             Located in Kanke Block, <strong>Trayam Studios</strong> offers a professionally treated acoustic environment designed for serious musicians. Whether you are a classical maestro needing to capture the nuances of a live recital or a modern artist looking for a punchy mix, our engineers and equipment ensure your vision is translated perfectly into sound.
           </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-texture">
        <div className="container">
          <SectionHeading subtitle="Capabilities" title="Studio Services" />
          <div className="programs-grid">
            {studioServices.map((service, idx) => (
              <div key={idx} className="program-card reveal">
                <div className="card-icon">{service.icon}</div>
                <h3 className="heading-md" style={{ marginBottom: '0.75rem' }}>{service.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Specs / Dark Section */}
      <section className="section section-dark">
        <div className="container">
           <div className="about-layout" style={{ alignItems: 'center' }}>
              <div className="about-content reveal" style={{ flex: 1 }}>
                 <SectionHeading subtitle="The Gear" title="Technical Specifications" dark />
                 <p style={{ color: '#d6d3d1', marginBottom: '2rem', lineHeight: 1.8 }}>
                   We believe in using the best tools to capture the purest sound. Our inventory includes high-fidelity equipment suited for diverse genres.
                 </p>
                 
                 <div className="about-list" style={{ gridTemplateColumns: '1fr' }}>
                    <div className="list-item" style={{ color: 'white', alignItems: 'flex-start' }}>
                       <div className="check-icon" style={{ marginTop: '0.25rem' }}><Speaker size={12} /></div>
                       <div>
                         <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Acoustic Treatment</strong>
                         <span style={{ fontSize: '0.9rem', color: '#a8a29e' }}>Professionally tuned control room and isolation booth to ensure flat frequency response and zero noise floor.</span>
                       </div>
                    </div>
                    <div className="list-item" style={{ color: 'white', marginTop: '1.5rem', alignItems: 'flex-start' }}>
                       <div className="check-icon" style={{ marginTop: '0.25rem' }}><Settings size={12} /></div>
                       <div>
                         <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Hardware & Software</strong>
                         <span style={{ fontSize: '0.9rem', color: '#a8a29e' }}>Industry-standard DAWs (Logic Pro, Cubase), Condenser & Dynamic Microphones, and High-Headroom Preamps.</span>
                       </div>
                    </div>
                 </div>
              </div>
              
              <div className="about-image-wrapper reveal" style={{ flex: 1, backgroundColor: 'transparent', boxShadow: 'none' }}>
                 <div style={{ padding: '2rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', background: 'rgba(255,255,255,0.05)' }}>
                    <h3 className="heading-md" style={{ color: 'var(--color-saffron)', marginBottom: '1.5rem' }}>Studio Highlights</h3>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                       {[
                         "Dedicated Vocal Booth",
                         "Live Room for Instruments",
                         "Experienced Sound Engineers",
                         "Video Recording Support"
                       ].map((item, i) => (
                         <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'white' }}>
                            <CheckCircle size={16} color="var(--color-saffron)" /> {item}
                         </li>
                       ))}
                    </ul>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section" style={{ backgroundColor: 'white' }}>
         <div className="container">
            <SectionHeading subtitle="Workflow" title="How It Works" centered />
            <div className="programs-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                <div className="program-card reveal" style={{ textAlign: 'center', border: 'none', boxShadow: 'none' }}>
                    <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#fed7aa', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>01</div>
                    <h3 className="heading-md">Book & Consult</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Discuss your project needs and book a slot.</p>
                </div>
                <div className="program-card reveal" style={{ textAlign: 'center', border: 'none', boxShadow: 'none' }}>
                    <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#fdba74', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>02</div>
                    <h3 className="heading-md">Record</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Capture your performance with our engineer.</p>
                </div>
                <div className="program-card reveal" style={{ textAlign: 'center', border: 'none', boxShadow: 'none' }}>
                    <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#fb923c', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>03</div>
                    <h3 className="heading-md">Mix & Master</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>We polish the tracks and deliver the final master.</p>
                </div>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center', padding: '6rem 0' }}>
         <div className="container reveal">
            <h3 className="heading-md" style={{ marginBottom: '1.5rem' }}>Ready to Record?</h3>
            <p style={{ marginBottom: '2rem', color: 'var(--color-text-muted)' }}>Book your studio session today and bring your music to life.</p>
            <button className="btn-primary">Book Session</button>
         </div>
      </section>
    </div>
  );
};

export default StudioPage;