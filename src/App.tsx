import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { WorkSpace } from './Components/WorkSpace';
import './App.css';

function App() {
  return <>
    <BrowserRouter>
      <WorkSpace />
    </BrowserRouter>
  </>
}

export default App;