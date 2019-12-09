import React from 'react';
import classnames from 'classnames';

import './SliderDetailsButton.scss';

const SliderDetailsButton = ({ onClick }) => (
  <button onClick={onClick} className="slider-details-button">
    <span>
      <i className={classnames('fas fa-chevron-down', 'details-arrow')} />
    </span>
  </button>
);

export default SliderDetailsButton;
