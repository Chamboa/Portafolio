import React, { useEffect, useState } from "react";
import "../styles/Portfolio.css";
import Quickly from "../img/imgquickly.jpeg";
import FotoPerfil from "../img/FotoPerfil.png";
import WhatBot from "../img/WhaBot.png";

// NAVIGATION
const Navigation = () => (
  <nav className="navbar">
    <div className="nav-links">
      <a href="#intro">Inicio</a>
      <a href="#hero">Sobre mí</a>
      <a href="#experience">Experiencia</a>
      <a href="#skills">Habilidades</a>
      <a href="#projects">Proyectos</a>
      <a href="#contact">Contacto</a>
    </div>
  </nav>
);

// SCROLL ANIMATION HOOK
const useScrollAnimation = () => {
  useEffect(() => {
    const scrollElements = document.querySelectorAll(
      ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale"
    );
    const elementInView = (el, offset = 0) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) *
          (1 - offset)
      );
    };
    const displayScrollElement = (element) => {
      element.classList.add("active");
    };
    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 0.25)) {
          displayScrollElement(el);
        }
      });
    };
    window.addEventListener("scroll", handleScrollAnimation);
    handleScrollAnimation();
    return () => window.removeEventListener("scroll", handleScrollAnimation);
  }, []);
};

// PARALLAX HOOK
const useParallax = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll(".parallax");
      parallaxElements.forEach((element) => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};

// PARTICLE BACKGROUND
const ParticleBackground = () => (
  <div className="particles">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="particle"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
        }}
      />
    ))}
  </div>
);

// MAIN COMPONENT
const Portafolio = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll("section").forEach((section) => {
      if (section.id) {
        observer.observe(section);
      }
    });
    return () => observer.disconnect();
  }, []);

  const proyectos = [
    {
      titulo: "A.U.R.O.R.A",
      descripcion:
        "Sistema integral para ópticas que gestiona productos, ventas, promociones, inventario y empleados. Permite el control total de las operaciones diarias y mejora la eficiencia administrativa en ópticas.",
      tecnologias: ["Node.js", "Express.js", "MongoDB", "React"],
      imagen:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      enlace: "https://github.com/MaxiCast96/A.U.R.O.R.A",
    },
    {
      titulo: "Taiex Import",
      descripcion:
        "Plataforma para la gestión de importación de vehículos extranjeros y su venta. Permite el seguimiento de procesos aduanales, inventario y administración de ventas de automóviles importados.",
      tecnologias: ["Node.js", "Express.js", "MongoDB", "React"],
      imagen:
        "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      enlace: "https://github.com/FernaandoAriel/TaiexImport",
    },
    {
      titulo: "WhatsApp Bot",
      descripcion:
        "Script que utiliza inteligencia artificial para leer mensajes enviados a mí mismo en WhatsApp y subirlos automáticamente a Google Calendar.",
      tecnologias: ["JavaScript", "Node.js"],
      imagen: WhatBot,
      enlace: "https://github.com/Chamboa/WhatsAppBot",
    },
    {
      titulo: "Quickly",
      descripcion:
        "Aplicación para la gestión y control de horas sociales en un instituto. Permite a los estudiantes registrar, consultar y validar sus horas sociales de manera eficiente y transparente.",
      tecnologias: ["Kotlin", "Oracle", "Java"],
      imagen: Quickly,
      enlace: "https://github.com/Chamboa/Quickly",
    },
  ];

  const habilidades = {
    lenguajes: {
      titulo: "Lenguajes",
      items: ["HTML", "CSS", "JavaScript", "C#", "Java", "Kotlin", "SQL"],
      icon: "fas fa-code",
    },
    frameworks: {
      titulo: "Frameworks y Entornos",
      items: ["ASP .NET", "IIS", "React", "Node.js"],
      icon: "fas fa-layer-group",
    },
    basesDeDatos: {
      titulo: "Bases de Datos",
      items: ["SQL Server 2019"],
      icon: "fas fa-database",
    },
    herramientas: {
      titulo: "Herramientas",
      items: ["Power BI", "Git"],
      icon: "fas fa-tools",
    },
    metodologias: {
      titulo: "Metodologías",
      items: ["Scrum", "MERN", "MVC", "N Capas"],
      icon: "fas fa-sitemap",
    },
  };

  useScrollAnimation();
  useParallax();

  return (
    <div className="portfolio-container">
      <Navigation />
      <ParticleBackground />

      {/* INTRO */}
      <section
        id="intro"
        className="intro-section scroll-reveal parallax"
        data-speed="0.3"
      >
        <div className="particle-background"></div>
        <h1 className="intro-title">
          Software Developer
          <br />
          Jonathan Gamboa
        </h1>
        <div className="tech-logos">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="HTML5"
            className="tech-logo"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS3"
            className="tech-logo"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
            className="tech-logo"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
            className="tech-logo"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
            alt="C#"
            className="tech-logo"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"
            alt="ASP.NET"
            className="tech-logo"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="Node.js"
            className="tech-logo"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
            alt="Java"
            className="tech-logo"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"
            alt="Kotlin"
            className="tech-logo"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg"
            alt="SQL Server"
            className="tech-logo"
          />
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
          <span>Scroll para descubrir</span>
        </div>
      </section>

      {/* HERO */}
      <section id="hero" className="hero-section parallax" data-speed="0.2">
        <div className="hero-content">
          <div className="profile-container scroll-reveal-left">
            <img
              src={FotoPerfil}
              alt="Jonathan Gamboa"
              className="profile-image"
            />
            <div className="react-logo">
              <div className="react-logo-circle"></div>
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="react-logo-orbit"
                  style={{ animationDelay: `${i * 0.5}s` }}
                ></div>
              ))}
            </div>
          </div>
          <div className="hero-text scroll-reveal-right">
            <h1 className="hero-title">
              Hola, soy <span className="hero-highlight">Jonathan Gamboa</span>
            </h1>
            <p className="hero-subtitle">
              <span className="highlight-text">
                Técnico en Desarrollo de Software
              </span>{" "}
              apasionado por crear soluciones innovadoras. Con experiencia como{" "}
              <span className="highlight-text">Analista de Datos Junior</span>,
              combino la potencia del análisis de datos con el desarrollo de
              software para crear soluciones integrales.
              <br />
              <br />
              Especializado en elaboración de reportes interactivos con{" "}
              <span className="highlight-text">Power BI</span> y desarrollo
              backend con <span className="highlight-text">ASP .NET</span>. Mi
              enfoque se centra en la creación de soluciones escalables y
              eficientes que impulsen el valor del negocio.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section id="experience" className="experience-section">
        <h2 className="section-title scroll-reveal">Experiencia Laboral</h2>
        <div className="experience-timeline scroll-reveal">
          <div className="experience-item">
            <h3 className="experience-company">
              Ministerio de Obras Públicas y Transporte (MOPT)
            </h3>
            <div className="experience-position">
              Desarrollador Junior en Prácticas
            </div>
            <div className="experience-date">Noviembre 2024 – Enero 2025</div>
            <div className="experience-description">
              <ul>
                <li>
                  Desarrollé procesos automatizados con ASP .NET para optimizar
                  flujos operativos internos.
                </li>
                <li>
                  Implementé procedimientos almacenados en SQL Server 2019,
                  mejorando la eficiencia en la gestión de datos.
                </li>
                <li>
                  Realicé la configuración y despliegue de entornos en IIS,
                  garantizando la disponibilidad y escalabilidad de las
                  aplicaciones.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HABILIDADES */}
      <section id="skills" className="skills-section">
        <h2 className="section-title scroll-reveal">
          Habilidades y Tecnologías
        </h2>
        <div className="skills-grid">
          {Object.entries(habilidades).map(([key, categoria], index) => (
            <div
              key={key}
              className="skill-category scroll-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-category-header">
                <i className={`${categoria.icon} skill-icon`}></i>
                <h3 className="skill-category-title">{categoria.titulo}</h3>
              </div>
              <div className="tech-stack">
                {categoria.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="tech-tag"
                    style={{ animationDelay: `${index * 0.1 + idx * 0.05}s` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="projects" className="projects-section">
        <h2 className="section-title scroll-reveal">Proyectos Destacados</h2>
        <div className="projects-grid">
          {proyectos.map((proyecto, index) => (
            <a
              href={proyecto.enlace}
              key={index}
              className="project-card"
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="project-image-container">
                <img
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  className="project-image"
                />
                <div className="project-image-overlay"></div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{proyecto.titulo}</h3>
                <p className="project-description">{proyecto.descripcion}</p>
                <div className="tech-stack">
                  {proyecto.tecnologias.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contact" className="contact-section scroll-reveal">
        <h2 className="section-title">Contacto</h2>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <a href="tel:+50370119436" className="contact-link">
                (+503) 7011-9436
              </a>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <a href="mailto:vallejosue078@gmail.com" className="contact-link">
                vallejosue078@gmail.com
              </a>
            </div>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/Chamboa"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/josue-gamboa-35b146317"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portafolio;
