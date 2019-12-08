import React from 'react';

import SliderContext from './SliderContext';

import history from '@/services/history';

import { Container } from './SliderItemStyles';

import './SliderItem.scss';

export default function SliderItem({ media, elementRef }) {
  function handleClick() {
    history.push('/player');
  }

  return (
    <Container
      ref={elementRef}
      className="item"
      onClick={handleClick}
      thumbnail={media.thumbnail}
    />
  );
}
