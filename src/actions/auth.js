import { apiWrapper } from '../services/api';

export const CHANGE_LOGGED_IN = 'CHANGE_LOGGED_IN';
export const SET_ADMIN = 'SET_ADMIN';

export const ATTEMPT_LOGIN = "ATTEMPT_LOGIN";
export const AUTH_ERROR = "AUTH_ERROR";

export const changeLoggedIn = (loggedIn) => ({
  type: CHANGE_LOGGED_IN,
  loggedIn
});


export const setAdmin = (isAdmin) => ({
  type: SET_ADMIN,
  isAdmin
});

export const setError = (err) =>({
  type: AUTH_ERROR,
  error: err
})

export const login = (email, password) => {
  return (dispatch) => {
    return apiWrapper('/auth/login',
    { method: 'POST', 
      body: JSON.stringify({ email: email, password: password }) 
    })
    .then((user) => {
      localStorage.setItem('token', user.data.Authorization)
      dispatch(changeLoggedIn(user.data.is_member))
      dispatch(setAdmin(user.data.is_admin))
    })
    .catch((err) => {
      console.error(err);
      // TODO: Write error handling actions
      dispatch(setError(err.message))
    })
  }
}


export const getProfile = () => {
  return dispatch => {
    const response = apiWrapper(
      '/auth',
      {
        method: 'GET',
      }
    );

    response.then((resp) => {
      dispatch(changeLoggedIn(resp.data.is_member))
      dispatch(setAdmin(resp.data.is_admin))

    })
    .catch((err) => {
      // TODO: Write error handling actions
      console.error(err);
    })
  }
}

export const reset = (token, password) => {
  return dispatch => {
    const response = apiWrapper('/auth/reset', {
      method: 'POST',
      body: JSON.stringify({token: token, password: password})
    })
    response.then((user) => {
      localStorage.setItem('token', user.data.Authorization)
      dispatch(changeLoggedIn(user.data.is_member))
      dispatch(setAdmin(user.data.is_admin))
    })
    .catch((err) => {
      dispatch(setError(err.message))
    })
  }
}


