import React from 'react';
import './App.css';
import Router from './Router'
import {BrowserRouter} from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <header className="App-header"> */}
        <Router/>
      {/* </header> */}
      </div>
      </BrowserRouter>
  );
}

export default App;
