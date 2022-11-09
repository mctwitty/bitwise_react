const baseURL = 'https://www.omdbapi.com/'
const apiKey = process.env.REACT_APP_OMDB_APIKEY

const getMoviesByName = (title) => {
  const param = 't'
  fetch(`${baseURL}?apikey=${apiKey}&${param}=${title}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })
}
const getMovieDetailsById = async (id) => {
  const param = 'i'
  try {
    const res = await fetch(`${baseURL}?apikey=${apiKey}&${param}=${id}`)
    const data = await res.json()
    console.log(data)
  } catch(err) {
    console.log(err)
  }
}
// getMoviesByName('avengers')
// returns The Avengers (2012)

// getMovieDetailsById('tt0145487')
// returns Spider-Man (2002)
export { getMovieDetailsById, getMoviesByName }