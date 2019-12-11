import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import useWidthElement from './useWidthElement';
import useSliding from './useSliding';

import SliderItem from './SliderItem';
import SliderButton from './SliderButton';
import SliderMediaDetails from './SliderMediaDetails';

// import './MediaSlider.scss';

import { Slider, SliderWrapper, SliderContainer, SliderTitle } from './styles';

function MediaSlider({ activeSlide, medias }) {
  const [currentSlide, setCurrentSlide] = useState(activeSlide);
  const [mediasLength, setMediasLength] = useState(activeSlide);
  const { width, elementRef } = useWidthElement();
  const {
    handlePrev,
    handleNext,
    slideProps,
    containerRef,
    hasNext,
    hasPrev,
  } = useSliding(width, mediasLength);

  useEffect(() => {
    const { data } = medias;

    if (data) {
      setMediasLength(data.length);
    }
  }, [medias]);

  const handleSelect = media => {
    setCurrentSlide(media);
  };

  const handleClose = () => {
    setCurrentSlide(null);
  };

  return (
    <div>
      <SliderWrapper className="slider-wrapper">
        <SliderTitle className="slider-title">{medias.metric}</SliderTitle>
        <Slider
          className={classnames('slider', {
            'slider--open': currentSlide != null,
          })}
        >
          {hasPrev && <SliderButton type="left" onClick={handlePrev} />}
          <SliderContainer
            ref={containerRef}
            className="slider__container"
            {...slideProps}
          >
            {medias &&
              medias.data.map(media => (
                <SliderItem
                  key={media.id}
                  media={media}
                  elementRef={elementRef}
                  onSelectSlide={handleSelect}
                  onCloseSlide={handleClose}
                  currentSlide={currentSlide}
                />
              ))}
          </SliderContainer>
          {hasNext && <SliderButton type="right" onClick={handleNext} />}
        </Slider>
      </SliderWrapper>
      {currentSlide && (
        <SliderMediaDetails media={currentSlide} onClose={handleClose} />
      )}
    </div>
  );
}

export default MediaSlider;
