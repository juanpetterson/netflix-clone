import styled from 'styled-components';
import colors from '@/styles/colors';

import image from '@/assets/images/medias/thegoodplace.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 55px;
`;

export const Wrapper = styled.div`
  display: flex;
  transition: transform 500ms ease 100ms;

  &:hover .item2 {
    transform: translateX(-25%);
  }
`;

export const SliderTitle = styled.span`
  color: ${colors.grayLighter};
  font-size: 1.3vw;
  font-weight: 700;
  user-select: none;
`;

export const MediaItem = styled.div`
  background: url(${image});
  background-size: cover;
  height: 100px;
  flex: 0 0 14.7%;
  text-align: center;
  margin: 0 2px;
  transition: transform 500ms ease 100ms;

  &:hover ~ & {
    transform: translateX(25%);
  }

  &:hover {
    transform: scale(1.5) !important;
  }
`;

export const SliderWrapper = styled.div`
  padding: 20px 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  span {
    margin-left: calc(4% + 5px);
    margin-bottom: 10px;
  }
`;

export const Slider = styled.div`
  display: flex;
  position: relative;

  div {
    display: flex;
    padding: 0 55px;
    transition: transform 300ms ease 100ms;
    z-index: 3;
    width: 100%;
  }

  ${
    '' /* &:not(&--open) .item:hover .show-details-button {
    opacity: 1;
  } */
  }

  &:not(&--open) ${SliderItem}:hover {
    transform: scale(1.5) !important;
  }

  &:not(&--open):hover ${SliderItem} {
    transform: translateX(-25%);
  }

  &:not(&--open) ${SliderItem}:hover ~ ${SliderItem} {
    transform: translateX(25%);
  }
`;

export const SliderContainer = styled.div`
  display: flex;
  padding: 0 55px;
  transition: transform 300ms ease 100ms;
  z-index: 3;
  width: 100%;
`;

export const SliderItem = styled.div`
  flex: 0 0 14.7%;
  height: 80px;
  transition: transform 300ms ease 100ms;
  margin: 0 2px;
  position: relative;

  background: url(${image});
  background-size: cover;
`;
