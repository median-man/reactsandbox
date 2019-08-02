import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { About, Home, Klingons } from './pages'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/klingons" component={Klingons} />
    </Router>
  )
}

export default App
