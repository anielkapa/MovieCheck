import React, {Component} from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
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
    class List extends Component {
      constructor(props){
        super(props);
        this.state = {
        };
      }
      render(){
        return(
          <ul>
            {this.props.createObjectList()}
          </ul>
        );
      }
    }

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
      createObjectList = () =>{
        let objectList = this.state.objectList;
        let liList = objectList.map((element,index)=>{
          let releaseYear = element.release_date.slice(0,4);
          let imgUrl=`http://image.tmdb.org/t/p/w185${element.poster_path}`;
          return (
            <li key={index}>
              <img src={imgUrl} alt={element.title}/>
              <div className="list_title">
                <strong>{element.title}</strong>({releaseYear})</div>
              <div className="list_rating">
                  <strong>{element.vote_average}</strong>
                  <p>{element.vote_count} votes</p>
                  <p>{element.popularity} popularity</p>
                </div>
            </li>
          );
        });
        return liList;
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
            createObjectList={this.createObjectList
            }/>
					</div>
        );
      }
    };
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
