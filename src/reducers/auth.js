import { CHANGE_LOGGED_IN, SET_ADMIN, AUTH_ERROR } from '../actions/auth';


export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_LOGGED_IN: return {...state, loggedIn: action.loggedIn}
    case SET_ADMIN: return {...state, isAdmin: action.isAdmin}
    case AUTH_ERROR: return {...state, error: action.error}
    default: return state;
  }
};