import styled from 'styled-components';
import colors from '@/styles/colors';

export const Container = styled.div`
  flex: 0 0 19.7%;
  transition: transform 300ms ease 100ms;
  margin: 0 2px;
  position: relative;
  cursor: pointer;
`;
export const Content = styled.div``;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  vertical-align: top;
`;
export const BorderMark = styled.div`
  border: solid 4px #fff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: -4px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
`;
