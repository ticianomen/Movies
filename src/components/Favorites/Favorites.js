import React, { Component } from "react";
import { removeMovieFavorite } from "../../actions";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <h2>Películas Favoritas:</h2>
        <>
          {this.props.movies.map(movie=>{
            return(
              <ul className="fav-list">
              <li key={movie.id}>
              <Link style={{color: 'white', textDecoration : 'none'}} to={`/movie/${movie.imdbID}`}>
              {movie.title}
              </Link></li>
                <button onClick={() => this.props.removeMovieFavorite(movie)}>X</button>
              </ul>
              )
          })}
        </>
      </div>
    );
  }
}
function mapStateToProps(state){
  return{
    movies: state.moviesFavourites
  };
}

function mapDispatchToProps(dispatch){
  return{
    removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie))
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps)(ConnectedList);
