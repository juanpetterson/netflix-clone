import React from 'react';
import classnames from 'classnames';

import SliderDetailsButton from './SliderDetailsButton';

import history from '@/services/history';

import './SliderItem.scss';

function SliderItem({ media, elementRef, onSelectSlide, currentSlide }) {
  const isActive = currentSlide && currentSlide.id === media.id;

  function handleClick() {
    history.push(`/player?mediaId=${media.id}`);
  }

  return (
    <div
      ref={elementRef}
      className={classnames('item', {
        'item--open': isActive,
      })}
    >
      <div className="itemContent">
        <img src={media.thumbnail} alt="mediaThumbnail" onClick={handleClick} />
        <SliderDetailsButton onClick={() => onSelectSlide(media)} />
        {isActive && <div className="mark" />}
      </div>
    </div>
  );
}

export default SliderItem;
