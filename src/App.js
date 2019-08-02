import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { About, Home, Klingons } from './pages'
import { Navbar, NavItem } from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/klingons">Klingons</NavItem>
      </Navbar>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/klingons" component={Klingons} />
    </Router>
  )
}

export default App
