import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import LogoutConfirmationModal from './LogoutConfirmationModal';

function Header() {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  
  // Detectar si hay un usuario logueado
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  const isLoggedIn = !!user;

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
    setShowLogoutModal(false);
  };

  const renderAuthButtons = () => {
    if (!isLoggedIn) {
      return (
        <>
          <Link to="/login" className="button secondary">Iniciar Sesión</Link>
          <Link to="/register" className="button primary">Registrarse</Link>
        </>
      );
    }

    const userName = user.nombre_completo || user.nombre || user.name || 'Usuario';
    return (
      <>
        <span className="user-greeting">¡Hola, {userName}!</span>
        <button 
          onClick={() => setShowLogoutModal(true)}
          className="button secondary" 
          aria-label="Cerrar sesión"
        >
          Cerrar sesión
        </button>
      </>
    );
  };

  return (
    <>
      <header className="main-header">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>CURSOPIA</h1>
          </Link>
          
          {/* Navegación central */}
          <nav className="main-nav">
            <a href="#about" className="nav-link">Sobre nosotros</a>
            <a href="mailto:contacto@cursopia.com" className="nav-link">Contactame</a>
          </nav>

          {/* Botones de autenticación */}
          <div className="auth-buttons">
            {renderAuthButtons()}
          </div>
        </div>
      </header>

      {showLogoutModal && (
        <LogoutConfirmationModal
          onConfirm={handleLogout}
          onCancel={() => setShowLogoutModal(false)}
        />
      )}
    </>
  );
}

export default Header;
