import './MovieCard.css'

function MovieCard({ title, year, posterUrl}) {
  return (
    <div className='movieCard'>
      <img src={posterUrl} alt={title} />
      <h3>{title}</h3>
      <p>{year}</p>
    </div>
    );
}

export default MovieCard;