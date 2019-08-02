import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { About, Home, Klingons } from './pages'
import { Navbar, Nav } from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar>
        <Nav to="/">Home</Nav>
        <Nav to="/about">About</Nav>
        <Nav to="/klingons">Klingons</Nav>
      </Navbar>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/klingons" component={Klingons} />
    </Router>
  )
}

export default App
