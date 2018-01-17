import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Details from './details.jsx';

class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      objectList:[],
      movieIdDetails: {},
      display: "none"
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
        this.setState({movieIdDetails: result, display: "flex"});
    }).catch(	err	=>	{
        console.log('Błąd!',	err);
    });
  }
  createObjectList = () =>{
    let objectList = this.state.objectList;
    let liList = objectList.map((element,index)=>{
    let releaseYear = element.release_date.slice(0,4);
    let popularity= element.popularity.toFixed(2);
    let imgUrl = `http://image.tmdb.org/t/p/w92${element.poster_path}`;
    let image = element.poster_path === null? <i className="fa fa-film"></i> : <img src={imgUrl} alt={element.title}/>;
      return (
        <li key={index} onClick={e=>this.handleClick(index)}>
          {image}
          <div className="list_title">
            <strong>{element.title}</strong> ({releaseYear})</div>
          <div className="list_rating">
              <strong>{element.vote_average}
              <i className="fa fa-star"></i>
              </strong>
              <p>{element.vote_count} votes</p>
              <p>{popularity} popularity</p>
            </div>
        </li>
      );
    });
    return liList;
  }
  handleSorting = (event) =>{
    let sortedList = this.state.objectList;
    sortedList.sort((a, b) => a.title.localeCompare(b.title));
    this.setState({objectList: sortedList});
  }
  handleClose = (event) =>{
    if(this.state.display === "flex"){
      this.setState({display: "none"})
    }else{
      this.setState({display: "flex"})
    }
  }
  render(){
    if (this.state.objectList.length === 0){
      return null;
    } else {
      return(
        <div className="movie">
          <button className="movie_sortbutton" onClick={this.handleSorting}>
            <i className="fa fa-sort-alpha-asc"></i>
          </button>
          <ul className="movie_table">
            {this.createObjectList()}
          </ul>
          <Details
            movieIdDetails={this.state.movieIdDetails}
            display={this.state.display}
            handleClose={this.handleClose}/>
        </div>
      );
    }
  }
}

export default List;
