import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Details from './details.jsx';

class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      objectList:[],
      movieIdDetails: {}
    };
  }
  componentWillReceiveProps(nextProps){
    this.setState({objectList: nextProps.objectList})
  }
  handleClick = (index) =>{
    let movieId = this.state.objectList[index].id;
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=4de20b7ff5731c28e2c09cb1c26aefb4&language=en-US`).then(	resp	=>	{
      if	(resp.ok)
          return	resp.json();
      else
    throw	new	Error('Błąd	sieci!');
    }).then(	result	=>	{
        console.log('Filmy',	result);
        this.setState({movieIdDetails: result});
    }).catch(	err	=>	{
        console.log('Błąd!',	err);
    });
  }
  createObjectList = () =>{
    let objectList = this.state.objectList;
    let liList = objectList.map((element,index)=>{
      let releaseYear = element.release_date.slice(0,4);
      let imgUrl=`http://image.tmdb.org/t/p/w92${element.poster_path}`;
      return (
        <li key={index} onClick={e=>this.handleClick(index)}>
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
  handleSorting = (event) =>{
    let sortedList = this.state.objectList;
    sortedList.sort((a, b) => a.title.localeCompare(b.title));
    console.log(sortedList);
    console.log(this.state.objectList);
    this.setState({objectList: sortedList});
  }
  render(){
    if (this.state.objectList.length === 0){
      return null;
    } else {
      return(
        <div className="movie">
          <button className="movie_sortbutton" onClick={this.handleSorting}>Sort by Title Name</button>
          <ul className="movie_table">
            {this.createObjectList()}
          </ul>

          <Details
            movieIdDetails={this.state.movieIdDetails}/>
        </div>
      );
    }
  }
}

export default List;
