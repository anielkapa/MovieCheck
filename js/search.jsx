import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
  render(){
    return(
      <div>
        <input value={this.props.value} placeholder=" search for your movie " type="text" onChange={this.props.newMovie} onKeyPress={this.props.handleKeyPress}></input>
      </div>
    );
  }
}

export default Search;
