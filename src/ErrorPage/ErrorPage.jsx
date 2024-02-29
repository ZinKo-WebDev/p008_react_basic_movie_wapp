import React from 'react'
import './ErrorPage.css'
const ErrorPage = () => {
  return (
    <div  className='ErPg'>
        <div className='ErPgDiv'>
            <h1 className='ErPgHead1'>404</h1>
            <h3 className='ErPgHead2'>Oops! This Page Cound Not Be Found</h3>
            <p className='ErPgP'>WE ARE SORRY. BUT THE PAGE YOU REQUESTED WAS NOT FOUND</p>
            <button className='ErPgBtn'>GO TO HOME PAGE</button>
        </div>
    </div>
  )
}

export default ErrorPage