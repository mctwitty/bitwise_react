// import React from 'react'
import './movieDetails.css'

function MovieDetails({ movie, onClose }) {
  return (
    <div className='movieDetails' onClick={(e) => { e.stopPropagation()}}>
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />
      <p className="rating">{movie.Rating}</p>
      <p>{movie.Rated} {movie.Runtime}</p>
      <p>{movie.Genre}</p>
      <h3 onClick={onClose}>Plot</h3>
      <p>{movie.Plot}</p>
      <h3>Actors</h3>
      <p>{movie.Actors}</p>
    </div>
    );
}
MovieDetails.propTypes = {
  
}
export default MovieDetails;