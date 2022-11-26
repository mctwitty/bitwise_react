function test(props) {
  const updateSearchTerm = (newTerm) => {
    props.setSearchSettings(prevSearch => {
      let newSearch = {
        ...prevSearch,
        term: newTerm,
        page: 1
      }
      return newSearch
    })
  }
  const updateSearchPage = () => {
    props.setSearchSettings( prevSearch => {
      const newPage = prevSearch.page + 1
      return {
        ...prevSearch,
        page: newPage
      }
    })
  }
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Test Component
          <input
            type="search" 
            onChange={(e) => updateSearchTerm(e.target.value)}
          />
          <button onClick={(e) => updateSearchPage()}>+1</button>
        </label>
      </form>
    </>
  );
}

export default test;