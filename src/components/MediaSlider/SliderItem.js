import React from 'react';

import SliderContext from './SliderContext';

import history from '@/services/history';

import './SliderItem.scss';

export default function SliderItem({ media, elementRef }) {
  function handleClick() {
    history.push(`/player?mediaId=${media.id}`);
  }

  return (
    <div ref={elementRef} className="item" onClick={handleClick}>
      <img src={media.thumbnail} />
    </div>
  );
}
