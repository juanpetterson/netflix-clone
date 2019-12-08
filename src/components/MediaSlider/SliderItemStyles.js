import styled from 'styled-components';

export const Container = styled.div`
  flex: 0 0 19.7%;
  transition: transform 300ms ease 100ms;
  margin: 0 2px;
  position: relative;

  height: 15vh;

  background: url(${props => props.thumbnail});
  background-size: cover;
`;
