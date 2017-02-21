'use strict';

import React from 'react';
import { render } from 'react-dom';
import HomeNavbar from './home/home-navbar.jsx';
import LandingPage from './home/landing-page.jsx';
import Footer from './home/footer.jsx';
import Editor from './page/editor.jsx';
import PageNavbar from './page/page-navbar.jsx';
import Sidebar from './page/sidebar.jsx';

const HomeLayout = React.createClass({
    render: function() {
        return (
            <div>
                <HomeNavbar />
                <LandingPage />
                <Footer />
            </div>
        );
    } 
});
const PageLayout = React.createClass({
    render: function() {
        return (
            <div>
                 <PageNavbar />
                 <div className="container">
                    <Sidebar />
                    <Editor />
                 </div>   
            </div>
        );
    } 
});

export {HomeLayout,PageLayout};

