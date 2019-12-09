import React from 'react';
import classnames from 'classnames';

import SliderDetailsButton from './SliderDetailsButton';
import SliderMark from './SliderMark';

import history from '@/services/history';

import './SliderItem.scss';

export default function SliderItem({
  media,
  elementRef,
  onSelectSlide,
  currentSlide,
}) {
  const isActive = currentSlide && currentSlide.id === media.id;

  function handleClick() {
    // history.push(`/player?mediaId=${media.id}`);
  }

  return (
    <div
      ref={elementRef}
      className={classnames('item', {
        'item--open': isActive,
      })}
      onClick={handleClick}
    >
      <img src={media.thumbnail} alt="mediaThumbnail" />
      <SliderDetailsButton onClick={() => onSelectSlide(movie)} />
      {/* {isActive && <SliderMark />} */}
    </div>
  );
}
