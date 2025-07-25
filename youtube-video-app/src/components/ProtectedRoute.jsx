import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../api';

function ProtectedRoute({ children }) {
  // Verificar si el usuario está autenticado usando la función de la API
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
}

export default ProtectedRoute;