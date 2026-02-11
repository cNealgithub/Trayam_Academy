import React, { useEffect } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const ContactPage = () => {
  // Reuse scroll animation hook
  const useScrollAnimation = () => {
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
            }
          });
        },
        { threshold: 0.1 },
      );

      const elements = document.querySelectorAll(".reveal");
      elements.forEach((el) => observer.observe(el));

      return () => elements.forEach((el) => observer.unobserve(el));
    }, []);
  };

  useScrollAnimation();

  // Reusable Section Heading
  const SectionHeading = ({
    subtitle,
    title,
    centered = false,
    dark = false,
  }) => (
    <div className={`section-heading reveal ${centered ? "centered" : ""}`}>
      <span
        className="heading-subtitle"
        style={{ color: dark ? "#fb923c" : "var(--color-saffron)" }}
      >
        {subtitle}
      </span>
      <h2
        className="heading-lg"
        style={{ color: dark ? "white" : "var(--color-text-main)" }}
      >
        {title}
      </h2>
      <div className="heading-divider"></div>
    </div>
  );

  return (
    <div className="bg-texture">
      {/* Hero */}
      <header
        className="hero"
        style={{ minHeight: "50vh", height: "auto", padding: "8rem 0 4rem" }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content reveal active" style={{ marginTop: 0 }}>
          <h1
            className="heading-xl"
            style={{
              marginBottom: "1rem",
              background: "-webkit-linear-gradient(#fff, #fdba74)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Contact Us
          </h1>
          <p style={{ fontSize: "1.25rem", fontWeight: 300, opacity: 0.9 }}>
            We'd love to hear from you. Start your musical journey today.
          </p>
        </div>
      </header>

      {/* Contact Info Cards */}
      <section className="section" style={{ backgroundColor: "white" }}>
        <div className="container">
          <div
            className="programs-grid"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            }}
          >
            <div
              className="program-card reveal"
              style={{ textAlign: "center" }}
            >
              <div className="card-icon" style={{ margin: "0 auto 1.5rem" }}>
                <MapPin size={24} />
              </div>
              <h3 className="heading-md" style={{ marginBottom: "0.75rem" }}>
                Visit Us
              </h3>
              <p
                style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}
              >
                Kanke Block, Ranchi
                <br />
                Jharkhand, India
              </p>
            </div>
            <div
              className="program-card reveal"
              style={{ textAlign: "center" }}
            >
              <div className="card-icon" style={{ margin: "0 auto 1.5rem" }}>
                <Phone size={24} />
              </div>
              <h3 className="heading-md" style={{ marginBottom: "0.75rem" }}>
                Call Us
              </h3>
              <p
                style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}
              >
                +91 77710 31921
                <br />
                +91 70255 73133
              </p>
            </div>
            <div
              className="program-card reveal"
              style={{ textAlign: "center" }}
            >
              <div className="card-icon" style={{ margin: "0 auto 1.5rem" }}>
                <Mail size={24} />
              </div>
              <h3 className="heading-md" style={{ marginBottom: "0.75rem" }}>
                Email Us
              </h3>
              <a
                href="mailto:Trayamclass@gmail.com"
                style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}
              >
                Trayamclass@gmail.com
              </a>
            </div>
            <div
              className="program-card reveal"
              style={{ textAlign: "center" }}
            >
              <div className="card-icon" style={{ margin: "0 auto 1.5rem" }}>
                <Clock size={24} />
              </div>
              <h3 className="heading-md" style={{ marginBottom: "0.75rem" }}>
                Hours
              </h3>
              <p
                style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}
              >
                Mon - Sat: 10:00 AM - 7:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Message Form & Map Placeholder */}
      <section className="section section-dark">
        <div className="container">
          <div className="about-layout" style={{ alignItems: "flex-start" }}>
            {/* Form */}
            <div
              className="about-content reveal"
              style={{ flex: 1, width: "100%" }}
            >
              <SectionHeading
                subtitle="Get In Touch"
                title="Send a Message"
                dark
              />
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1.5rem",
                  }}
                >
                  <input
                    type="text"
                    placeholder="First Name"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      padding: "1rem",
                      color: "white",
                      borderRadius: "4px",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      padding: "1rem",
                      color: "white",
                      borderRadius: "4px",
                    }}
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    padding: "1rem",
                    color: "white",
                    borderRadius: "4px",
                    width: "100%",
                  }}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    padding: "1rem",
                    color: "white",
                    borderRadius: "4px",
                    width: "100%",
                  }}
                />
                <select
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    padding: "1rem",
                    color: "#a8a29e",
                    borderRadius: "4px",
                    width: "100%",
                  }}
                >
                  <option>I'm interested in...</option>
                  <option>Music Classes</option>
                  <option>Live Band Booking</option>
                  <option>Studio Recording</option>
                  <option>Other Inquiry</option>
                </select>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    padding: "1rem",
                    color: "white",
                    borderRadius: "4px",
                    width: "100%",
                  }}
                ></textarea>
                <button
                  type="button"
                  className="btn-primary"
                  style={{
                    alignSelf: "flex-start",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  Send Message <Send size={16} />
                </button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div
              className="about-image-wrapper reveal"
              style={{
                flex: 1,
                minHeight: "500px",
                backgroundColor: "#44403c",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#a8a29e",
                  opacity: 0.5,
                }}
              >
                <MapPin size={64} style={{ marginBottom: "1rem" }} />
                <span
                  style={{ textTransform: "uppercase", letterSpacing: "0.1em" }}
                >
                  Map Visualization
                </span>
              </div>
              {/* Overlay Card */}
              <div
                style={{
                  position: "absolute",
                  bottom: "2rem",
                  left: "2rem",
                  right: "2rem",
                  background: "white",
                  padding: "1.5rem",
                  borderRadius: "4px",
                }}
              >
                <h4
                  className="heading-md"
                  style={{
                    color: "var(--color-text-main)",
                    fontSize: "1.1rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Trayam Music Academy
                </h4>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--color-text-muted)",
                  }}
                >
                  Come visit us for a tour of our studio and classrooms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
