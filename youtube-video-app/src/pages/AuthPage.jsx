// src/pages/AuthPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css';
import AccessibleButton from '../components/AccessibleButton';
import { useTalkback } from '../components/useTalkback';
import { authAPI } from '../api';

// Componente para el texto de la política de privacidad
function PrivacyPolicy({ onClose }) {
  const cerrarTalkback = useTalkback('Cerrar la ventana de política de privacidad');

  return (
    <div className="policy-overlay">
      <div className="policy-content">
        <h2>Política de Privacidad de Cursopia</h2>
        <p>En Cursopia, tu privacidad es importante. Esta política explica qué datos recopilamos y cómo los usamos.</p>
        <strong>1. Información que Recopilamos:</strong>
        <p>Recopilamos la información que nos proporcionas directamente al registrarte, como tu nombre, correo electrónico y/o número de celular.</p>
        <strong>2. Uso de la Información:</strong>
        <p>Usamos tu información para crear y administrar tu cuenta, darte acceso a nuestros cursos, comunicarnos contigo sobre tu progreso y mejorar nuestros servicios.</p>
        <strong>3. Seguridad de los Datos:</strong>
        <p>Tomamos medidas razonables para proteger tu información contra pérdida, robo y uso no autorizado.</p>
        <p>Al registrarte, aceptas los términos descritos en esta política.</p>
        <AccessibleButton onClick={onClose} className="button secondary" ariaLabel="Cerrar" {...cerrarTalkback}>
          Cerrar
        </AccessibleButton>
      </div>
    </div>
  );
}

function AuthPage({ mode }) {
  const navigate = useNavigate();

  // Estados para los campos del formulario
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Hooks de Talkback
  const nameTalkback = useTalkback('Campo para escribir tu nombre completo');
  const phoneTalkback = useTalkback('Campo para escribir tu número de celular');
  const emailTalkbackText = mode === 'login' ? 'Campo para poner tu correo electronico o celular' : 'Campo para escribir tu correo electrónico';
  const emailTalkback = useTalkback(emailTalkbackText);
  const passwordTalkback = useTalkback('Campo para escribir tu clave secreta');
  const privacyCheckTalkback = useTalkback('Casilla para aceptar la política de privacidad');
  const privacyLinkTalkback = useTalkback('Abrir y leer la política de privacidad');
  const forgotPasswordTalkback = useTalkback('Ir a la página de recuperación de contraseña');

  const isLoginMode = mode === 'login';

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (isLoginMode) {
        // Lógica de Inicio de Sesión
        if (!email || !password) {
          setError('Por favor, completa todos los campos');
          setIsLoading(false);
          return;
        }

        const response = await authAPI.login({ email, password });
        
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('user', JSON.stringify(response.data.usuario));
          navigate('/dashboard');
        }
      } else {
        // Lógica de Registro
        if (!name || !email || !password) {
          setError('Por favor, completa todos los campos obligatorios');
          setIsLoading(false);
          return;
        }

        if (!isChecked) {
          setError('Debes aceptar la política de privacidad');
          setIsLoading(false);
          return;
        }

        const response = await authAPI.register({ 
          name: name.trim(), 
          email: email.trim(), 
          password 
        });
        
        if (response.data.token) {
          // Registro exitoso, ahora hacer login automático
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('user', JSON.stringify(response.data.usuario));
          navigate('/dashboard');
        }
      }
    } catch (error) {
      console.error('Error en autenticación:', error);
      
      let errorMessage = 'Ocurrió un error inesperado';
      if (error.response?.data?.error) {
        errorMessage = error.response.data.error;
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {showPolicy && <PrivacyPolicy onClose={() => setShowPolicy(false)} />}
      <div className="auth-container">
        <div className="auth-box">
          <div className="auth-form-content">
            <h1>{isLoginMode ? 'INICIO DE SESIÓN' : 'REGISTRO'}</h1>
            <form onSubmit={handleSubmit}>
              
              {!isLoginMode && (
                <>
                  <div className="input-field">
                    <label>NOMBRE</label>
                    <input 
                      type="text" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      placeholder="Nombre..." 
                      required 
                      disabled={isLoading}
                      {...nameTalkback} 
                    />
                  </div>
                  <div className="input-field">
                    <label>CELULAR*</label>
                    <input 
                      type="tel" 
                      value={phone} 
                      onChange={(e) => setPhone(e.target.value)} 
                      placeholder="Tu celular..." 
                      disabled={isLoading}
                      {...phoneTalkback} 
                    />
                  </div>
                </>
              )}

              <div className="input-field">
                <label>{isLoginMode ? 'CORREO/CELULAR' : 'CORREO*'}</label>
                <input 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="Tu correo..." 
                  required
                  disabled={isLoading}
                  {...emailTalkback} 
                />
              </div>
              <div className="input-field">
                <label>CLAVE</label>
                <input 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  placeholder="Tu clave..." 
                  required
                  disabled={isLoading}
                  {...passwordTalkback} 
                />
              </div>
              
              {!isLoginMode && <p className="form-notice">* Solo uno de estos es necesario para registrarse</p>}

              {!isLoginMode && (
                <div className="privacy-policy-container">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    checked={isChecked} 
                    onChange={() => setIsChecked(!isChecked)} 
                    disabled={isLoading}
                    {...privacyCheckTalkback} 
                  />
                  <label htmlFor="privacy">
                    Acepto la <span className="policy-link" onClick={() => setShowPolicy(true)} {...privacyLinkTalkback}>Política de Privacidad</span>
                  </label>
                </div>
              )}
              
              {error && <p className="auth-error-message">{error}</p>}
              
              <AccessibleButton 
                type="submit" 
                className="button primary auth-btn"
                ariaLabel={isLoginMode ? 'Confirmar inicio de sesión' : 'Crear nueva cuenta'}
                disabled={(!isLoginMode && !isChecked) || isLoading}
              >
                {isLoading ? 'Cargando...' : (isLoginMode ? 'Iniciar sesión' : 'Crear cuenta')}
              </AccessibleButton>

              {isLoginMode && (
                <div className="forgot-password-container">
                  <span className="forgot-password-link" {...forgotPasswordTalkback}>¿Olvidaste tu contraseña?</span>
                </div>
              )}
            </form>
          </div>
          <div className="auth-image-section">
            <div className="image-book"></div>
            <span className="image-caption">CURSOPIA</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthPage;