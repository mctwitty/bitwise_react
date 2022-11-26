import './MovieCard.css'
import { getMovieDetailsById } from '../utils'

function MovieCard({ title, type, posterUrl, id, onOpen}) {
  const getMovie = (id) => {
    getMovieDetailsById(id)
      .then(res => onOpen(res))
  }
  return (
    <div className='movieCard' onClick={() => getMovie(id)}>
      <img src={posterUrl} alt={title} />
      <h3>{title}</h3>
      <p className={type}>{type}</p>
    </div>
    );
}

export default MovieCard;