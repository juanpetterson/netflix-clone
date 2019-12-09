import React from 'react';
import './SliderButton.scss';

function SliderButton({ onClick, type }) {
  return (
    <button
      className={`slider-button slider-button--${type}`}
      onClick={onClick}
    >
      <span className="slider-arrow">
        <i className={`fas fa-chevron-${type}`} />
      </span>
    </button>
  );
}

export default SliderButton;
