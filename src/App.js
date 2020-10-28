import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Trends from './components/Trends';

const App = () => {


  return (
    <div className = "app">
    

      <div className = "wrapper">

        <div className = "navbar">
          <p>CONTENT HERE</p>
          {/* <Navbar /> */}
        </div>

        <div className = "feed">
          <Feed />
        </div>

        <div className = "trends">
          
          <Trends />
        </div>

      </div>

    </div>
  )
}

export default App;
