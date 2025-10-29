import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import Loading from './pages/loading.jsx'
import Home from './pages/Home.jsx'
import './App.css'
import About from './pages/About.jsx'
import OnlineTrack from './pages/OnlineTrack.jsx'
import OfflineTrack from './pages/OfflineTrack.jsx'
import Team from './pages/Team.jsx'
import Loginpage from './pages/Loginpage.jsx';
import Registerpage from './pages/Registerpage.jsx'; // Import the new Registerpage

function App() {
  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <Routes>
          <Route path="/" element={<Loading />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/online-track" element={<OnlineTrack />} />
          <Route path="/offline-track" element={<OfflineTrack />} />
          <Route path="/team" element={<Team />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Registerpage />} /> {/* Add route for Registerpage */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
