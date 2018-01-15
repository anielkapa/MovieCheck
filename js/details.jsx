import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Details extends Component {
  constructor(props){
    super(props);
    this.state = {
      movieIdDetails:{},
      genres: [],
      imdb:'',
      overview: '',
      productionCountries: [],
      productionCompanies: []
    };
  }
  componentWillReceiveProps(nextProps){
    this.setState({movieIdDetails:
      nextProps.movieIdDetails,
      genres: nextProps.movieIdDetails.genres,
      imdb: nextProps.movieIdDetails.imdb_id,
      overview: nextProps.movieIdDetails.overview,
      productionCountries: nextProps.movieIdDetails.production_countries,
      productionCompanies: nextProps.movieIdDetails.production_companies
    });
  }
  getGenres = () =>{
    let genresToDisplay = this.state.genres.map((element,index)=>{
        return(<p key={index}>{element.name}</p>);
    });
    return genresToDisplay;
  }
  getProductionCountries = () =>{
    let productionCountriesToDisplay = this.state.productionCountries.map((element,index)=>{
        return(<p key={index}>{element.name}</p>);
    });
    return productionCountriesToDisplay;
  }
  getProductionCompanies = () =>{
    let productionCompaniesToDisplay = this.state.productionCompanies.map((element,index)=>{
        return(<p key={index}>{element.name}</p>);
    });
    return productionCompaniesToDisplay;
  }
  createDecription = () =>{
    let link = `http://www.imdb.com/title/${this.state.imdb}/?ref_=inth_ov_tt`;
    return (
      <div className="movie_description">
        <span>{this.getGenres()}</span>
        <span>
          <a href={link}>IMDB</a>
        </span>
        <span>
          <strong>Storyline:</strong>
          <p>{this.state.overview}</p>
        </span>
        <span>
          <strong>Country:</strong>
          {this.getProductionCountries()}
        </span>
        <span>
          <strong>Production Co:</strong>
          {this.getProductionCompanies()}</span>
      </div>
    )
  }
  render(){
   if (Object.keys(this.state.movieIdDetails).length === 0 && this.state.movieIdDetails.constructor === Object){
     return null;
   }else{
      return(
        <div>
          {this.createDecription()}
        </div>
      );
    }
  }
}

export default Details;
