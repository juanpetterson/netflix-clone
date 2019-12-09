import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signIn } from '@/store/modules/auth/actions';
import Types from '@/store/modules/auth/types';

import Header from '@/components/Header';

import {
  Container,
  Wrapper,
  Content,
  Form,
  H1,
  H2,
  H3,
  Input,
  SignInButton,
  Footer,
  FooterHeader,
  CheckboxWrapper,
  Checkbox,
} from './styles';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username || !password) {
      alert('Fill in all fields');
    }

    dispatch(signIn(username, password));
  }

  return (
    <Container>
      <Wrapper>
        <Header />
        <Content>
          <H1>Sign In</H1>
          <H2>Sign in to start watching or restart your membership.</H2>
          <Form onSubmit={handleSubmit}>
            <Input
              value={username}
              onChange={e => setUsername(e.currentTarget.value)}
              placeholder="Email or phone number"
            />
            <Input
              value={password}
              onChange={e => setPassword(e.currentTarget.value)}
              placeholder="Password"
              type="password"
            />
            <SignInButton type="submit">Sign In</SignInButton>
          </Form>
          <Footer>
            <FooterHeader>
              <CheckboxWrapper>
                <Checkbox id="remember-me" />
                <label htmlFor="remember-me" style={{ color: '#fff' }}>
                  <H3>Remember me</H3>
                </label>
              </CheckboxWrapper>
              <H3>Need help?</H3>
            </FooterHeader>
          </Footer>
        </Content>
      </Wrapper>
    </Container>
  );
}

export default Login;
