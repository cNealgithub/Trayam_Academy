import React, { useEffect } from 'react';
import { FileText, CheckCircle, AlertTriangle, Scale, Mail } from 'lucide-react';

const TermsOfServicePage = () => {
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
      {/* Hero */}
      <header className="hero" style={{ minHeight: '50vh', height: 'auto', padding: '8rem 0 4rem' }}>
         <div className="hero-overlay"></div>
         <div className="hero-content reveal active" style={{ marginTop: 0 }}>
            <h1 className="heading-xl" style={{ marginBottom: '1rem', background: '-webkit-linear-gradient(#fff, #fdba74)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Terms of Service
            </h1>
            <p style={{ fontSize: '1.25rem', fontWeight: 300, opacity: 0.9 }}>
              Rules, guidelines, and agreements for using Trayam's services.
            </p>
         </div>
      </header>

      {/* Main Content Section */}
      <section className="section" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            
            <div className="reveal" style={{ marginBottom: '3rem', textAlign: 'center' }}>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', fontStyle: 'italic' }}>
                Last Updated: March 2026
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.8, marginTop: '1.5rem', color: 'var(--color-text-main)' }}>
                Please read these Terms of Service carefully before enrolling in our academy, booking our live band, or renting our recording studio. By accessing or using our services, you agree to be bound by these terms.
              </p>
            </div>

            {/* Section 1 */}
            <div className="reveal" style={{ marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <FileText size={24} color="var(--color-saffron)" />
                <h3 className="heading-md">1. Academy & Education Guidelines</h3>
              </div>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-text-muted)' }}>
                For students enrolling in Trayam Music Academy, the following rules apply to ensure a disciplined and respectful learning environment:
              </p>
              <ul style={{ marginTop: '1rem', marginLeft: '1.5rem', fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-text-muted)', listStyleType: 'disc' }}>
                <li><strong>Fees & Payments:</strong> Monthly tuition fees must be paid by the 5th of every month. Late payments may incur a late fee.</li>
                <li><strong>Attendance:</strong> Students are expected to maintain at least 80% attendance. Missed group classes will not be compensated unless canceled by the instructor.</li>
                <li><strong>Discipline:</strong> We uphold the Guru-Shishya Parampara. Disrespect towards instructors, peers, or academy property will result in immediate termination of enrollment without refund.</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="reveal" style={{ marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <CheckCircle size={24} color="var(--color-saffron)" />
                <h3 className="heading-md">2. Live Band Booking Terms</h3>
              </div>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-text-muted)' }}>
                When booking the Trayam Live Band for weddings, concerts, or private events, the following conditions govern the agreement:
              </p>
              <ul style={{ marginTop: '1rem', marginLeft: '1.5rem', fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-text-muted)', listStyleType: 'disc' }}>
                <li><strong>Advances:</strong> A non-refundable advance of 50% is required to lock in the event date. The remaining balance must be cleared on or before the event date.</li>
                <li><strong>Technical Requirements:</strong> The client must provide a safe performance stage and adequate power supply. If Trayam is providing the sound system, it will be detailed in a separate technical rider.</li>
                <li><strong>Cancellations:</strong> Cancellations made less than 15 days prior to the event will result in a 100% forfeiture of the booking advance.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="reveal" style={{ marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <AlertTriangle size={24} color="var(--color-saffron)" />
                <h3 className="heading-md">3. Studio Recording Policies</h3>
              </div>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-text-muted)' }}>
                Our studio is a professional environment. To maintain the quality of our equipment and sessions, please adhere to the following:
              </p>
              <ul style={{ marginTop: '1rem', marginLeft: '1.5rem', fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-text-muted)', listStyleType: 'disc' }}>
                <li><strong>Punctuality:</strong> Studio time starts exactly at the booked hour. Delays on the client's end will not extend the session.</li>
                <li><strong>Equipment Safety:</strong> Clients are liable for any physical damage caused to microphones, instruments, or studio gear due to negligence.</li>
                <li><strong>Data Retention:</strong> We hold project files (stems/mixes) for 30 days post-session. Clients are advised to bring a hard drive to collect their data immediately after the session.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="reveal" style={{ marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Scale size={24} color="var(--color-saffron)" />
                <h3 className="heading-md">4. Governing Law</h3>
              </div>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-text-muted)' }}>
                These Terms of Service and any separate agreements whereby we provide you services shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Ranchi, Jharkhand.
              </p>
            </div>

            {/* Section 5 */}
            <div className="reveal" style={{ marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Mail size={24} color="var(--color-saffron)" />
                <h3 className="heading-md">5. Contact Information</h3>
              </div>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-text-muted)' }}>
                Questions about the Terms of Service should be sent to us at <strong>Trayamclass@gmail.com</strong>.
              </p>
              <div style={{ marginTop: '1.5rem', padding: '1.5rem', backgroundColor: 'var(--color-saffron-light)', borderLeft: '4px solid var(--color-saffron)', borderRadius: '4px' }}>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>Trayam Music Academy</h4>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  Kanke Block<br />
                  Ranchi, Jharkhand<br />
                  India
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;