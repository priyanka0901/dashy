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
                        <input name="username" placeholder="Full name"/>
                    </div>
                    <div className="user__menu">
                        <p>reset password</p>
                        <input name="password" placeholder="password" type="password" />
                    </div>
                    <div className="user__menu">
                        <p>confirm password</p>
                        <input name="password" placeholder="confirm password" type="password" />
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
const UserMyappLook=React.createClass({
    render:function(){
        return(
            <div className="usermyapp">
                <div className="pure-g">
                     <UserMyapp/>
                     <UserMyapp/>
                    <UserMyapp/>
                     <UserMyapp/>
                      <UserMyapp/>
                       <UserMyapp/>
                </div>
            </div>
        );
    }
});


const UserMyapp = React.createClass({
        render:function(){
            return(
                 <div className="pure-u-lg-1-3 pure-u-md-1-2 pure-u-sm-1">
                    <div className="profile-page__tile">
                    <Link to="/new">
                        <img className="profile__tile_img" src="../assets/images/3dbox.jpeg" />
                    </Link>
                    <div className="tile__appinfo">
                        <p className="tile__appname">webVr aframe</p>
                        <img className="tile__username_img" src="../assets/images/men.jpeg" />
                        <p className="tile__username">Alen Paull</p>
                    </div>
                    <div className="tile__options">
                        <Link to="/new">Edit</Link>
                        <ul className="tile__options_stats profile__li_stats">
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

const Profile = React.createClass({
    render:function(){
        return(
            <div className="profile">
               <Navbar />
               <div className="profile__box">
                    <div className="pure-g">
                        <div className="pure-u-lg-1-5">
                            <div className="profile__box_left">
                                <div className="profile__img">
                                    <img src="../../assets/images/men.jpeg" />
                                    <p>Alex Paull</p>
                                </div>
                                <div className="profile__options">
                                    <Link to="/profile"><i className="fa fa-user fa-fw"></i>profile </Link>
                                    <Link to="/profile/usermyapp"><i className="fa fa-code fa-fw"></i>my apps</Link> 
                                    <Link to=""><i className="fa fa-cogs fa-fw"></i>settings </Link>
                                    <Link to=""><i className="fa fa-lock fa-fw"></i>logout</Link>
                                </div>
                            </div>
                        </div>
                        <div className="pure-u-lg-4-5">
                            <div className="profile__box_right">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
               </div>
                
               <Footer />
            </div>
            
        );
    }
});

export {Profile, UserSettings, UserMyapp, UserMyappLook};
