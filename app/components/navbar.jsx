'use strict';

import React from 'react';
import {Link} from 'react-router';

const Navbar= React.createClass({
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
                 <p ><Link to="/" className="navbar__logo"><span className="navbar__vr">vr</span> 
                     STUDI0 </Link>
                </p>
                <ul className="navbar__item">
                    <li>
                        <img className="navbar__icon" src="../assets/images/newapp.svg" />
                        <Link to="/new" className="navbar__link" onClick={this.props.onPublish}>new app</Link> 
                    </li>
                    <li>
                        <img className="navbar__icon"  src="../assets/images/search.svg"/>
                        <p>Explore </p>
                    </li>
                    <li>
                        <img className ="navbar__icon" src="../assets/images/info.svg"/>
                         <p>About</p>
                    </li>
                    <li><Link to="" className="navbar__link_login">Login </Link></li>
                    <li style={{paddingLeft:20}}>
                        <Link to="" className="navbar__link_signup">signup</Link>
                    </li>
                    <li className="navbar__image">
                        <Link to="/profile" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHovered}>
                           <img src="../assets/images/men.jpeg" />
                        </Link>
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
            <p className="clear"></p>
        </div>
        );
    } 
});

export default Navbar;


