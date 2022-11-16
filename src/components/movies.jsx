import React, { useState, useEffect } from 'react';
import { getMoviesByName } from '../utils'
import MovieCard from './MovieCard'
import './movies.css'

function Movies() {
  const [movieName, setMovieName] = useState('Spider-Man')
  const [movieList, setMovieList] = useState([])

  async function getMovies() {
    const res = await getMoviesByName(movieName)
    setMovieList(res)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // getMovies()
    // event.target.reset()
  }
  
  useEffect(() => {
    // console.log('movieName:', movieName)
    const debounce = setTimeout(() => {
      // console.log('fetching:', movieName)
      getMovies()
    }, 1000)
    return () => clearTimeout(debounce)
  }, [movieName])

  return (
    <div>
      <h2>Movie List Component</h2>
      <form name='movieSearch' onSubmit={handleSubmit}>
        <input type='search' name='movieName' placeholder={movieName} onChange={(e) => setMovieName(e.target.value)}/>
        {/* <input type='submit'/> */}
      </form>
      {/* <div>movieName: {movieName}</div> */}
      <div className='movieListContainer'>
        {movieList?.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            year={movie.Year}
            posterUrl={movie.Poster}
          />
          ))}
      </div>

    </div>
    );
}

export default Movies;