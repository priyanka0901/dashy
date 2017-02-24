'use strict';

import React from 'react';
import {Link} from 'react-router';
import SignIn from './page/signin.jsx';
import SignUp from './page/signup.jsx';

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
                     STUDIO </Link>
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
                    <li>
                        <Link to="/signin" className="navbar__link_login">Sign In </Link>
                    </li>
                    <li style={{paddingLeft:20}}>
                        <Link to="/signup" className="navbar__link_signup">sign Up</Link>
                    </li>
                    <li className="navbar__image">
                        <Link to="/profile" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHovered}>
                           <img src="../assets/images/men.jpeg" />
                        </Link>
                    <div className="image__hidden-menu" style={this.state} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHovered}>
                    <Link to="/profile">Alex Pall</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/profile/usermyapp">My apps<span className="hidden-menu_digit">6</span></Link>
                    <Link to="">Settings</Link>
                    <Link to="">Logout</Link>
            </div>
                    </li>
                </ul>
                </div>
                 
            <p className="clear"></p>
        </div>
        );
    } 
});

export default Navbar;


