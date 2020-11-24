const path = require("path")

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const { data } = await graphql(`
    {
      posts: allSlicknodeBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  data.posts.edges.map(({ node }) => {
    createPage({
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        slug: node.slug,
      },
      path: `/blog/${node.slug}`,
    })
  })
}
