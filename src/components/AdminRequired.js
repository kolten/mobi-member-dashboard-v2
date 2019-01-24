import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

// For now
const AdminRequired = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={props => (
    rest.isAdmin ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }} />
    )
  )} />
}
export default connect(
  state => ({
    isAdmin: state.auth.isAdmin,
  })
)(AdminRequired);