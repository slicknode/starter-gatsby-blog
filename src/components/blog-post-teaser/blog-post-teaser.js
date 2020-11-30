import { graphql, Link } from "gatsby"
import * as React from "react"
import Img from "gatsby-image"
import styles from './blog-post-teaser.module.css';

export function BlogPostTeaser({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className={styles.container}>
      <article className={'max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'}>
        <div className={'md:flex'}>
          {post.image && (
            <figure className={'md:flex-shrink-0'}>
              <Img
                className={'h-48 w-full object-cover md:w-48'}
                alt=""
                fluid={post.image.localFile.childImageSharp.fluid}
              />
            </figure>
          )}
          <div className={'p-8'}>
            <h2 className={'block mt-1 text-lg leading-tight font-medium text-black hover:underline'}>{post.title}</h2>
            <p className={'mt-2 text-gray-500'}>
              {post.teaser} <Link to={`/blog/${post.slug}`}>read more »</Link>
            </p>
          </div>
        </div>
      </article>
    </Link>
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
