'use strict';

import React from 'react';
import { render } from 'react-dom';
import HomeNavbar from './home-navbar/home-navbar.jsx';
import LandingPage from './landing-page/landing-page.jsx';
import Footer from './footer/footer.jsx';

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

export default HomeLayout;