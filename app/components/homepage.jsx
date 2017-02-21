'use strict';

import React from 'react';
import { render } from 'react-dom';
import HomeNavbar from './home/home-navbar.jsx';
import LandingPage from './home/landing-page.jsx';
import Footer from './home/footer.jsx';
import Editor from './page/editor.jsx';
import PageNavbar from './page/page-navbar.jsx';
import Sidebar from './page/sidebar.jsx';

var dynamicButton = '';
const HomeLayout = React.createClass({
    handleEdit: function() {
        dynamicButton = 'update';
    },
    handleView: function() {
        dynamicButton= 'revert';
    },
    handlePublish: function(){
        dynamicButton = 'Publish';
    },
    render: function() {
        return (
            <div>
                <HomeNavbar onPublish={this.handlePublish} />
                <LandingPage onClick={this.handleEdit} onView={this.handleView} />
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
                    <Sidebar dynamicButton={dynamicButton}/>
                    <Editor />
                 </div>   
            </div>
        );
    } 
});

export {HomeLayout,PageLayout};

