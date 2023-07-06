import { LOGIN_SUCCESS, LOGOUT } from '../actions/Login-success'

// authReducer.js

const initialState = {
  isAuthenticated: false,
  token: null,
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        isAuthenticated: true,
        token: action.payload,
      };
    case LOGOUT:
      return {
        isAuthenticated: false,
        token: null,
      };
    default:
      return state;
  }
};

