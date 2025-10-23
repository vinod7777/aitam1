import React from 'react'

import { Link } from 'react-router-dom';
 function Home({ backendData }) {
  
  return (
    <div>
      <div>
      <p>Home Page </p>
    </div>
    
    <div>
      <Link to="/main">Go to Main Page</Link>
    </div>
    </div>
  )
}


export default Home