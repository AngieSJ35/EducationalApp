import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import EnglishCoursePreview from './pages/EnglishCoursePreview';
import CourseStep from './pages/CourseStep';

// **Importa los nuevos componentes**
import Courses from './components/courses';
import Users from './components/Users';
import Videos from './components/Videos';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        {/* Rutas Públicas Existentes */}
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="curso-ingles-pre" element={<EnglishCoursePreview />} />

        {/* Rutas nuevas para probar Axios → API */}
        <Route path="cursos" element={<Courses />} />
        <Route path="usuarios" element={<Users />} />
        <Route path="videos" element={<Videos />} />

        {/* Ruta Privada del curso */}
        <Route 
          path="curso/paso/:stepId" 
          element={
            <ProtectedRoute>
              <CourseStep />
            </ProtectedRoute>
          } 
        />
      </Route>
    </Routes>
  );
}

export default App;
