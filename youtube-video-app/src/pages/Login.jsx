import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api'; // 👈 Importamos Axios configurado
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const res = await api.post('/auth/login', {
        email: correo,
        password: clave
      });
console.log(res)
      // Guardar datos del usuario
      localStorage.setItem('user', JSON.stringify(res.data));
      alert('Inicio de sesión exitoso');

      // Redirigir al curso
      navigate('/curso/paso/1');

    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Correo o clave incorrectos');
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
                type="text"
                placeholder="Tu correo..."
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
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
              />
            </div>
            <button type="submit" className="button primary login-btn">
              Iniciar sesión
            </button>
          </form>
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
