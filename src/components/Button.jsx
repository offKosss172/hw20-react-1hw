import React from 'react';

function Button({ backgroundColor, text, onClick }) {
  return (
    <button
      className="custom-button"
      style={{ backgroundColor }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
