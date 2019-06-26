import React from "react"
import { Root, Routes, addPrefetchExcludes } from "react-static"
import { Link, Router } from "@reach/router"
// import FancyDiv from 'components/FancyDiv'
import Dynamic from "containers/Dynamic"
import "./app.css"

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"])

function App() {
  return (
    <Root>
      <nav className="appnav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
           <a href="https://github.com/sw-yx/sarahsmashingreact" target="_blank">Source</a>
          </li>
        </ul>
      </nav>
      <React.Suspense fallback={<em>Loading...</em>}>
        <Router>
          <Dynamic path="dynamic" />
          <Routes path="*" />
        </Router>
      </React.Suspense>
      {/* <div className="content">
        <FancyDiv>
        </FancyDiv>
      </div> */}
    </Root>
  )
}

export default App
