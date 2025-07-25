// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import EstudianteImagen from '../assets/Estudiante.png';
import InteractiveFeatureCard from '../components/InteractiveFeatureCard';
import TalkbackToggleSimple from '../components/TalkbackToggleSimple';

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
        <div className="talkback-container">
          <TalkbackToggleSimple />
        </div>
      </section>

      <section className="features">
        <h2>¿Por qué elegir Cursopia?</h2>
        <div className="features-grid">
          <InteractiveFeatureCard
            icon="A"
            title="Alfabetización desde Cero"
            description="Un programa diseñado para aprender a leer y escribir con confianza y seguridad."
            linkTo="/preview?topic=alfabetizacion"
            talkbackText="Ir a la vista previa del curso de Alfabetización"
          />
          <InteractiveFeatureCard
            icon="🌐"
            title="Inglés desde Cero"
            description="Un camino claro y estructurado para dominar el idioma inglés."
            linkTo="/preview?topic=ingles"
            talkbackText="Ir a la vista previa del curso de Inglés"
          />
          <InteractiveFeatureCard
            icon="📈"
            title="Seguimiento de Progreso"
            description="Visualiza tu avance y mantente motivado con nuestras estadísticas."
            linkTo="/preview?topic=progreso"
            talkbackText="Ir a la vista previa del Seguimiento de Progreso"
          />
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
      
      <section id="about" className="about-us">
        <h2>SOMOS CURSOPIA</h2>
        <p>
          Un proyecto universitario comprometido con el aprendizaje inclusivo y la
          transformación social. Nuestra misión es ofrecer herramientas educativas
          accesibles para personas de la tercera edad que deseen mejorar su
          alfabetización y aprender inglés desde cero.
        </p>
        <div className="about-buttons">
          <Link 
            to="/preview?topic=alfabetizacion" 
            className="button tertiary" 
            aria-label="Ir al curso de alfabetización"
          >
            Empezar mi alfabetización
          </Link>
          <Link 
            to="/preview?topic=ingles" 
            className="button tertiary" 
            aria-label="Ir al curso de inglés"
          >
            Empezar mi inglés
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;