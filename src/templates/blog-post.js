import React from "react"
import { DefaultLayout } from "../components/default-layout"
import { graphql } from "gatsby"
import { Markdown } from "../components/markdown"
import styles from './blog-post.module.scss';

export default function BlogPostPage({ data: { post } }) {
  return (
    <DefaultLayout>
      <header className={styles.header}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.teaser}>{post.teaser}</p>
      </header>
      <article>
        <Markdown value={post.text} />
      </article>
    </DefaultLayout>
  )
}

export const pageQuery = graphql`
  query BlogPostPageQuery($slug: String!) {
    post: slicknodeBlogPost(slug: { eq: $slug }) {
      title
      text
      teaser
    }
  }
`
