import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Header from '@/components/Header';

import {
  Container,
  Wrapper,
  Content,
  FieldContainer,
  ProfileTitle,
  FieldTitle,
  FieldValue,
} from './styles';

export default function Profile() {
  const user = useSelector(state => state.auth.user);
  const [lastWatched, setLastWatched] = useState('');

  useEffect(() => {
    let currentStored = JSON.parse(
      localStorage.getItem(`@netflix:${user.email}`)
    );

    if (currentStored) {
      //slice the last watched movies stored to get only the last 5
      let lastWatchedStored = currentStored.slice(0, 5);

      let watched = [];
      lastWatchedStored.forEach((movie, index) => {
        watched[index] = movie.title;
      }, {});

      setLastWatched(watched.toString());
    }
  }, []);

  return (
    <Container>
      <Header size="small" />
      <Wrapper>
        <Content>
          <ProfileTitle>Profile</ProfileTitle>
        </Content>
        <FieldContainer>
          <FieldTitle>Nome</FieldTitle>
          <FieldValue>{user.name}</FieldValue>
        </FieldContainer>
        <FieldContainer>
          <FieldTitle>E-mail</FieldTitle>
          <FieldValue>{user.email}</FieldValue>
        </FieldContainer>
        <FieldContainer>
          <FieldTitle>Plan Details</FieldTitle>
          <FieldValue>{user.plan}</FieldValue>
        </FieldContainer>
        <FieldContainer>
          <FieldTitle>Credit Card</FieldTitle>
          <FieldValue>{`**** **** **** ${user.creditCard}`}</FieldValue>
        </FieldContainer>
        <FieldContainer>
          <FieldTitle>Last watched movies</FieldTitle>
          <FieldValue>{lastWatched}</FieldValue>
        </FieldContainer>
      </Wrapper>
    </Container>
  );
}
