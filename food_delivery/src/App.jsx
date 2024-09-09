import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>
    </div>
  )
}

export default App
