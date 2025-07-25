// src/components/TalkbackToggleSimple.jsx
import React, { useState } from 'react';
import './TalkbackToggle.css';

function TalkbackToggleSimple() {
  const [isTalkbackEnabled, setIsTalkbackEnabled] = useState(false);

  const handleToggle = () => {
    setIsTalkbackEnabled(!isTalkbackEnabled);
    // Lógica simple de speech synthesis
    if (!isTalkbackEnabled) {
      const msg = new SpeechSynthesisUtterance('Lector de pantalla activado');
      window.speechSynthesis.speak(msg);
    } else {
      const msg = new SpeechSynthesisUtterance('Lector de pantalla desactivado');
      window.speechSynthesis.speak(msg);
    }
  };

  return (
    <div className="talkback-toggle">
      <label className="switch" aria-label={`Interruptor para ${isTalkbackEnabled ? 'desactivar' : 'activar'} el lector de pantalla`}>
        <input
          type="checkbox"
          checked={isTalkbackEnabled}
          onChange={handleToggle}
        />
        <span className="slider round"></span>
      </label>
      <span className="talkback-label">
        {isTalkbackEnabled ? 'Desactivar' : 'Activar'} lector de pantalla
      </span>
    </div>
  );
}

export default TalkbackToggleSimple;
