import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBox from "./SearchBox/SearchBox";
import Movies from "./Movies/Movies";
import ErrorPage from "./ErrorPage/ErrorPage";
//9629064a
const API_URL = " http://www.omdbapi.com/?apikey=9629064a";
// const movie1 = {
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
//   Title: "Batman v Superman: Dawn of Justice",
//   Type: "movie",
//   Year: "2016",
//   imdbID: "tt2975590",
// };
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchItem,setSearchItem]=useState('')
  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search)
    console.log(data.Search)
  };
  useEffect(() => {
    searchMovie("Superman");
  }, []);
  const searchTextHandler=(e) => {
   setSearchItem(e.target.value)
  }
  return (
    <div className="app">
      <SearchBox searchItem={searchItem} searchTextHandler={searchTextHandler} searchMovie={searchMovie}></SearchBox>
      
      {
        movies?.length>0?
        <Movies movies={movies}></Movies>:
        <ErrorPage></ErrorPage>

      }
      
    </div>
  );
};

export default App;
