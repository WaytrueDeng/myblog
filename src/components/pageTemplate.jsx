import { graphql } from 'gatsby'
import * as React from 'react' 
import Layout from "./Layout"
import Seo from './Seo'

const Roam = ({data}) => {
  const roam = data.markdownRemark
  return (
    <Layout pageTitle={roam.frontmatter.title} date={roam.frontmatter.date} tags={roam.frontmatter.tags}>
    <article dangerouslySetInnerHTML={{__html: roam.html}} />
    </Layout>
  )
}
export const Head = ({ data }) => <Seo title={data.markdownRemark.frontmatter.title} />
export const query = graphql`
query ($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    frontmatter {
      slug
      date(formatString: "MM-dddd-YYYY")
      title
      tags
    }
    html
    headings {
      id
    }
    tableOfContents
  }
}
`

export default Roam
