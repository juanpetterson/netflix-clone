import React from 'react';
import mainMovieTitle from '@/assets/images/medias/mainMovieTitle.webp';

import {
  Container,
  Content,
  LeftContent,
  LeftContentHeader,
  LeftContentTitle,
  LeftContentWrapper,
  LeftContentSpan,
  RightContent,
  RightContentClose,
} from './SliderMediaStyles';

export default function MediaDetails(props) {
  const { media, onClose } = props;

  function handleClick() {}

  return (
    <Container>
      <Content>
        <LeftContent>
          <LeftContentWrapper>
            <LeftContentHeader>
              <LeftContentTitle>{media.title}</LeftContentTitle>
            </LeftContentHeader>
            <LeftContentSpan>
              Searching for a fresh start, a nurse practitioner moves from LA to
              a remote northern California town and is surprised by what -- and
              who -- she finds.
            </LeftContentSpan>
          </LeftContentWrapper>
        </LeftContent>
        <RightContent thumbnail={media.thumbnail}>
          <RightContentClose className={'fas fa-times'} onClick={onClose} />
        </RightContent>
      </Content>
    </Container>
  );
}
