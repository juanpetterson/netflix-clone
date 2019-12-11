import styled from 'styled-components';
import colors from '@/styles/colors';

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

export const SliderTitle = styled.span`
  color: ${colors.grayLighter};
  font-size: 1.4vw;
  font-weight: 700;
  user-select: none;
`;

export const Slider = styled.div`
  display: flex;
  position: relative;

  ${'' /* &__container {
    display: flex;
    padding: 0 4%;
    transition: transform 300ms ease 100ms;
    width: 100%;
  } */}

  &:not(&--open) .item:hover .slider-details-button {
    opacity: 1;
  }

  &:not(&--open) .item:hover {
    transform: scale(1.5) !important;
  }

  &:not(&--open):hover .item {
    transform: translateX(-25%);
  }

  &:not(&--open) .item:hover ~ .item {
    transform: translateX(25%);
  }
`;

export const SliderContainer = styled.div`
  display: flex;
  padding: 0 4%;
  transition: transform 300ms ease 100ms;
  width: 100%;
`;
