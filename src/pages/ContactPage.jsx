import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  // --- Form Handling Logic for Web3Forms ---
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");
    
    const formData = new FormData(event.target);

    // Replace with your actual Web3Forms Access Key
    formData.append("access_key", "a81c8771-4d1b-4873-9801-542e2bfbc665");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully! We will get back to you soon.");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResult("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- Scroll Animation Hook ---
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

  return (
    <div className="bg-texture">
      {/* Hero */}
      <header className="hero" style={{ minHeight: '50vh', height: 'auto', padding: '8rem 0 4rem' }}>
         <div className="hero-overlay"></div>
         <div className="hero-content reveal active" style={{ marginTop: 0 }}>
            <h1 className="heading-xl" style={{ marginBottom: '1rem', background: '-webkit-linear-gradient(#fff, #fdba74)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Contact Us
            </h1>
            <p style={{ fontSize: '1.25rem', fontWeight: 300, opacity: 0.9 }}>
              We'd love to hear from you. Start your musical journey today.
            </p>
         </div>
      </header>

      {/* Contact Info Cards */}
      <section className="section" style={{ backgroundColor: 'white' }}>
        <div className="container">
           <div className="programs-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
              <div className="program-card reveal" style={{ textAlign: 'center' }}>
                 <div className="card-icon" style={{ margin: '0 auto 1.5rem' }}><MapPin size={24} /></div>
                 <h3 className="heading-md" style={{ marginBottom: '0.75rem' }}>Visit Us</h3>
                 <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                    Kanke Block, Ranchi<br/>Jharkhand, India
                 </p>
              </div>
              <div className="program-card reveal" style={{ textAlign: 'center' }}>
                 <div className="card-icon" style={{ margin: '0 auto 1.5rem' }}><Phone size={24} /></div>
                 <h3 className="heading-md" style={{ marginBottom: '0.75rem' }}>Call Us</h3>
                 <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                    +91 77710 31921<br/>+91 70255 73133
                 </p>
              </div>
              <div className="program-card reveal" style={{ textAlign: 'center' }}>
                 <div className="card-icon" style={{ margin: '0 auto 1.5rem' }}><Mail size={24} /></div>
                 <h3 className="heading-md" style={{ marginBottom: '0.75rem' }}>Email Us</h3>
                 <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                   <a href="mailto:Trayamclass@gmail.com" style={{ color: 'var(--color-saffron)', textDecoration: 'underline' }}>
                     Trayamclass@gmail.com
                   </a>
                 </p>
              </div>
              <div className="program-card reveal" style={{ textAlign: 'center' }}>
                 <div className="card-icon" style={{ margin: '0 auto 1.5rem' }}><Clock size={24} /></div>
                 <h3 className="heading-md" style={{ marginBottom: '0.75rem' }}>Hours</h3>
                 <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                    Mon - Sat: 10:00 AM - 7:00 PM<br/>Sunday: Closed
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* Message Form & Map Placeholder */}
      <section className="section section-dark">
        <div className="container">
           <div className="about-layout" style={{ alignItems: 'flex-start' }}>
              
              {/* Form */}
              <div className="about-content reveal" style={{ flex: 1, width: '100%' }}>
                 <SectionHeading subtitle="Get In Touch" title="Send a Message" dark />
                 
                 <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {/* Hidden Subject Field for Web3Forms email formatting */}
                    <input type="hidden" name="subject" value="New Inquiry from Trayam Website" />
                    
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                       <input type="text" name="first_name" placeholder="First Name" required style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', color: 'white', borderRadius: '4px' }} />
                       <input type="text" name="last_name" placeholder="Last Name" required style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', color: 'white', borderRadius: '4px' }} />
                    </div>
                    
                    <input type="email" name="email" placeholder="Email Address" required style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', color: 'white', borderRadius: '4px', width: '100%' }} />
                    <input type="tel" name="phone" placeholder="Phone Number" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', color: 'white', borderRadius: '4px', width: '100%' }} />
                    
                    <select name="interest" required style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', color: '#a8a29e', borderRadius: '4px', width: '100%' }}>
                       <option value="" disabled selected>I'm interested in...</option>
                       <option value="Music Classes">Music Classes</option>
                       <option value="Live Band Booking">Live Band Booking</option>
                       <option value="Studio Recording">Studio Recording</option>
                       <option value="Other Inquiry">Other Inquiry</option>
                    </select>
                    
                    <textarea name="message" placeholder="Your Message" rows="4" required style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', color: 'white', borderRadius: '4px', width: '100%' }}></textarea>
                    
                    <button type="submit" disabled={isSubmitting} className="btn-primary" style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}>
                       {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={16} />
                    </button>

                    {/* Status Message Display */}
                    {result && (
                       <div style={{ marginTop: '1rem', padding: '1rem', borderRadius: '4px', backgroundColor: result.includes('success') ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)', color: result.includes('success') ? '#4ade80' : '#f87171', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                          {result.includes('success') && <CheckCircle size={18} />}
                          {result}
                       </div>
                    )}
                 </form>
              </div>

              {/* Map Placeholder */}
              <div className="about-image-wrapper reveal" style={{ flex: 1, minHeight: '500px', backgroundColor: '#44403c', position: 'relative' }}>
                 <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#a8a29e', opacity: 0.5 }}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3660.965871433582!2d85.34382507532598!3d23.425599978893388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDI1JzMyLjIiTiA4NcKwMjAnNDcuMCJF!5e0!3m2!1sen!2sin!4v1771836131324!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>      
                 </div>
                 {/* Overlay Card */}
                 <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem', background: 'white', padding: '1.5rem', borderRadius: '4px' }}>
                    <h4 className="heading-md" style={{ color: 'var(--color-text-main)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Trayam Music Academy</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Come visit us for a tour of our studio and classrooms.</p>
                 </div>
              </div>
              
           </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;