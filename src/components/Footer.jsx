import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div style={{ gridColumn: "span 1" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <div
              className="logo-icon"
              style={{ width: "2.5rem", height: "2.5rem", fontSize: "1.25rem" }}
            >
              T
            </div>
            <span
              style={{
                fontSize: "1.25rem",
                fontFamily: "var(--font-display)",
                color: "white",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Trayam <span className="text-saffron">Music</span>
            </span>
          </div>
          <p
            style={{
              fontSize: "0.875rem",
              lineHeight: 1.6,
              marginBottom: "1.5rem",
            }}
          >
            Spreading the joy of music through Education, Live Performance, and
            Recording.
          </p>
          <div className="social-row">
            {[1, 2, 3].map((i) => (
              <div key={i} className="social-icon">
                <span style={{ fontSize: "0.65rem" }}>SOC</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="footer-title">Explore</h4>
          <ul className="footer-links">
            {[
              "Home",
              "About Founder",
              "Education",
              "Live Band",
              "Recording Studio",
              "Contact",
            ].map((link) => (
              <li key={link}>
                <a href="/">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="footer-title">Services</h4>
          <ul className="footer-links">
            {[
              "Vocal Training",
              "Instrumental",
              "Concert Booking",
              "Wedding Band",
              "Studio Recording",
            ].map((link) => (
              <li key={link}>
                <a href="/education">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="footer-title">Contact Us</h4>
          <ul className="footer-contact">
            <li>
              <MapPin
                size={16}
                className="text-saffron"
                style={{ flexShrink: 0 }}
              />
              <a
                href="https://www.google.com/maps?q=23.4256,85.3464"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  Kanke Block,
                  <br />
                  Ranchi, Jharkhand
                </span>
              </a>
            </li>
            <li>
              <Phone
                size={16}
                className="text-saffron"
                style={{ flexShrink: 0 }}
              />
              <span>+91 77710 31921</span>
            </li>
            <li>
              <Phone
                size={16}
                className="text-saffron"
                style={{ flexShrink: 0 }}
              />
              <span>+91 70255 73133</span>
            </li>
            <li>
              <Mail
                size={16}
                className="text-saffron"
                style={{ flexShrink: 0 }}
              />
              <a href="mailto:Trayamclass@gmail.com">
                <span>Trayamclass@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Trayam Music. All rights reserved.</p>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
