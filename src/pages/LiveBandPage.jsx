import React, { useEffect } from "react";
import Fusion from "../assets/Fusion.png";
import Wedding from "../assets/Wedding.png";
import CorporateGala from "../assets/CorporateGala.png";
import sufiNight from "../assets/sufiNight.png";
import {
  Music4,
  Mic2,
  Star,
  Calendar,
  Camera,
  Play,
  Users,
  Heart,
} from "lucide-react";

const LiveBandPage = () => {
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

  const performanceTypes = [
    {
      title: "Weddings & Sangeet",
      icon: <Heart size={24} />,
      desc: "Add a royal touch to your special day with our blend of traditional wedding folk, lively Bollywood numbers, and soulful Sufi music.",
    },
    {
      title: "Cultural Concerts",
      icon: <Music4 size={24} />,
      desc: "Pure Indian Classical and semi-classical recitals that transport the audience to a different realm of peace and aesthetics.",
    },
    {
      title: "Corporate Events",
      icon: <Users size={24} />,
      desc: "Sophisticated instrumental fusion and light music to set the perfect ambiance for galas, dinners, and corporate gatherings.",
    },
    {
      title: "Private Gazal Nights",
      icon: <Mic2 size={24} />,
      desc: "Intimate sessions featuring the poetry of Ghalib, Faiz, and contemporary gems, performed with authentic instrumentation.",
    },
  ];

  // Mock data for the gallery section
  const galleryItems = [
    {
      caption: "Annual Sufi Night Concert",
      location: " ",
      color: "#fca5a5",
      image: sufiNight
    },
    {
      caption: "Royal Wedding Sangeet",
      location: " ",
      color: "#fdba74",
      image: Wedding
    },
    { caption: "Corporate Gala", 
      location: " ", 
      image: CorporateGala,
      color: "#86efac" 
    },
    {
      caption: "Classical Fusion Concert",
      location: " ",
      image: Fusion,
      color: "#93c5fd",
    },
  ];

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
            Trayam Live
          </h1>
          <p style={{ fontSize: "1.25rem", fontWeight: 300, opacity: 0.9 }}>
            Elevating events with the soul-stirring magic of live music.
          </p>
        </div>
      </header>

      {/* Intro */}
      <section className="section" style={{ backgroundColor: "white" }}>
        <div
          className="container"
          style={{ textAlign: "center", maxWidth: "800px" }}
        >
          <SectionHeading
            subtitle="The Experience"
            title="More Than Just A Band"
            centered
          />
          <p
            className="reveal"
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.8,
              marginBottom: "2rem",
              color: "var(--color-text-muted)",
            }}
          >
            The <strong>Trayam Live Band</strong> is a collective of
            high-caliber musicians led by Prof. Sparsh Upadhyay. We don't just
            play songs; we curate experiences. From the meditative strums of the
            Sitar to the high-energy beats of Bollywood, our repertoire is
            versatile enough to suit the mood of any occasion while maintaining
            the dignity of the art form.
          </p>
        </div>
      </section>

      {/* Performance Offerings */}
      <section className="section bg-texture">
        <div className="container">
          <SectionHeading subtitle="Occasions" title="Performance Services" />
          <div className="programs-grid">
            {performanceTypes.map((type, idx) => (
              <div key={idx} className="program-card reveal">
                <div className="card-icon">{type.icon}</div>
                <h3 className="heading-md" style={{ marginBottom: "0.75rem" }}>
                  {type.title}
                </h3>
                <p
                  style={{
                    color: "var(--color-text-muted)",
                    fontSize: "0.9rem",
                  }}
                >
                  {type.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery / Past Performances */}
      <section className="section" style={{ backgroundColor: "white" }}>
        <div className="container">
          <SectionHeading
            subtitle="Moments"
            title="Glimpses of Grandeur"
            centered
          />
          <div className="programs-grid">
            {" "}
            {/* Reusing the grid layout for gallery cards */}
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                className="program-card reveal"
                style={{
                  padding: 0,
                  overflow: "hidden",
                  border: "none",
                  minHeight: "300px",
                }}
              >
                {/* Image */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.caption}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />

                  {/* Overlay Caption */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "1.5rem",
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                      color: "white",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: "1.1rem",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {item.caption}
                    </p>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        opacity: 0.9,
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <Calendar size={12} /> {item.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center reveal" style={{ marginTop: "3rem" }}>
            <button
              className="btn-secondary"
              style={{
                color: "var(--color-text-main)",
                borderColor: "var(--color-text-main)",
              }}
            >
              <div
                className="play-icon-circle"
                style={{ borderColor: "var(--color-text-main)" }}
              >
                <Play size={20} fill="currentColor" />
              </div>
              Watch Our Showreel
            </button>
          </div>
        </div>
      </section>

      {/* Repertoire / Genres */}
      <section className="section section-dark">
        <div className="container">
          <div className="about-layout" style={{ alignItems: "center" }}>
            <div className="about-content reveal" style={{ flex: 1 }}>
              <SectionHeading
                subtitle="Repertoire"
                title="The Sound of Trayam"
                dark
              />
              <p
                style={{
                  color: "#d6d3d1",
                  marginBottom: "2rem",
                  lineHeight: 1.8,
                }}
              >
                Our musical library spans across centuries and genres, ensuring
                a bespoke setlist for every event.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "2rem",
                }}
              >
                <div>
                  <h4
                    style={{
                      color: "var(--color-saffron)",
                      marginBottom: "1rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    Classical & Folk
                  </h4>
                  <ul
                    style={{
                      color: "#d6d3d1",
                      fontSize: "0.9rem",
                      lineHeight: "1.6",
                    }}
                  >
                    <li>Thumri & Dadra</li>
                    <li>Rajasthani Folk</li>
                    <li>Sufi Qawwali</li>
                  </ul>
                </div>
                <div>
                  <h4
                    style={{
                      color: "var(--color-saffron)",
                      marginBottom: "1rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    Modern & Fusion
                  </h4>
                  <ul
                    style={{
                      color: "#d6d3d1",
                      fontSize: "0.9rem",
                      lineHeight: "1.6",
                    }}
                  >
                    <li>Bollywood Unplugged</li>
                    <li>Classical Rock Fusion</li>
                    <li>Instrumental Jam</li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="about-image-wrapper reveal"
              style={{
                flex: 1,
                border: "none",
                background: "transparent",
                boxShadow: "none",
              }}
            >
              <div
                style={{
                  border: "2px solid rgba(255,255,255,0.1)",
                  padding: "2rem",
                  textAlign: "center",
                }}
              >
                <Star
                  size={48}
                  color="#fb923c"
                  style={{ margin: "0 auto 1.5rem" }}
                />
                <h3
                  style={{
                    color: "white",
                    fontSize: "1.5rem",
                    marginBottom: "1rem",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  "The highlight of our evening."
                </h3>
                <p style={{ color: "#a8a29e", fontStyle: "italic" }}>
                  — Corporate Client, Ranchi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section"
        style={{ textAlign: "center", padding: "6rem 0" }}
      >
        <div className="container reveal">
          <h3 className="heading-md" style={{ marginBottom: "1.5rem" }}>
            Planning an Event?
          </h3>
          <p style={{ marginBottom: "2rem", color: "var(--color-text-muted)" }}>
            Get in touch to check our availability and discuss your
            requirements.
          </p>
          <button className="btn-primary">Book The Band</button>
        </div>
      </section>
    </div>
  );
};

export default LiveBandPage;
