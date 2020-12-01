import { graphql, Link } from "gatsby"
import * as React from "react"
import Img from "gatsby-image"
import styles from './blog-post-teaser.module.scss';

export function BlogPostTeaser({ post }) {
  return (
    <article className={styles.container}>
      {post.image && (
        <Link to={`/blog/${post.slug}`}>
          <figure className={styles.figure}>
            <Img
              alt={post.title}
              fluid={post.image.localFile.childImageSharp.fluid}
            />
          </figure>
        </Link>
      )}
      <div className={styles.content}>
        <div className={styles.content}>
          <Link to={`/blog/${post.slug}`}>
            <h2 className={styles.title}>{post.title}</h2>
          </Link>
          <p className={styles.teaser}>
            {post.teaser} <Link to={`/blog/${post.slug}`}>read more »</Link>
          </p>
        </div>
      </div>
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
      localFile {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
