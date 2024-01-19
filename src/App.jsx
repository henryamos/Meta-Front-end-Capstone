import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css'
import Nav from './components/Nav'
import Header from './components/Header'


function App() {
  return (
    <>
    <Router>
     <Nav/>
     <Header/>
     </Router>
     </>
  )
}

export default App
