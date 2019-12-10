import styled from 'styled-components';
import colors from '@/styles/colors';

import mainMovie from '@/assets/images/medias/mainMovie.webp';

export const Container = styled.div`
  display: flex;
  height: 37vw;
  position: relative;
  top: -15px;
`;
export const Content = styled.div`
  display: flex;
  flex: 1;
`;
export const LeftContent = styled.div`
  background: #000;
  display: flex;
  flex: 1;
  position: relative;
  flex-direction: column;

  &:before {
    content: '';
    position: absolute;
    z-index: 10;
    background-image: linear-gradient(to right, #000, transparent);
    top: 0;
    bottom: 0;
    left: 100%;
    width: 275px;
  }
`;

export const LeftContentWrapper = styled.div`
  margin: 20px 8%;
`;

export const LeftContentHeader = styled.div`
  margin-bottom: 10px;
`;

export const LeftContentTitle = styled.span`
  font-size: 22px;
  color: ${colors.grayLighter};
`;

export const LeftContentSpan = styled.span`
  font-size: 14px;
  color: ${colors.gray};
`;

export const RightContent = styled.div`
  background: url(${props => props.thumbnail});
  background-size: cover;
  display: flex;
  flex: 2;
  justify-content: flex-end;
`;

export const RightContentClose = styled.i`
  font-size: 2em;
  color: ${colors.light};
  margin: 1em;
  cursor: pointer;
`;
