import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';


const LoginRequired = ({ component: Component, ...rest }) => {
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
export default connect(
  state => ({
    loggedIn: state.auth.loggedIn,
  }),
)(LoginRequired);
