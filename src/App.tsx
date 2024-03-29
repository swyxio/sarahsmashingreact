import React from "react"
import { Root, Routes, addPrefetchExcludes, Head } from "react-static"
import { Link, Router } from "@reach/router"
// import FancyDiv from 'components/FancyDiv'
import Dynamic from "containers/Dynamic"
import "./app.css"
import "./revengers.css"

import { MDXProvider } from "@mdx-js/react"
// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"])

const Wrapper: React.FC = ({ children }) => <main style={{ padding: "20px" }} children={children} />
const H1: React.FC = ({ children }) => (
  <h1
    style={{ padding: "1rem", marginBottom: "1rem", background: "linear-gradient(to right, #1565C0, #b92b27)" }}
    children={children}
  />
)
const H2: React.FC = ({ children }) => (
  <h2 style={{ margin: "2rem 0rem 1rem", fontWeight: "bold", color: "#aaffa9" }} children={children} />
)
const A: React.FC<{href: string}> = ({ children, href }) => (
  <a style={{ color: "lightblue", cursor: "pointer" }} href={href} target="_blank" children={children} />
)
const P: React.FC = ({ children }) => <p style={{ margin: "2rem 0rem 1rem" }} children={children} />
const Img: React.FC<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>> = (props) => (
  <img
    style={{
      width: "60vw",
      margin: "0 auto",
      padding: "1rem",
      display: "block"
    }}
    {...props}
  />
)
// const Img = () => <img src="sldkjs" />

function App() {
  return (
    <Root>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Alfa+Slab+One|Roboto&display=swap" />
      </Head>
      <nav className="appnav">
        <ul>
          <li>
            <Link to="/">🏠Home</Link>
          </li>
          <li>
            <Link to="/projects">💼Projects</Link>
          </li>
          <li>
            <Link to="/lunch">🥗Lunch</Link>
          </li>
          <li>
            <a href="https://github.com/sw-yx/sarahsmashingreact" target="_blank">
              👩🏼‍💻Source
            </a>
          </li>
        </ul>
      </nav>
      <React.Suspense fallback={<em>Loading...</em>}>
        <MDXProvider components={{ wrapper: Wrapper, h1: H1, img: Img, h2: H2, a: A, p: P }}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </MDXProvider>
      </React.Suspense>
    </Root>
  )
}

export default App
