'use strict';

import React from 'react';
import { render } from 'react-dom';

const LandingPage= React.createClass({
        render: function() {
        return (
        <div className="landing-page">
            <p className="landing-page__heading">Collections</p>
            <p className="landing-page__filter">Filter </p>
            <div className="pure-g">
                <div className="pure-u-lg-1-3 pure-u-md-1-2 pure-u-sm-1">
                    <div className="landing-page__tile">
                    <img className="tile__image" src="../assets/images/3dbox.jpeg" />
                    <div className="tile__appinfo">
                        <p className="tile__appname">webVr aframe</p>
                        <img className="tile__username_img" src="../assets/images/men.jpeg" />
                        <p className="tile__username">Alen Paull</p>
                    </div>
                    <div className="tile__options">
                        <button>Edit</button>
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