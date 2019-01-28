import React from 'react';
import {
  Box,
  Button,
  CheckBox,
  Form,
  FormField,
  Select,
} from "grommet";

import { connect } from 'react-redux';

import { register } from '../actions/auth';

const Register = (props) => {
  return (
    <Box width="large">
      <Form onSubmit={({ value }) => props.register(value) }>
        <FormField label="Email" name="email" type="email" required />
        <FormField
          label="First Name"
          name="first_name"
          required
          validate={{ regexp: /^[a-z]/i }}
        />
        <FormField
          label="Last Name"
          name="last_name"
          required
          validate={{ regexp: /^[a-z]/i }}
        />
        <FormField
          label="Student ID"
          name="student_id"
          placeholder="100########"
          required
          validate={{ regexp: /^[0-9]{10}$/, message: "Must be 10 digits" }}
        />
        <FormField
          label="Amount Paid"
          name="amount"
          placeholder="15"
          required
          validate={{ regexp: /^[0-9]{2}$/ }}
        />
        <FormField
          label="Shirt Size"
          name="shirt_size"
          component={Select}
          required
          options={["S", "M", "L", "XL", "XXL", "XXXL"]}
        />
        <FormField
          name="paid"
          component={CheckBox}
          pad
          label="Did they pay?"
        />
        <FormField
          name="recieved_shirt"
          component={CheckBox}
          pad
          label="Did they recieve a shirt?"
        />

        <Box direction="row" justify="between" margin={{ top: "small" }}>
          <Button label="Cancel" />
          <Button type="submit" label="Submit" primary />
        </Box>
      </Form>
    </Box>
  )
}

export default connect(state => state, {register})(Register);