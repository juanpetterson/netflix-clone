import userService from '@/services/userService';
import Types from './types';

import history from '@/services/history';

export function signIn(email, password) {
  const users = userService.getUsers();

  const user = users.filter(user => user.email === email)[0];

  if (!user || user.password !== password) {
    alert('Incorrect email or password');
  }

  history.push('/');

  return {
    type: Types.SIGN_IN,
    payload: {
      user,
    },
  };
}

export function signOut() {
  return {
    type: Types.SIGN_OUT,
  };
}
