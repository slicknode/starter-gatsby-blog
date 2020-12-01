import MarkdownIt from "markdown-it"
import * as React from "react"
import styles from "./markdown.module.scss"

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
})

export function Markdown(props) {
  return (
    <div
      className={styles.markdown}
      dangerouslySetInnerHTML={{ __html: md.render(props.value) }}
    />
  )
}
