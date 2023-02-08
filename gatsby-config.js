/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `waytrue's roam`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", 
      {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `roam`,
        path: `${__dirname}/src/roam`,
      }
    },
    "gatsby-plugin-mdx",
  ],
};
