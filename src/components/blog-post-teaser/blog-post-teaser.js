import { graphql, Link } from "gatsby"
import * as React from "react"

export function BlogPostTeaser({ post }) {
  return (
    <article>
      <hr />
      <Link to={`/blog/${post.slug}`}>
        <h2>{post.title}</h2>
      </Link>
      <p>
        {post.teaser} <Link to={`/blog/${post.slug}`}>read more »</Link>
      </p>
      <figure>
        <Link to={`/blog/${post.slug}`}>
          <img
            alt=""
            src="https://via.placeholder.com/380x200?text=Amazing+stock+photo"
          />
        </Link>
      </figure>
    </article>
  )
}

export const query = graphql`
  fragment BlogPostTeaser_post on Slicknode_Blog_Post {
    title
    text
    teaser
    slug
    image {
      url
    }
  }
`
