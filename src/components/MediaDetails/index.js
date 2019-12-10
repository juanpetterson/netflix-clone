import React from 'react';
import mainMovieTitle from '@/assets/images/medias/mainMovieTitle.webp';

import {
  Container,
  Content,
  LeftContent,
  LeftContentImage,
  LeftContentWrapper,
  LeftContentSpan,
  RightContent,
} from './styles';

export default function MediaDetails() {
  function handleClick() {}

  return (
    <Container>
      <Content>
        <LeftContent>
          <LeftContentImage src={mainMovieTitle} />
          <LeftContentWrapper>
            <LeftContentSpan>
              Searching for a fresh start, a nurse practitioner moves from LA to
              a remote northern California town and is surprised by what -- and
              who -- she finds.
            </LeftContentSpan>
          </LeftContentWrapper>
        </LeftContent>
        <RightContent>teste</RightContent>
      </Content>
    </Container>
  );
}
