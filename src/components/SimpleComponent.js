import React, { Component } from 'react';

class SimpleComponent extends Component {
  constructor() {
  super()
  this.state = {
    mood: "happy",
  }
}

  handleClick = () => {
    this.setState(prevState => ({
      mood: "sad"
    }))
  }

  render() {
    return(
    <div onClick={ this.handleClick }>
      <h1>{ this.state.mood }</h1>
    </div>
  )}
}

export default SimpleComponent;
