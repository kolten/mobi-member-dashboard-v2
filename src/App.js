import React from 'react';

import { connect } from 'react-redux';
import { Link, Redirect, Route, Switch } from 'react-router-dom';

import { Box, Text } from 'grommet';

import Register from './scenes/Register';
import {AdminRequired} from './components/AdminRequired';

export const Nav = ({auth, close}) => (
  <Box>
    <Link onClick={close} to="/home"><Text>Home</Text></Link>
    {auth.isAdmin && <Link onClick={close} to="/register"><Text>Register</Text></Link>}
    {auth.isAdmin && <Link onClick={close} to="/editor"><Text>Editor</Text></Link> }
  </Box>
)


const Home = () => <h1>Home</h1>
const Editor = () => <h1>Editor</h1>

const App = (props) => {
  const { isAdmin } = props.auth
  return (
    <>
      <Switch>
        <Route exact path="/home" component={Home} />
        <AdminRequired exact path="/register" isAdmin={isAdmin} component={Register} />
        <AdminRequired exact path="/editor" isAdmin={isAdmin} component={Editor} />
        <Redirect exact from="/" to="/home" />
      </Switch>
    </>
  )
}


export default connect(
  state => ({
    auth: state.auth,
  }),
)(App);