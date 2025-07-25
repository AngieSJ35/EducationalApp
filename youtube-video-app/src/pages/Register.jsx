import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authAPI } from '../api'; // Axios configurado
import './Login.css';
import './Register.css';

function Register() {
  const navigate = useNavigate();

  // 1️⃣ Estados para los campos del formulario
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [celular, setCelular] = useState('');
  const [clave, setClave] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // 2️⃣ Función para manejar el envío del formulario
  const handleRegister = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    // Validación básica
    if (!correo || !nombre || !clave) {
      setError('Todos los campos son obligatorios');
      setIsLoading(false);
      return;
    }

    try {
      // 3️⃣ Enviamos los datos al backend usando authAPI
      const response = await authAPI.register({
        nombre_completo: nombre,
        email: correo,
        contrasena: clave
      });

      if (response && response.user) {
        alert('Registro exitoso. Ya puedes iniciar sesión.');
        navigate('/login');
      } else {
        throw new Error('Error en el registro');
      }
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      setError(error.message || 'No se pudo registrar el usuario');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="register-form-content">
          <h1>REGISTRO</h1>
          <form onSubmit={handleRegister}>
            <div className="input-field">
              <label>NOMBRE</label>
              <input
                type="text"
                placeholder="Nombre completo..."
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            
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
              <label>CELULAR (opcional)</label>
              <input
                type="tel"
                placeholder="Tu celular..."
                value={celular}
                onChange={(e) => setCelular(e.target.value)}
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

            <button type="submit" className="register-btn" disabled={isLoading}>
              {isLoading ? 'Registrando...' : 'REGISTRARSE'}
            </button>
          </form>

          <div className="login-link">
            <p>¿Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link></p>
          </div>
        </div>
        <div className="register-image-section">
          <div className="image-book"></div>
          <span className="image-caption">CURSOPIA</span>
        </div>
      </div>
    </div>
  );
}

export default Register;
