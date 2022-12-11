import React from 'react'
import "./SearchBar.styles.css"
import { useDispatch } from 'react-redux'
import { selectTagged } from '../../features/currentTagged'
import { useRef } from 'react'
// import { ReactSearchAutocomplete } from 'react-search-autocomplete'

const SearchBar = () => {
  const dispatch = useDispatch();
  
  const inputRef = useRef()

  

  return (
    <div className="bar">
      <div className='search-btn' onClick={() => dispatch(selectTagged(inputRef.current.value))}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#5F6368"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
      </div>
      <input ref={inputRef} className="searchbar" type="text" title="Search"/>
      <img alt="voice_img" className="voice" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/716px-Google_mic.svg.png" title="Search by Voice"/>
    </div>
  )
}

export default SearchBar


