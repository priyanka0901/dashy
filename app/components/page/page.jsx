'use strict';

import React from 'react';
import { render } from 'react-dom';
import Card from './card/card.jsx';
import PageNavbar from './page-navbar/page-navbar.jsx';
import Sidebar from './sidebar/sidebar.jsx';

const PageLayout = React.createClass({
    render: function() {
        return (
            <div>
                 <PageNavbar />
                 <div className="container">
                    <Sidebar />
                    <Card />
                 </div>   
            </div>
        );
    } 
});

export default PageLayout;