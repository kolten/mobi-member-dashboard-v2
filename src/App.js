import React from 'react';

import { connect } from 'react-redux';
import { Link, Redirect, Route, Switch } from 'react-router-dom';

import { changeLoggedIn, setAdmin } from './actions/auth';
import AdminRequired from './components/AdminRequired';

export const Nav = ({auth, close}) => (
  <ul>
    <Link onClick={close} to="/home"><li>Home</li></Link>
    {auth.isAdmin && <Link onClick={close} to="/register"><li>Register</li></Link>}
    {auth.isAdmin && <Link onClick={close} to="/editor"><li>Editor</li></Link> }
  </ul>
)


const Home = () => <h1>Home</h1>
const Register = () => <h1>Register</h1>
const Editor = () => <h1>Editor</h1>

const App = (props) => {
  return (
    <>
      <Switch>
        <Route exact path="/home" component={Home} />
        <AdminRequired exact path="/register" component={Register} />
        <AdminRequired exact path="/editor" component={Editor} />
        <Redirect exact from="/" to="/home" />
      </Switch>
    </>
  )
}


export default connect(
  state => ({
    auth: state.auth,
  }),
  {
    changeLoggedIn, setAdmin
  }
)(App);