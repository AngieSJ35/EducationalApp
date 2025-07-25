// src/components/Layout.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from './Header';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-column">
        <h3>CURSOPIA</h3>
        <a href="#">Sobre nosotros</a>
        <Link to="/preview?topic=ingles">Cursos de ingles</Link>
      </div>
      <div className="footer-column">
        <h3>CONTACTO</h3>
        <Link to="/">Inicio</Link>
        <a href="mailto:contacto@cursopia.com">Email</a>
        <a href="#">GitHub</a>
      </div>
      <div className="footer-column footer-contact-form">
        <h3>¡TE CONTACTAMOS!</h3>
        <div className="input-group">
          <input type="email" placeholder="Tu correo..." />
          <button className="button-enviar">ENVIAR</button>
        </div>
      </div>
    </footer>
  );
}

function Layout() {
  return (
    <div className="page-layout">
      <Header />
      <main className="page-content">{<Outlet />}</main>
      <Footer />
    </div>
  );
}

export default Layout;