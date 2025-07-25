// src/pages/CourseSelection.jsx
import React, { useEffect, useState } from 'react';
import AccessibleButton from '../components/AccessibleButton';
import { getCurrentUser, cursosAPI } from '../api';
import './CourseSelection.css';

function CourseSelection() {
  // Obtenemos el usuario actual y los cursos disponibles
  const user = getCurrentUser();
  const userName = user ? user.nombre_completo || user.nombre || 'Usuario' : 'Usuario';
  
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const response = await cursosAPI.getAll();
        setCourses(response.data);
      } catch (err) {
        console.error('Error al cargar cursos:', err);
        setError('Error al cargar los cursos disponibles');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // Función para obtener la ruta del curso según su categoría
  const getCourseRoute = (categoria, courseId) => {
    switch (categoria) {
      case 'Alfabetización_de_Adultos':
        return `/curso-alfabetizacion/paso/1?courseId=${courseId}`;
      case 'Idiomas':
        return `/curso/paso/1?courseId=${courseId}`;
      case 'Finanzas':
        return `/curso-finanzas/paso/1?courseId=${courseId}`;
      default:
        return `/curso/paso/1?courseId=${courseId}`;
    }
  };

  return (
    <div className="course-selection-container">
      <h1>¡Bienvenido de nuevo, {userName}!</h1>
      <p>¿Qué te gustaría aprender hoy?</p>
      
      {loading && <p>Cargando cursos disponibles...</p>}
      
      {error && <p className="error-message">{error}</p>}
      
      {!loading && !error && (
        <div className="selection-buttons">
          {courses.length > 0 ? (
            courses
              .filter(course => course.publicado) // Solo mostrar cursos publicados
              .map(course => (
                <AccessibleButton 
                  key={course.id}
                  linkTo={getCourseRoute(course.categoria, course.id)}
                  className={`button ${course.es_destacado ? 'primary' : 'tertiary'}`}
                  ariaLabel={`Acceder al curso de ${course.titulo}`}
                >
                  <div className="course-button-content">
                    <h3>{course.titulo}</h3>
                    <p>{course.descripcion}</p>
                    <div className="course-info">
                      <span className="category">{course.categoria.replace('_', ' ')}</span>
                      <span className="level">{course.nivel}</span>
                      {course.duracion_estimada && (
                        <span className="duration">{course.duracion_estimada}</span>
                      )}
                    </div>
                    {course.es_destacado && <span className="featured-badge">★ Destacado</span>}
                  </div>
                </AccessibleButton>
              ))
          ) : (
            <p>No hay cursos disponibles en este momento.</p>
          )}
        </div>
      )}
      
      {/* Mantener los botones originales como fallback */}
      {!loading && !error && courses.length === 0 && (
        <div className="selection-buttons">
          <AccessibleButton 
            linkTo="/curso-alfabetizacion/paso/1"
            className="button tertiary"
            ariaLabel="Acceder al curso de Alfabetización"
          >
            Acceder a curso de Alfabetización
          </AccessibleButton>
          <AccessibleButton 
            linkTo="/curso/paso/1"
            className="button primary"
            ariaLabel="Acceder al curso de Inglés"
          >
            Acceder a curso de Inglés
          </AccessibleButton>
        </div>
      )}
    </div>
  );
}

export default CourseSelection;