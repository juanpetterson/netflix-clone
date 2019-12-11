import Types from './types';

const INITIAL_STATE = {
  data: [],
};

export default function media(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.UPDATE_MEDIA:
      return {
        ...state,
        data: action.payload.data,
      };
    default:
      return state;
  }
}
