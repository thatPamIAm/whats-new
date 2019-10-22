import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.updateNews(e.target.id)   
  }

  render() {
    return (
      <nav onClick={e => this.handleClick(e)}>
        <li><button id="local">Local News</button></li>
        <li><button id="technology">Technology</button></li>
        <li><button id="entertainment">Entertainment</button></li>
        <li><button id="science">Science</button></li>
        <li><button id="health">Health</button></li>
      </nav>
    )
  }
}

export default Menu;