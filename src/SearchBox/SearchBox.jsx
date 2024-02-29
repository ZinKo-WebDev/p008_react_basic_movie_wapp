import React from 'react'
import './SearchBox.css';
import { IoSearch } from "react-icons/io5";
const SearchBox = (props) => {
 
  return (
    <div className='NavDiv'>
        <div className="logoDiv">
            <a className='logoLink' href="#">T@kFlix</a>
        </div>
        <form className='searchDiv' onSubmit={() => props.searchMovie(props.searchItem)}>
            <input className='searchBox' type="text" placeholder='Search' value={props.searchItem} onChange={(e) => props.searchTextHandler(e)}></input>
           <button type='submit' className='submitBtn'>

            <IoSearch className='searchIcon' />
           </button>
          
            
        </form>
         
       
    </div>
  )
}

export default SearchBox