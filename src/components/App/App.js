import React, { Component } from 'react';

import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu'
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local,
      entertainment,
      health,
      science,
      technology,
      current: local
    }
  }

  updateNews = (news) => {
    this.setState({
      current: this.state[news]
    });
  }

  render () {
    return (
      <div className="app">
        <Menu updateNews={this.updateNews}/>
        <NewsContainer articles={this.state.current}/>
      </div>
    );
  }
}

export default App;