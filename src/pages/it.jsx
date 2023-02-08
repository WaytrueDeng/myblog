import * as React from 'react'
import Layout from '../components/Layout'
import {Link, graphql } from "gatsby"


const it = ({data}) => {
  return (
    <Layout>
    { data.allMdx.nodes.map( (node) => (
  <article key={node.id}>
        <h2> <Link to={node.frontmatter.slug}> {node.frontmatter.title}</Link></h2>
        <p>{node.frontmatter.date}</p>
  </article>
    ) ) }
    </Layout>   
  )
}

export const query = graphql`
query  {
  allMdx(filter: {frontmatter: {tags: {in: "IT"}}}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        slug
        title
        tags
      }
      id
    }
  }
}
`


export default it
export const Head = () => {
  return <title>It Stuff</title>
}
