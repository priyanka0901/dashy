'use strict';

import React from 'react';
import { render } from 'react-dom';
import {Link} from 'react-router';

const TileDisplay= React.createClass({
    render:function(){
        return(
             <div className="pure-u-lg-1-3 pure-u-md-1-2 pure-u-sm-1">
                    <div className="landing-page__tile">
                    <Link to="/new">
                        <img onClick={this.props.onView} className="tile__image" src="../assets/images/3dbox.jpeg" />
                    </Link>
                    <div className="tile__appinfo">
                        <p className="tile__appname">webVr aframe</p>
                        <img className="tile__username_img" src="../assets/images/men.jpeg" />
                        <p className="tile__username">Alen Paull</p>
                    </div>
                    <div className="tile__options">
                        <Link to="/new" onClick={this.props.onClick}>Edit</Link>
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
        );
    }
});

const LandingPage= React.createClass({
        render: function() {
        return (
        <div className="landing-page">
            <p className="landing-page__heading">Featured Apps</p>
            <div className="landing-page__filter">
                <p><input type="radio" value="Most recent"  name="most"/>Most recent</p> 
                <p><input type="radio" value="Most popular" name="most" />Most popular</p> 
            </div>
            <div className="pure-g">
               <TileDisplay />
               <TileDisplay />
               <TileDisplay />
                <TileDisplay />
                <TileDisplay />
                <TileDisplay />
                <TileDisplay />

        </div>
    </div>
        );
    } 
});

export {LandingPage, TileDisplay};

