'use strict';

import React from 'react';
import {Link} from 'react-router';

const HomeNavbar= React.createClass({
        render: function() {
        return (
            <div className="navbar">
                 <p ><Link to="/" className="navbar__logo"><span className="navbar__vr">vr</span> 
                     STUDI0 </Link>
                </p>
                <ul className="navbar__item">
                    <li>
                        <img className="navbar__icon" src="../assets/images/newapp.svg" />
                        <Link to="/new" className="navbar__link">new app</Link> 
                    </li>
                    <li><Link to="#" className="navbar__link">Login </Link></li>
                    <li><Link to="#" className="navbar__link">signup</Link></li>
                </ul>

            </div>
        );
    } 
});

export default HomeNavbar;