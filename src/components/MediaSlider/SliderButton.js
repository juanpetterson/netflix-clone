import React from 'react';
import './SliderButton.scss';

const SliderButton = ({ onClick, type }) => (
  <button className={`slider-button slider-button--${type}`} onClick={onClick}>
    <span className="slider-arrow">
      <i className={`fas fa-chevron-${type}`}></i>
    </span>
  </button>
);

export default SliderButton;
