import React, { Component } from 'react';

import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      local: [],
      entertainment: [],
      health: [],
      science: [],
      technology: [],
      current: [],
      filteredCurrent: []
    }
  }

  componentDidMount() {
    fetch('https://whats-new-api.herokuapp.com/api/v1/news')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          local: data.local,
          entertainment: data.entertainment,
          health: data.health,
          science: data.science,
          technology: data.technology,
          current: data.local
        })
      })
      .catch(error => console.log(error))
  }


  updateNews = (news) => {
    this.setState({
      current: this.state[news],
      filteredCurrent: []
    })
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