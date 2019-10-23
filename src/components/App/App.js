import React, { Component } from 'react';

import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu'
import SearchForm from '../SearchForm/SearchForm'
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
      current: local,
      filteredCurrent: []
    }
  }

  updateNews = (news) => {
    this.setState({
      current: this.state[news],
      filteredCurrent: []
    });

  }

  filter = (query) => {
    const filtered = this.state.current.filter(currentArticle => {
      return currentArticle.headline.includes(query) || currentArticle.description.includes(query);
    });

    this.setState({
      filteredCurrent: filtered
    }); 
  }



  render () {
    const length = this.state.filteredCurrent.length;

    return (
      <div className="app">
        <SearchForm filter={this.filter} />
        <Menu updateNews={this.updateNews}/>
        { length ? <NewsContainer articles={this.state.filteredCurrent}/> : <NewsContainer articles={this.state.current}/>}
      </div>
    );
  }
}

export default App;