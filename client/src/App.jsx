import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'

import Loading from './assets/pages/loading.jsx'
import Home from './assets/pages/Home'
import './App.css'

function App() {
  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <Routes>
          <Route path="/" element={<Loading />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
