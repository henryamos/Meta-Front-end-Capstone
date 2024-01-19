import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css'
import Nav from './components/Nav'
import Main from './components/Main';


function App() {
  return (
    <>
    <Router>
     <Nav/>
    <Main/>
    </Router>
     </>
  )
}

export default App
