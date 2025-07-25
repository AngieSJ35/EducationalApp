import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import AuthPageSimple from './pages/AuthPageSimple';
import CourseStep from './pages/CourseStep';
import PreviewPage from './pages/PreviewPage';
import CourseSelection from './pages/CourseSelection';
import LessonPage from './pages/LessonPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<AuthPageSimple mode="register" />} />
        <Route path="/login" element={<AuthPageSimple mode="login" />} />
        
        {/* Rutas protegidas */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <CourseSelection />
          </ProtectedRoute>
        } />
        <Route path="/course/:courseId" element={
          <ProtectedRoute>
            <CourseStep />
          </ProtectedRoute>
        } />
        <Route path="/lesson/:lessonId" element={
          <ProtectedRoute>
            <LessonPage />
          </ProtectedRoute>
        } />
        
        {/* Ruta pública de vista previa */}
        <Route path="/preview" element={<PreviewPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
