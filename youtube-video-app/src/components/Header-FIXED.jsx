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

  const renderNavButtons = () => {
    if (!isLoggedIn) {
      return (
        <div className="nav-buttons">
          <Link to="/login" className="nav-button">Iniciar Sesión</Link>
          <Link to="/register" className="nav-button register">Registrarse</Link>
        </div>
      );
    }

    return (
      <div className="nav-buttons">
        <span className="user-greeting">Hola, {user.name}</span>
        <button 
          onClick={() => setShowLogoutModal(true)}
          className="nav-button logout"
        >
          Cerrar Sesión
        </button>
      </div>
    );
  };

  return (
    <>
      <header className="main-header">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>CURSOPIA</h1>
          </Link>
          {renderNavButtons()}
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
