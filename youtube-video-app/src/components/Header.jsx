import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Este efecto se ejecuta cuando el componente carga
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    if (loggedInUser && loggedInUser.isLoggedIn) {
      setUser(loggedInUser);
    }
  }, [location.pathname]); // Se actualiza si la ruta cambia

  const handleLogout = () => {
    localStorage.removeItem('user'); // Borra al usuario
    setUser(null);
    navigate('/'); // Envía al inicio
  };

  const renderNavButtons = () => {
    if (user) {
      // Si hay un usuario logueado
      return (
        <>
          <span className="user-greeting">¡Hola, {user.name}!</span>
          <button onClick={handleLogout} className="button secondary">Cerrar sesión</button>
        </>
      );
    }
    // Lógica para usuarios no logueados
    if (location.pathname === '/register') {
      return (
        <>
          <Link to="/login" className="button primary">Iniciar sesión</Link>
          <Link to="/" className="button secondary">Volver</Link>
        </>
      );
    } else if (location.pathname === '/login') {
      return (
        <>
          <Link to="/register" className="button primary">Registrarse</Link>
          <Link to="/" className="button secondary">Volver</Link>
        </>
      );
    } else {
      return (
        <>
          <Link to="/register" className="button primary">Registrarse</Link>
          <Link to="/login" className="button secondary">Iniciar sesión</Link>
        </>
      );
    }
  };

  return (
    <header className="main-header">
      <Link to="/" className="logo">CURSOPIA</Link>
      <nav>
        <a href="#">Sobre nosotros</a>
        <a href="#">Contactos</a>
        {renderNavButtons()}
      </nav>
    </header>
  );
}

export default Header;