import React from 'react';
import './Register.css';

function Register() {
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