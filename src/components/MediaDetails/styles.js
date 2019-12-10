import styled from 'styled-components';
import colors from '@/styles/colors';

import mainMovie from '@/assets/images/medias/mainMovie.webp';

export const Container = styled.div`
  display: flex;
  height: 37vw;
`;
export const Content = styled.div`
  display: flex;
  flex: 1;
  margin: 10px 0;
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

export const LeftContentImage = styled.img`
  width: 85%;
  height: 20%;
  margin-left: 8%;
`;

export const LeftContentWrapper = styled.div`
  margin: 20px 8%;
`;

export const LeftContentSpan = styled.span`
  font-size: 14px;
  color: ${colors.gray};
`;

export const RightContent = styled.div`
  background: url(${mainMovie});
  background-size: cover;
  display: flex;
  flex: 2;
`;
