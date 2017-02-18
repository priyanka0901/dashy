'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import HomeLayout from './components/home/home.jsx';
import PageLayout from './components/page/page.jsx';

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
    </Route>
  </Router>
), document.getElementById('app'));