import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import { addMovieFavorite, getMovies } from "../../actions";


export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
    this.setState({title:""});
  }


  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container"  onSubmit={(e) => this.handleSubmit(e)}>
          <div className='search-container'>
            <input
              type="text"
              id="title"
              className='searchTerm'
              placeholder="Ingrese Nombre de Pelicula..."
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          <button className='buscar-btn' type="submit">Buscar</button>
          </div>
        </form>
        <div>
          {
            this.props.movies.map(movie => {
                return(
                  <div className='fav-container'>
                    <h2 className='fav-title' key={movie.imdbID}>
                    <Link style={{color: 'white', textDecoration : 'none'}} to={`/movie/${movie.imdbID}`}>
                    {movie.Title}
                    </Link></h2>
                    <button className='fav-btn' onClick={() => this.props.addMovieFavorite({title: movie.Title, id: movie.imdbID})}>Añadir a Favoritos</button>
                  </div>
                )
              }
            )
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);