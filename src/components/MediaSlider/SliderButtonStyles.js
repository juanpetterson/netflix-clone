import styled from 'styled-components';
import colors from '@/styles/colors';

export const Button = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 4%;
  background: rgba(0, 0, 0, 0.5);
  border: 0;
  outline: 0;
  padding: 0;
  z-index: 4;

  ${props => props.direction}: 0;
`;

export const IconSpan = styled.span`
  width: 4%;
  margin: 0 auto;
`;

export const Arrow = styled.i`
  font-size: 30px;
  color: ${colors.lighter};
`;
