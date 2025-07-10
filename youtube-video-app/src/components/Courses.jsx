import React, { useEffect, useState } from 'react';
import api from '../api';

export default function Courses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    api.get('/cursos')
      .then(res => setCourses(res.data))
      .catch(console.error);
  }, []);
  return (
    <div>
      <h2>Cursos</h2>
      <ul>
        {courses.map(c => (
          <li key={c._id || c.id}>{c.nombre || c.title}</li>
        ))}
      </ul>
    </div>
  );
}
