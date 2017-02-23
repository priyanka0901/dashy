'use strict';

import React from 'react';
import { render } from 'react-dom';
import Navbar from './navbar.jsx';
import {LandingPage, TileDisplay} from './home/landing-page.jsx';
import Footer from './home/footer.jsx';
import Editor from './page/editor.jsx';
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
                <Navbar onPublish={this.handlePublish} />
                <LandingPage>
                    <TileDisplay onClick={this.handleEdit} onView={this.handleView}/>
                </LandingPage>
                <Footer />
            </div>
        );
    } 
});
const PageLayout = React.createClass({
    render: function() {
        return (
            <div>
                 <Navbar />
                 <div className="container">
                    <Sidebar dynamicButton={dynamicButton}/>
                    <Editor />
                 </div>   
            </div>
        );
    } 
});

export {HomeLayout,PageLayout};

