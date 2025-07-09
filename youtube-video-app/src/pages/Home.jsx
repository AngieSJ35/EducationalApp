import React from 'react';
import './Home.css';
import EstudianteImagen from '../assets/Estudiante.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-image"></div>
        <h1>INICIA TU EDUCACIÓN HOY CON CURSOPIA</h1>
        <p>
          La mejor página educativa para el proceso de alfabetización <br />
          y aprendizaje del idioma inglés
        </p>
      </section>

      <section className="features">
        <h2>¿Por qué elegir Cursopia?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">A</div>
            <h3>Aprendizaje Interactivo</h3>
            <p>Actividades y juegos diseñados para que aprendas de forma divertida.</p>
          </div>

          {/* Se actualiza el enlace a la nueva URL */}
          <Link to="/curso-ingles-pre" className="feature-card-link">
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>Inglés desde Cero</h3>
              <p>Un camino claro y estructurado para dominar el idioma inglés.</p>
            </div>
          </Link>

          <div className="feature-card">
            <div className="feature-icon">📈</div>
            <h3>Seguimiento de Progreso</h3>
            <p>Visualiza tu avance y mantente motivado con nuestras estadísticas.</p>
          </div>
        </div>
      </section>

      <section className="quote-section">
        <div className="quote-image-container">
          <img src={EstudianteImagen} alt="Estudiante aprendiendo feliz con Cursopia" />
        </div>
        <div className="quote-text">
          <blockquote>
            “Lo maravilloso de aprender algo, es que nadie puede arrebatárnoslo”
          </blockquote>
          <cite>- Riley Ben King</cite>
        </div>
      </section>
      
      <section className="about-us">
        <h2>SOMOS CURSOPIA</h2>
        <p>
          Un proyecto universitario comprometido con el aprendizaje inclusivo y la
          transformación social.
        </p>
        <div className="about-buttons">
          <button className="button tertiary">Empezar mi alfabetización</button>
          <button className="button tertiary">Empezar mi inglés</button>
        </div>
      </section>
    </>
  );
}

export default Home;