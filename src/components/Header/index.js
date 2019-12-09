import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import headerLogo from '@/assets/images/logo.svg';
import history from '@/services/history';
import { signOut } from '@/store/modules/auth/actions';

import {
  Container,
  Wrapper,
  HeaderLogo,
  ProfileContainer,
  ProfileWrapper,
  ProfileArrow,
  ProfileDropMenu,
  ProfileDropItem,
  ProfileDropContent,
  ProfilePicture,
} from './styles';

export default function Header(props) {
  const { size, display } = props;
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  function handleProfile() {
    history.push('/profile');
  }

  return (
    <Container size={size}>
      <Wrapper display={display}>
        <a href="/">
          <HeaderLogo size={size} src={headerLogo} alt="headerLogo" />
        </a>
        {user && (
          <div>
            <ul>
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>Recently Added</li>
              <li>My List</li>
            </ul>
            <ProfileContainer>
              <ProfilePicture src={user.picture} alt="userPicture" />
              <ProfileArrow className="fas fa-caret-down" />
              <ProfileDropMenu className="profileDropMenu">
                <ProfileDropItem>
                  <ProfileDropContent onClick={handleProfile}>
                    Profile
                  </ProfileDropContent>
                </ProfileDropItem>
                <ProfileDropItem>
                  <ProfileDropContent onClick={handleSignOut}>
                    Sign out
                  </ProfileDropContent>
                </ProfileDropItem>
              </ProfileDropMenu>
            </ProfileContainer>
          </div>
        )}
      </Wrapper>
    </Container>
  );
}
