import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';
import './Movie.css';
import Tomato from '../../img/Tomato_icon-icons.com_68675.png'

class Movie extends React.Component {
    componentDidMount(){
        this.props.getMovieDetail(this.props.match.params.id)
    }


    render() {
        return (
            <div className="movie-detail">
                <div className='contenedor'>
                  <div className='contenedor-img'> 
                  <img src= {this.props.movies.Poster} alt='Poster img'/>
                  </div>
                  <div className='contenedor-data'> 
                    <h1 className='Titulo'>{this.props.movies.Title}</h1>  
                    <h2>{this.props.movies.Year}</h2>  
                    <h2 className='title-info'>{this.props.movies.Runtime} 
                    <span className='gendre'>{this.props.movies.Rated}</span>
                    <img className='tomato-img' src= {Tomato} alt='Rotten Tomatoes'/>
                    {this.props.movies.Ratings[1].Value}
                    </h2> 
                    <p className='data-p'>{this.props.movies.Plot}
                    </p>
                    <div className='extra-data'>
                    <h3><div className='span-left'>DIRIGIDO POR</div> <div className='span-right'> {this.props.movies.Director}</div></h3>
                    <h3><div className='span-left'>ESCRITO POR</div>  <div className='span-right'>{this.props.movies.Writer}</div></h3>
                    <h3><div className='span-left'>PAIS</div>  <div className='span-right'>{this.props.movies.Country}</div></h3>
                    <h3><div className='span-left'>GENERO</div>  <div className='span-right'>{this.props.movies.Genre}</div></h3> 
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
      movies: state.movieDetail
    };
  }
  
  function mapDispatchToProps(dispatch){
    return{
      getMovieDetail: movie => dispatch(getMovieDetail(movie))
    }
  }
  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps)(Movie);