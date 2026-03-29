import React, { useState, useEffect, useRef} from 'react';
import tabla from '../assets/tabla.jpg';
import live_band from '../assets/live_band.jpg';
import studio1 from '../assets/studio1.jpg';
import { Link } from 'react-router-dom';
import SparshUpadhayProfile from '../assets/SparshUpadhayProfile.png'; // Placeholder for actual profile image
import Team1 from '../assets/Team1.jpg'; // Placeholder for actual team image
import sundTeam from '../assets/soundTeam.jpg'; // Placeholder for actual studio team image
import tanpura from '../assets/tanpura.mp3'; // Placeholder for actual tanpura audio file
import { 
  Play, 
  Calendar, 
  User, 
  Music, 
  Star, 
  MapPin, 
  ArrowRight,
  Mic2,
  Mic,
  Wind,
  ChevronRight,
  Headphones,
  Music4,
  Quote,
  Volume2,
  VolumeX,
} from 'lucide-react';
  // --- Mock Data ---
 // Part 1: Education
  const programs = [
    {
      title: "Vocal Training",
      description: "Indian Classical, Sufi, Light, Bollywood, and Western music training.",
      level: "All Ages",
      icon: <Mic size={24} />
    },
    {
      title: "Instrumental Mastery",
      description: "Expert guidance in Tabla, Harmonium, Guitar, and Keyboard (Synthesizer).",
      level: "Beginner - Advanced",
      icon: <Music size={24} />
    },
    {
      title: "Voice Culture",
      description: "Specialized techniques to enhance vocal range, texture, and modulation.",
      level: "Professional",
      icon: <Wind size={24} />
    },
    {
      title: "Recording Techniques",
      description: "Learn the art of studio recording and audio production.",
      level: "Technical Track",
      icon: <Headphones size={24} />
    }
  ];

  // Founder & Faculty
  const faculty = [
    {
      name: "Prof. Sparsh Upadhyay",
      role: "Founder",
      bio: "Assistant Professor at Sarala Birla University. Master's in Indian Classical Music from Indira Kala Sangeet University (Asia's first dedicated Art & Culture University). 13+ years teaching & 15+ years performing experience.",
      image:SparshUpadhayProfile, // Placeholder for actual image import
      bgColor: "#ffedd5",
      textColor: "#7c2d12"
    },
    {
      name: "Professional Artists",
      role: "Live Band Team",
      bio: "A collective of high-caliber musicians available for concerts, high-class weddings, and special cultural programs.",
      image:Team1, // Placeholder for actual team image
      bgColor: "#fef3c7",
      textColor: "#78350f"
    },
    {
      name: "Sound Engineers",
      role: "Studio Team",
      bio: "Experienced recording artists providing professional vocal and instrument recording services in our fully equipped studio.",
      image:sundTeam, // Placeholder for actual studio team image
      bgColor: "#f5f5f4",
      textColor: "#1c1917"
    }
  ];

  // Part 2 & 3: Services (Replaces Blogs)
  const services = [
    {
      title: "Music Education",
      excerpt: "Comprehensive training in Indian Classical, Sufi, Bollywood, and instruments like Tabla, Harmonium, Guitar, and Keyboard.",
      tag: "Academy",
      image: tabla,
      link: "/education"
    },
    {
      title: "Trayam Live Band",
      excerpt: "Book us for Concerts, Weddings, and Special Events. We bring the soul of music to your special occasions.",
      tag: "Live Music",
      image: live_band,
      link: "/liveband"
    },
    {
      title: "Recording Studio",
      excerpt: "State-of-the-art facility for vocal and instrument recording with professional support for artists.",
      tag: "Studio",
      image: studio1,
      link: "/studio"
    }
  ];

  // Quotes (Kept generic/aspirational)
  const quotes = [
    {
      text: "Our mission is to spread the joy of music and share the essence of authentic Indian Classical art.",
      author: "Trayam Mission"
    },
    {
      text: "Music is the language of the spirit. It opens the secret of life bringing peace, abolishing strife.",
      author: "Kahlil Gibran"
    },
    {
      text: "Raga is not a tune, it is the soul of a feeling.",
      author: "Indian Wisdom"
    }
  ];

  const events = [
    {
      date: "OPEN",
      title: "Admissions Open",
      location: "Kanke Block, Ranchi",
      time: "10:00 AM - 7:00 PM",
      type: "Education"
    },
    {
      date: "BOOK",
      title: "Live Band Booking",
      location: "Your Venue",
      time: "On Request",
      type: "Events"
    },
    {
      date: "STUDIO",
      title: "Recording Sessions",
      location: "Trayam Studio",
      time: "By Appointment",
      type: "Production"
    }
  ];
  const blogs = [
    {
      title: "Understanding the Thaat System",
      excerpt: "A deep dive into the 10 parent scales of Hindustani classical music and their significance.",
      date: "Sep 22, 2024",
      readTime: "5 min read"
    },
    {
      title: "The Importance of Morning Riyaz",
      excerpt: "Why the pre-dawn hours (Brahma Muhurta) are considered sacred for music practice.",
      date: "Oct 05, 2024",
      readTime: "4 min read"
    },
    {
      title: "Gharanas: The Lineage of Sound",
      excerpt: "Exploring the stylistic differences between Gwalior, Agra, and Kirana gharanas.",
      date: "Oct 12, 2024",
      readTime: "7 min read"
    }
  ];

  // --- Hooks ---
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

  // --- Sub-Components ---
  
  const Hero = () => (
      <header className="hero">
        <div className="hero-overlay"></div>
        
        {/* Abstract Decorative Elements */}
        <div className="mandala" style={{ width: '800px', height: '800px', animationDuration: '60s' }}></div>
        <div className="mandala" style={{ width: '600px', height: '600px', animationDuration: '40s', animationDirection: 'reverse' }}></div>
  {/* change the font to make it appear vibrantly  */}
        <div className="hero-content reveal active">
          <div className="hero-badges">
            <div className="hero-line"></div>
            <p className="uppercase font-bold text-saffron text-sm" style={{ background: '-webkit-linear-gradient(#fff, #fdba74)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Kanke Block, Ranchi</p>
            <div className="hero-line"></div>
          </div>
          
          <h1 className="heading-xl" style={{ marginBottom: '1.5rem', background: '-webkit-linear-gradient(#fff, #fdba74)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Trayam <br />
            <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--color-saffron)' }}>A Holistic Journey</span>
          </h1>
          
          <p style={{ fontSize: '1.25rem', fontWeight: 300, marginBottom: '3rem', opacity: 0.9, lineHeight: 1.6 }}>
            Experience the essence of authentic Indian Classical art. Education, Live Music, and Professional Recording.
          </p>
          
          <div className="hero-buttons">
          <Link className="btn-primary" to="/education">
            Start Learning
          </Link>
          <a 
            href="https://youtu.be/uKhrKua7kIk?si=moEvNL_BXfQC6qMp" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary"
          >
            <div className="play-icon-circle">
              <Play size={20} fill="currentColor" />
            </div>
            Watch Performance
          </a>
        </div>
        </div>
      </header>
    );
  
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
  
    const ProgramCard = ({ program, index }) => (
      <div className="program-card reveal" style={{ transitionDelay: `${index * 100}ms` }}>
        <div className="program-arrow">
          <Link to="/education" className="read-link">
            <ArrowRight size={20} />
          </Link>
        </div>
  
        <div className="card-icon">
          {program.icon}
        </div>
        
        <h3 className="heading-md" style={{ marginBottom: '0.75rem', color: 'var(--color-text-main)' }}>{program.title}</h3>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem', lineHeight: 1.6, fontWeight: 300 }}>{program.description}</p>
        
        <div className="program-level">
          <Star size={12} className="text-saffron" fill="currentColor" />
          {program.level}
        </div>
      </div>
    );
  
    const ProgramsSection = () => (
      <section className="section bg-texture">
        <div className="container">
          <SectionHeading subtitle="Education" title="Our Curriculum" centered />
          <div className="programs-grid">
            {programs.map((prog, idx) => (
              <ProgramCard key={idx} program={prog} index={idx} />
            ))}
          </div>
        </div>
      </section>
    );
  
    const AboutSection = () => (
      <section className="section" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="about-layout">
            <div className="about-image-wrapper reveal">
               <div className="about-image-placeholder">
                <img src="https://plus.unsplash.com/premium_photo-1679826780214-668c93c0289f?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About Trayam" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  {/* <User size={64} style={{ opacity: 0.3, marginBottom: '1rem' }} />
                  <span className="uppercase text-xs" style={{ letterSpacing: '0.2em' }}>Founder's Vision</span> */}
               </div>
               <div className="about-overlay-text">
                  <div className="about-overlay-border">
                      <span className="heading-lg" style={{ display: 'block', lineHeight: 1 }}>Trayam</span>
                      <span className="uppercase text-xs" style={{ letterSpacing: '0.2em', color: '#fed7aa' }}>The Three Folds</span>
                  </div>
               </div>
            </div>
            
            <div className="about-content reveal">
              <SectionHeading subtitle="About Trayam" title="Sharing the Essence" />
              <p style={{ fontSize: '1.125rem', lineHeight: 1.6, marginBottom: '1.5rem', fontWeight: 300, color: 'var(--color-text-muted)' }}>
                Located in Kanke Block, Ranchi, <strong>Trayam</strong> offers a holistic music journey. Our mission is to spread the joy of music and share the essence of authentic Indian Classical art with students of all ages.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.6, marginBottom: '2rem', fontWeight: 300, color: 'var(--color-text-muted)' }}>
                We seamlessly blend three distinct worlds: Music Education, Live Performance, and Professional Recording.
              </p>
              
              <div className="about-list">
                 {['Indian Classical & Sufi', 'Bollywood & Light Music', 'Instrumental Training', 'Studio Recording'].map((item, i) => (
                   <div key={i} className="list-item">
                     <div className="check-icon">
                        <ChevronRight size={12} />
                     </div>
                     {item}
                   </div>
                 ))}
              </div>
              
              <Link className="btn-dark" to="/about">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  
const FacultySection = () => (
    <section className="section section-dark">
      <div className="container">
        <div className="faculty-header reveal">
          <div>
            <span className="heading-subtitle">Mentorship</span>
            <h2 className="heading-xl" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>Founder & Team</h2>
          </div>
          {/* <button className="link-arrow hidden-mobile">
            View All <ArrowRight size={16} />
          </button> */}
        </div>

        <div className="faculty-grid">
          {faculty.map((member, idx) => (
            <div key={idx} className="faculty-card reveal" style={{ transitionDelay: `${idx * 150}ms` }}>
              <div className="faculty-image">
                  <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  
                  <div className="faculty-overlay">
                     <p className="uppercase font-bold text-saffron text-xs" style={{ marginBottom: '0.25rem' }}>{member.role}</p>
                     <h3 className="heading-md" style={{ color: 'white' }}>{member.name}</h3>
                  </div>
              </div>
              <p className="faculty-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const QuotesSection = () => (
    <section className="quotes-section">
      <div className="container">
        <div className="quotes-grid">
          {quotes.map((quote, idx) => (
            <div key={idx} className="quote-card reveal">
               <Quote size={32} style={{ color: '#fdba74', marginBottom: '1.5rem', opacity: 0.8 }} />
               <p className="quote-text">"{quote.text}"</p>
               <div className="quote-author">
                 <div className="author-line"></div>
                 {quote.author}
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // const BlogSection = () => (
  //   <section className="section bg-texture">
  //     <div className="container">
  //       <SectionHeading subtitle="Vichaar" title="Notes from the Ashram" centered />
        
  //       <div className="blog-grid">
  //         {blogs.map((blog, idx) => (
  //           <div key={idx} className="blog-card reveal">
  //             <div className="blog-img-area">
  //                <Feather size={48} style={{ opacity: 0.2, color: 'var(--color-text-main)' }} />
  //                <div className="blog-tag">{blog.readTime}</div>
  //             </div>
  //             <div className="blog-content">
  //               <div className="blog-meta">
  //                  <Calendar size={12} />
  //                  <span>{blog.date}</span>
  //               </div>
  //               <h3 className="heading-md" style={{ marginBottom: '0.75rem', fontSize: '1.25rem' }}>
  //                 {blog.title}
  //               </h3>
  //               <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--color-text-muted)' }}>
  //                 {blog.excerpt}
  //               </p>
  //               <a href="#" className="read-link">
  //                 Read Article <ChevronRight size={12} />
  //               </a>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );
  // Renamed to Services Section to match Client's "3 Parts" requirement
  const ServicesSection = () => (
    <section className="section bg-texture">
      <div className="container">
        <SectionHeading subtitle="What We Offer" title="The Three Pillars of Trayam" centered />
        
        <div className="blog-grid">
          {services.map((service, idx) => (
            <div key={idx} className="blog-card reveal">
              <div className="blog-img-area">
                 {/* Replaced Feather with dynamic icon from services array if needed, using clone or generic */}
                 <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                 <div className="blog-tag">{service.tag}</div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                   <Star size={12} />
                   <span>Service {idx + 1}</span>
                </div>
                <h3 className="heading-md" style={{ marginBottom: '0.75rem', fontSize: '1.25rem' }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--color-text-muted)' }}>
                  {service.excerpt}
                </p>
                <Link to={service.link} className="read-link">
                  Learn More <ChevronRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const EventsSection = () => (
    <section className="section" style={{ backgroundColor: 'white', borderTop: '1px solid #e7e5e4' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <SectionHeading subtitle="Bookings" title="Engage With Us" centered />
        
        <div className="events-list">
          {events.map((event, idx) => (
            <div key={idx} className="event-card reveal">
              <div className="event-date-box">
                <span className="date-day" style={{ fontSize: '1.5rem' }}>{event.date}</span>
              </div>
              <div className="event-details">
                <span className="event-type">
                  {event.type}
                </span>
                <h3 className="heading-md" style={{ fontSize: '1.25rem' }}>{event.title}</h3>
                <div className="event-meta">
                  <span className="flex-center" style={{ gap: '0.25rem' }}><MapPin size={12} /> {event.location}</span>
                  <span className="flex-center" style={{ gap: '0.25rem' }}><Calendar size={12} /> {event.time}</span>
                </div>
              </div>
              <Link to="/contact" className="btn-event">
                Contact
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center reveal" style={{ marginTop: '3rem' }}>
          <Link to="/contact" style={{ borderBottom: '2px solid #fed7aa', paddingBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.75rem', fontWeight: 700, color: '#78716c' }}>
              Book an Appointment
          </Link>
        </div>
      </div>
    </section>
  );

// --- Main Page Component ---

const HomePage = () => {
  // --- Audio Logic ---
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    audio.volume = 0.2; // Keep it subtle

    // Function to attempt playing
    const attemptPlay = () => {
      audio.play()
        .then(() => {
          setIsPlaying(true);
          document.removeEventListener('click', attemptPlay);
          document.removeEventListener('scroll', attemptPlay);
          document.removeEventListener('keydown', attemptPlay);
        })
        .catch((error) => {
          // Autoplay blocked
          setIsPlaying(false);
        });
    };

    attemptPlay();

    document.addEventListener('click', attemptPlay);
    document.addEventListener('scroll', attemptPlay);
    document.addEventListener('keydown', attemptPlay);

    return () => {
      document.removeEventListener('click', attemptPlay);
      document.removeEventListener('scroll', attemptPlay);
      document.removeEventListener('keydown', attemptPlay);
    };
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play();
        setIsPlaying(true);
      }
    }
  };

  useScrollAnimation();

  return (
    <div className="bg-texture">
      {/* Hidden Audio Player */}
      <audio ref={audioRef} src={tanpura} loop />
      
      {/* Floating Control Button */}
      <button 
        onClick={toggleAudio}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 9999,
          width: '3.5rem',
          height: '3.5rem',
          borderRadius: '50%',
          backgroundColor: 'var(--color-saffron)',
          color: 'white',
          border: 'none',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'transform 0.3s'
        }}
        onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.target.style.transform = 'scale(1.0)'}
        aria-label="Toggle Background Music"
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>

       <Hero />
      <AboutSection />
      <ProgramsSection />
      <QuotesSection />
      <FacultySection />
      <ServicesSection/>
      <EventsSection />
    </div>
  );
};

export default HomePage;