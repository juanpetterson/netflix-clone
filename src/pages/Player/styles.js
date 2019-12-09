import styled from 'styled-components';
import colors from '@/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000000;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-end;
  height: 80px;
`;

export const ArrowBack = styled.i`
  color: ${colors.grayLighter};
  font-size: 32px;
  margin-left: 4%;
  transition: 300ms ease;
  cursor: pointer;
  position: relative;

  &:hover {
    color: ${colors.lighter};
    transform: scale(1.3);

    &::after {
      display: block;
      content: 'Back to Browse';
      position: absolute;
      top: 5px;
      left: 45px;
      width: 300px;
      font-size: 20px;
    }
  }
`;
