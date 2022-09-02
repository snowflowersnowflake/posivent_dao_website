module.exports = {
  siteMetadata: {
    title: `Positive Venture DAO`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
          path: "data",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
          path: "static",
      },
    },
    `gatsby-plugin-sass`,
    'gatsby-plugin-layout',
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-yaml",
    "gatsby-plugin-styled-components"
  ]
};