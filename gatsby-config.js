/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    { resolve: `gatsby-transformer-remark` },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content/projects`,
        path: `${__dirname}/src/content/projects`,
      },
    },
  ],
  siteMetadata: {
    title: "Alessia Piscopo | Full-Stack Web Developer",
    description: "Alessia Piscopo's Portfolio Website",
    copyright: "Copyright (c) 2022 Alessia Piscopo",
    contact: "alessia.piscopo@hotmail.com",
  },
}
