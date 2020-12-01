import * as React from "react"
import { Helmet } from "react-helmet"
import styles from "./default-layout.module.scss"

export function DefaultLayout(props) {
  return (
    <div className={styles.wrapper}>
      <Helmet>
        <title>Slicknode Gatsby Blog Starter</title>
      </Helmet>
      <div className={styles.container}>
        <header className={styles.header}>
          <a href={"/"}>Home</a>
        </header>
        <main className={styles.main}>{props.children}</main>
        <footer className={styles.footer}>
          <small>
            Powered by{" "}
            <a
              href={"https://slicknode.com"}
              target={"_blank"}
              rel="noreferrer"
            >
              Slicknode Headless GraphQL CMS
            </a>
          </small>
        </footer>
      </div>
    </div>
  )
}
