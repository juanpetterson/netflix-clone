import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import useWidthElement from './useWidthElement';
import useSliding from './useSliding';

import SliderItem from './SliderItem';
import SliderButton from './SliderButton';
import SliderItemContent from './SliderItemContent';

import './MediaSlider.scss';

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
      <div className="slider-wrapper">
        <span className="slider-title">{medias.metric}</span>
        <div
          className={classnames('slider', {
            'slider--open': currentSlide != null,
          })}
        >
          {hasPrev && <SliderButton type="left" onClick={handlePrev} />}
          <div ref={containerRef} className="slider__container" {...slideProps}>
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
          </div>
          {hasNext && <SliderButton type="right" onClick={handleNext} />}
        </div>
      </div>
      {currentSlide && (
        <SliderItemContent movie={currentSlide} onClose={handleClose} />
      )}
    </div>
  );
}

export default MediaSlider;
