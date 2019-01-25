import React from 'react';
import { Redirect, Route } from 'react-router-dom';

// For now, should refactor this into an HOC
export const AdminRequired = ({ component: Component, ...rest }) => {
  const { isAdmin } = rest
  return <Route {...rest} render={props => (
    isAdmin ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }} />
    )
  )} />
}