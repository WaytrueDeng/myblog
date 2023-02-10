import { graphql, Link } from 'gatsby'
import * as React from 'react' 
import Layout from "./Layout"
import Seo from './Seo'
import {tagSearchWrapper,tagSearchPaper} from "./tagTemplate.module.css"


const Roam = ({data}) => {
  return (
    <Layout>
    <div className={tagSearchWrapper}>
    { data.allMarkdownRemark.nodes.map( (node) => (
<div  className={tagSearchPaper}>
  <article key={node.id}>
        <h2> <Link to={"/roam/" + node.frontmatter.slug}> {node.frontmatter.title}</Link></h2>
        <p>{node.frontmatter.date} <br />
      {node.frontmatter.tags.map (
        (tag) => 
          (<Link to={"/roam/" + tag}>🏷{tag}<span>|</span></Link>)
      ) }
      </p>
      
  </article>
      </div>
    ) ) }
    </div>
    </Layout>
  )
}
export const query = graphql`
query ($tag: [String]) {
 allMarkdownRemark(filter: {frontmatter: {tags: {in: $tag}}},sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        date (formatString: "MM-DD-YYYY")
        slug
        tags
        title
      }
      id
    }
  }
}
`

export default Roam
