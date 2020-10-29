import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import allBeers from './components/ApiFetch/ApiFetch';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>JOOOOO</h1>
        {console.log(allBeers)}
      </div>
    </Router>

  );
}

export default App;
