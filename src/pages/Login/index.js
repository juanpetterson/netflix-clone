import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import useForm from 'react-hook-form';

import { signIn } from '@/store/modules/auth/actions';

import Header from '@/components/Header';

import { loginSchema as schema } from './Schema';

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
  ErrorSpan,
} from './styles';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });

  function onSubmit() {
    dispatch(signIn(email, password));
  }

  return (
    <Container>
      <Wrapper>
        <Header />
        <Content>
          <H1>Sign In</H1>
          <H2>Sign in to start watching or restart your membership.</H2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              value={email}
              name="email"
              onChange={e => setEmail(e.currentTarget.value)}
              placeholder="Email or phone number"
              ref={register}
            />
            {errors.email && <ErrorSpan>{errors.email.message}</ErrorSpan>}
            <Input
              value={password}
              name="password"
              onChange={e => setPassword(e.currentTarget.value)}
              placeholder="Password"
              type="password"
              ref={register}
            />
            {errors.password && (
              <ErrorSpan>{errors.password.message}</ErrorSpan>
            )}
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
