'use strict';

import React from 'react';
import {Link} from 'react-router';
import Navbar from '../navbar.jsx';
import Footer from '../home/footer.jsx';


const UserSettings = React.createClass({
        render:function(){
            return(
                <div className="profile__user_menu">
                    <div className="user__menu">
                        <p>Name</p>
                        <input name="username" value="Alex Paull"/>
                    </div>
                    <div className="user__menu">
                        <p>reset password</p>
                        <input name="password" value="password" type="password" />
                    </div>
                    <div className="user__menu">
                        <p className="menu__bio">bio</p>
                        <textarea name="bio" placeholder="write about yourself" rows="3" />
                    </div>
                    <div className="user__menu">
                        <p>links</p>
                        <input name="links"  />
                    </div>
                    <submit className="menu__submit">Save Settings</submit>
                </div>
            );
        }
});


const UserMyapp = React.createClass({
        render:function(){
            return(
                <div className="usermyapp">
                    <h1>hieee</h1>
                </div>
        );
    }
}); 

const Profile = React.createClass({
    render:function(){
        return(
            <div className="profile">
               <Navbar />
               <div className="profile__box">
                    <div className="profile__box_left">
                        <div className="profile__img">
                            <img src="../../assets/images/men.jpeg" />
                            <p>Alex Paull</p>
                        </div>
                        <div className="profile__options">
                            <Link to="/profile/userprofile"><i className="fa fa-user fa-fw"></i>profile </Link>
                            <Link to="/profile/usermyapp"><i className="fa fa-code fa-fw"></i>my apps</Link> 
                            <Link to=""><i className="fa fa-cogs fa-fw"></i>settings </Link>
                            <Link to=""><i className="fa fa-lock fa-fw"></i>logout</Link>
                        </div>
                    </div>
                    <div className="profile__box_right">
                        <UserSettings />
        
                    </div>
               </div>
               <Footer />
            </div>
        );
    }
});



export {Profile, UserSettings, UserMyapp};
