// src/pages/AuthPageSimple.jsx - VERSIÓN TEMPORAL PARA PROBAR
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '../api';

function AuthPageSimple({ mode }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const isLoginMode = mode === 'login';

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    try {
      if (isLoginMode) {
        // Login real con API
        console.log('Intentando login con:', { email, password });
        const response = await authAPI.login({ email, password });
        console.log('Respuesta del login:', response.data);
        
        if (response.data && response.data.user && response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data.user));
          localStorage.setItem('token', response.data.token);
          navigate('/dashboard');
        } else {
          setError('Respuesta inesperada del servidor');
        }
      } else {
        // Registro real con API
        if (!name || !email || !password) {
          setError('Por favor, completa todos los campos');
          return;
        }

        console.log('Intentando registro con:', { name, email, password: '***' });
        const response = await authAPI.register({ nombre: name, email, password });
        console.log('Respuesta del registro:', response.data);

        if (response.data && response.data.user && response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data.user));
          localStorage.setItem('token', response.data.token);
          navigate('/dashboard');
        } else {
          setError('Respuesta inesperada del servidor');
        }
      }
    } catch (error) {
      console.error('Error completo:', error);
      console.error('Error response:', error.response);
      
      if (error.response) {
        // El servidor respondió con un código de error
        setError(error.response.data?.message || `Error del servidor: ${error.response.status}`);
      } else if (error.request) {
        // La solicitud se hizo pero no hubo respuesta
        setError('No se pudo conectar al servidor. Verifica que esté ejecutándose en puerto 3000.');
      } else {
        // Algo más pasó
        setError('Error inesperado: ' + error.message);
      }
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0d1316',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        backgroundColor: '#1a1a1a',
        padding: '40px',
        borderRadius: '8px',
        width: '400px',
        maxWidth: '90%'
      }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
          {isLoginMode ? 'INICIO DE SESIÓN' : 'REGISTRO'}
        </h1>
        
        <form onSubmit={handleSubmit}>
          {!isLoginMode && (
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>NOMBRE</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre..."
                required={!isLoginMode}
                style={{
                  width: '100%',
                  padding: '10px',
                  fontSize: '16px',
                  border: '1px solid #333',
                  borderRadius: '4px',
                  backgroundColor: '#2a2a2a',
                  color: 'white'
                }}
              />
            </div>
          )}
          
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>EMAIL</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu email..."
              required
              style={{
                width: '100%',
                padding: '10px',
                fontSize: '16px',
                border: '1px solid #333',
                borderRadius: '4px',
                backgroundColor: '#2a2a2a',
                color: 'white'
              }}
            />
          </div>
          
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>CONTRASEÑA</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Tu contraseña..."
              required
              style={{
                width: '100%',
                padding: '10px',
                fontSize: '16px',
                border: '1px solid #333',
                borderRadius: '4px',
                backgroundColor: '#2a2a2a',
                color: 'white'
              }}
            />
          </div>
          
          {error && (
            <div style={{
              color: '#ff4444',
              marginBottom: '20px',
              padding: '10px',
              backgroundColor: '#2a1a1a',
              borderRadius: '4px'
            }}>
              {error}
            </div>
          )}
          
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '16px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {isLoginMode ? 'Iniciar Sesión' : 'Registrarse'}
          </button>
        </form>
        
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p style={{ fontSize: '14px', color: '#888' }}>
            Versión temporal para probar la conexión
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthPageSimple;
