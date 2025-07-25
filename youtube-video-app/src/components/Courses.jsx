import React, { useEffect, useState } from 'react';
import { cursosAPI } from '../api';

export default function Courses() {
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
        setError('Error al cargar los cursos');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div>Cargando cursos...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div>
      <h2>Cursos Disponibles</h2>
      {courses.length > 0 ? (
        <div className="courses-grid">
          {courses.map(course => (
            <div key={course.id} className="course-card">
              <h3>{course.titulo}</h3>
              <p>{course.descripcion}</p>
              <div className="course-details">
                <span className="category">Categoría: {course.categoria}</span>
                <span className="level">Nivel: {course.nivel}</span>
                {course.duracion_estimada && (
                  <span className="duration">Duración: {course.duracion_estimada}</span>
                )}
                {course.instructor && (
                  <span className="instructor">Instructor: {course.instructor.nombre_completo}</span>
                )}
              </div>
              {course.es_destacado && (
                <div className="featured-badge">Destacado</div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>No hay cursos disponibles en este momento.</p>
      )}
    </div>
  );
}
