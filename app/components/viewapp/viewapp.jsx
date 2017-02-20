'use strict';

import React from 'react';
import {Link} from 'react-router';
import { render } from 'react-dom';
import Editor from '../page/editor/editor.jsx';
import PageNavbar from '../page/page-navbar/page-navbar.jsx';
import Sidebar from '../page/sidebar/sidebar.jsx';

const ViewLayout = React.createClass({
    render: function() {
        return (
            <div>
                 <PageNavbar />
                 <div className="container">
                 <p>ViewLayout</p>
                    <Sidebar />
                    <Editor />
                 </div>   
            </div>
        );
    } 
});

export default ViewLayout;