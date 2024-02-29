import React from 'react'
import './Movies.css'
import MovieCard from '../MovieCard/MovieCard'

const Movies = (props) => {
  return (
    <div className='cards'>
        {
            props.movies.map((movie) => {
                return (
                    <MovieCard movie={movie} key={movie.imdbID}></MovieCard>

                )
            })
        
        
       
        }
    </div>
  )
}

export default Movies