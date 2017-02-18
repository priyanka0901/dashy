'use strict';

import React from 'react';
import {Link} from 'react-router';

const PageNavbar = React.createClass({
    getInitialState: function(){
    return {display: "none"}
  },
  toggleHover: function(){
    this.setState({display: "block"})
  },
  toggleHovered: function(){
    this.setState({display: "none"})
  },
    render: function() {
        return (
            <div>
            <div className="navbar">
                <p><Link to="/" className="navbar__logo"><span className="navbar__vr">vr</span> 
                     STUDI0 </Link>
                </p>
                <ul className="navbar__item">
                    <li>
                        <img className ="navbar__icon" src="../assets/images/box.svg" />
                       <p> Build </p>
                    </li>
                    <li>
                        <img className="navbar__icon"  src="../assets/images/search.svg"/>
                        <p>Explore </p>
                    </li>
                    <li>
                        <img className ="navbar__icon" src="../assets/images/info.svg"/>
                         <p>About </p>
                    </li>
                    <li className="navbar__image">
                        <a onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHovered}>
                            <img src="../assets/images/men.jpeg" />
                        </a>
                    </li>
                </ul>
            </div>   
            <div className="image__hidden-menu" style={this.state} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHovered}>
                <ul>
                    <li>Alex Pall</li>
                    <li>Profile</li>
                    <li>My apps<span className="hidden-menu_digit">7</span></li>
                    <li>Settings</li>
                    <li>Logout</li>
                </ul>
            </div> 
        </div>
       );
    }
});

export default PageNavbar;
