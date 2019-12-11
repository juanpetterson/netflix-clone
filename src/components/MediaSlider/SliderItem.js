import React from 'react';
import classnames from 'classnames';

import SliderDetailsButton from './SliderDetailsButton';

import history from '@/services/history';

// import './SliderItem.scss';

import { Container, Content, Image, BorderMark } from './SliderItemStyles';

function SliderItem({ media, elementRef, onSelectSlide, currentSlide }) {
  const isActive = currentSlide && currentSlide.id === media.id;

  function handleClick() {
    history.push(`/player?mediaId=${media.id}`);
  }

  return (
    <Container
      ref={elementRef}
      className={classnames('item', {
        'item--open': isActive,
      })}
    >
      <Content className="itemContent">
        <Image
          src={media.thumbnail}
          alt="mediaThumbnail"
          onClick={handleClick}
        />
        <SliderDetailsButton onClick={() => onSelectSlide(media)} />
        {isActive && <BorderMark className="mark" />}
      </Content>
    </Container>
  );
}

export default SliderItem;
