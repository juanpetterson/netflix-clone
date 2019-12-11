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
  const mediaData = useSelector(state => state.media.data);
  const [lastWatched, setLastWatched] = useState('');

  useEffect(() => {
    let data = [...mediaData];

    let userData = data.find(data => data.user === user.id);

    //check if user has saved data
    if (userData) {
      const { medias } = userData;

      //check if user has watched some media
      if (medias) {
        //slice the last watched movies stored to get only the last 5
        let lastWatchedStored = medias.slice(0, 5);

        //loop to get the medias title
        let watched = [];
        lastWatchedStored.forEach((movie, index) => {
          watched[index] = movie.title;
        }, {});

        setLastWatched(watched.toString());
      }
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
