import styled from 'styled-components';
import backgroundImage from '@/assets/images/background.jpg';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundImage});
`;

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  background-size: cover;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const HeaderAnchor = styled.a`
  display: flex;
  align-items: center;
  height: 90px;
  margin-left: 3%;
`;

export const HeaderImage = styled.img`
  height: 45px;
  width: 167px;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  min-height: 660px;
  max-width: 350px;
  padding: 60px 68px 40px;
  margin: 0;
  margin-bottom: 90px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 4px;
`;

export const H1 = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`;
export const H2 = styled.h2`
  color: #fff;
  font-size: 1rem;
  font-weight: normal;
  margin-bottom: 1.25rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  height: 50px;
  border-radius: 4px;
  padding: 0 10px;
  margin: 8px 0;
  border: none;
`;

export const SignInButton = styled.button`
  background-color: #e50914;
  height: 48px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin: 35px 0 10px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const Footer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  user-select: none;
  margin: 10px 0;
`;

export const FooterHeader = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  height: 20px;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
`;

export const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  height: 15px;
  width: 15px;
`;

export const H3 = styled.h3`
  color: #b3b3b3;
  font-size: 13px;
  font-weight: 500;
`;
