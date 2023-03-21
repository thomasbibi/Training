import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Landing.css"
const Landing = () => {
  return (
    <div className='cont'>
        <div className='heroText'>
          <h2>Fusce sum magna pharater cursus</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Doloremque earum, assumenda beatae facilis voluptatum, assumenda beatae facilis voluptatum
             , assumenda beatae facilis voluptatum
              atque perferendis enim amet? 
            Quae sed fuga officiis cupiditate illum, dignissimos ratione officia itaque sunt.
             Aspernatur?</p>
             <Link to= "/modules"><button className='btn'> Enter </button></Link>
        </div>
    </div>
  )
}

export default Landing