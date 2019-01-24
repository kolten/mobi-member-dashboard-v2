import { CHANGE_LOGGED_IN, SET_ADMIN } from '../actions/auth';


export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_LOGGED_IN: return {...state, loggedIn: action.loggedIn}
    case SET_ADMIN: return {...state, isAdmin: action.isAdmin}
    default: return state;
  }
};