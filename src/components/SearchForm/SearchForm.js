import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleClick(e) {
    e.preventDefault();
    this.props.filter(this.state.value);
    this.reset()
  }

  reset() {
    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <form>
        <input type="text" 
               placeholder="Search for news articles here."
               value={this.state.value}
               onChange={e => this.handleChange(e)} />
        <button onClick={e => this.handleClick(e)}>Search Now</button>
      </form>

    )
  }
}

export default SearchForm;
