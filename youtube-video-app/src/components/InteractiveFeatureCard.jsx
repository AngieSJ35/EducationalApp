// src/components/InteractiveFeatureCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './InteractiveFeatureCard.css';

function InteractiveFeatureCard({ icon, title, description, linkTo, talkbackText }) {
  return (
    <Link to={linkTo} className="feature-card-link" aria-label={talkbackText}>
      <div className="feature-card">
        <div className="feature-icon">{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default InteractiveFeatureCard;