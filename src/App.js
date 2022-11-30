import {useState} from 'react';
import Navigation from './components/Navigation';
import Counter from './components/Counter';
import './App.css';
import React from 'react';

function App() {
  return (
    <div>
      <Navigation />
      <Counter/>
    </div>
  );
}
export default App;
