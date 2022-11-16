import React from 'react'
import './movieDetails.css'

function MovieDetails({ posterUrl, title, rated, runtime, genre, plot, actors, rating }) {
  return (
    <>
      <img src={posterUrl} alt={title} />
      <h2>{title}</h2>
      <p className="rating">{rating}</p>
      <p>{rated} {runtime}</p>
      <p>{genre}</p>
      <h3>Plot</h3>
      <p>{plot}</p>
      <h3>Actors</h3>
      <p>{actors}</p>
    </>
    );
}
MovieDetails.propTypes = {
  
}
export default MovieDetails;