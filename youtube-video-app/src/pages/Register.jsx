import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api'; // Axios configurado
import './Login.css';
import './Register.css';

function Register() {
  const navigate = useNavigate();

  // 1️⃣ Estados para los campos del formulario
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [celular, setCelular] = useState('');
  const [clave, setClave] = useState('');

  // 2️⃣ Función para manejar el envío del formulario
  const handleRegister = async (event) => {
    event.preventDefault();

    // Validación rápida (puedes mejorarla luego)
    if (!correo && !celular) {
      alert('Debes ingresar al menos un correo o celular');
      return;
    }

    try {
      // 3️⃣ Enviamos los datos al backend
     const res = await api.post('/usuarios', {
        nombre_completo:nombre,
        email: correo,
        contrasena: clave
      });
      console.log(res)

      alert('Registro exitoso. Ya puedes iniciar sesión.');
      navigate('/login');
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      alert('No se pudo registrar el usuario');
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
                placeholder="Nombre..."
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="input-field">
              <label>CORREO*</label>
              <input
                type="email"
                placeholder="Tu correo..."
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>
            <div className="input-field">
              <label>CELULAR*</label>
              <input
                type="tel"
                placeholder="Tu celular..."
                value={celular}
                onChange={(e) => setCelular(e.target.value)}
              />
            </div>
            <div className="input-field">
              <label>CLAVE</label>
              <input
                type="password"
                placeholder="Tu clave..."
                value={clave}
                onChange={(e) => setClave(e.target.value)}
              />
            </div>

            <p className="form-notice">
              * Solo uno de estos es necesario para registrarse
            </p>

            <button type="submit" className="button primary register-btn">
              Registrarse
            </button>
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
