import React from "react"
import Nav from "./Pages/Nav"
import Home from "./Pages/Home"
import Profile from "./Pages/Profile"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
