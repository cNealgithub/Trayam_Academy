  import { useState, useEffect } from 'react';
  import { Link } from 'react-router-dom';
  import {  
  Menu, 
  X
} from 'lucide-react';
  
  // --- Sub-Components ---
  
 const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 50);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" }, 
      { name: "Education", href: "/education" },   
      { name: "Live Band", href: "/liveband" },     
      { name: "Studio", href: "/studio" },     
      { name: "Contact", href: "/contact" }
    ];

    return (
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container flex-between">
          <div className="logo-container">
            <div className="logo-icon">T</div>
            <div>
              <span style={{ display: 'block', fontSize: '1.5rem', fontFamily: 'var(--font-display)', lineHeight: 1 }}>Trayam</span>
              <span style={{ display: 'block', fontSize: '0.65rem', fontFamily: 'var(--font-sans)', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#fed7aa' }}>Music • Art</span>
            </div>
          </div>

          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
            <button className="btn-join">Join Trayam</button>
          </div>

          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="mobile-menu">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
            <button className="btn-join" style={{ width: '100%', textAlign: 'center', color: 'white', borderColor: 'white' }}>Join Trayam</button>
          </div>
        )}
      </nav>
    );
  };

  export default Navigation;
