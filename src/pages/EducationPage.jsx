import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mic, Music, Wind, Headphones, CheckCircle } from 'lucide-react';

const EducationPage = () => {
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

  const vocalCourses = [
    { title: "Indian Classical", desc: "The foundation of all music. Learn Ragas, Taals, and the intricate nuances of Khayal and Dhrupad." },
    { title: "Sufi & Light Music", desc: "Soul-stirring compositions and ghazals that connect the heart to the divine." },
    { title: "Bollywood Vocals", desc: "Mastering playback singing techniques, microphone presence, and emoting through song." },
    { title: "Western Vocals", desc: "Training in pitch, breath control, and dynamics suited for contemporary western styles." }
  ];

  const instrumentalCourses = [
    { title: "Tabla", desc: "Rhythm is life. Master the language of the drums from basic bols to complex kaydas." },
    { title: "Harmonium", desc: "The perfect accompaniment. Learn melody, fingering techniques, and coordination." },
    { title: "Guitar", desc: "From chords to strumming patterns, acoustic training for modern musicians." },
    { title: "Keyboard", desc: "Synthesizer training covering notation, composition, and digital sound production." }
  ];

  return (
    <div className="bg-texture">
      {/* Hero */}
      <header className="hero" style={{ minHeight: '50vh', height: 'auto', padding: '8rem 0 4rem' }}>
         <div className="hero-overlay"></div>
         <div className="hero-content reveal active" style={{ marginTop: 0 }}>
            <h1 className="heading-xl" style={{ marginBottom: '1rem', background: '-webkit-linear-gradient(#fff, #fdba74)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Education
            </h1>
            <p style={{ fontSize: '1.25rem', fontWeight: 300, opacity: 0.9 }}>
              Imparting the sacred knowledge of Sound (Nada Brahma).
            </p>
         </div>
      </header>

      {/* Intro */}
      <section className="section" style={{ backgroundColor: 'white' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
           <SectionHeading subtitle="Our Methodology" title="The Art of Shiksha" centered />
           <p className="reveal" style={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '2rem', color: 'var(--color-text-muted)' }}>
             At Trayam, we believe that music education is a journey of self-discipline and expression. Our curriculum is designed to cater to both the hobbyist and the professional aspirant. Whether you wish to dive deep into the ocean of Ragas or strum your favorite Bollywood tunes, our expert faculty provides personalized guidance.
           </p>
        </div>
      </section>

      {/* Vocal Wing */}
      <section className="section bg-texture">
        <div className="container">
          <SectionHeading subtitle="The Voice" title="Vocal Training Wing" />
          <div className="programs-grid">
            {vocalCourses.map((course, idx) => (
              <div key={idx} className="program-card reveal">
                <div className="card-icon"><Mic size={24} /></div>
                <h3 className="heading-md" style={{ marginBottom: '0.75rem' }}>{course.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{course.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instrumental Wing */}
      <section className="section" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <SectionHeading subtitle="The Hands" title="Instrumental Wing" />
          <div className="programs-grid">
            {instrumentalCourses.map((course, idx) => (
              <div key={idx} className="program-card reveal">
                <div className="card-icon"><Music size={24} /></div>
                <h3 className="heading-md" style={{ marginBottom: '0.75rem' }}>{course.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{course.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Modules */}
      <section className="section section-dark">
        <div className="container">
           <div className="about-layout" style={{ alignItems: 'center' }}>
              <div className="about-content reveal" style={{ flex: 1 }}>
                 <SectionHeading subtitle="Advanced Modules" title="Beyond the Notes" dark />
                 <p style={{ color: '#d6d3d1', marginBottom: '2rem', lineHeight: 1.8 }}>
                   For those looking to take their craft to a professional level, we offer specialized technical training modules.
                 </p>
                 
                 <div className="about-list" style={{ gridTemplateColumns: '1fr' }}>
                    <div className="list-item" style={{ color: 'white', alignItems: 'flex-start' }}>
                       <div className="check-icon" style={{ marginTop: '0.25rem' }}><Wind size={12} /></div>
                       <div>
                         <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Voice Culture</strong>
                         <span style={{ fontSize: '0.9rem', color: '#a8a29e' }}>Scientific techniques to improve vocal range, breath control, texture, and modulation. Essential for professional singers.</span>
                       </div>
                    </div>
                    <div className="list-item" style={{ color: 'white', marginTop: '1.5rem', alignItems: 'flex-start' }}>
                       <div className="check-icon" style={{ marginTop: '0.25rem' }}><Headphones size={12} /></div>
                       <div>
                         <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Studio Recording Techniques</strong>
                         <span style={{ fontSize: '0.9rem', color: '#a8a29e' }}>Understanding microphone physics, studio etiquette, and the art of recording vocals and instruments for production.</span>
                       </div>
                    </div>
                 </div>
              </div>
              
              <div className="about-image-wrapper reveal" style={{ flex: 1, backgroundColor: 'transparent', boxShadow: 'none' }}>
                 <div style={{ padding: '2rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', background: 'rgba(255,255,255,0.05)' }}>
                    <h3 className="heading-md" style={{ color: 'var(--color-saffron)', marginBottom: '1.5rem' }}>Why Choose Trayam?</h3>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                       {[
                         "Certified Courses & Diploma Options",
                         "Regular Jam Sessions & Recitals",
                         "Preparation for Reality Shows",
                         "Guidance from Prof. Sparsh Upadhyay"
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

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center', padding: '6rem 0' }}>
         <div className="container reveal">
            <h3 className="heading-md" style={{ marginBottom: '1.5rem' }}>Ready to start your musical journey?</h3>
            <p style={{ marginBottom: '2rem', color: 'var(--color-text-muted)' }}>Admissions are open for the upcoming session. Book a trial class today.</p>
            <Link to="/contact" className="btn-primary">
                Book a Trial Class  
            </Link>
         </div>
      </section>
    </div>
  );
};

export default EducationPage;