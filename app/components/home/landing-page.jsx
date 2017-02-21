'use strict';

import React from 'react';
import { render } from 'react-dom';
import {Link} from 'react-router';

const LandingPage= React.createClass({
        render: function() {
        return (
        <div className="landing-page">
            <p className="landing-page__heading">Collections</p>
            <p className="landing-page__filter">Filter </p>
            <div className="pure-g">
                <div className="pure-u-lg-1-3 pure-u-md-1-2 pure-u-sm-1">
                    <div className="landing-page__tile">
<<<<<<< HEAD:app/components/home/landing-page/landing-page.jsx
                    <Link to ="/view">
                        <img className="tile__image" src="../assets/images/3dbox.jpeg" />
=======
                    <Link to="/new">
                        <img onClick={this.props.onView} className="tile__image" src="../assets/images/3dbox.jpeg" />
>>>>>>> test:app/components/home/landing-page.jsx
                    </Link>
                    <div className="tile__appinfo">
                        <p className="tile__appname">webVr aframe</p>
                        <img className="tile__username_img" src="../assets/images/men.jpeg" />
                        <p className="tile__username">Alen Paull</p>
                    </div>
                    <div className="tile__options">
<<<<<<< HEAD:app/components/home/landing-page/landing-page.jsx
                        <Link to="/edit" className="options__edit">Edit</Link>
=======
                        <p onClick={this.props.onClick}><Link to="/new">Edit</Link></p>
>>>>>>> test:app/components/home/landing-page.jsx
                        <ul className="tile__options_stats">
                            <li>
                                <img src="../assets/images/views.svg" />
                                <p className="options__stats_num">4</p>
                            </li>
                            <li> 
                                <img src="../assets/images/share.svg" />
                                <p className="options__stats_num">6</p>
                            </li>
                            <li> 
                                <img src="../assets/images/likes.svg" />
                                <p className="options__stats_num">12</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
        );
    } 
});

export default LandingPage;