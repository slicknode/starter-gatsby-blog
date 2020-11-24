import React from "react"
import { DefaultLayout } from "../components/default-layout"
import { graphql } from "gatsby"
import {Markdown} from '../components/markdown';

export default function BlogPostPage({ data: { post } }) {
  return (
    <DefaultLayout>
      <header>
        <h1>{post.title}</h1>
        <p>{post.teaser}</p>
      </header>
      <article>
        <Markdown value={post.text}/>
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
