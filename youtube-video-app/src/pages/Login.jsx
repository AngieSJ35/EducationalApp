import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // 1. Importa useNavigate
import './Login.css';

function Login() {
  const navigate = useNavigate(); // 2. Prepara el hook de navegación

  // 3. Esta función se ejecutará al enviar el formulario
  const handleLogin = (event) => {
    event.preventDefault(); // Evita que la página se recargue

    // 4. Simulamos un usuario y lo guardamos en localStorage
    const fakeUser = {
      isLoggedIn: true,
      name: 'Usuario de Prueba' 
    };
    localStorage.setItem('user', JSON.stringify(fakeUser));

    // 5. Redirigimos al usuario a la primera página del curso
    navigate('/curso/paso/1'); 
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-form-content">
          <h1>INICIO DE SESIÓN</h1>
          {/* 6. Conectamos la función al formulario */}
          <form onSubmit={handleLogin}>
            <div className="input-field">
              <label>CORREO/CELULAR</label>
              <input type="text" placeholder="Tu correo o celular..." required />
            </div>
            <div className="input-field">
              <label>CLAVE</label>
              <input type="password" placeholder="Tu clave..." required />
            </div>
            <button type="submit" className="button primary login-btn">Iniciar sesión</button>
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