'use strict';

import React from 'react';

const Editor = React.createClass({
    getInitialState: function () {
    return { userInput: ''  };
  },

   handleUserInput: function (e) {
    this.setState({
      userInput: e.target.value
    });
  },
   handleFormat: function () {
    this.setState({
      userInput: ''
    });
  },
  
    render:function () {
        return(
            <div className="card__container">
                <div className="cardedit">
                    <div className="cardedit__button">
                        <p>Run</p>
                        <p onClick={this.handleFormat}>Format</p>
                    </div>
                    <div className="cardedit__textarea">
                        <textarea placeholder="Start Writing..." type="text" 
                        onChange={this.handleUserInput} value={this.state.userInput} 
                        className="textarea" />
                    </div>
                </div>
                <div className="cardview">
                    <div dangerouslySetInnerHTML={{ __html: this.state.userInput }} className="cardview__text"></div>
                </div>
            </div>
        );
    }
});

export default Editor;