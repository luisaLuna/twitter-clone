import React from "react";
import Sidebar from './Sidebar';
import './App.css';

function App() {
  return (
    // BEM
    <div className="app">
      <h1>Hey let's build!</h1>

      {/* Sidebar */}
      <Sidebar/>
    </div>
  );
}

export default App;
