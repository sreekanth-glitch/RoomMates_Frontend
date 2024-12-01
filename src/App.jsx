import React from 'react'
import LandingPage from "./matesDashboard/pages/LandingPage"
import {Routes, Route } from 'react-router-dom'
import "./App.css"
import Notfound from './matesDashboard/components/Not found'

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/*' element={<Notfound />} />
        </Routes>
      
      </div>
      </>
  )
}


export default App