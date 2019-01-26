import React from 'react';
import { Redirect, Route } from 'react-router-dom';


export const LoginRequired = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={props => (
    rest.loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
    )
  )} />
}