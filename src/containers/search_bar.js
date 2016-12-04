import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      term: ""
    }
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    console.log('Event', e.target.value);
    this.setState({ term: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault
  }

  render() {
    return (
      <form className="input-group">
        <input 
          onSubmit={this.onSubmit}
          placeholder="Get a five day forcast in your favourite cities"
          className="form-control"
          onChange={this.onInputChange}
          value={this.state.term}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    );
  }
}

export default SearchBar;