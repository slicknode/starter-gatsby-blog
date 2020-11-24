import * as React from "react"
import { Helmet } from "react-helmet"

export function DefaultLayout(props) {
  return (
    <div>
      <Helmet>
        <link rel="stylesheet" href="https://unpkg.com/mvp.css" />
      </Helmet>
      <header>
        <a href={"/"}>Home</a>
      </header>
      <main>{props.children}</main>
      <footer>
        <hr />
        <small>
          Powered by{" "}
          <a href={"https://slicknode.com"} target={"_blank"} rel="noreferrer">
            Slicknode Headless GraphQL CMS
          </a>
        </small>
      </footer>
    </div>
  )
}
