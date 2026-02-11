import React, { useEffect } from 'react';
import SparshUpadhayProfile from '../assets/SparshUpadhayProfile.jpg';
import { User, Music, Mic2, Award, Heart, Star, Frown } from 'lucide-react';

const AboutPage = () => {
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
  const SectionHeading = ({ subtitle, title, centered = false }) => (
    <div className={`section-heading reveal ${centered ? 'centered' : ''}`}>
      <span className="heading-subtitle" style={{ color: 'var(--color-saffron)' }}>
        {subtitle}
      </span>
      <h2 className="heading-lg" style={{ color: 'var(--color-text-main)' }}>
        {title}
      </h2>
      <div className="heading-divider"></div>
    </div>
  );

  return (
    <div className="bg-texture">
        {/* Simple Hero */}
      <header className="hero" style={{ minHeight: '50vh', height: 'auto', padding: '8rem 0 4rem' }}>
         <div className="hero-overlay"></div>
         <div className="hero-content reveal active" style={{ marginTop: 0 }}>
            <h1 className="heading-xl" style={{ marginBottom: '1rem', background: '-webkit-linear-gradient(#fff, #fdba74)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Our Story
            </h1>
            <p style={{ fontSize: '1.25rem', fontWeight: 300, opacity: 0.9 }}>
              Weaving the threads of Education, Performance, and Production.
            </p>
         </div>
      </header>

      {/* About Trayam Content */}
      <section className="section" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="about-layout" style={{ display: 'block' }}> {/* Overriding flex layout for text focus */}
            <div className="about-content reveal" style={{ width: '100%', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <SectionHeading subtitle="Who We Are" title="Trayam: The Three Folds" centered />
              <p style={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '1.5rem', color: 'var(--color-text-muted)', textAlign: 'left' }}>
                Nestled in the heart of <strong>Kanke Block, Ranchi</strong>, Trayam is more than just a music academy; it is a sanctuary for art. Our name, "Trayam" (Sanskrit for "The Trio" or "Threefold"), reflects our unique holistic approach to music.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '2rem', color: 'var(--color-text-muted)', textAlign: 'left' }}>
                We believe that a complete musician must not only learn but also perform and create. Thus, we have built our institution on three sturdy pillars: 
                <br/><br/>
                1. <strong>Education (Shiksha)</strong>: Where we nurture raw talent through Indian Classical, Sufi, and Bollywood training.<br/>
                2. <strong>Live Performance (Pradarshan)</strong>: Where we bring music to life on stage through our professional band.<br/>
                3. <strong>Studio Recording (Dhvani)</strong>: Where we immortalize sound with state-of-the-art production.
              </p>
            </div>
          </div>
          
          {/* Values Grid */}
          <div className="programs-grid" style={{ marginTop: '4rem' }}>
             {[
                { title: 'Tradition', icon: <Music size={24} />, text: 'Rooted deeply in the Guru-Shishya Parampara of Indian Classical Music.' },
                { title: 'Innovation', icon: <Mic2 size={24} />, text: 'Embracing modern technology and diverse genres like Western and Light Music.' },
                { title: 'Community', icon: <Heart size={24} />, text: 'Creating a family of artists, students, and music lovers in Ranchi.' }
             ].map((val, idx) => (
                <div key={idx} className="program-card reveal" style={{ textAlign: 'center' }}>
                   <div className="card-icon" style={{ margin: '0 auto 1.5rem' }}>{val.icon}</div>
                   <h3 className="heading-md" style={{ marginBottom: '0.5rem' }}>{val.title}</h3>
                   <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{val.text}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section section-dark">
        <div className="container">
           {/* Reusing about-layout class but forcing row direction for desktop */}
           <div className="about-layout" style={{ alignItems: 'flex-start' }}>
              
              <div className="about-image-wrapper reveal" style={{ flex: 1 }}>
                 {/* Placeholder for Founder Image */}
                 <div style={{ width: '100%', paddingTop: '100%', backgroundColor: '#333', borderRadius: '8px', position: 'relative' }}>
                  <img src={SparshUpadhayProfile} alt="Prof. Sparsh Upadhyay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                 </div>
              </div>

              <div className="about-content reveal" style={{ flex: 1, paddingLeft: 'clamp(0px, 5vw, 2rem)', marginTop: '2rem' }}>
                 <div className="section-heading">
                    <span className="heading-subtitle" style={{ color: '#fb923c' }}>The Visionary</span>
                    <h2 className="heading-lg" style={{ color: 'white' }}>Prof. Sparsh Upadhyay</h2>
                    <div className="heading-divider" style={{ marginLeft: 0 }}></div>
                 </div>
                 
                 <p style={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '1.5rem', color: '#d6d3d1' }}>
                    The soul behind Trayam, Sparsh Upadhyay is a distinguished figure in the world of Indian Classical Music. Currently serving as an <strong>Assistant Professor of Music at Sarala Birla University</strong>, he brings academic rigor to artistic expression.
                 </p>
                 <p style={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '2rem', color: '#d6d3d1' }}>
                    He holds a Master's degree from <strong>Indira Kala Sangeet University</strong>, Asia's first university dedicated entirely to Art & Culture. With over <strong>13 years of teaching experience</strong> and <strong>15 years of performing experience</strong>, Prof. Upadhyay is dedicated to preserving the authenticity of classical arts while making them accessible to the modern generation.
                 </p>
                 
                 <div className="event-meta" style={{ justifyContent: 'flex-start', color: '#fb923c', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Award size={18} /> Master of Arts (Indian Classical Music)</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Star size={18} /> 15+ Years Performing Artist</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Quote/Closing */}
      <section className="section" style={{ padding: '6rem 0', textAlign: 'center' }}>
         <div className="container reveal">
            <h3 className="heading-md" style={{ fontSize: '2rem', fontStyle: 'italic', marginBottom: '2rem', fontFamily: 'var(--font-display)' }}>
               "Music is the mediator between the spiritual and the sensual life."
            </h3>
            <p style={{ color: 'var(--color-text-muted)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>— Ludwig van Beethoven</p>
         </div>
      </section>
    </div>
  );
};

export default AboutPage;