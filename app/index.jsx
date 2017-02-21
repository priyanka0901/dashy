'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
<<<<<<< HEAD
import HomeLayout from './components/home/home.jsx';
import NewLayout from './components/new/new.jsx';
import EditLayout from './components/edit/edit.jsx';
import ViewLayout from './components/viewapp/viewapp.jsx';
=======
import {HomeLayout, PageLayout} from './components/homepage.jsx';
>>>>>>> test

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
     <Route path="/new" component={NewLayout} />
     <Route path="/edit" component={EditLayout} />
     <Route path="/view" component={ViewLayout} />
    </Route>
  </Router>
), document.getElementById('app'));