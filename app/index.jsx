'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute, IndexRedirect } from 'react-router';
import {HomeLayout, PageLayout} from './components/homepage.jsx';
import {Profile, UserSettings, UserMyapp, UserMyappLook} from './components/page/profile.jsx';
import SignIn from './components/page/signin.jsx';
import SignUp from './components/page/signup.jsx';

const Layout = React.createClass({
    render: function() {
        return (
            <div>
               {/* Render active Route or indexRoute */}
                {this.props.children}
            </div>
        );
    }
});

render((
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
     <IndexRoute component={HomeLayout} />
     <Route path="/new" component={PageLayout} />
     <Route path="/profile" components={Profile} >
      <IndexRoute component={UserSettings} />
      <Route path="usermyapp" component={UserMyapp, UserMyappLook} />
     </Route>
     <Route path="/signin" component={SignIn} />
     <Route path="/signup" component={SignUp} />
    </Route>
  </Router>
), document.getElementById('app'));