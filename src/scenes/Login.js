import React, { Component } from 'react';
import {
  Box,
  Button,
  Collapsible,
  Form,
  FormField,
  Text
} from "grommet";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { login } from '../actions/auth';

class Login extends Component {
  render() {
    const { auth, location, login, loading } = this.props
    if (auth.loggedIn) {
      const { from } = location.state || { from: { pathname: '/' } }
      return <Redirect to={from} />
    }
    return (
      <Box width="medium">
        <Form onSubmit={( { value } ) => {
          const { email, password } = value;
          login(email, password);
        }}>
          <FormField 
            label="Email"
            name="email"
            type="email"
            required
          />
					<FormField
            label="Password"
            name="password"
            type="password"
            required
          />
          <Collapsible open={auth.error !== undefined}>
          { auth.error && <Text color="red">{auth.error}</Text>}
          </Collapsible>
          <Box 
            direction="row" 
            justify="center" 
            margin={{ top: "medium" }}>
            <Button disabled={!loading} type="submit" label={!loading ? "Logging in..." : "Login"} primary />
          </Box>
        </Form>
      </Box>
    );
  }
}

export default connect(state => state, {login})(Login);