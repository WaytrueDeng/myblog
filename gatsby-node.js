const path = require("path")
exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)
  data.allMarkdownRemark.nodes.forEach(node => {
    const slug = node.frontmatter.slug
    actions.createPage({
      path: "/roam/" + slug,
      component: require.resolve(`./src/components/pageTemplate.jsx`),
      context: { slug: slug },
    })
  })
}
