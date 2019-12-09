import styled, { css } from 'styled-components';
import colors from '@/styles/colors';

const sizes = {
  small: css`
    height: 68px;
  `,

  default: css`
    height: 90px;
  `,
};

const logoSizes = {
  small: css`
    height: 31px;
    width: 92.5px;
  `,

  default: css`
    height: 45px;
    width: 167px;
  `,
};

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  ${props => sizes[props.size || 'default']};
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0 4%;
  align-items: center;

  a {
    margin-right: 5px;
  }

  ul {
    display: flex;
    align-items: center;
  }

  li {
    display: block;
    margin-left: 18px;
    font-size: 12px;
    color: ${colors.grayLighter};
    cursor: pointer;
    transition: 300ms ease;
    user-select: none;

    &:hover {
      color: ${colors.gray};
    }
  }
`;

export const HeaderLogo = styled.img`
  ${props => logoSizes[props.size || 'default']};
`;

export const ProfileContainer = styled.div`
  align-items: center;
  justify-content: flex-end;
  right: 4%;
  position: absolute;
  display: inline-block;
  cursor: pointer;
  top: 20px;

  &:hover .profileDropMenu {
    display: block;
  }

  &:focus .profileDropMenu {
    display: block;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
`;

export const ProfileArrow = styled.i`
  font-size: 12px;
  color: ${colors.lighter};
  position: absolute;
  top: 10px;
`;

export const ProfileDropMenu = styled.div`
  display: none;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  min-width: 80px;
  z-index: 10;

  &:hover {
    display: block;
  }
`;

export const ProfileDropItem = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  margin-left: 10px;
`;
export const ProfileDropContent = styled.span`
  color: ${colors.grayLighter};
  font-size: 14px;
  font-weight: bold;

  &:hover {
    text-decoration-line: underline;
  }
`;

export const ProfilePicture = styled.img`
  height: 42px;
  width: 42px;
  margin-right: 10px;
  user-select: none;
`;
