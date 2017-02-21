'use strict';

import React from 'react';

const Sidebar= React.createClass({
   render:function(){
     return(
        <div className="sidebar">
            <ul className="sidebar__content">
                <li>
                    <p><img className="sidebar__img" src="../assets/images/newapp.svg" /></p>
                        <h4>new app </h4>
                </li>
                <li>
                    <p><img className="sidebar__img" src="../assets/images/publish.svg" /></p>
                        <h4>{this.props.dynamicButton}</h4>
                </li>
                <li>
                    <p><img className="sidebar__img" src="../assets/images/share.svg" /></p>
                        <h4>share</h4>
                </li>
                <li>
                    <p><img className="sidebar__img" src="../assets/images/likes.svg" /></p>
                        <h4>10 likes</h4>
                </li>
                <li>
                    <p><img className="sidebar__img" src="../assets/images/views.svg" /></p>
                        <h4>20 views </h4>
                </li>
            </ul>
            <p className="sidebar__bottom_line"></p>
            <p className="sidebar__copyright"> &#169; 2017 
                <span className="sidebar__camp"> Camp K12</span>
            </p>
        
        </div>
      );
   }
});

export default Sidebar;
