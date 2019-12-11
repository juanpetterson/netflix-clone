import React from 'react';
// import './SliderButton.scss';

import { Button, Arrow, IconSpan } from './SliderButtonStyles';

function SliderButton({ onClick, type }) {
  return (
    <Button direction={type} onClick={onClick}>
      <IconSpan>
        <Arrow className={`fas fa-chevron-${type}`} />
      </IconSpan>
    </Button>
  );
}

export default SliderButton;
