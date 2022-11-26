function SearchBar({ searchTerm, setSearchTerm, searchSettings, setSearchSettings, ...props }) {
  const debouncer = (func, delay) => {
    let debounceTimer;
    return function () {
      const context = this
      const args = arguments
      clearTimeout(debounceTimer)
      debounceTimer = setTimeout(() => func.apply(context, args), delay)
    }
  }
  const changeHandler = debouncer((newTerm) => {
    setSearchSettings(prevState => {
      return {
        ...prevState,
        term: newTerm,
        page: 1
      }
    })
  }, 1000)
  return ( 
    <div>
      <h2>Search Component</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="search"
          placeholder={searchSettings.term} 
          onChange={(e) => changeHandler(e.target.value)}/>
      </form>
      {props.children}
    </div>
   );
}


export default SearchBar;