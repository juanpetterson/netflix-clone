import React from 'react';
import classnames from 'classnames';

import { Button, Span, ArrowIcon } from './SliderDetailsButtonStyles';

const SliderDetailsButton = ({ onClick }) => (
  <Button onClick={onClick} className="slider-details-button">
    <Span>
      <ArrowIcon
        className={classnames('fas fa-chevron-down', 'details-arrow')}
      />
    </Span>
  </Button>
);

export default SliderDetailsButton;
