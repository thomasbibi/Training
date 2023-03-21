import React, { useState, useEffect } from 'react'
import '../styles/Training.css'
import products from '../data.json'
import { Link } from 'react-router-dom'


const Trainings = ({ module }) => {
  const [index, setIndex] = useState(0)
  const arr = products.filter((i) => i.module === module)  // filtering based on module
  return (
    <div className='trainCont'>
      <header className='trainHead'>
        <h1 id='head'>Module {module}</h1>
        <div>
          <Link to="/search"><img src='/images/search-icon.jpg' id='search' /></Link>
          <Link to="/modules"><img src='/images/home.png' id='home' /></Link>
        </div>
      </header>
      <div className='trainMain'>
        <div>
          <button className='trainBtn'
            onClick={() => setIndex(0)}
            style={{ backgroundColor: index == 0 ? 'white' : '#090763', color: index == 0 ? "#090763" : 'white' }}
          >Tab 1</button>
          <button className='trainBtn'
            onClick={() => setIndex(1)}
            style={{ backgroundColor: index == 1 ? 'white' : '#090763', color: index == 1 ? "#090763" : 'white' }}
          >Tab 2</button>
          <button className='trainBtn'
            onClick={() => setIndex(2)}
            style={{ backgroundColor: index == 2 ? 'white' : '#090763', color: index == 2 ? "#090763" : 'white' }}
          >Tab 3</button>
        </div>
        <div className='mainDisplay'>
          <img src={arr[index].img} id="trainImg" /> 
          <div className='trainText'>
            <h2>{arr[index].Heading}</h2>
            <p>{arr[index].text}</p>
          </div>
        </div>
      </div>
      <img src='/images/10concentriccircles.png' id='circle' />
      <img src='/images/4dots.jpeg' id='dots' />
    </div>
  )
}

export default Trainings