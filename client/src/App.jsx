import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './components/Landing'
import Modules from './components/Modules'
import Trainings from './components/Trainings'
import Search from './components/Search'

function App() {
  const [module, setModule] = useState("One")
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path='/modules' element={<Modules handleClick={setModule} />} />
          <Route path='/trainings' element={<Trainings module={module} />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
