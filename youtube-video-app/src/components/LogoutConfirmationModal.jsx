// src/components/LogoutConfirmationModal.jsx
import React from 'react';
import './LogoutConfirmationModal.css';

function LogoutConfirmationModal({ onConfirm, onCancel }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content" role="dialog" aria-modal="true">
        <h2>Confirmar Cierre de Sesión</h2>
        <p>¿Estás seguro de que quieres cerrar sesión?</p>
        <div className="modal-actions">
          <button onClick={onCancel} className="button secondary" aria-label="Cancelar y permanecer en la sesión">
            Cancelar
          </button>
          <button onClick={onConfirm} className="button primary" aria-label="Confirmar y cerrar la sesión">
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoutConfirmationModal;