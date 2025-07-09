import React from 'react';
import { Link } from 'react-router-dom';
import './EnglishCoursePreview.css'; // Importa los estilos específicos para el componente

function EnglishCoursePreview() {
  return (
    <div className="course-preview-container">
      <div className="course-content">
        <h1>NUESTRO INGLÉS</h1>
        <p>
          Creemos que aprender inglés puede ser una experiencia positiva a cualquier edad, especialmente cuando se hace paso a paso y con cariño. Por eso, desarrollamos un método de 21 pasos pensado especialmente para personas mayores que están comenzando o retomando el aprendizaje.
        </p>
        <p>
          Este camino está dividido en tres niveles: Beginner (principiante), Intermediate (intermedio) y Advanced (avanzado). Cada nivel contiene 7 pasos, donde se trabajan de manera sencilla y práctica aspectos clave como vocabulario, gramática, comprensión auditiva (listening) y cohesión.
        </p>
        <p>
          Cada paso tiene pequeños objetivos que, al cumplirse, permiten avanzar con confianza al siguiente. Así, cada persona aprende a su propio ritmo, sintiéndose acompañada, motivada y segura en cada etapa del proceso.
        </p>
        <div className="course-button-container">
          <Link to="/register" className="button primary">Registrarse</Link>
        </div>
      </div>
    </div>
  );
}

export default EnglishCoursePreview;