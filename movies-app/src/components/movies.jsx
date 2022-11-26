import './movies.css'
import MovieCard from './MovieCard';

function Movies({ movies, isLoading, onOpen }) {
  if(isLoading) {
    return <h3>Loading...</h3>
  }
  return (
    <div className="movieListContainer">
      {movies?.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          id={movie.imdbID}
          title={movie.Title}
          type={movie.Type}
          posterUrl={movie.Poster}
          onOpen={onOpen}
        />
      ))}
    </div>
  );
}

export default Movies;