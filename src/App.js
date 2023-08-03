import React from 'react';
import './App.css';

function LeftContainer() {
  return (
    <div style={{ color: "white" }}>
      <div className="left-container">
        <h2>Left Container</h2>
      </div>

      <div className="lf">
        <h1>Left Container</h1>

      </div>
      <div className="lf">
        <h2>Left Container</h2>
      </div>

    </div>
  );
}

function MiddleContainer() {
  return (
    <div className="middle-container">
      <h2>Middle Container</h2>
    </div>
  );
}

function RightContainer() {
  return (
    <div className="right-container">
      <h2>Right Container</h2>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <LeftContainer />
      <MiddleContainer />
      <RightContainer />
    </div>
  );
}

export default App;