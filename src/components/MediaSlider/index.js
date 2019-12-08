import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import useWidthElement from './useWidthElement';
import useSliding from './useSliding';
import SliderContext from './SliderContext';

import SliderItem from './SliderItem';
import SliderButton from './SliderButton';

import './MediaSlider.scss';

// import { Container, Wrapper, ListTitle, MediaItem } from './styles';
import { SliderWrapper, SliderTitle } from './styles';

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

  // return (
  //   <Container>
  //     {/* <ListTitle>My List</ListTitle> */}
  //     <Wrapper>
  //       {medias &&
  //         medias.map(media => <MediaItem className="item2" key={media.id} />)}
  //     </Wrapper>
  //   </Container>
  // );

  return (
    <SliderWrapper>
      <SliderTitle>{medias.metric}</SliderTitle>
      <div>
        <div className="slider">
          {hasPrev && <SliderButton type="left" onClick={handlePrev} />}
          <div ref={containerRef} className="slider__container" {...slideProps}>
            {medias &&
              medias.data.map(media => (
                <SliderItem
                  key={media.id}
                  media={media}
                  elementRef={elementRef}
                />
              ))}
          </div>
          {hasNext && <SliderButton type="right" onClick={handleNext} />}
        </div>
      </div>
    </SliderWrapper>
  );
}

export default MediaSlider;
