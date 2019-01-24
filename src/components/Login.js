import React from 'react';
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


const Login = (props) => {
  if (props.auth) {
    const { from } = props.location.state || { from: { pathname: '/' } }
    return <Redirect to={from} />
  }
  return (
    <Box width="medium">
        <Form onSubmit={( { value } ) => {
          const { email, password } = value;
          props.login(email, password);
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
          <Box 
            direction="row" 
            justify="center" 
            margin={{ top: "medium" }}>
            <Button type="submit" label={"Login"} primary />
          </Box>
        </Form>
      </Box>
  )
}


export default connect(
  state => ({
    auth: state.auth.loggedIn
  }),
  {
    login
  }
)(Login);