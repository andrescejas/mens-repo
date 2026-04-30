import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <header className="header">
        <div className="container header-container">
          <nav className="nav-links">
            <Link href="#inicio">INICIO</Link>
            <Link href="#aptos">APTOS</Link>
            <Link href="#sobre-mi">SOBRE MÍ</Link>
            <Link href="#servicios">SERVICIOS</Link>
            <Link href="#contacto">CONTACTO</Link>
          </nav>
        </div>
      </header>

      {/* 1. Hero */}
      <section id="inicio" className="hero">
        <div className="container">
          <h1 className="logo-script">Cecilia Maurizi</h1>
          <h2 className="logo-subtitle">Médica Psiquiatra</h2>
          
          <div className="hero-tags">
            <p>Adolescentes y adultos</p>
            <p>Virtual y presencial</p>
          </div>

          <p className="hero-subtitle-cta">
            Aptos psiquiátricos en Córdoba. Certificados para carnet de conducir, docentes, tribunales y evaluaciones laborales.
          </p>

          <div className="hero-bullets">
            <span>Turnos ágiles</span>
            <span>Atención profesional</span>
            <span>Entrega de certificado</span>
          </div>

          <a href="https://wa.me/5493516597712" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Solicitar turno por WhatsApp
          </a>
        </div>
      </section>

      {/* 2. Features Quick Blocks */}
      <section className="section" style={{marginTop: '40px'}}>
        <div className="container">
          <div className="grid-4">
            <div className="feature-item">
              <h3>Turnos ágiles</h3>
              <p>Consultá disponibilidad rápida</p>
            </div>
            <div className="feature-item">
              <h3>Atención profesional</h3>
              <p>Evaluación por médica psiquiatra</p>
            </div>
            <div className="feature-item">
              <h3>Virtual y presencial</h3>
              <p>Atención en Córdoba y online</p>
            </div>
            <div className="feature-item">
              <h3>Certificados válidos</h3>
              <p>Para distintos trámites</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Sección Aptos (Destacada) */}
      <section id="aptos" className="section">
        <div className="container">
          <div className="featured-aptos">
            <h2 className="section-title">Aptos psiquiátricos</h2>
            <p className="section-subtitle">Realización de certificados para distintos fines:</p>
            
            <ul className="aptos-list">
              <li>Carnet de conducir</li>
              <li>Docentes</li>
              <li>Ingreso a tribunales</li>
              <li>Evaluaciones laborales</li>
              <li>Trámites institucionales</li>
            </ul>

            <p style={{marginTop: '30px', fontWeight: '500'}}>
              Consultá disponibilidad y tiempos de entrega por WhatsApp
            </p>

            <div style={{marginTop: '30px'}}>
              <a href="https://wa.me/5493516597712" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Solicitar turno por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Sección Profesional (Sobre mí optimizado) */}
      <section id="sobre-mi" className="section">
        <div className="container">
          <h2 className="section-title">Sobre mí</h2>
          <div className="grid-2" style={{alignItems: 'center'}}>
            <div style={{textAlign: 'center'}}>
              <img 
                src="/profile.png?v=1" 
                alt="Dra. Cecilia Maurizi" 
                style={{
                  width: '250px', 
                  height: '250px', 
                  objectFit: 'cover', 
                  borderRadius: '50%', 
                  border: '6px solid white', 
                  boxShadow: '0 10px 25px rgba(140, 106, 132, 0.2)'
                }} 
              />
            </div>
            <div className="about-text" style={{textAlign: 'left', margin: '0'}}>
              <p>
                <strong>Cecilia Maurizi</strong>, médica psiquiatra con atención online y presencial en Córdoba. Especializada en ansiedad, depresión, estrés y acompañamiento integral en salud mental.
              </p>
              <p style={{marginTop: '15px'}}>
                Atención a adolescentes y adultos. Turnos disponibles en Córdoba y toda Argentina.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Otros Servicios (Secundario) */}
      <section id="servicios" className="section">
        <div className="container">
          <h2 className="section-title">Otros servicios</h2>
          <div className="grid-3">
            <div className="card">
              <h3>Atención psiquiátrica</h3>
              <p>Evaluación y tratamiento integral personalizado.</p>
            </div>
            <div className="card">
              <h3>Ansiedad</h3>
              <p>Herramientas para recuperar la calma y la tranquilidad.</p>
            </div>
            <div className="card">
              <h3>Depresión</h3>
              <p>Abordaje empático para recuperar el bienestar emocional.</p>
            </div>
            <div className="card">
              <h3>Estrés</h3>
              <p>Manejo del agotamiento y situaciones que te sobrepasan.</p>
            </div>
            <div className="card">
              <h3>Acompañamiento</h3>
              <p>Soporte profesional en crisis vitales y cambios importantes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Modalidad */}
      <section id="modalidad" className="section">
        <div className="container">
          <h2 className="section-title">Modalidad de atención</h2>
          <div className="grid-2" style={{maxWidth: '800px', margin: '0 auto'}}>
            <div className="card">
              <h3>Virtual</h3>
              <p>Consultas online cómodas y seguras para pacientes de toda Argentina, desde tu hogar.</p>
            </div>
            <div className="card">
              <h3>Presencial</h3>
              <p>Atención en consultorio en Córdoba Capital. Un espacio pensado para tu tranquilidad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Final */}
      <section className="section cta-final">
        <div className="container">
          <h2 className="section-title">Consultá por tu turno</h2>
          <p>Escribime por WhatsApp para consultar disponibilidad</p>
          <a href="https://wa.me/5493516597712" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Solicitar turno por WhatsApp
          </a>
        </div>
      </section>

      {/* 7. Contacto */}
      <section id="contacto" className="section">
        <div className="container">
          <h2 className="section-title">Contacto</h2>
          <div className="contact-container">
            <div className="contact-item">
              <h3>Teléfono</h3>
              <a href="https://wa.me/5493516597712" target="_blank" rel="noopener noreferrer">
                +54 9 351 659 7712
              </a>
            </div>
            <div className="contact-item">
              <h3>Email</h3>
              <a href="mailto:ceciliamaurizi@gmail.com">
                ceciliamaurizi@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-logo">Cecilia Maurizi</div>
          <div className="footer-credentials">
            <p>Médica Psiquiatra</p>
            <p>MP 3855 | ME 21418</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
