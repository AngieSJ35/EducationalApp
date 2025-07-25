// src/App.jsx
import React from 'react';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#1a2428',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '24px'
    }}>
      <h1>🎉 CURSOPIA FUNCIONA! 🎉</h1>
      <p>La aplicación se está cargando correctamente</p>
      <div style={{marginTop: '20px'}}>
        <button style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          ✅ Test Button
        </button>
      </div>
    </div>
  );
}

export default App;
