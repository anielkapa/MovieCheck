import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import List from './list.jsx';
import Search from './search.jsx';

document.addEventListener('DOMContentLoaded', function(){

    class App extends Component {
      constructor(props){
        super(props);
        this.state = {
          value:'',
          objectList: []
        };
      }
      newMovie = (event) =>{
        this.setState({value:event.target.value});
      };
      handleKeyPress = (event) =>{
        if (event.key === 'Enter') {
          this.setState({value:'', objectList:[]});
          this.getMovies();
        }
      }
      getMovies = () =>{
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=4de20b7ff5731c28e2c09cb1c26aefb4&language=en-US&query=${this.state.value}&page=1&include_adult=false`).then(	resp	=>	{
          if	(resp.ok)
      				return	resp.json();
      		else
				throw	new	Error('Błąd	sieci!');
        }).then(	result	=>	{
            console.log('Filmy',	result.results);
            this.setState({objectList: result.results});
        }).catch(	err	=>	{
        		console.log('Błąd!',	err);
        });
      }
      render(){
        return(
					<div className={"container"}>
          <Search
            newMovie={this.newMovie}
            value={this.state.value}
            handleKeyPress={this.handleKeyPress}
            />
          <List
            objectList = {this.state.objectList}
            />

					</div>
        );
      }
    };
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
