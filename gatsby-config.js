/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: ".env",
})

const SLICKNODE_ENDPOINT = process.env.SLICKNODE_ENDPOINT

if (!SLICKNODE_ENDPOINT) {
  throw new Error(
    "SLICKNODE_ENDPOINT not set in env variables. " +
      "Please run `npm run setup` to create and connect a Slicknode API, or add the endpoint to your .env files"
  )
}

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-slicknode",
      options: {
        // Endpoint to your Slicknode GraphQL API (Required)
        endpoint: SLICKNODE_ENDPOINT,

        // Download all images and add a localFile field to the slicknode `Image` types.
        // The file can then be used in combination with gatsby-transformer-sharp and gatsby-image
        // Default: true
        downloadImages: true,

        // If true, loads the content in preview mode.
        // default: false
        preview: false,

        // Path to the directory where the Slicknode stores fragments of the individual types
        // Those can then be customized to add or exclude specific fields from the nodes that are
        // added to the gatsby store, add filtered connections etc.
        // If you are using multiple Slicknode APIs in the same projects, use differnet paths for each project
        // Default: slicknode-fragments
        fragmentsPath: "slicknode-fragments",

        // The prefix for typenames of the types that are added to the Gatsby GraphQL schema
        // If you are using multiple gatsby-source-slicknode plugin instances, use different namespaces for
        // each instance.
        // Default: Slicknode_
        typePrefix: "Slicknode_",
      },
    },
  ],
}
