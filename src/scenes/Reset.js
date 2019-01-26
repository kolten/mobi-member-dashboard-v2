import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Box, Button, Form, FormField } from 'grommet';

import { reset } from '../actions/auth';

// TODO: Handle errors
class Reset extends Component {
  render() {
    const { location } = this.props;
    const query = new URLSearchParams(location.search);
    const token = query.get('token');
    if (this.props.auth.loggedIn || !token) {
      const { from } = location.state || { from: { pathname: '/' } }
      return <Redirect to={from} />
    }
    return (
      <Box width="medium">
        <Form onSubmit={({ value }) => {
          const { password } = value;
          this.props.reset(token, password);
        }}>
          <FormField
            label="Enter your new password"
            type="password"
            required
            validate={{ regexp: /^[a-z]/i }}
          />
          <Box direction="row" justify="between" margin={{ top: "medium" }}>
            <Button type="submit" label="Submit" primary />
          </Box>
        </Form>
      </Box>
    );
  }
}

export default connect(state => state, { reset })(Reset);