import React, { useEffect } from 'react';
import { Shield, Lock, Eye, Mail } from 'lucide-react';

const PrivacyPolicyPage = () => {
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
              Privacy Policy
            </h1>
            <p style={{ fontSize: '1.25rem', fontWeight: 300, opacity: 0.9 }}>
              How we collect, use, and protect your information.
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
                Welcome to Trayam Music. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us.
              </p>
            </div>

            {/* Section 1 */}
            <div className="reveal" style={{ marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Eye size={24} color="var(--color-saffron)" />
                <h3 className="heading-md">1. Information We Collect</h3>
              </div>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-text-muted)' }}>
                We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services (such as Music Education, Live Band Booking, or Studio Recording). The personal information that we collect depends on the context of your interactions with us, and may include:
              </p>
              <ul style={{ marginTop: '1rem', marginLeft: '1.5rem', fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-text-muted)', listStyleType: 'disc' }}>
                <li><strong>Names and Contact Data:</strong> We collect your first and last name, email address, phone number, and other similar contact data.</li>
                <li><strong>Service Inquiries:</strong> Details regarding your musical background, event dates for band bookings, or studio session requirements.</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="reveal" style={{ marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Shield size={24} color="var(--color-saffron)" />
                <h3 className="heading-md">2. How We Use Your Information</h3>
              </div>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-text-muted)' }}>
                We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
              </p>
              <ul style={{ marginTop: '1rem', marginLeft: '1.5rem', fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-text-muted)', listStyleType: 'disc' }}>
                <li>To facilitate account creation and logon process for academy students.</li>
                <li>To send administrative information to you, such as class schedules or studio booking confirmations.</li>
                <li>To fulfill and manage your bookings for the Trayam Live Band or Recording Studio.</li>
                <li>To send you marketing and promotional communications (if you have opted in).</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="reveal" style={{ marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Lock size={24} color="var(--color-saffron)" />
                <h3 className="heading-md">3. Keeping Your Information Safe</h3>
              </div>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-text-muted)' }}>
                We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our site is at your own risk.
              </p>
            </div>

            {/* Section 4 */}
            <div className="reveal" style={{ marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Mail size={24} color="var(--color-saffron)" />
                <h3 className="heading-md">4. Contact Us</h3>
              </div>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-text-muted)' }}>
                If you have questions or comments about this policy, you may email us at <strong>Trayamclass@gmail.com</strong> or by post to:
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

export default PrivacyPolicyPage;