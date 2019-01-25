import React, { Component } from 'react';
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  Layer,
  ResponsiveContext,
} from 'grommet';

import { FormClose, Notification } from 'grommet-icons';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from './scenes/Login';
import App from './App';
import AppBar from './components/AppBar';
import { Nav } from './App';


import LoginRequired from './components/LoginRequired';
import { changeLoggedIn } from './actions/auth';

const theme = {
  global: {
    colors: {
      brand: '#228BE6'
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

// https://github.com/grommet/grommet-starter-new-app
class Container extends Component {
  state = {
    showSidebar: false
  }

  closeNav = () => {
    this.setState({ showSidebar: !this.state.showSidebar })
  }
  render() {
    const { showSidebar } = this.state;
    const { pathname } = this.props.location
    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box responsive fill>
              <AppBar>
                <Heading level='2' margin='none'>Mobi</Heading>
                {
                  pathname !== "/login" &&
                  <Button
                    icon={<Notification />}
                    onClick={this.closeNav}
                  />
                }
                </AppBar>
              <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
                <Box flex align='center' justify='center'>
                  <Switch>
                    <Route path="/login/" component={Login} />
                    <LoginRequired component={App} />
                  </Switch>
                </Box>
                {(!showSidebar || size !== 'small') ? (
                  <Collapsible direction="horizontal" open={showSidebar}>
                    <Box
                      flex
                      width='medium'
                      background='light-2'
                      elevation='small'
                      align='center'
                      justify='center'
                    >
                      <Nav close={this.closeNav} auth={this.props.auth}/>
                    </Box>
                  </Collapsible>
                ): (
                  <Layer>
                    <Box
                      background='light-2'
                      tag='header'
                      justify='end'
                      align='center'
                      direction='row'
                    >
                      <Button
                        icon={<FormClose />}
                        onClick={this.closeNav}
                      />
                    </Box>
                    <Box
                      fill
                      background='light-2'
                      align='center'
                      justify='center'
                    >
                      <Nav close={this.closeNav} auth={this.props.auth}/>
                    </Box>
                  </Layer>
                )}
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    )
  }
}


export default withRouter(connect(
  state => state, {
    changeLoggedIn,
  }
)(Container))