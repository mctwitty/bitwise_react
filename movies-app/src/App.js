import './App.css'
import { useState, useEffect } from 'react'
import Movies from './components/movies'
import SearchBar from "./components/SearchBar"
import Paginator from './components/Paginator'
import Modal from './components/Modal'
import MovieDetails from './components/movieDetails'
import { getMoviesByName, getMovieDetailsById } from "./utils";

function App() {
  // const [searchTerm, setSearchTerm] = useState('Spider-Man')
  const [isLoading, setIsLoading] = useState(false)
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)
  // const [searchPage, setSearchPage] = useState(1)
  const [showModal, setShowModal] = useState(false)
  const [movie, setMovie] = useState({})
  const [searchSettings, setSearchSettings] = useState({
    term: 'Lord of the Rings',
    page: 1
  })

  const fetchMovies = () => {
    setIsLoading(true)
    getMoviesByName(searchSettings.term, searchSettings.page)
      .then((res) => {
        setMovies(res)
        setError(null)
        setIsLoading(false)
      })
      .catch((err) => {
        setMovies([])
        setError(err.message)
        setIsLoading(false)
      })
  }

  // Modal controls
  const onOpen = (movieData) => {
    setShowModal(true)
    setMovie(movieData)
  }
  const onClose = () => {
    setShowModal(false)
  }

  // Watchers
  useEffect(() => {
    fetchMovies()
  }, [searchSettings])

  return (
    <div className="App">
      <SearchBar 
        searchSettings={searchSettings}
        setSearchSettings={setSearchSettings}>
        <Paginator
          searchSettings={searchSettings}
          setSearchSettings={setSearchSettings}
        />
      </SearchBar>      
      <Movies
        movies={movies}
        isLoading={isLoading}
        onOpen={onOpen}
      />
      { showModal && <Modal onClose={onClose}>
        <MovieDetails movie={movie} onClose={onClose}/>
      </Modal>}
    </div>
  );
}

export default App;
