import React from 'react';
import './App.css';
import { HomePage } from './homepage/homepage';

declare global{
  namespace JSX {
    interface IntrinsicElements {
      [key:string]: any
    }
  }
}

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
