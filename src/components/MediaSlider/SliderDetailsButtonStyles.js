import styled from 'styled-components';
import colors from '@/styles/colors';

export const Button = styled.button`
  position: absolute;
  bottom: 1%;
  left: 40%;
  right: 0;
  opacity: 0;
  transition: 300ms ease 100ms;
  background: transparent;
  border: 0;
  outline: none;
  width: 100%;
`;

export const Span = styled.span`
  display: block;
  width: 14px;
  margin: 0 auto;
  color: white;
`;

export const ArrowIcon = styled.i`
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  transition: 300ms ease 100ms;

  &:hover {
    color: ${colors.primary};
  }
`;
