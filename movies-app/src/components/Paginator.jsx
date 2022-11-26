import React from 'react'

function Paginator({searchSettings, setSearchSettings}) {
  const nextPage = () => {
    setSearchSettings(prevState => {
      return {
        ...prevState,
        page: prevState.page + 1
      }
    })
  }
  const prevPage = () => {
    if(searchSettings.page > 1) {
      setSearchSettings(prevState =>{
        return {
          ...prevState,
          page: prevState.page - 1 
        }
      })
    }
  }
  return (
    <p>
      <button disabled={searchSettings.page <= 1} onClick={prevPage}>&lt;</button> Page: {searchSettings.page} <button onClick={nextPage}>&gt;</button>
    </p>
  );
}

export default Paginator;