import React,  {useState, useEffect} from 'react'
import Home from './pages/home'
import Main from './pages/main'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

 function App() {
  const [backendData, setbackendData] = useState([{}]);

  useEffect(() => {
    fetch('/api')
      .then(response => response.json())
      .then(data => setbackendData(data));
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home backendData={backendData} />} />
        <Route path="/main" element={<Main backendData={backendData} />} />
        
      </Routes>
    </Router>
  );
}

export default App