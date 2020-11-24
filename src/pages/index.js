import React from "react"
import { graphql } from "gatsby"
import { DefaultLayout } from "../components/default-layout"
import get from "lodash/get"
import { BlogPostTeaser } from "../components/blog-post-teaser"

export default function Home({ data }) {
  const posts = get(data, "posts.edges", [])
  return (
    <DefaultLayout>
      <header>
        <h1>Gatsby Slicknode Blog Starter!</h1>
      </header>
      {posts.map(({ node }) => (
        <BlogPostTeaser post={node} key={node.id} />
      ))}
    </DefaultLayout>
  )
}

export const pageQuery = graphql`
  query HomeQuery {
    posts: allSlicknodeBlogPost(limit: 10) {
      edges {
        node {
          id
          ...BlogPostTeaser_post
        }
      }
    }
  }
`
