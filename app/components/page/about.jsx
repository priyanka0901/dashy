'use strict';

import React from 'react';
import Navbar from '../navbar.jsx';
import Footer from '../home/footer.jsx';

const AboutPage=React.createClass({
    render:function(){
        return(
            <div className="about">
            <Navbar />
            <div className="aboutpage">
                <p className="aboutpage__heading">About us</p>
            </div>
            <Footer/>
            </div>
        );
    }
});

export default AboutPage;