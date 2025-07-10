import React from 'react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api'; // 👈 Importamos Axios configurado
import './Login.css';
import './Register.css';

function Register() {
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
    <div className="register-container">
      <div className="register-box">
        <div className="register-form-content">
          <h1>REGISTRO</h1>
          <form>
            <div className="input-field">
              <label>NOMBRE</label>
              <input type="text" placeholder="Nombre..." />
            </div>
            <div className="input-field">
              <label>CORREO*</label>
              <input type="email" placeholder="Tu correo..." />
            </div>
            <div className="input-field">
              <label>CELULAR*</label>
              <input type="tel" placeholder="Tu celular..." />
            </div>
            <div className="input-field">
              <label>CLAVE</label>
              <input type="password" placeholder="Tu clave..." />
            </div>
            <p className="form-notice">* Solo uno de estos es necesario para registrarse</p>
            {/* El botón de envío ahora está solo */}
            <button type="submit" className="button primary register-btn">Registrarse</button>
          </form>
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