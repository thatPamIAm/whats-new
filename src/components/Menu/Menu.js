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
        <li><button id="local"><i className="fas fa-map-marker-alt"></i>Local News</button></li>
        <li><button id="technology"><i className="fas fa-lightbulb"></i>Technology</button></li>
        <li><button id="entertainment"><i className="fas fa-ticket-alt"></i>Entertainment</button></li>
        <li><button id="science"><i className="fas fa-rocket"></i>Science</button></li>
        <li><button id="health"><i className="fas fa-heartbeat"></i>Health</button></li>
      </nav>
    )
  }
}

export default Menu;