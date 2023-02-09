import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const Category = ({queryFor}) => {
  const  data  =  useStaticQuery(
    graphql`
query  ($queryFor: [String]) {
  allMarkdownRemark(
    filter: {frontmatter: {tags: {in: $queryFor}}}
    sort: {frontmatter: {date: DESC}}
  ) {
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
  )
  return (
    <div>
    { data.allMarkdownRemark.nodes.map( (node) => (
  <article key={node.id}>
        <h2> <Link to={"/roam/" + node.frontmatter.slug}> {node.frontmatter.title}</Link></h2>
        <p>{node.frontmatter.date}</p>
  </article>
    ) ) }
    </div>)
};

export default Category;
