/* eslint-disable default-param-last */
import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  token: false,
  isLoading: false,
  user: {},
  ong: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.AUTH_FAILURE: {
      const newState = { ...initialState };
      return newState;
    }
    case types.AUTH_SUCCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      if (action.payload.user) {
        newState.user = action.payload.user;
        delete newState.ong;
      } else {
        newState.ong = action.payload.ong;
        delete newState.user;
      }
      newState.isLoading = false;

      return newState;
    }
    case types.AUTH_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;

      return newState;
    }

    default: {
      return state;
    }
  }
}
