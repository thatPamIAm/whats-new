import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (!e.target.id) return;
    this.props.updateNews(e.target.id)   
  }

  render() {
    return (
      <nav onClick={e => this.handleClick(e)}>
        <h2>What's <span>New?</span></h2>
        <li><button id="local"><i class="fas fa-map-marker-alt"></i>Local News</button></li>
        <li><button id="technology"><i class="fas fa-lightbulb"></i>Technology</button></li>
        <li><button id="entertainment"><i class="fas fa-ticket-alt"></i>Entertainment</button></li>
        <li><button id="science"><i class="fas fa-rocket"></i>Science</button></li>
        <li><button id="health"><i class="fas fa-heartbeat"></i>Health</button></li>
      </nav>
    )
  }
}

export default Menu;