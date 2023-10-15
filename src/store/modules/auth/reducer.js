/* eslint-disable default-param-last */
import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  token: false,
  isLoading: false,
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

      return newState;
    }

    default: {
      return state;
    }
  }
}
