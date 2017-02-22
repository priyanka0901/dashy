'use strict';

import React from 'react';
import {Link} from 'react-router';

const Footer= React.createClass({
        render: function() {
        return (
            <div className="footer">
                <p className="footer__logo"><span className="logo__vr"> Vr </span>Studio</p>
                <ul className="footer__item">
                    <li>About us</li>
                    <li>terms & conditiions </li>
                    <li>services </li>
                </ul>
                <div className="footer__social">
                    <Link to="#"><i className="fa fa-facebook fa-fw"></i></Link>
                    <Link to="#"><i className="fa fa-twitter fa-fw"></i></Link>
                    <Link to="#"><i className="fa fa-github fa-fw"></i></Link>
                </div>
            </div>
        );  
    } 
});

export default Footer;