import React from "react"
import styled from "styled-components"
import { AppMastHead } from "components/AppMasthead"
import { Link } from "@reach/router"

const StyledMain = styled("main")`
  width: 100vw;
  height: calc(100vh - 100px);
  display: grid;
  grid-template-columns: 100px 100px 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 50px 100px;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  .background {
    grid-area: 1 / 3 / 5 / 6;
  }
  .headings {
    grid-area: 2 / 2 / 3 / 6;
  }
  .links {
    grid-area: 5 / 1 / 6 / 5;
    padding: 30px;
  }
  .nextpage {
    background: #eee;
    color: black;
    padding: 30px;
    grid-area: 4 / 5 / 6 / 6;
  }
`
export type MainProps = { children: React.ReactNode }
export const Main: React.FC<MainProps> = () => {
  return (
    <StyledMain>
      <div className="background">
        <AppMastHead />
      </div>
      <div className="headings">
        <h1>
          Hello tacoface
          <br />I love delicious tacos
        </h1>
        <p>Please eat tacos.</p>
      </div>
      <div className="links">
        <p>Go follow Hawk Philsworth</p>
      </div>
      <div className="nextpage"><Link to="/projects" style={{color: 'blue'}}>Projects ></Link></div>
    </StyledMain>
  )
}

export default Main
