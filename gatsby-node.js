const path = require("path")
exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            tags
          }
        }
      }
    }
  `)
  data.allMarkdownRemark.nodes.forEach(node => {
    const slug = node.frontmatter.slug
    const tags = node.frontmatter.tags
    actions.createPage({
      path: "/roam/" + slug,
      component: require.resolve(`./src/components/pageTemplate.jsx`),
      context: { slug: slug },
    })

    tags.forEach(tag => {
    actions.createPage({
      path: "/roam/" + tag,
      component: require.resolve(`./src/components/tagTemplate.jsx`),
      context: { tag: tag },
    })
    });
  })
}
