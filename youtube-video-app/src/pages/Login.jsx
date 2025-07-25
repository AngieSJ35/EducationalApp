import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authAPI } from '../api'; // 👈 Importamos el authAPI configurado
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await authAPI.login({
        email: correo,
        password: clave
      });

      if (response && response.user && response.token) {
        // Guardar datos del usuario y token
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        alert('Inicio de sesión exitoso');

        // Redirigir a la selección de cursos
        navigate('/course-selection');
      } else {
        throw new Error('Respuesta inválida del servidor');
      }

    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError(error.message || 'Correo o clave incorrectos');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-form-content">
          <h1>INICIO DE SESIÓN</h1>
          <form onSubmit={handleLogin}>
            <div className="input-field">
              <label>CORREO</label>
              <input
                type="email"
                placeholder="Tu correo..."
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <div className="input-field">
              <label>CLAVE</label>
              <input
                type="password"
                placeholder="Tu clave..."
                value={clave}
                onChange={(e) => setClave(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            {error && (
              <div className="error-message" style={{
                color: '#ff4444', 
                fontSize: '14px', 
                marginBottom: '10px',
                textAlign: 'center'
              }}>
                {error}
              </div>
            )}

            <button type="submit" className="login-btn" disabled={isLoading}>
              {isLoading ? 'Iniciando sesión...' : 'ENTRAR'}
            </button>
          </form>
          
          <div className="register-link">
            <p>¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link></p>
          </div>
        </div>
        <div className="login-image-section">
          <div className="image-book"></div>
          <span className="image-caption">CURSOPIA</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
