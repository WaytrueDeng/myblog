import { graphql } from 'gatsby'
import * as React from 'react' 
import Layout from "./Layout"
import Seo from './Seo'
import rehypeReact from "rehype-react"
import {article,sideBar} from "./page.module.css"

const renderAst = new rehypeReact({
  createElement: React.createElement,
}).Compiler
const Roam = ({data}) => {
  const roam = data.markdownRemark
  return (
    <Layout pageTitle={roam.frontmatter.title} date={roam.frontmatter.date} tags={roam.frontmatter.tags}>
    <div className={sideBar}>
    <aside dangerouslySetInnerHTML={{__html: roam.tableOfContents}}>
    </aside>
    </div>
    <article className={article}>
    {renderAst(roam.htmlAst)}
    </article>
    </Layout>
  )
}
export const Head = ({ data }) => <><Seo title={data.markdownRemark.frontmatter.title}>
   <meta name="viewport" content="width=device-width, initial-scale=1.0">  </meta>
  </Seo></>
export const query = graphql`
query ($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    frontmatter {
      slug
      date(formatString: "MM-dddd-YYYY")
      title
      tags
    }
    htmlAst
    headings {
      id
    }
    tableOfContents
  }
}
`

export default Roam
