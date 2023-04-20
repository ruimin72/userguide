import React from 'react';
import logo from './logo.svg';
import logo512 from './logo512.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src = {logo512} alt="logo" />
        <h1>Hello from V2</h1>
      </header>
    </div>
  );
}

export default App;