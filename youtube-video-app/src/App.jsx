import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import EnglishCoursePreview from './pages/EnglishCoursePreview';
import CourseStep from './pages/CourseStep';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Rutas Públicas */}
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="curso-ingles-pre" element={<EnglishCoursePreview />} />

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