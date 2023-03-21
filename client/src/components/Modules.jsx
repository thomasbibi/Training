import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../styles/Landing.css"
import '../styles/Module.css'
const Modules = ({ handleClick }) => {


  return (
    <div className='cont'>
      <Link to="/"><img src='/images/home.png' id='moduleHome' /></Link>
      <div className='heroText'>
        <Link to="/trainings" style={{ textDecoration: 'none' }}><button className='moduleBtn' name="One" onClick={(e) => handleClick(e.target.name)}>Module One</button></Link>
        <hr />
        <Link to="/trainings" style={{ textDecoration: 'none' }}><button className='moduleBtn' name="Two" onClick={(e) => handleClick(e.target.name)}>Module Two</button></Link>
        <hr />
        <Link to="/trainings" style={{ textDecoration: 'none' }}><button className='moduleBtn' name="Three" onClick={(e) => handleClick(e.target.name)}>Module Three</button></Link>
        <hr />
        <Link to="/trainings" style={{ textDecoration: 'none' }}> <button className='moduleBtn' name="Four" onClick={(e) => handleClick(e.target.name)}>Module Four</button></Link>
        <hr />
        <Link to="/trainings" style={{ textDecoration: 'none' }}> <button className='moduleBtn' name="Five" onClick={(e) => handleClick(e.target.name)}>Module Five</button></Link>
        <hr />

        <button className='btn'>Select Module</button>
      </div>

    </div>
  )
}

export default Modules