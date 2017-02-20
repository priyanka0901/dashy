'use strict';

import React from 'react';
import {Link} from 'react-router';
import Editor from '../page/editor/editor.jsx';
import PageNavbar from '../page/page-navbar/page-navbar.jsx';
import Sidebar from '../page/sidebar/sidebar.jsx';

const EditLayout = React.createClass({
    render: function() {
        return (
            <div>
                 <PageNavbar />
                 <div className="container">
                 <p>EditLayout</p>
                    <Sidebar />
                    <Editor />
                 </div>   
            </div>
        );
    } 
});

export default EditLayout;