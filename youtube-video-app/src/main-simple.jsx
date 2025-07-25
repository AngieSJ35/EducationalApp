// src/main-simple.jsx - VERSIÓN DE PRUEBA
import React from 'react';
import ReactDOM from 'react-dom/client';

function SimpleApp() {
  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#0d1316',
      color: 'white',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>🎉 CURSOPIA FUNCIONA!</h1>
      <h2>Frontend conectado correctamente</h2>
      <p>Puerto: 5174</p>
      <p>Fecha: {new Date().toLocaleString()}</p>
      
      <div style={{ marginTop: '20px' }}>
        <h3>Test de Backend:</h3>
        <p>Backend debería estar en: <a href="http://localhost:3000/test" target="_blank" style={{color: '#4CAF50'}}>localhost:3000/test</a></p>
      </div>
      
      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#1a1a1a', border: '1px solid #333' }}>
        <h4>Estado de la conexión:</h4>
        <p>✅ React funcionando</p>
        <p>✅ Vite servidor corriendo</p>
        <p>✅ Puerto 5174 disponible</p>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<SimpleApp />);
