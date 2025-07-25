import React from 'react';
import { Link } from 'react-router-dom';

function AccessibleButton({ children, onClick, linkTo, className = 'button', ariaLabel, disabled }) {
  const accessibilityProps = {
    'aria-label': ariaLabel || (typeof children === 'string' ? children : '')
  };

  if (linkTo) {
    return (
      <Link to={linkTo} className={`${className} ${disabled ? 'disabled' : ''}`} {...accessibilityProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick} disabled={disabled} {...accessibilityProps}>
      {children}
    </button>
  );
}
export default AccessibleButton;