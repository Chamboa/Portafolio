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
  const [lang, setLang] = useState("es"); // "es" para Español, "en" para Inglés

  // Textos y datos en ambos idiomas
  const textos = {
    es: {
      intro: "Desarrollador de Software",
      nombre: "Jonathan Gamboa",
      scroll: "Scroll para descubrir",
      hero: {
        saludo: "Hola, soy",
        titulo: "Técnico en Desarrollo de Software",
        descripcion:
          "apasionado por crear soluciones innovadoras. Con experiencia como Analista de Datos Junior, combino la potencia del análisis de datos con el desarrollo de software para crear soluciones integrales.",
        especialidad:
          "Especializado en elaboración de reportes interactivos con Power BI y desarrollo backend con ASP .NET. Mi enfoque se centra en la creación de soluciones escalables y eficientes que impulsen el valor del negocio.",
      },
      experiencia: "Experiencia Laboral",
      experienciaItems: [
        {
          empresa: "Ministerio de Obras Públicas y Transporte (MOPT)",
          puesto: "Desarrollador Junior en Prácticas",
          fecha: "Noviembre 2024 – Enero 2025",
          tareas: [
            "Desarrollé procesos automatizados con ASP .NET para optimizar flujos operativos internos.",
            "Implementé procedimientos almacenados en SQL Server 2019, mejorando la eficiencia en la gestión de datos.",
            "Realicé la configuración y despliegue de entornos en IIS, garantizando la disponibilidad y escalabilidad de las aplicaciones.",
          ],
        },
      ],
      formacion: "Formación Académica",
      formacionItems: [
        {
          titulo: "Técnico en Desarrollo de Software",
          fecha: "Febrero 2023 – Octubre 2025 (en curso)",
        },
        {
          titulo: "Curso: Data Analyst Jr.",
          fecha: "Agosto 2024 – Febrero 2025",
        },
        {
          titulo: "Curso AI Machine Learning",
          fecha: "Junio 2025 (Cursando)",
        },
      ],
      habilidades: "Habilidades y Tecnologías",
      habilidadesItems: [
        {
          titulo: "Lenguajes",
          icon: "fas fa-code",
          items: ["HTML", "CSS", "JavaScript", "C#", "Java", "Kotlin", "SQL"],
        },
        {
          titulo: "Frameworks y Entornos",
          icon: "fas fa-layer-group",
          items: ["ASP .NET", "IIS", "React", "Node.js"],
        },
        {
          titulo: "Bases de Datos",
          icon: "fas fa-database",
          items: ["SQL Server 2019"],
        },
        {
          titulo: "Herramientas",
          icon: "fas fa-tools",
          items: ["Power BI", "Git"],
        },
        {
          titulo: "Metodologías",
          icon: "fas fa-sitemap",
          items: ["Scrum", "MERN", "MVC", "N Capas"],
        },
      ],
      proyectos: "Proyectos Destacados",
      proyectosItems: [
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
      ],
      contacto: "Contacto",
      telefono: "(+503) 7011-9436",
      email: "vallejosue078@gmail.com",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    en: {
      intro: "Software Developer",
      nombre: "Jonathan Gamboa",
      scroll: "Scroll to discover",
      hero: {
        saludo: "Hi, I'm",
        titulo: "Software Development Technician",
        descripcion:
          "passionate about creating innovative solutions. With experience as a Junior Data Analyst, I combine the power of data analysis with software development to create comprehensive solutions.",
        especialidad:
          "Specialized in creating interactive reports with Power BI and backend development with ASP .NET. My focus is on building scalable and efficient solutions that drive business value.",
      },
      experiencia: "Work Experience",
      experienciaItems: [
        {
          empresa: "Ministry of Public Works and Transport (MOPT)",
          puesto: "Junior Developer Intern",
          fecha: "November 2024 – January 2025",
          tareas: [
            "Developed automated processes with ASP .NET to optimize internal operational flows.",
            "Implemented stored procedures in SQL Server 2019, improving data management efficiency.",
            "Configured and deployed environments in IIS, ensuring application availability and scalability.",
          ],
        },
      ],
      formacion: "Academic Background",
      formacionItems: [
        {
          titulo: "Software Development Technician",
          fecha: "February 2023 – October 2025 (in progress)",
        },
        {
          titulo: "Course: Data Analyst Jr.",
          fecha: "August 2024 – February 2025",
        },
        {
          titulo: "AI Machine Learning Course",
          fecha: "June 2025 (Ongoing)",
        },
      ],
      habilidades: "Skills & Technologies",
      habilidadesItems: [
        {
          titulo: "Languages",
          icon: "fas fa-code",
          items: ["HTML", "CSS", "JavaScript", "C#", "Java", "Kotlin", "SQL"],
        },
        {
          titulo: "Frameworks & Environments",
          icon: "fas fa-layer-group",
          items: ["ASP .NET", "IIS", "React", "Node.js"],
        },
        {
          titulo: "Databases",
          icon: "fas fa-database",
          items: ["SQL Server 2019"],
        },
        {
          titulo: "Tools",
          icon: "fas fa-tools",
          items: ["Power BI", "Git"],
        },
        {
          titulo: "Methodologies",
          icon: "fas fa-sitemap",
          items: ["Scrum", "MERN", "MVC", "N Layers"],
        },
      ],
      proyectos: "Featured Projects",
      proyectosItems: [
        {
          titulo: "A.U.R.O.R.A",
          descripcion:
            "Comprehensive system for optical stores that manages products, sales, promotions, inventory, and employees. Enables total control of daily operations and improves administrative efficiency.",
          tecnologias: ["Node.js", "Express.js", "MongoDB", "React"],
          imagen:
            "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          enlace: "https://github.com/MaxiCast96/A.U.R.O.R.A",
        },
        {
          titulo: "Taiex Import",
          descripcion:
            "Platform for managing the import of foreign vehicles and their sale. Allows tracking of customs processes, inventory, and management of imported car sales.",
          tecnologias: ["Node.js", "Express.js", "MongoDB", "React"],
          imagen:
            "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          enlace: "https://github.com/FernaandoAriel/TaiexImport",
        },
        {
          titulo: "WhatsApp Bot",
          descripcion:
            "Script that uses artificial intelligence to read messages sent to myself on WhatsApp and automatically upload them to Google Calendar.",
          tecnologias: ["JavaScript", "Node.js"],
          imagen: WhatBot,
          enlace: "https://github.com/Chamboa/WhatsAppBot",
        },
        {
          titulo: "Quickly",
          descripcion:
            "Application for managing and controlling social hours in an institute. Allows students to efficiently and transparently register, consult, and validate their social hours.",
          tecnologias: ["Kotlin", "Oracle", "Java"],
          imagen: Quickly,
          enlace: "https://github.com/Chamboa/Quickly",
        },
      ],
      contacto: "Contact",
      telefono: "(+503) 7011-9436",
      email: "vallejosue078@gmail.com",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
  };

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

  useScrollAnimation();
  useParallax();

  return (
    <div className="portfolio-container">
      {/* Selector de idioma */}
      <div style={{ position: "fixed", top: 20, right: 30, zIndex: 2000 }}>
        <button
          onClick={() => setLang("es")}
          style={{
            marginRight: 8,
            background: lang === "es" ? "#f59e0b" : "#222",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "0.4rem 1rem",
            cursor: "pointer",
          }}
        >
          ES
        </button>
        <button
          onClick={() => setLang("en")}
          style={{
            background: lang === "en" ? "#f59e0b" : "#222",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "0.4rem 1rem",
            cursor: "pointer",
          }}
        >
          EN
        </button>
      </div>

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
          {textos[lang].intro}
          <br />
          {textos[lang].nombre}
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
          <span>{textos[lang].scroll}</span>
        </div>
      </section>

      <br />
      <br />

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
              {textos[lang].hero.saludo}{" "}
              <span className="hero-highlight">{textos[lang].nombre}</span>
            </h1>
            <p className="hero-subtitle">
              <span className="highlight-text">
                {textos[lang].hero.titulo}
              </span>{" "}
              {textos[lang].hero.descripcion}
              <br />
              <br />
              {textos[lang].hero.especialidad}
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section id="experience" className="experience-section">
        <h2 className="section-title scroll-reveal">
          {textos[lang].experiencia}
        </h2>
        <div className="experience-timeline scroll-reveal">
          {textos[lang].experienciaItems.map((exp, idx) => (
            <div className="experience-item" key={idx}>
              <h3 className="experience-company">{exp.empresa}</h3>
              <div className="experience-position">{exp.puesto}</div>
              <div className="experience-date">{exp.fecha}</div>
              <div className="experience-description">
                <ul>
                  {exp.tareas.map((tarea, i) => (
                    <li key={i}>{tarea}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FORMACIÓN */}
      <section id="education" className="education-section">
        <h2 className="section-title scroll-reveal">
          {textos[lang].formacion}
        </h2>
        <div className="education-timeline scroll-reveal">
          {textos[lang].formacionItems.map((edu, idx) => (
            <div className="education-item" key={idx}>
              <h3 className="education-title">{edu.titulo}</h3>
              <div className="education-date">{edu.fecha}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HABILIDADES */}
      <section id="skills" className="skills-section">
        <h2 className="section-title scroll-reveal">
          {textos[lang].habilidades}
        </h2>
        <div className="skills-grid">
          {textos[lang].habilidadesItems.map((categoria, index) => (
            <div
              key={categoria.titulo}
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
        <h2 className="section-title scroll-reveal">
          {textos[lang].proyectos}
        </h2>
        <div className="projects-grid">
          {textos[lang].proyectosItems.map((proyecto, index) => (
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
        <h2 className="section-title">{textos[lang].contacto}</h2>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <a href="tel:+50370119436" className="contact-link">
                {textos[lang].telefono}
              </a>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <a href="mailto:vallejosue078@gmail.com" className="contact-link">
                {textos[lang].email}
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
              {textos[lang].github}
            </a>
            <a
              href="https://www.linkedin.com/in/josue-gamboa-35b146317"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
              {textos[lang].linkedin}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portafolio;
