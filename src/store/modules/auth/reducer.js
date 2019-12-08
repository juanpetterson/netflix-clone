import Types from './types';

const INITIAL_STATE = {
  user: null,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SIGN_IN:
      return {
        ...state,
        user: action.payload.user,
      };
    case Types.SIGN_OUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}
