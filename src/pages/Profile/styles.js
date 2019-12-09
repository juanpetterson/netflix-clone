import styled from 'styled-components';
import colors from '@/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Wrapper = styled.div`
  background-color: ${colors.lighter};
  flex-direction: column;
  display: flex;
  padding: 0 50px;
  flex: 1;
`;

export const Content = styled.div`
  display: flex;
  margin: 50px 0;
`;

export const FieldContainer = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

export const ProfileTitle = styled.span`
  font-size: 2.15em;
  color: ${colors.dark};
`;

export const FieldTitle = styled.span`
  font-size: 1.25em;
  color: ${colors.gray};
  line-height: 60px;
  width: 250px;
`;
export const FieldValue = styled.span`
  color: ${colors.dark};
  line-height: 60px;
`;
